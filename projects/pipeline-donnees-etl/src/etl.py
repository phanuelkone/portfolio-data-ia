from __future__ import annotations

import csv
import sqlite3
from collections import defaultdict
from datetime import datetime
from pathlib import Path


PROJECT_DIR = Path(__file__).resolve().parents[1]
RAW_FILE = PROJECT_DIR / "data" / "raw" / "ventes_brutes.csv"
OUTPUT_DIR = PROJECT_DIR / "data" / "output"
CLEAN_FILE = OUTPUT_DIR / "ventes_nettoyees.csv"
KPI_FILE = OUTPUT_DIR / "kpi_par_ville.csv"
DATABASE_FILE = OUTPUT_DIR / "ventes_etl.db"


def extract(file_path: Path) -> list[dict[str, str]]:
    """Lire les lignes du fichier CSV brut."""
    with file_path.open("r", encoding="utf-8", newline="") as csv_file:
        reader = csv.DictReader(csv_file)
        return list(reader)


def clean_text(value: str) -> str:
    """Enlever les espaces inutiles et harmoniser le texte."""
    return value.strip().title()


def parse_date(value: str) -> str | None:
    """Verifier que la date est au format attendu."""
    try:
        date = datetime.strptime(value.strip(), "%Y-%m-%d")
    except ValueError:
        return None

    return date.strftime("%Y-%m-%d")


def parse_int(value: str) -> int | None:
    """Transformer un texte en nombre entier."""
    try:
        return int(value.strip())
    except ValueError:
        return None


def parse_float(value: str) -> float | None:
    """Transformer un prix en nombre, meme si le prix contient une virgule."""
    cleaned_value = value.strip().replace(",", "")

    try:
        return float(cleaned_value)
    except ValueError:
        return None


def transform(rows: list[dict[str, str]]) -> tuple[list[dict[str, object]], dict[str, int]]:
    """Nettoyer les donnees et calculer le chiffre d'affaires."""
    clean_rows = []
    seen_orders = set()
    stats = {
        "lignes_lues": len(rows),
        "lignes_valides": 0,
        "lignes_rejetees": 0,
        "doublons_rejetes": 0,
    }

    for row in rows:
        order_id = row["commande_id"].strip()

        if order_id in seen_orders:
            stats["doublons_rejetes"] += 1
            continue

        order_date = parse_date(row["date"])
        quantity = parse_int(row["quantite"])
        unit_price = parse_float(row["prix_unitaire"])

        if not order_id or order_date is None or quantity is None or unit_price is None:
            stats["lignes_rejetees"] += 1
            continue

        if quantity <= 0 or unit_price <= 0:
            stats["lignes_rejetees"] += 1
            continue

        seen_orders.add(order_id)
        revenue = quantity * unit_price

        clean_rows.append(
            {
                "commande_id": order_id,
                "date": order_date,
                "mois": order_date[:7],
                "ville": clean_text(row["ville"]),
                "produit": clean_text(row["produit"]),
                "quantite": quantity,
                "prix_unitaire": round(unit_price, 2),
                "chiffre_affaires": round(revenue, 2),
                "client": clean_text(row["client"]),
            }
        )

    stats["lignes_valides"] = len(clean_rows)
    return clean_rows, stats


def build_city_kpis(clean_rows: list[dict[str, object]]) -> list[dict[str, object]]:
    """Creer un petit tableau KPI groupe par ville."""
    kpis = defaultdict(
        lambda: {
            "ville": "",
            "nombre_commandes": 0,
            "quantite_totale": 0,
            "chiffre_affaires": 0.0,
        }
    )

    for row in clean_rows:
        city = str(row["ville"])
        kpis[city]["ville"] = city
        kpis[city]["nombre_commandes"] += 1
        kpis[city]["quantite_totale"] += int(row["quantite"])
        kpis[city]["chiffre_affaires"] += float(row["chiffre_affaires"])

    city_kpis = []

    for city_data in kpis.values():
        city_data["chiffre_affaires"] = round(city_data["chiffre_affaires"], 2)
        city_kpis.append(city_data)

    return sorted(city_kpis, key=lambda item: item["chiffre_affaires"], reverse=True)


def write_csv(file_path: Path, rows: list[dict[str, object]]) -> None:
    """Ecrire une liste de dictionnaires dans un fichier CSV."""
    if not rows:
        return

    with file_path.open("w", encoding="utf-8", newline="") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=list(rows[0].keys()))
        writer.writeheader()
        writer.writerows(rows)


def load_database(clean_rows: list[dict[str, object]], city_kpis: list[dict[str, object]]) -> None:
    """Charger les donnees propres et les KPI dans SQLite."""
    with sqlite3.connect(DATABASE_FILE) as connection:
        connection.execute("DROP TABLE IF EXISTS ventes_nettoyees")
        connection.execute("DROP TABLE IF EXISTS kpi_par_ville")

        connection.execute(
            """
            CREATE TABLE ventes_nettoyees (
                commande_id TEXT PRIMARY KEY,
                date TEXT,
                mois TEXT,
                ville TEXT,
                produit TEXT,
                quantite INTEGER,
                prix_unitaire REAL,
                chiffre_affaires REAL,
                client TEXT
            )
            """
        )

        connection.execute(
            """
            CREATE TABLE kpi_par_ville (
                ville TEXT PRIMARY KEY,
                nombre_commandes INTEGER,
                quantite_totale INTEGER,
                chiffre_affaires REAL
            )
            """
        )

        connection.executemany(
            """
            INSERT INTO ventes_nettoyees
            VALUES (
                :commande_id,
                :date,
                :mois,
                :ville,
                :produit,
                :quantite,
                :prix_unitaire,
                :chiffre_affaires,
                :client
            )
            """,
            clean_rows,
        )

        connection.executemany(
            """
            INSERT INTO kpi_par_ville
            VALUES (
                :ville,
                :nombre_commandes,
                :quantite_totale,
                :chiffre_affaires
            )
            """,
            city_kpis,
        )


def load(clean_rows: list[dict[str, object]], city_kpis: list[dict[str, object]]) -> None:
    """Sauvegarder les resultats du pipeline."""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    write_csv(CLEAN_FILE, clean_rows)
    write_csv(KPI_FILE, city_kpis)
    load_database(clean_rows, city_kpis)


def main() -> None:
    raw_rows = extract(RAW_FILE)
    clean_rows, stats = transform(raw_rows)
    city_kpis = build_city_kpis(clean_rows)
    load(clean_rows, city_kpis)

    print("Pipeline ETL termine.")
    print(f"Lignes lues       : {stats['lignes_lues']}")
    print(f"Lignes valides    : {stats['lignes_valides']}")
    print(f"Lignes rejetees   : {stats['lignes_rejetees']}")
    print(f"Doublons rejetes  : {stats['doublons_rejetes']}")
    print(f"Fichier nettoye   : {CLEAN_FILE}")
    print(f"Fichier KPI       : {KPI_FILE}")
    print(f"Base SQLite       : {DATABASE_FILE}")


if __name__ == "__main__":
    main()
