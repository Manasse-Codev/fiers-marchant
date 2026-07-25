# CashCoin

Application e-commerce et point de vente construite avec une architecture unifiee **Next.js 15 App Router**.

Le projet regroupe dans une seule application :

- une boutique en ligne pour les clients ;
- un espace compte client ;
- un tableau de bord administrateur ;
- un terminal de caisse pour les caissiers ;
- des Route Handlers API sous `src/app/api/` ;
- la logique metier partagee sous `src/lib/`.

---

## Principes Architecturaux

- **Architecture unifiee Next.js** : pages, layouts, API, middleware et logique applicative dans le meme projet.
- **App Router** : routes organisees avec `src/app/` et des Route Groups par contexte fonctionnel.
- **Server Components par defaut** : rendu serveur, SEO et chargement initial des donnees quand c'est pertinent.
- **Client Components seulement si necessaire** : formulaires, filtres, panier, paiement, terminal POS et composants interactifs.
- **Validation systematique** : schemas de validation pour les entrees utilisateur et les payloads API.
- **Acces par role** : separation claire entre `admin`, `cashier` et `customer`.
- **Gestion d'erreurs centralisee** : reponses API coherentes depuis les Route Handlers.
- **Observabilite minimale des le depart** : logs applicatifs, erreurs capturees et metriques de base.

---

## Roles Utilisateurs

### Administrateur

**Responsabilites :** gestion complete de la plateforme.

**Capacites :**

- gestion du catalogue produits ;
- administration des utilisateurs et attribution des roles ;
- supervision des commandes et transactions ;
- consultation des tableaux de bord ;
- configuration des parametres systeme ;
- gestion des promotions ;
- export de rapports ;
- gestion des remboursements et litiges.

**Interface dediee :** `/admin`.

### Caissier

**Responsabilites :** gestion du point de vente.

**Capacites :**

- creation de commandes en boutique ;
- consultation du catalogue et des stocks ;
- encaissement ;
- gestion du panier client ;
- consultation des transactions de la journee ;
- recherche rapide de produits ;
- application de remises autorisees ;
- impression ou generation de ticket.

**Restrictions :**

- pas d'administration des utilisateurs ;
- pas de modification du catalogue ;
- pas de suppression de commandes validees ;
- pas d'acces aux rapports globaux.

**Interface dediee :** `/cashier`.

### Client

**Responsabilites :** achat en ligne et gestion de son compte.

**Capacites :**

- navigation dans le catalogue ;
- consultation des fiches produits ;
- gestion du panier ;
- passage de commande ;
- paiement securise ;
- suivi du statut des commandes ;
- gestion du profil et des adresses ;
- consultation de l'historique d'achat ;
- avis et evaluations produits.

**Interface dediee :** `/shop`, `/catalog`, `/cart`, `/checkout`, `/account/*`.

---

## Fonctionnalites

### Authentification

- inscription ;
- connexion ;
- sessions gerees par NextAuth.js ;
- protection des routes par middleware ;
- roles applicatifs `admin`, `cashier`, `customer` ;
- reinitialisation de mot de passe ;
- verrouillage temporaire apres echecs repetes ;
- protection contre les attaques par force brute.

### Catalogue Produits

- fiches produits avec images ;
- categories et variantes ;
- prix, promotions et stock ;
- recherche et filtres ;
- suggestions et produits associes ;
- upload d'images via Route Handler dedie.

### Commandes

1. selection des produits ;
2. validation du panier ;
3. saisie de l'adresse ;
4. choix du mode de livraison ;
5. application d'un code promo ;
6. paiement ;
7. confirmation de commande.

**Etats principaux :**

- `pending` : commande creee, paiement en attente ;
- `confirmed` : paiement valide ;
- `preparing` : preparation en cours ;
- `shipped` : expedition effectuee ;
- `delivered` : commande livree ;
- `cancelled` : commande annulee.

### Paiement

- Stripe Elements ;
- Apple Pay et Google Pay si actives dans Stripe ;
- webhooks de paiement via Route Handlers ;
- remboursements partiels ou totaux ;
- aucune donnee bancaire stockee dans l'application.

### Tableaux de Bord

**Administrateur :**

- chiffre d'affaires ;
- commandes par statut ;
- produits les plus vendus ;
- performance par categorie ;
- evolution temporelle ;
- exports.

**Caissier :**

- ventes de la journee ;
- nombre de transactions ;
- panier moyen ;
- performance personnelle.

### Notifications

- emails transactionnels ;
- notifications in-app ;
- alertes de stock ;
- notifications de changement de statut de commande.

---

## Stack Technique

| Categorie | Technologie | Role |
|-----------|-------------|------|
| Framework | Next.js 15 App Router | Application web, routage, rendu serveur, API |
| UI | React 19 | Composants d'interface |
| Langage | TypeScript 5.x | Typage statique |
| Styles | Tailwind CSS 3.x | Styles utilitaires |
| Authentification | NextAuth.js v5 | Sessions, providers, middleware d'authentification |
| Base de donnees | PostgreSQL 15+ | Stockage relationnel |
| ORM retenu | Prisma | Modele de donnees, migrations, client type |
| Validation | Zod | Validation des formulaires et payloads API |
| Data fetching serveur | `fetch()` natif | Chargement de donnees dans Server Components et Route Handlers |
| Data fetching client | TanStack Query v5 | Cache, mutations et synchronisation cote client |
| Etat global | Zustand | Panier, wishlist et etat UI local |
| Paiement | Stripe | Paiements, webhooks et remboursements |
| Email | Nodemailer ou fournisseur SMTP | Emails transactionnels |
| Tests unitaires | Jest | Tests de logique et composants |
| Tests UI | React Testing Library | Tests de composants |
| Tests E2E | Playwright | Parcours critiques utilisateur |
| Qualite | ESLint, Prettier | Linting et formatage |
| DevOps | Docker, GitHub Actions | Environnements reproductibles et CI/CD |

---

## Prerequis

- Node.js 20 LTS ou superieur ;
- npm 10 ou superieur ;
- PostgreSQL 15 ou superieur ;
- Git 2.30 ou superieur ;
- compte Stripe en mode test ;
- service SMTP de test ou de production.

---

## Installation Locale

### 1. Cloner le depot

```bash
git clone <url-du-repository>
cd cashcoin
```

### 2. Installer les dependances

```bash
npm install
```

### 3. Configurer l'environnement

```bash
cp .env.example .env.local
```

Renseigner au minimum :

```env
NODE_ENV=development

DATABASE_URL="postgresql://cashcoin:cashcoin@localhost:5432/cashcoin"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="replace-with-a-long-random-secret"

NEXT_PUBLIC_APP_URL="http://localhost:3000"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_replace_me"
STRIPE_SECRET_KEY="sk_test_replace_me"
STRIPE_WEBHOOK_SECRET="whsec_replace_me"

SMTP_HOST="localhost"
SMTP_PORT="1025"
SMTP_USER=""
SMTP_PASSWORD=""
EMAIL_FROM="CashCoin <no-reply@cashcoin.local>"

UPLOAD_MAX_SIZE_MB=5
```

### 4. Preparer la base de donnees

```bash
npm run db:migrate
npm run db:seed
```

### 5. Demarrer l'application

```bash
npm run dev
```

L'application est disponible sur :

- boutique : `http://localhost:3000/shop` ;
- catalogue : `http://localhost:3000/catalog` ;
- administration : `http://localhost:3000/admin` ;
- caisse : `http://localhost:3000/cashier`.

---

## Scripts npm

| Script | Role |
|--------|------|
| `npm run dev` | Demarre Next.js en mode developpement |
| `npm run build` | Genere le build de production |
| `npm run start` | Lance le build de production |
| `npm run lint` | Execute ESLint |
| `npm run format` | Formate le code avec Prettier |
| `npm run typecheck` | Verifie TypeScript |
| `npm run test` | Execute les tests unitaires |
| `npm run test:e2e` | Execute les tests Playwright |
| `npm run db:migrate` | Applique les migrations Prisma |
| `npm run db:seed` | Insere les donnees de test |
| `npm run db:studio` | Ouvre Prisma Studio |

---

## Structure du Projet

L'arborescence cible suit l'organisation Next.js App Router decrite dans `Architecture.md`, adaptee a une application unifiee.

```text
cashcoin/
│
├── README.md
├── Architecture.md
├── LICENSE
├── .gitignore
├── .editorconfig
├── .env.example
├── .env.local
├── docker-compose.yml
├── docker-compose.prod.yml
├── package.json
├── tsconfig.json
├── next.config.ts
├── middleware.ts
├── Dockerfile
├── .dockerignore
│
├── public/
│   ├── favicon.ico
│   ├── manifest.json
│   ├── robots.txt
│   └── assets/
│       ├── images/
│       │   ├── logo.png
│       │   ├── hero-bg.jpg
│       │   └── placeholder-product.png
│       └── fonts/
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── loading.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── (auth)/
│   │   │   ├── layout.tsx
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   └── reset-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (shop)/
│   │   │   ├── layout.tsx
│   │   │   ├── shop/
│   │   │   │   └── page.tsx
│   │   │   ├── catalog/
│   │   │   │   ├── page.tsx
│   │   │   │   └── loading.tsx
│   │   │   ├── products/
│   │   │   │   └── [slug]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── loading.tsx
│   │   │   ├── cart/
│   │   │   │   └── page.tsx
│   │   │   ├── checkout/
│   │   │   │   └── page.tsx
│   │   │   └── order-confirmation/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (account)/
│   │   │   ├── layout.tsx
│   │   │   └── account/
│   │   │       ├── profile/
│   │   │       │   └── page.tsx
│   │   │       ├── orders/
│   │   │       │   ├── page.tsx
│   │   │       │   └── [id]/
│   │   │       │       └── page.tsx
│   │   │       ├── addresses/
│   │   │       │   └── page.tsx
│   │   │       └── wishlist/
│   │   │           └── page.tsx
│   │   │
│   │   ├── (admin)/
│   │   │   ├── layout.tsx
│   │   │   └── admin/
│   │   │       ├── page.tsx
│   │   │       ├── loading.tsx
│   │   │       ├── products/
│   │   │       │   ├── page.tsx
│   │   │       │   ├── new/
│   │   │       │   │   └── page.tsx
│   │   │       │   └── [id]/
│   │   │       │       ├── page.tsx
│   │   │       │       └── edit/
│   │   │       │           └── page.tsx
│   │   │       ├── users/
│   │   │       │   ├── page.tsx
│   │   │       │   ├── new/
│   │   │       │   │   └── page.tsx
│   │   │       │   └── [id]/
│   │   │       │       └── page.tsx
│   │   │       ├── orders/
│   │   │       │   ├── page.tsx
│   │   │       │   └── [id]/
│   │   │       │       └── page.tsx
│   │   │       ├── reports/
│   │   │       │   └── page.tsx
│   │   │       └── settings/
│   │   │           └── page.tsx
│   │   │
│   │   ├── (cashier)/
│   │   │   ├── layout.tsx
│   │   │   └── cashier/
│   │   │       ├── page.tsx
│   │   │       ├── transactions/
│   │   │       │   └── page.tsx
│   │   │       └── daily-report/
│   │   │           └── page.tsx
│   │   │
│   │   └── api/
│   │       ├── auth/
│   │       │   └── [...nextauth]/
│   │       │       └── route.ts
│   │       ├── products/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       ├── orders/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       ├── users/
│   │       │   ├── route.ts
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       ├── payment/
│   │       │   ├── route.ts
│   │       │   └── webhook/
│   │       │       └── route.ts
│   │       ├── dashboard/
│   │       │   └── route.ts
│   │       ├── upload/
│   │       │   └── route.ts
│   │       └── revalidate/
│   │           └── route.ts
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button/
│   │   │   │   ├── button.tsx
│   │   │   │   └── button.types.ts
│   │   │   ├── modal/
│   │   │   │   └── modal.tsx
│   │   │   ├── table/
│   │   │   │   └── table.tsx
│   │   │   ├── card/
│   │   │   ├── input/
│   │   │   ├── select/
│   │   │   ├── badge/
│   │   │   ├── avatar/
│   │   │   ├── spinner/
│   │   │   ├── alert/
│   │   │   ├── pagination/
│   │   │   ├── breadcrumb/
│   │   │   ├── tooltip/
│   │   │   ├── dropdown/
│   │   │   └── search-bar/
│   │   ├── layout/
│   │   │   ├── admin-sidebar.tsx
│   │   │   ├── admin-header.tsx
│   │   │   ├── cashier-header.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── account-sidebar.tsx
│   │   ├── features/
│   │   │   ├── products/
│   │   │   │   ├── product-card.tsx
│   │   │   │   ├── product-grid.tsx
│   │   │   │   ├── product-filters.tsx
│   │   │   │   ├── product-form.tsx
│   │   │   │   └── product-image-upload.tsx
│   │   │   ├── cart/
│   │   │   │   ├── cart-drawer.tsx
│   │   │   │   ├── cart-item.tsx
│   │   │   │   └── cart-summary.tsx
│   │   │   ├── checkout/
│   │   │   │   ├── checkout-form.tsx
│   │   │   │   └── stripe-payment.tsx
│   │   │   ├── orders/
│   │   │   │   ├── order-list.tsx
│   │   │   │   ├── order-detail.tsx
│   │   │   │   └── order-status-badge.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── stats-card.tsx
│   │   │   │   ├── revenue-chart.tsx
│   │   │   │   └── recent-orders-table.tsx
│   │   │   ├── auth/
│   │   │   │   ├── login-form.tsx
│   │   │   │   ├── register-form.tsx
│   │   │   │   └── forgot-password-form.tsx
│   │   │   └── pos/
│   │   │       ├── pos-terminal.tsx
│   │   │       └── pos-cart.tsx
│   │   └── providers/
│   │       ├── query-provider.tsx
│   │       ├── auth-provider.tsx
│   │       ├── theme-provider.tsx
│   │       └── toast-provider.tsx
│   │
│   ├── lib/
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── auth.api.ts
│   │   │   ├── users.api.ts
│   │   │   ├── products.api.ts
│   │   │   ├── cart.api.ts
│   │   │   ├── orders.api.ts
│   │   │   ├── payment.api.ts
│   │   │   ├── dashboard.api.ts
│   │   │   ├── reviews.api.ts
│   │   │   └── upload.api.ts
│   │   ├── queries/
│   │   │   ├── use-products.ts
│   │   │   ├── use-orders.ts
│   │   │   ├── use-cart.ts
│   │   │   ├── use-users.ts
│   │   │   ├── use-dashboard.ts
│   │   │   └── use-reviews.ts
│   │   ├── store/
│   │   │   ├── cart.store.ts
│   │   │   ├── ui.store.ts
│   │   │   └── wishlist.store.ts
│   │   ├── auth/
│   │   │   ├── auth.config.ts
│   │   │   ├── auth.ts
│   │   │   └── session.ts
│   │   ├── db/
│   │   │   ├── prisma.ts
│   │   │   └── repositories/
│   │   ├── services/
│   │   │   ├── products.service.ts
│   │   │   ├── orders.service.ts
│   │   │   ├── payments.service.ts
│   │   │   └── users.service.ts
│   │   └── utils/
│   │       ├── format-currency.ts
│   │       ├── format-date.ts
│   │       ├── validators.ts
│   │       ├── constants.ts
│   │       └── helpers.ts
│   │
│   ├── types/
│   │   ├── user.types.ts
│   │   ├── product.types.ts
│   │   ├── order.types.ts
│   │   ├── cart.types.ts
│   │   ├── payment.types.ts
│   │   ├── api.types.ts
│   │   ├── next-auth.d.ts
│   │   └── common.types.ts
│   │
│   └── config/
│       ├── navigation.config.ts
│       └── site.config.ts
│
├── docs/
│   ├── API.md
│   ├── DATABASE.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
│
├── scripts/
│   ├── seed.sh
│   ├── backup-db.sh
│   └── deploy.sh
│
└── .github/
    ├── workflows/
    │   ├── ci.yml
    │   ├── deploy-staging.yml
    │   └── deploy-prod.yml
    └── PULL_REQUEST_TEMPLATE.md
```

---

## App Router et Route Groups

| Route Group | URLs | Layout |
|-------------|------|--------|
| `(auth)` | `/login`, `/register`, `/forgot-password`, `/reset-password` | Layout centre, sans navigation principale |
| `(shop)` | `/shop`, `/catalog`, `/products/[slug]`, `/cart`, `/checkout` | Boutique publique avec navigation et footer |
| `(account)` | `/account/*` | Espace client protege |
| `(admin)` | `/admin/*` | Tableau de bord administrateur |
| `(cashier)` | `/cashier/*` | Terminal point de vente |

---

## Server Components et Client Components

| Type | Usage | Marqueur |
|------|-------|----------|
| Server Component | chargement de donnees, SEO, rendu initial, pages statiques ou revalidees | aucun marqueur |
| Client Component | hooks React, evenements, formulaires, panier, paiement, POS | `'use client'` en premiere ligne |

**Regle de decision :** commencer cote serveur, basculer cote client seulement quand le composant a besoin d'interactivite ou d'un etat navigateur.

---

## Flux de Donnees

### Creation d'une Commande

```text
Client
  -> /cart
  -> CartPage + cart.store.ts
  -> /checkout
  -> checkout-form.tsx
  -> stripe-payment.tsx
  -> POST /api/payment
  -> Stripe
  -> POST /api/orders
  -> Orders service + Prisma
  -> Email de confirmation
  -> /order-confirmation?orderId=xxx
```

### Dashboard Administrateur

```text
/admin
  -> DashboardPage
  -> GET /api/dashboard
  -> Dashboard service + Prisma
  -> stats-card.tsx
  -> revenue-chart.tsx
```

---

## Documentation API

Les endpoints applicatifs sont implementes avec des **Route Handlers** Next.js.

Un endpoint se trouve toujours dans un fichier `route.ts` :

```text
src/app/api/products/route.ts
src/app/api/products/[id]/route.ts
src/app/api/orders/route.ts
src/app/api/orders/[id]/route.ts
src/app/api/payment/route.ts
src/app/api/payment/webhook/route.ts
src/app/api/upload/route.ts
```

### Organisation des Endpoints

| Domaine | Route Handler | Methodes attendues |
|---------|---------------|--------------------|
| Auth | `src/app/api/auth/[...nextauth]/route.ts` | `GET`, `POST` |
| Produits | `src/app/api/products/route.ts` | `GET`, `POST` |
| Produit detail | `src/app/api/products/[id]/route.ts` | `GET`, `PATCH`, `DELETE` |
| Commandes | `src/app/api/orders/route.ts` | `GET`, `POST` |
| Commande detail | `src/app/api/orders/[id]/route.ts` | `GET`, `PATCH` |
| Utilisateurs | `src/app/api/users/route.ts` | `GET`, `POST` |
| Paiement | `src/app/api/payment/route.ts` | `POST` |
| Webhook Stripe | `src/app/api/payment/webhook/route.ts` | `POST` |
| Dashboard | `src/app/api/dashboard/route.ts` | `GET` |
| Upload | `src/app/api/upload/route.ts` | `POST` |
| Revalidation | `src/app/api/revalidate/route.ts` | `POST` |

### Format de Reponse API

Les Route Handlers doivent retourner une structure coherente :

```json
{
  "success": true,
  "data": {},
  "message": "Operation reussie"
}
```

En cas d'erreur :

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Donnees invalides",
    "details": []
  }
}
```

### Codes HTTP

| Code | Usage |
|------|-------|
| `200` | Lecture ou modification reussie |
| `201` | Ressource creee |
| `400` | Payload invalide |
| `401` | Session absente ou invalide |
| `403` | Role insuffisant |
| `404` | Ressource introuvable |
| `409` | Conflit metier |
| `422` | Validation semantique echouee |
| `500` | Erreur interne |

---

## Base de Donnees

### Modele Conceptuel

**User**

- `id` UUID ;
- `email` unique ;
- `passwordHash` optionnel selon provider ;
- `fullName` ;
- `role` : `admin`, `cashier`, `customer` ;
- `avatarUrl` ;
- `isActive` ;
- dates de creation et modification ;
- date de derniere connexion.

**Product**

- `id` UUID ;
- `name` ;
- `slug` unique ;
- `description` ;
- `price` ;
- `stock` ;
- `categoryId` ;
- `images` ;
- `isActive` ;
- `createdById` ;
- dates de creation et modification.

**Order**

- `id` UUID ;
- `customerId` ;
- `status` ;
- `totalAmount` ;
- `shippingAddress` ;
- `stripePaymentIntentId` ;
- `notes` ;
- `createdById` ;
- dates de creation et modification.

**OrderItem**

- `id` UUID ;
- `orderId` ;
- `productId` ;
- `quantity` ;
- `unitPrice` ;
- `lineTotal`.

**Payment**

- `id` UUID ;
- `orderId` ;
- `stripePaymentIntentId` ;
- `amount` ;
- `currency` ;
- `status` ;
- `method` ;
- dates de creation et modification.

### Relations

- un utilisateur peut avoir plusieurs commandes ;
- une commande appartient a un utilisateur ;
- une commande contient plusieurs lignes ;
- une ligne de commande reference un produit ;
- un paiement est lie a une commande ;
- un produit peut etre cree par un administrateur.

### Migrations et Seeds

Les migrations sont gerees par Prisma et versionnees dans `prisma/migrations/`.

Les seeds creent un environnement de test avec :

- des utilisateurs pour chaque role ;
- des produits exemples ;
- des commandes exemples ;
- des donnees coherentes pour les demonstrations.

---

## Securite

### Authentification et Sessions

- sessions gerees par NextAuth.js ;
- secret de session long et aleatoire via `NEXTAUTH_SECRET` ;
- cookies HTTP-only ;
- expiration et renouvellement des sessions ;
- protection des routes sensibles via `middleware.ts`.

### Autorisation

- verification du role dans les pages protegees ;
- verification du role dans chaque Route Handler sensible ;
- separation stricte des interfaces `admin`, `cashier` et `customer` ;
- refus par defaut si le role est absent ou inconnu.

### Donnees Sensibles

- aucune cle secrete exposee avec le prefixe `NEXT_PUBLIC_` ;
- aucune donnee bancaire stockee ;
- hash des mots de passe si authentification par identifiants ;
- validation des uploads ;
- limitation de taille des fichiers ;
- controle du type MIME ;
- journalisation sans secrets.

### Variables d'Environnement

| Variable | Exposition | Role |
|----------|------------|------|
| `NODE_ENV` | serveur | Environnement courant |
| `DATABASE_URL` | serveur | Connexion PostgreSQL |
| `NEXTAUTH_URL` | serveur | URL publique de l'application |
| `NEXTAUTH_SECRET` | serveur | Secret de signature des sessions |
| `NEXT_PUBLIC_APP_URL` | client | URL publique utilisable cote navigateur |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | client | Cle publique Stripe |
| `STRIPE_SECRET_KEY` | serveur | Cle secrete Stripe |
| `STRIPE_WEBHOOK_SECRET` | serveur | Verification des webhooks Stripe |
| `SMTP_HOST` | serveur | Serveur SMTP |
| `SMTP_PORT` | serveur | Port SMTP |
| `SMTP_USER` | serveur | Identifiant SMTP |
| `SMTP_PASSWORD` | serveur | Mot de passe SMTP |
| `EMAIL_FROM` | serveur | Expediteur des emails |
| `UPLOAD_MAX_SIZE_MB` | serveur | Taille maximale d'upload |

---

## Tests

### Types de Tests

| Type | Cible | Outil |
|------|-------|-------|
| Unitaires | fonctions pures, services, validateurs | Jest |
| Composants | formulaires, cartes, tableaux | React Testing Library |
| Integration | Route Handlers, Prisma, auth | Jest |
| E2E | achat, login, admin, caisse | Playwright |

### Scenarios Critiques

- inscription et connexion ;
- acces refuse aux routes protegees ;
- creation de produit par administrateur ;
- impossibilite de creer un produit par caissier ou client ;
- ajout au panier ;
- passage de commande ;
- paiement reussi ;
- webhook Stripe traite une seule fois ;
- mise a jour du stock ;
- consultation d'une commande uniquement par son proprietaire ou par un role autorise.

---

## Deploiement

### Environnements

| Environnement | Usage |
|---------------|-------|
| Local | Developpement |
| Preview | Validation de Pull Request |
| Staging | Validation fonctionnelle |
| Production | Utilisateurs finaux |

### Strategie

1. installation des dependances ;
2. verification TypeScript ;
3. lint ;
4. tests ;
5. migration de base de donnees ;
6. build Next.js ;
7. deploiement ;
8. verification des routes critiques.

### Observabilite

- logs structures ;
- suivi des erreurs ;
- metriques de performance ;
- alertes sur les erreurs de paiement ;
- alertes sur les echecs de webhook ;
- suivi des temps de reponse des Route Handlers.

---

## Guide de Contribution

### Pour Commencer

1. lire le README ;
2. installer le projet en local ;
3. explorer l'arborescence `src/app/` ;
4. comprendre les roles et permissions ;
5. choisir une issue ;
6. creer une branche dediee.

### Branches

- `main` : version stable ;
- `develop` : integration ;
- `feature/*` : nouvelle fonctionnalite ;
- `bugfix/*` : correction ;
- `docs/*` : documentation ;
- `chore/*` : maintenance.

### Commits

Le projet suit les commits conventionnels :

- `feat:` nouvelle fonctionnalite ;
- `fix:` correction de bug ;
- `docs:` documentation ;
- `style:` formatage ;
- `refactor:` restructuration ;
- `test:` tests ;
- `chore:` maintenance.

### Pull Request

1. creer une branche depuis `develop` ;
2. developper la fonctionnalite ;
3. ajouter ou mettre a jour les tests ;
4. verifier `lint`, `typecheck` et `test` ;
5. mettre a jour la documentation si necessaire ;
6. ouvrir une Pull Request vers `develop` ;
7. traiter les retours de review ;
8. merger apres validation.

### Revue de Code

Points verifies :

- besoin fonctionnel respecte ;
- composants bien places dans l'arborescence ;
- Route Handlers proteges si necessaire ;
- validation des donnees ;
- erreurs gerees proprement ;
- tests adaptes au risque ;
- absence de secrets ;
- lisibilite et maintenabilite.

---

## Feuille de Route

### Phase 1 : Fondations

- initialisation Next.js 15 ;
- configuration TypeScript ;
- configuration Tailwind CSS ;
- configuration Prisma ;
- schema initial de base de donnees ;
- NextAuth.js ;
- middleware de protection ;
- layouts principaux ;
- premiers composants UI.

### Phase 2 : MVP

- catalogue produits ;
- panier ;
- checkout ;
- paiement Stripe ;
- espace client ;
- administration produits ;
- terminal caissier simple ;
- seeds de demonstration.

### Phase 3 : Industrialisation

- tests E2E ;
- CI/CD ;
- observabilite ;
- exports ;
- optimisation images ;
- gestion avancee des stocks ;
- webhooks robustes.

### Phase 4 : Fonctionnalites Avancees

- promotions complexes ;
- recommandations produits ;
- notifications temps reel ;
- rapports avances ;
- audit log ;
- multi-boutique si besoin metier confirme.

---

## Resolution de Problemes

### `npm install` echoue

- verifier la version de Node.js ;
- supprimer `node_modules` et le lockfile uniquement si l'equipe valide cette action ;
- relancer l'installation ;
- verifier les dependances natives eventuelles.

### La base de donnees ne repond pas

- verifier `DATABASE_URL` ;
- verifier que PostgreSQL est demarre ;
- tester la connexion avec un client SQL ;
- relancer les migrations.

### Authentification instable

- verifier `NEXTAUTH_URL` ;
- verifier `NEXTAUTH_SECRET` ;
- verifier les cookies en environnement local ;
- verifier le middleware de protection.

### Paiement Stripe en erreur

- verifier la cle publique ;
- verifier la cle secrete ;
- verifier le webhook secret ;
- utiliser les cartes de test Stripe ;
- consulter les evenements dans le dashboard Stripe.

---

## Ressources

- Documentation Next.js : https://nextjs.org/docs
- Documentation React : https://react.dev
- Documentation Auth.js / NextAuth.js : https://authjs.dev
- Documentation Prisma : https://www.prisma.io/docs
- Documentation PostgreSQL : https://www.postgresql.org/docs
- Documentation Stripe : https://docs.stripe.com
- Documentation TanStack Query : https://tanstack.com/query/latest
- Documentation Zustand : https://zustand.docs.pmnd.rs
- Documentation Tailwind CSS : https://tailwindcss.com/docs
- Documentation Playwright : https://playwright.dev/docs/intro

---

## Licence

Voir le fichier `LICENSE`.

---

## Equipe

Projet developpe par l'equipe CashCoin.