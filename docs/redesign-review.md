# Refonte du portfolio — 9 novembre 2026

## Audit et direction

Stack conservée : Next.js 16, React, TypeScript, Tailwind CSS et Framer Motion. Aucune nouvelle dépendance. Aucun AGENTS.md trouvé dans le périmètre exploré. Les changements ETL déjà présents ont été laissés intacts.

L’ancienne présentation accumulait des surcharges CSS, des animations de flou et des cartes denses. La refonte adopte un fond graphite, des surfaces contrastées, un accent bleu, une typographie système et des rayons cohérents. Les informations professionnelles, projets, coordonnées et liens sont conservés.

## Implémentation

- Navigation active, menu mobile avec focus initial, Échap et retour du focus.
- Hero lisible sans animation initiale, portrait optimisé par next/image et CTA hiérarchisés.
- Profil avec informations de recrutement et savoir-être.
- Études de cas avec enjeu, réponse, technologies et démarche dépliable ; pages dédiées harmonisées.
- Expertise navigable au clavier ; état sélectionné animé par une transition ressort sans rebond.
- Expériences chronologiques, formations et certificats présentés dans des composants cohérents.
- Contact avec labels, validation native, feedback accessible et copie d’email. Le formulaire prépare un brouillon via mailto ; il n’envoie pas de message sur un serveur.
- Contenu visible avant hydratation ; animations limitées à transform/opacity et prise en compte de prefers-reduced-motion.

## Skills appliqués

- apple-design : réponse immédiate, mouvements brefs et réversibles, sobriété.
- design-system : tokens centralisés, surfaces, contrôles et états cohérents.
- frontend-a11y : focus, onglets clavier, labels, landmarks et messages d’état.
- animation-performance : transform/opacity, absence de flou animé ou de boucle décorative.
- react-performance : aucune dépendance ajoutée, image prioritaire, suppression du script tiers de badge au profit d’un lien.
- browser-qa : navigateur headless local, captures multi-résolutions et tests d’interaction.

Références Apple :
https://developer.apple.com/design/human-interface-guidelines/motion
https://developer.apple.com/design/human-interface-guidelines/accessibility

## Vérifications

- Build Next.js et TypeScript réussis.
- Lint et test du brouillon mailto exécutés.
- Navigateur local : 320, 390, 768 et 1440 px sans débordement horizontal.
- Cinq filtres : comptes attendus 3, 3, 2, 1, 1.
- Démarche de projet dépliable, onglets aux flèches, menu avec Échap et retour du focus.
- Formulaire vide et email invalide bloqués. Aucun email envoyé pendant les tests.
- Trois pages de projet et cinq PDF : HTTP 200.
- Aucune exception JavaScript observée dans le parcours testé.
- Captures examinées : hero, projets, expertise, certifications, formation et contact. Défaut d’encodage détecté visuellement puis corrigé.

## Limites et livraison

Le navigateur intégré était indisponible ; les vérifications ont utilisé Chrome headless local. Pas de score Lighthouse, de mesure terrain des Core Web Vitals ou de certification WCAG revendiquée. Les liens externes sont conservés mais ne sont pas tous contrôlés. Les captures et scripts de QA spécifiques au poste sont dans .taste-skill/apple-qa (ignorés par Git).

Modifications locales, non publiées et non poussées. Pour un formulaire avec envoi direct, un fournisseur d’email et une configuration serveur restent nécessaires.
