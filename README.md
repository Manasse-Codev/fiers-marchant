mon projet dev

### Principes Architecturaux

- **Séparation des Responsabilités** : Chaque module est autonome
- **Injection de Dépendances** : Couplage faible entre les composants
- **DTOs et Validation** : Données validées à chaque couche
- **Gestion d'Erreurs Centralisée** : Réponses cohérentes dans toute l'API
- **Logging Structuré** : Traçabilité complète des actions

## 👥 Rôles Utilisateurs

### 👑 Administrateur

**Responsabilités :** Gestion complète de la plateforme

**Capacités :**
- Gestion du catalogue produits (création, modification, suppression)
- Administration des utilisateurs et attribution des rôles
- Supervision de toutes les commandes et transactions
- Accès aux tableaux de bord et statistiques avancées
- Configuration des paramètres système
- Gestion des promotions et codes de réduction
- Export de rapports détaillés
- Gestion des remboursements et litiges

**Interface dédiée :** Dashboard administrateur avec :
- Vue d'ensemble des métriques clés
- Graphiques de performance
- Outils de gestion en masse
- Logs d'activité système

### 💰 Caissier

**Responsabilités :** Gestion du point de vente

**Capacités :**
- Création de commandes pour les clients en boutique
- Consultation du catalogue et des stocks en temps réel
- Encaissement et traitement des paiements
- Gestion du panier client
- Historique des transactions de la journée
- Recherche rapide de produits
- Application de remises manuelles
- Impression de tickets de caisse

**Restrictions :**
- Aucun accès à la gestion des utilisateurs
- Pas de modification du catalogue
- Pas de suppression de commandes validées
- Pas d'accès aux rapports globaux

**Interface dédiée :** Terminal point de vente avec :
- Interface de recherche rapide
- Caisse enregistreuse virtuelle
- Affichage clair des montants
- Mode plein écran optimisé

### 🛒 Client

**Responsabilités :** Achats en ligne

**Capacités :**
- Navigation dans le catalogue avec filtres avancés
- Consultation des fiches produits détaillées
- Gestion du panier d'achat personnel
- Passage de commande avec paiement sécurisé
- Suivi en temps réel du statut des commandes
- Gestion du compte personnel
- Historique complet des achats
- Ajout d'avis et évaluations sur les produits

**Restrictions :**
- Pas d'accès aux interfaces d'administration
- Pas de visualisation des autres clients
- Limité à ses propres commandes et données

**Interface dédiée :** Site e-commerce avec :
- Design moderne et épuré
- Navigation intuitive par catégories
- Processus de commande en 3 étapes
- Espace client personnalisé

## ✨ Fonctionnalités Détaillées

### 🔐 Système d'Authentification

- Inscription avec validation par email
- Connexion sécurisée avec JWT
- Système de refresh tokens pour sessions persistantes
- Réinitialisation de mot de passe sécurisée
- Protection contre les attaques par force brute
- Verrouillage temporaire après échecs répétés
- Double authentification (optionnelle)
- Sessions multi-appareils gérées

### 📦 Gestion des Produits

**Catalogue :**
- Fiches produits riches avec images multiples
- Catégorisation hiérarchique (type, origine, saveur)
- Variantes de produits (format, poids, conditionnement)
- Prix dynamiques avec gestion des promotions
- Stock en temps réel avec alertes de réapprovisionnement
- Produits associés et recommandations

**Recherche :**
- Recherche full-text dans tout le catalogue
- Filtres multicritères combinables
- Tri par prix, popularité, nouveauté
- Suggestions automatiques
- Historique de recherche personnel

**Médias :**
- Galerie d'images par produit
- Upload multiple avec prévisualisation
- Redimensionnement automatique
- Images optimisées pour le web

### 🛒 Workflow de Commande

**Processus d'Achat :**
1. Sélection des produits et ajout au panier
2. Validation du panier et calcul des totaux
3. Saisie de l'adresse de livraison
4. Choix du mode de livraison
5. Application des codes promo
6. Paiement sécurisé
7. Confirmation et récapitulatif

**États de Commande :**
- **En attente** : Commande créée, paiement en cours
- **Confirmée** : Paiement validé
- **En préparation** : Équipe logistique mobilisée
- **Expédiée** : Colis remis au transporteur
- **Livrée** : Réception confirmée par le client
- **Annulée** : Avant expédition uniquement

**Gestion des Paniers :**
- Sauvegarde automatique
- Synchronisation multi-appareils
- Récupération de panier abandonné
- Fusion des paniers invité/client après connexion

### 💳 Système de Paiement

**Moyens de Paiement :**
- Carte bancaire (Stripe)
- Portefeuilles électroniques (Apple Pay, Google Pay)
- Virement bancaire (confirmation manuelle)

**Fonctionnalités Stripe :**
- Paiement sans redirection (Stripe Elements)
- Validation en temps réel des cartes
- Gestion des erreurs de paiement
- Remboursements partiels ou totaux
- Webhooks pour synchronisation automatique
- Mode test avec cartes factices

**Sécurité :**
- Conformité PCI-DSS via Stripe
- Aucune donnée bancaire stockée
- Chiffrement de bout en bout
- Détection de fraude automatique

### 📊 Tableaux de Bord

**Vue Administrateur :**
- Chiffre d'affaires en temps réel
- Nombre de commandes par statut
- Produits les plus vendus
- Taux de conversion visiteur/acheteur
- Performance par catégorie
- Graphiques d'évolution temporelle
- Export de rapports (PDF, Excel)

**Vue Caissier :**
- Total des ventes de la journée
- Nombre de transactions effectuées
- Panier moyen
- Produits les plus vendus aujourd'hui
- Performance personnelle

### 🔔 Notifications

**Canaux :**
- Email transactionnels
- Notifications in-app
- Alertes en temps réel (WebSocket)

**Événements Notifiés :**
- Confirmation de commande
- Changement de statut de commande
- Récupération de mot de passe
- Promotion spéciale
- Alerte de stock bas (admin)

## 🛠 Stack Technique

### Backend

| Technologie | Version | Rôle |
|-------------|---------|------|
| NestJS | 10.x | Framework backend modulaire |
| TypeScript | 5.x | Langage de programmation |
| PostgreSQL | 15 | Base de données relationnelle |
| TypeORM | 0.3.x | ORM pour PostgreSQL |
| Passport | - | Stratégies d'authentification |
| JWT | - | Tokens d'authentification |
| Stripe | - | Paiement en ligne |
| Swagger | - | Documentation API interactive |
| Nodemailer | - | Envoi d'emails |
| Multer | - | Gestion des uploads |
| Winston | - | Logging avancé |
| Jest | - | Framework de test |

### Frontend

| Technologie | Version | Rôle |
|-------------|---------|------|
| React | 18.x | Interface utilisateur |
| TypeScript | 5.x | Typage statique |
| Redux Toolkit | - | Gestion d'état global |
| React Router | 6.x | Navigation |
| Material-UI | 5.x | Composants UI |
| React Hook Form | - | Gestion des formulaires |
| React Query | - | Requêtes et cache |
| Axios | - | Client HTTP |
| Vite | - | Build tool |
| Tailwind CSS | - | Styles utilitaires |

### DevOps & Outils

| Outil | Usage |
|-------|-------|
| Docker | Conteneurisation |
| Docker Compose | Orchestration multi-conteneurs |
| GitHub Actions | CI/CD |
| ESLint | Linting |
| Prettier | Formatage de code |
| Husky | Hooks Git |
| Commitlint | Validation des commits |

## 📋 Prérequis Techniques

### Environnement de Développement

- **Système d'exploitation** : Windows 10+, macOS 11+, Linux (Ubuntu 20.04+)
- **Node.js** : Version 18 LTS ou supérieure
- **npm** : Version 9+ ou yarn 1.22+
- **PostgreSQL** : Version 14 ou supérieure
- **Git** : Version 2.30+

### Outils Recommandés

- **IDE** : Visual Studio Code avec extensions :
  - ESLint
  - Prettier
  - Thunder Client (tests API)
  - PostgreSQL
  - Docker
- **Navigateur** : Chrome/Firefox avec React DevTools
- **Terminal** : Windows Terminal, iTerm2, ou intégré VS Code
- **Postman** ou **Insomnia** pour tester l'API
- **pgAdmin** ou **DBeaver** pour la base de données
- **Docker Desktop** pour la conteneurisation

### Comptes Externes Nécessaires

- **GitHub** : Pour le versionnement et la collaboration
- **Stripe** : Compte test gratuit pour les paiements
- **Service Email** : SendGrid (gratuit jusqu'à 100 emails/jour) ou Mailtrap pour les tests

## 🚀 Guide d'Installation

### Installation Rapide (Docker)

**Étape 1 : Cloner le projet**
- Récupérer le code source depuis le repository GitHub
- Se placer dans le dossier du projet

**Étape 2 : Configurer l'environnement**
- Copier le fichier d'exemple de configuration
- Ajuster les variables si nécessaire

**Étape 3 : Lancer avec Docker**
- Exécuter la commande Docker Compose
- Attendre le téléchargement des images et le démarrage
- L'application est disponible sur les ports configurés

**Étape 4 : Initialiser les données**
- Exécuter le script de seed automatique
- Les comptes de test sont créés

### Installation Manuelle

**Étape 1 : Préparer l'environnement**
- Installer Node.js et npm
- Installer PostgreSQL
- Créer une base de données dédiée

**Étape 2 : Installer les dépendances**
- Installer les packages du backend
- Installer les packages du frontend

**Étape 3 : Configuration**
- Créer le fichier de variables d'environnement
- Renseigner les identifiants de base de données
- Configurer les clés Stripe (mode test)
- Définir les secrets JWT

**Étape 4 : Base de données**
- Exécuter les migrations pour créer les tables
- Lancer les seeds pour les données de test

**Étape 5 : Démarrer l'application**
- Lancer le serveur backend en mode développement
- Lancer le serveur frontend en mode développement
- Accéder aux différentes interfaces

### Vérification de l'Installation

- **Backend API** : Accéder à la documentation Swagger
- **Frontend Client** : Accéder à la boutique en ligne
- **Dashboard Admin** : Se connecter avec le compte administrateur
- **Terminal Caissier** : Se connecter avec le compte caissier

## ⚙️ Configuration

### Variables d'Environnement Essentielles

**Application**
- Définit l'environnement (développement, production, test)
- Configure le port du serveur
- Définit le préfixe des routes API

**Base de Données**
- Hôte de la base de données (localhost ou service Docker)
- Port PostgreSQL (5432 par défaut)
- Identifiants de connexion
- Nom de la base de données

**Authentification JWT**
- Clé secrète pour signer les tokens (doit être longue et aléatoire)
- Durée de validité du token d'accès
- Clé secrète pour les refresh tokens
- Durée de validité du refresh token

**Stripe**
- Clé secrète API (commence par sk_test_ en mode test)
- Secret pour les webhooks
- Devise par défaut (EUR, USD, etc.)

**Email (Optionnel)**
- Serveur SMTP
- Port SMTP
- Identifiants du compte d'envoi

**Upload de Fichiers**
- Taille maximale des fichiers
- Dossier de destination des uploads

**URL Frontend**
- Pour la configuration CORS

### Comptes de Test Préconfigurés

Après l'exécution du seed, trois comptes sont disponibles :

| Rôle | Email | Mot de passe | Accès |
|------|-------|--------------|-------|
| Administrateur | admin@teashop.com | Admin123! | Toutes les interfaces admin |
| Caissier | cashier@teashop.com | Cashier123! | Interface point de vente |
| Client | client@teashop.com | Client123! | Boutique en ligne |

**⚠️ Important :** Ces comptes sont pour le développement uniquement. En production, ils doivent être désactivés ou supprimés.

## 📁 Structure du Projet

### Organisation Générale

Le projet suit une structure monorepo avec deux applications principales :

**Dossier Racine**
- Configuration Docker Compose
- Fichiers de configuration globaux
- Documentation principale
- Scripts CI/CD

**Application Backend (server/)**
- Code source TypeScript dans un dossier dédié
- Tests unitaires et end-to-end
- Migrations de base de données
- Scripts de seeding

**Application Frontend (client/)**
- Code source React avec TypeScript
- Tests unitaires et d'intégration
- Ressources statiques (images, polices)
- Configuration de build

### Structure Backend Détaillée

**Modules Communs (common/)**
- Décorateurs personnalisés pour extraire l'utilisateur courant
- Guards d'authentification et d'autorisation
- Filtres d'exception globaux
- Intercepteurs pour transformer les réponses
- Pipes de validation
- Utilitaires partagés

**Modules Fonctionnels**
Chaque entité métier possède son module autonome avec :
- Contrôleur : Définit les routes et les méthodes HTTP
- Service : Logique métier
- Module : Configuration et dépendances
- DTOs : Validation des données entrantes
- Entités : Mapping base de données

**Modules Principaux :**
- **Authentification** : Login, register, refresh tokens
- **Utilisateurs** : CRUD utilisateurs, gestion des rôles
- **Produits** : Gestion du catalogue
- **Commandes** : Workflow complet de commande
- **Paiement** : Intégration Stripe
- **Dashboard** : Statistiques et rapports

### Structure Frontend Détaillée

**Composants Communs**
- Boutons, modales, tableaux réutilisables
- Éléments de formulaire standardisés
- Indicateurs de chargement et d'erreur

**Layouts par Rôle**
- Layout administrateur avec navigation spécifique
- Layout caissier optimisé pour point de vente
- Layout client e-commerce classique

**Guards de Route**
- Protection des routes administrateur
- Protection des routes caissier
- Redirection automatique selon le rôle

**Pages Organisées par Domaine**
- Pages administrateur : dashboard, gestion produits, gestion utilisateurs
- Pages caissier : point de vente, historique transactions
- Pages client : catalogue, panier, profil, commandes

**Services API**
- Client HTTP configuré avec Axios
- Intercepteurs pour les tokens JWT
- Gestion des erreurs centralisée

**Store Redux**
- Slices par domaine fonctionnel
- Sélecteurs optimisés
- Middleware pour les effets de bord

## 📚 Documentation API

### Accès à la Documentation

La documentation interactive est générée automatiquement avec Swagger/OpenAPI :
- Accessible via le navigateur à l'URL de l'API
- Interface interactive permettant de tester les endpoints
- Schémas de données détaillés
- Authentification directement testable

### Organisation des Endpoints

**Tag Authentification**
- Inscription d'un nouvel utilisateur
- Connexion et obtention des tokens
- Rafraîchissement du token d'accès
- Demande de réinitialisation de mot de passe
- Réinitialisation effective du mot de passe

**Tag Utilisateurs**
- Liste paginée des utilisateurs (admin)
- Détail d'un utilisateur spécifique
- Création d'utilisateur (admin)
- Modification des informations utilisateur
- Suppression logique d'un utilisateur
- Changement de rôle (admin)

**Tag Produits**
- Liste des produits avec filtres et pagination
- Recherche textuelle dans le catalogue
- Détail complet d'un produit
- Création de produit (admin)
- Mise à jour des informations produit (admin)
- Gestion des images produit
- Suppression/archivage de produit (admin)

**Tag Commandes**
- Création de commande (client)
- Création pour un client (caissier)
- Liste des commandes avec filtres
- Détail d'une commande spécifique
- Mise à jour du statut (admin/caissier)
- Annulation de commande

**Tag Paiement**
- Création d'une intention de paiement Stripe
- Confirmation du paiement
- Récupération des méthodes de paiement sauvegardées
- Historique des transactions

**Tag Dashboard**
- Statistiques générales (chiffre d'affaires, commandes)
- Données pour graphiques temporels
- Top produits
- Métriques de performance

### Authentification des Requêtes

- Endpoints publics : Accessibles sans authentification
- Endpoints protégés : Nécessitent un token JWT valide
- Le token doit être inclus dans le header Authorization
- Format attendu : "Bearer [token]"

### Codes de Réponse Standards

- **200** : Succès, données retournées
- **201** : Création réussie
- **400** : Erreur de validation des données
- **401** : Non authentifié
- **403** : Rôle insuffisant
- **404** : Ressource non trouvée
- **409** : Conflit (email déjà utilisé, etc.)
- **422** : Données valides mais traitement impossible
- **500** : Erreur serveur interne

### Pagination et Filtrage

- Pagination avec numéro de page et taille
- Tri sur les champs disponibles
- Filtres combinables avec opérateurs
- Métadonnées de pagination dans les réponses

## 🗄 Base de Données

### Modèle de Données

**Table Utilisateurs**
- Identifiant unique UUID
- Email (unique)
- Mot de passe hashé (bcrypt)
- Nom complet
- Rôle (enum : admin, cashier, customer)
- Avatar (URL)
- Statut actif/inactif
- Dates de création et modification
- Date de dernière connexion

**Table Produits**
- Identifiant unique UUID
- Nom du produit
- Description détaillée
- Prix unitaire
- Stock disponible
- Catégorie
- Images (tableau d'URLs)
- Statut actif/inactif
- Créateur (référence utilisateur)
- Dates de création et modification

**Table Commandes**
- Identifiant unique UUID
- Client (référence utilisateur)
- Statut de la commande (enum)
- Montant total
- Adresse de livraison (JSON)
- Identifiant de paiement Stripe
- Notes éventuelles
- Créateur (référence utilisateur)
- Dates de création et modification

**Table Lignes de Commande**
- Identifiant unique UUID
- Commande parente (référence)
- Produit commandé (référence)
- Quantité
- Prix unitaire au moment de la commande
- Prix total de la ligne

**Table Paiements**
- Identifiant unique UUID
- Commande associée (référence)
- Identifiant Stripe
- Montant
- Devise
- Statut du paiement
- Méthode de paiement
- Dates de création et modification

### Relations

- Un utilisateur peut avoir plusieurs commandes
- Une commande appartient à un utilisateur
- Une commande contient plusieurs lignes
- Une ligne de commande référence un produit
- Un paiement est lié à une commande
- Un produit peut être créé par un administrateur

### Migrations

Les migrations sont versionnées et permettent de :
- Suivre l'évolution du schéma de base de données
- Revenir à un état antérieur si nécessaire
- Collaborer sans conflits sur la structure
- Déployer de manière fiable en production

### Seeds (Données de Test)

Les scripts de seed créent un environnement de test complet :
- 3 utilisateurs avec rôles distincts
- 15-20 produits dans différentes catégories
- Quelques commandes exemple
- Données cohérentes pour les démonstrations

## 🔒 Mesures de Sécurité

### Authentification et Sessions

- Mots de passe hashés avec bcrypt (sel automatique)
- Tokens JWT signés avec secret fort
- Refresh tokens avec rotation automatique
- Expiration configurable des sessions
- Liste noire de tokens révoqués

### Autorisation Fine

- Guards basés sur les rôles
- Vérification à chaque requête protégée
- Impossibilité d'accéder aux ressources d'autres utilisateurs
- Principe du moindre privilège

### Protection des Données

- Validation stricte de toutes les entrées (class-validator)
- Pas de données bancaires stockées (délégation à Stripe)
- Données sensibles chiffrées
- Masquage des informations critiques dans les logs

### Sécurité HTTP

- Headers de sécurité avec Helmet
- CORS configuré restrictivement
- Rate limiting sur les endpoints sensibles
- Protection CSRF sur les formulaires

### Base de Données

- Requêtes paramétrées (protection injection SQL)
- Connexions poolées et limitées
- Backups automatiques (production)
- Accès restreint par réseau

### Bonnes Pratiques

- Audit trail pour les actions critiques
- Validation des fichiers uploadés (type, taille, contenu)
- Sanitization des entrées utilisateur
- Gestion sécurisée des erreurs (pas de stack trace exposée)

## 🧪 Stratégie de Test

### Types de Tests

**Tests Unitaires**
- Couvrent la logique métier des services
- Mocks pour les dépendances externes
- Exécutés automatiquement à chaque commit
- Objectif : 85% de couverture minimum

**Tests d'Intégration**
- Testent les interactions entre modules
- Base de données de test dédiée
- Vérifient le comportement complet des endpoints

**Tests End-to-End**
- Simulent des parcours utilisateur complets
- Scénarios : création de compte, achat, gestion admin
- Exécutés avant chaque déploiement

**Tests de Performance**
- Vérifient les temps de réponse sous charge
- Identifient les goulots d'étranglement
- Exécutés périodiquement

### Scénarios de Test Critiques

**Parcours Client :**
- Navigation dans le catalogue avec filtres
- Ajout au panier et modification quantités
- Processus de commande complet
- Paiement réussi
- Consultation de l'historique

**Parcours Caissier :**
- Recherche de produit
- Création de commande pour un client
- Encaissement
- Consultation des transactions du jour

**Parcours Administrateur :**
- Création de produit avec images
- Modification de stock
- Gestion des utilisateurs
- Consultation des statistiques

**Cas d'Erreur :**
- Tentative d'accès non autorisé
- Données invalides
- Paiement refusé
- Stock insuffisant

### Outils de Test

- **Jest** : Framework de test principal
- **Supertest** : Tests HTTP pour l'API
- **React Testing Library** : Tests composants React
- **Cypress** (optionnel) : Tests E2E avancés

## 🚢 Déploiement

### Environnements

**Développement Local**
- Base de données locale ou conteneurisée
- Hot reload activé
- Logs détaillés
- Mode debug

**Staging/Préproduction**
- Environnement identique à la production
- Données anonymisées
- Tests de charge et de performance
- Validation avant mise en production

**Production**
- Infrastructure scalable
- Base de données avec réplication
- Logs agrégés
- Monitoring et alertes
- Backups automatiques

### Stratégie de Déploiement

- Build automatisé via CI/CD
- Tests exécutés avant déploiement
- Déploiement progressif (rolling update)
- Rollback automatique en cas d'échec

### Conteneurisation

- Images Docker optimisées multi-stage
- Docker Compose pour le développement
- Orchestration Kubernetes (optionnel)
- Registry privé pour les images

### Monitoring et Logging

- Logs structurés au format JSON
- Agrégation de logs (ELK, Datadog, etc.)
- Métriques de performance
- Alertes sur anomalies

## 🤝 Guide de Contribution

### Pour Commencer

1. Lire attentivement ce README
2. Installer le projet en local
3. Explorer la documentation Swagger
4. Comprendre les différents rôles et leurs permissions
5. Choisir une issue dans le project board

### Workflow de Développement

**Branches**
- La branche principale est protégée
- Créer une branche depuis develop pour chaque fonctionnalité
- Nommer les branches selon le type : feature/, bugfix/, docs/

**Conventions de Commits**
Le projet suit la convention des commits conventionnels :
- **feat:** Nouvelle fonctionnalité
- **fix:** Correction de bug
- **docs:** Modification de documentation
- **style:** Formatage du code
- **refactor:** Restructuration du code
- **test:** Ajout ou modification de tests
- **chore:** Tâches de maintenance

**Messages de Commit**
- En français ou en anglais (à définir en équipe)
- Description claire et concise
- Référence à l'issue concernée

### Processus de Pull Request

1. Créer une branche depuis develop
2. Développer la fonctionnalité
3. Écrire ou mettre à jour les tests
4. S'assurer que tous les tests passent
5. Mettre à jour la documentation si nécessaire
6. Créer une Pull Request vers develop
7. Attendre la review d'au moins un autre développeur
8. Corriger les retours si nécessaire
9. Une fois approuvée, la PR est mergée

### Standards de Code

- Suivre les règles ESLint configurées
- Formater le code avec Prettier avant de commiter
- Documenter les fonctions publiques
- Nommer les variables et fonctions explicitement
- Principe DRY (Don't Repeat Yourself)
- Fonctions courtes avec responsabilité unique

### Revue de Code

Les points vérifiés lors de la revue :
- La fonctionnalité correspond au besoin exprimé
- Le code est lisible et bien structuré
- Les tests couvrent les cas nominaux et limites
- La documentation est à jour
- Pas de code mort ou commenté
- Pas de secrets ou mots de passe dans le code
- Performance acceptable

## 🗺 Feuille de Route

### Phase 1 : Fondations (MVP) ✅
- Architecture de base NestJS
- Authentification avec rôles
- CRUD produits complet
- Gestion des commandes basique
- Paiement Stripe fonctionnel
- Dashboard administrateur simple
- Interface client e-commerce

### Phase 2 : Enrichissement 🚧
- Système d'avis et notations
- Recherche avancée avec filtres
- Gestion des promotions et codes promo
- Export de données (PDF, Excel)
- Mode hors-ligne caissier
- Notifications email automatiques
- Amélioration du design responsive

### Phase 3 : Optimisation 📅
- Cache Redis pour les requêtes fréquentes
- Optimisation des images et lazy loading
- Internationalisation (i18n)
- Thème sombre
- Tests de performance et optimisation
- Documentation vidéo

### Phase 4 : Avancé 🎯
- Application mobile React Native
- Paiement PayPal et autres moyens
- Programme de fidélité
- Chat support client en temps réel
- API publique pour partenaires
- Machine learning pour recommandations

## 🆘 Résolution de Problèmes

### Problèmes Courants

**L'application ne démarre pas**
- Vérifier que PostgreSQL est en cours d'exécution
- Vérifier les variables d'environnement (.env)
- Vérifier les logs d'erreur pour plus de détails
- S'assurer que les ports ne sont pas déjà utilisés

**Erreurs de connexion à la base de données**
- Vérifier les identifiants dans le fichier .env
- Tester la connexion avec un client PostgreSQL
- Vérifier que la base de données existe
- Vérifier les permissions de l'utilisateur

**Erreurs d'authentification**
- Vérifier que le token JWT n'est pas expiré
- Vérifier le format du header Authorization
- Essayer de se reconnecter pour obtenir un nouveau token
- Vider le localStorage et réessayer

**Problèmes de paiement**
- Vérifier que les clés Stripe sont en mode test
- Utiliser les numéros de carte de test Stripe
- Consulter les logs webhook Stripe
- Vérifier la configuration des webhooks

**Problèmes de build frontend**
- Supprimer node_modules et package-lock.json
- Réinstaller les dépendances
- Vider le cache npm
- Vérifier la version de Node.js

### Où Trouver de l'Aide

1. Documentation Swagger intégrée
2. Logs de l'application
3. Issues GitHub du projet
4. Canal Discord de l'équipe
5. Documentation officielle des technologies utilisées

## 📚 Ressources et Références

### Documentation Officielle

- [Documentation NestJS](https://docs.nestjs.com/)
- [Documentation TypeORM](https://typeorm.io/)
- [Documentation Stripe](https://stripe.com/docs/api)
- [Documentation React](https://react.dev/)
- [Documentation PostgreSQL](https://www.postgresql.org/docs/)
## 📄 Licence et Crédits

### Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

### Équipe de Développement

Développé dans le cadre d'un projet collaboratif d'apprentissage.

### Remerciements

- La communauté NestJS pour l'excellent framework
- Stripe pour l'infrastructure de paiement
- Tous les contributeurs open source des bibliothèques utilisées

### Images et Ressources

- Images de produits : Unsplash (libres de droits)
- Icônes : Heroicons / Material Icons
- Polices : Google Fonts

---

├── Achitecture.md
├── docker-compose.yml
├── docs
│   ├── API.md
│   ├── CONTRIBUTING.md
│   ├── DATABASE.md
│   └── DEPLOYMENT.md
├── LICENSE
├── package.json
├── README.md
├── scripts
│   ├── backup-db.sh
│   ├── deploy.sh
│   └── seed.sh
├── server
│   ├── logs
│   ├── package.json
│   ├── src
│   │   ├── app.module.ts
│   │   ├── common
│   │   │   ├── decorators
│   │   │   ├── enums
│   │   │   ├── filters
│   │   │   ├── guards
│   │   │   ├── interceptors
│   │   │   ├── interfaces
│   │   │   ├── middleware
│   │   │   ├── pipes
│   │   │   └── utils
│   │   ├── config
│   │   ├── database
│   │   │   ├── migrations
│   │   │   └── seeds
│   │   ├── main.ts
│   │   └── modules
│   │       ├── auth
│   │       │   ├── auth.controller.ts
│   │       │   ├── auth.module.ts
│   │       │   ├── auth.service.ts
│   │       │   ├── dto
│   │       │   ├── strategies
│   │       │   └── tests
│   │       ├── cart
│   │       │   ├── cart.controller.ts
│   │       │   ├── cart.module.ts
│   │       │   ├── cart.service.ts
│   │       │   ├── dto
│   │       │   │   ├── create-cart-item.dto.ts
│   │       │   │   └── update-cart-item.dto.ts
│   │       │   ├── entities
│   │       │   │   └── cart-item.entity.ts
│   │       │   └── tests
│   │       ├── dashboard
│   │       │   ├── dashboard.controller.ts
│   │       │   ├── dashboard.module.ts
│   │       │   ├── dashboard.service.ts
│   │       │   ├── dto
│   │       │   └── tests
│   │       ├── notifications
│   │       │   ├── notifications.controller.ts
│   │       │   ├── notifications.module.ts
│   │       │   ├── notifications.service.ts
│   │       │   ├── templates
│   │       │   └── tests
│   │       ├── orders
│   │       │   ├── dto
│   │       │   │   ├── create-order.dto.ts
│   │       │   │   └── update-order.dto.ts
│   │       │   ├── entities
│   │       │   │   └── order.entity.ts
│   │       │   ├── orders.controller.ts
│   │       │   ├── orders.module.ts
│   │       │   ├── orders.service.ts
│   │       │   └── tests
│   │       ├── payment
│   │       │   ├── dto
│   │       │   ├── payment.controller.ts
│   │       │   ├── payment.module.ts
│   │       │   ├── payment.service.ts
│   │       │   ├── tests
│   │       │   └── webhooks
│   │       ├── products
│   │       │   ├── dto
│   │       │   │   ├── create-product.dto.ts
│   │       │   │   └── update-product.dto.ts
│   │       │   ├── entities
│   │       │   │   └── product.entity.ts
│   │       │   ├── products.controller.ts
│   │       │   ├── products.module.ts
│   │       │   ├── products.service.ts
│   │       │   └── tests
│   │       ├── reviews
│   │       │   ├── dto
│   │       │   │   ├── create-review.dto.ts
│   │       │   │   └── update-review.dto.ts
│   │       │   ├── entities
│   │       │   │   └── review.entity.ts
│   │       │   ├── reviews.controller.ts
│   │       │   ├── reviews.module.ts
│   │       │   ├── reviews.service.ts
│   │       │   └── tests
│   │       └── users
│   │           ├── dto
│   │           │   ├── create-user.dto.ts
│   │           │   └── update-user.dto.ts
│   │           ├── entities
│   │           │   └── user.entity.ts
│   │           ├── tests
│   │           ├── users.controller.ts
│   │           ├── users.module.ts
│   │           └── users.service.ts
│   ├── test
│   └── uploads
│       ├── avatars
│       └── products
└── web
    ├── AGENTS.md
    ├── ✅ App Router directories created
    ├── CLAUDE.md
    ├── ✅ Component & lib directories created
    ├── echo
    ├── eslint.config.mjs
    ├── middleware.ts
    ├── next.config.ts
    ├── next-env.d.ts
    ├── package.json
    ├── package-lock.json
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── README.md
    ├── ✅ Server directories created
    ├── src
    │   ├── app
    │   │   ├── (account)
    │   │   │   ├── account
    │   │   │   │   ├── addresses
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── orders
    │   │   │   │   │   ├── [id]
    │   │   │   │   │   │   └── page.tsx
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── profile
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── wishlist
    │   │   │   │       └── page.tsx
    │   │   │   └── layout.tsx
    │   │   ├── (admin)
    │   │   │   ├── admin
    │   │   │   │   ├── orders
    │   │   │   │   │   ├── [id]
    │   │   │   │   │   │   └── page.tsx
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── products
    │   │   │   │   │   ├── [id]
    │   │   │   │   │   │   ├── edit
    │   │   │   │   │   │   │   └── page.tsx
    │   │   │   │   │   │   └── page.tsx
    │   │   │   │   │   ├── new
    │   │   │   │   │   │   └── page.tsx
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── reports
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── settings
    │   │   │   │   │   └── page.tsx
    │   │   │   │   └── users
    │   │   │   │       ├── [id]
    │   │   │   │       │   └── page.tsx
    │   │   │   │       ├── new
    │   │   │   │       │   └── page.tsx
    │   │   │   │       └── page.tsx
    │   │   │   └── layout.tsx
    │   │   ├── api
    │   │   │   ├── auth
    │   │   │   │   └── [...nextauth]
    │   │   │   │       └── route.ts
    │   │   │   ├── revalidate
    │   │   │   │   └── route.ts
    │   │   │   └── upload
    │   │   │       └── route.ts
    │   │   ├── (auth)
    │   │   │   ├── forgot-password
    │   │   │   │   └── page.tsx
    │   │   │   ├── layout.tsx
    │   │   │   ├── login
    │   │   │   │   └── page.tsx
    │   │   │   ├── register
    │   │   │   │   └── page.tsx
    │   │   │   └── reset-password
    │   │   │       └── page.tsx
    │   │   ├── (cashier)
    │   │   │   ├── cashier
    │   │   │   │   ├── daily-report
    │   │   │   │   │   └── page.tsx
    │   │   │   │   ├── page.tsx
    │   │   │   │   └── transactions
    │   │   │   │       └── page.tsx
    │   │   │   └── layout.tsx
    │   │   ├── error.tsx
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   ├── not-found.tsx
    │   │   ├── page.tsx
    │   │   └── (shop)
    │   │       ├── cart
    │   │       │   └── page.tsx
    │   │       ├── catalog
    │   │       │   ├── loading.tsx
    │   │       │   └── page.tsx
    │   │       ├── checkout
    │   │       │   └── page.tsx
    │   │       ├── layout.tsx
    │   │       ├── order-confirmation
    │   │       │   └── page.tsx
    │   │       ├── products
    │   │       │   └── [slug]
    │   │       │       └── page.tsx
    │   │       └── shop
    │   │           └── page.tsx
    │   ├── components
    │   │   ├── features
    │   │   │   ├── auth
    │   │   │   │   ├── forgot-password-form.tsx
    │   │   │   │   ├── login-form.tsx
    │   │   │   │   └── register-form.tsx
    │   │   │   ├── cart
    │   │   │   ├── checkout
    │   │   │   │   └── checkout-form.tsx
    │   │   │   ├── dashboard
    │   │   │   │   ├── recent-orders-table.tsx
    │   │   │   │   ├── revenue-chart.tsx
    │   │   │   │   └── stats-card.tsx
    │   │   │   ├── orders
    │   │   │   ├── pos
    │   │   │   └── products
    │   │   │       ├── product-card.tsx
    │   │   │       ├── product-filters.tsx
    │   │   │       └── product-grid.tsx
    │   │   ├── layout
    │   │   │   ├── account-sidebar.tsx
    │   │   │   ├── admin-header.tsx
    │   │   │   ├── admin-sidebar.tsx
    │   │   │   ├── cashier-header.tsx
    │   │   │   ├── footer.tsx
    │   │   │   └── navbar.tsx
    │   │   ├── providers
    │   │   │   ├── auth-provider.tsx
    │   │   │   ├── query-provider.tsx
    │   │   │   ├── theme-provider.tsx
    │   │   │   └── toast-provider.tsx
    │   │   └── ui
    │   │       ├── alert
    │   │       ├── avatar
    │   │       ├── badge
    │   │       ├── breadcrumb
    │   │       ├── button
    │   │       ├── card
    │   │       ├── dropdown
    │   │       ├── input
    │   │       ├── modal
    │   │       ├── pagination
    │   │       ├── search-bar
    │   │       ├── select
    │   │       ├── spinner
    │   │       ├── table
    │   │       └── tooltip
    │   ├── config
    │   │   ├── navigation.config.ts
    │   │   └── site.config.ts
    │   ├── lib
    │   │   ├── api
    │   │   │   ├── client.ts
    │   │   │   ├── dashboard.api.ts
    │   │   │   ├── orders.api.ts
    │   │   │   ├── payment.api.ts
    │   │   │   ├── products.api.ts
    │   │   │   └── users.api.ts
    │   │   ├── auth
    │   │   │   ├── auth.config.ts
    │   │   │   ├── auth.ts
    │   │   │   └── session.ts
    │   │   ├── queries
    │   │   ├── store
    │   │   │   ├── cart.store.ts
    │   │   │   ├── ui.store.ts
    │   │   │   └── wishlist.store.ts
    │   │   └── utils
    │   │       ├── constants.ts
    │   │       ├── format-currency.ts
    │   │       └── format-date.ts
    │   └── types
    │       ├── api.types.ts
    │       ├── cart.types.ts
    │       ├── next-auth.d.ts
    │       ├── order.types.ts
    │       ├── product.types.ts
    │       └── user.types.ts
    └── tsconfig.json


