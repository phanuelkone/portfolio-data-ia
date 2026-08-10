# Pipeline de donnees ETL

Petit projet ETL simple pour montrer comment transformer des donnees de ventes brutes en donnees propres et en indicateurs KPI.

## Objectif

Le script fait 3 choses :

1. **Extract** : lire un fichier CSV brut.
2. **Transform** : nettoyer les donnees et calculer le chiffre d'affaires.
3. **Load** : enregistrer les resultats dans des fichiers CSV et une base SQLite.

## Structure

```text
pipeline-donnees-etl/
+-- data/
|   +-- raw/
|   |   +-- ventes_brutes.csv
|   +-- output/
|       +-- ventes_nettoyees.csv
|       +-- kpi_par_ville.csv
|       +-- ventes_etl.db
+-- src/
    +-- etl.py
```

## Lancer le projet

Depuis ce dossier :

```bash
python src/etl.py
```

## Ce que le pipeline nettoie

- Espaces inutiles dans les textes
- Villes et produits avec une casse incoherente
- Prix avec virgule ou point
- Lignes avec quantite ou prix invalide
- Commandes en double
- Dates au format `YYYY-MM-DD`

## Resultats produits

- `ventes_nettoyees.csv` : les ventes propres ligne par ligne
- `kpi_par_ville.csv` : chiffre d'affaires, quantite vendue et nombre de commandes par ville
- `ventes_etl.db` : base SQLite avec deux tables

## Pourquoi ce projet est utile

Ce projet montre les bases d'un pipeline data professionnel : lire des donnees, controler la qualite, nettoyer, calculer des KPI, puis charger les resultats dans un format exploitable.
