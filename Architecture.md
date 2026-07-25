# Architecture - CashCoin

Ce document decrit l'architecture cible de CashCoin avec une application unifiee **Next.js 15 App Router**.

CashCoin regroupe dans un seul projet :

- les pages utilisateur ;
- les layouts par role ;
- les Route Handlers API ;
- la logique metier ;
- l'acces base de donnees ;
- l'authentification ;
- les composants reutilisables ;
- les tests et scripts d'exploitation.

---

## Decision d'Architecture

L'application suit une architecture unifiee autour de Next.js :

```text
Navigateur
  -> Pages et composants Next.js
  -> Route Handlers src/app/api
  -> Services metier src/lib/services
  -> Prisma src/lib/db
  -> PostgreSQL
```

Il n'y a pas de serveur applicatif separe. Les endpoints applicatifs sont portes par les fichiers `route.ts` sous `src/app/api/`.

---

## Stack Technique

| Categorie | Technologie | Role |
|-----------|-------------|------|
| Framework | Next.js 15 App Router | Routage, rendu serveur, pages, API |
| UI | React 19 | Composants d'interface |
| Langage | TypeScript 5.x | Typage statique |
| Styles | Tailwind CSS 3.x | Styles utilitaires |
| Authentification | NextAuth.js v5 | Sessions, providers, middleware |
| Base de donnees | PostgreSQL 15+ | Donnees relationnelles |
| ORM | Prisma | Schema, migrations, client type |
| Validation | Zod | Validation des entrees et payloads |
| Requetes serveur | `fetch()` natif | Chargement dans Server Components |
| Requetes navigateur | TanStack Query v5 | Cache, mutations, synchronisation |
| Etat local partage | Zustand | Panier, wishlist, etat UI |
| Paiement | Stripe | Paiements et webhooks |
| Emails | SMTP ou fournisseur transactionnel | Notifications |
| Tests unitaires | Jest | Services, validateurs, helpers |
| Tests composants | React Testing Library | Composants interactifs |
| Tests E2E | Playwright | Parcours critiques |
| Qualite | ESLint, Prettier | Linting et formatage |
| DevOps | Docker, GitHub Actions | Environnements et CI/CD |

---

## Arborescence Complete

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

## Responsabilites des Dossiers

### `src/app/`

`src/app/` contient uniquement ce qui concerne le routage Next.js :

- pages ;
- layouts ;
- loading states ;
- error boundaries ;
- Route Handlers ;
- styles globaux.

Une page ne doit pas contenir de logique metier lourde. Elle compose des composants et appelle des fonctions de lecture adaptees a son contexte.

### `src/app/api/`

`src/app/api/` contient les Route Handlers.

Responsabilites normales d'un Route Handler :

1. verifier la methode HTTP ;
2. verifier la session et le role si la route est protegee ;
3. parser et valider l'entree ;
4. appeler un service de `src/lib/services/` ;
5. retourner une reponse JSON coherente ;
6. traduire les erreurs metier en codes HTTP.

Un Route Handler ne doit pas contenir directement les regles metier complexes.

### `src/lib/services/`

`src/lib/services/` contient la logique metier :

- creation de commande ;
- calcul de totaux ;
- verification de stock ;
- creation d'intention de paiement ;
- transition de statut ;
- controle de coherence entre entites.

Les services ne doivent pas dependre de React.

### `src/lib/db/`

`src/lib/db/` contient l'acces aux donnees :

- client Prisma ;
- repositories si la logique d'acces devient repetitive ;
- helpers de transaction.

La logique SQL ou ORM ne doit pas etre dispersee dans les composants.

### `src/components/`

`src/components/` contient l'interface reutilisable.

- `ui/` : composants atomiques sans logique metier ;
- `layout/` : navigation, sidebar, headers, footer ;
- `features/` : composants lies a un domaine metier ;
- `providers/` : providers React utilises dans le layout racine.

### `src/lib/api/`

`src/lib/api/` contient les fonctions appelees depuis le navigateur pour consommer les Route Handlers.

Ces fonctions servent a centraliser :

- les URLs ;
- la serialisation ;
- la gestion des erreurs ;
- les types de reponse.

### `src/lib/queries/`

`src/lib/queries/` contient les hooks TanStack Query.

Ces hooks ne remplacent pas les services metier. Ils orchestrent les appels cote navigateur, le cache, les mutations et l'invalidation.

### `src/lib/store/`

`src/lib/store/` contient les stores Zustand pour les etats navigateur :

- panier ;
- wishlist ;
- etat UI local.

Les donnees critiques doivent rester persistantes en base de donnees, pas uniquement dans Zustand.

### `src/types/`

`src/types/` contient les types partages par plusieurs modules.

Les types trop locaux restent pres de leur composant ou service.

### `src/config/`

`src/config/` contient les configurations statiques :

- navigation ;
- metadonnees du site ;
- options d'affichage ;
- constantes publiques non sensibles.

---

## Route Groups

| Route Group | Routes | Layout | Acces |
|-------------|--------|--------|-------|
| `(auth)` | `/login`, `/register`, `/forgot-password`, `/reset-password` | AuthLayout | Public |
| `(shop)` | `/shop`, `/catalog`, `/products/[slug]`, `/cart`, `/checkout` | ShopLayout | Public ou client selon la page |
| `(account)` | `/account/*` | AccountLayout | Session requise |
| `(admin)` | `/admin/*` | AdminLayout | Role `admin` |
| `(cashier)` | `/cashier/*` | CashierLayout | Roles `admin`, `cashier` |

Les Route Groups ne changent pas l'URL publique. Ils servent a organiser les layouts et les responsabilites.

---

## Matrice d'Acces

| Route | Admin | Caissier | Client | Public |
|-------|-------|----------|--------|--------|
| `/login`, `/register` | Oui | Oui | Oui | Oui |
| `/shop`, `/catalog`, `/products/*` | Oui | Oui | Oui | Oui |
| `/cart` | Oui | Oui | Oui | Oui |
| `/checkout` | Oui | Oui | Oui | Non |
| `/account/*` | Oui | Non | Oui | Non |
| `/admin/*` | Oui | Non | Non | Non |
| `/cashier/*` | Oui | Oui | Non | Non |
| `POST /api/products` | Oui | Non | Non | Non |
| `POST /api/orders` | Oui | Oui | Oui | Non |
| `GET /api/dashboard` | Oui | Non | Non | Non |
| `POST /api/payment` | Oui | Oui | Oui | Non |
| `POST /api/payment/webhook` | Systeme | Systeme | Systeme | Systeme |

Pour les webhooks, l'acces n'est pas base sur une session utilisateur. Il est base sur la verification cryptographique du fournisseur externe.

---

## Route Handlers API

| Domaine | Fichier | Methodes | Responsabilite |
|---------|---------|----------|----------------|
| Auth | `src/app/api/auth/[...nextauth]/route.ts` | `GET`, `POST` | Gestion NextAuth.js |
| Produits | `src/app/api/products/route.ts` | `GET`, `POST` | Liste et creation |
| Produit detail | `src/app/api/products/[id]/route.ts` | `GET`, `PATCH`, `DELETE` | Detail et modifications |
| Commandes | `src/app/api/orders/route.ts` | `GET`, `POST` | Liste et creation |
| Commande detail | `src/app/api/orders/[id]/route.ts` | `GET`, `PATCH` | Detail et statut |
| Utilisateurs | `src/app/api/users/route.ts` | `GET`, `POST` | Administration utilisateurs |
| Utilisateur detail | `src/app/api/users/[id]/route.ts` | `GET`, `PATCH`, `DELETE` | Detail et statut |
| Paiement | `src/app/api/payment/route.ts` | `POST` | Intention de paiement |
| Webhook paiement | `src/app/api/payment/webhook/route.ts` | `POST` | Synchronisation fournisseur |
| Dashboard | `src/app/api/dashboard/route.ts` | `GET` | Statistiques |
| Upload | `src/app/api/upload/route.ts` | `POST` | Upload controle |
| Revalidation | `src/app/api/revalidate/route.ts` | `POST` | Revalidation cache |

Format de reponse standard :

```json
{
  "success": true,
  "data": {},
  "message": "Operation reussie"
}
```

Format d'erreur standard :

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

---

## Server Components et Client Components

Par defaut, un composant est rendu cote serveur. Il ne devient Client Component que s'il utilise :

- `useState` ;
- `useEffect` ;
- des gestionnaires d'evenements ;
- Zustand ;
- TanStack Query ;
- les APIs navigateur ;
- Stripe Elements ;
- un formulaire interactif.

| Type | Exemples | Raison |
|------|----------|--------|
| Server Component | `product-card.tsx`, `product-grid.tsx`, `navbar.tsx`, `footer.tsx` | Rendu stable, SEO, donnees serveur |
| Client Component | `product-filters.tsx`, `cart-drawer.tsx`, `checkout-form.tsx`, `stripe-payment.tsx`, `pos-terminal.tsx` | Interactivite navigateur |

Regle pratique : si le composant peut etre rendu sans etat navigateur, il reste cote serveur.

---

## Flux de Donnees

### Consultation du Catalogue

```text
/catalog
  -> page.tsx
  -> products.service.ts
  -> prisma.ts
  -> PostgreSQL
  -> product-grid.tsx
  -> product-filters.tsx si filtres interactifs
```

### Creation d'une Commande

```text
/cart
  -> cart.store.ts
  -> /checkout
  -> checkout-form.tsx
  -> POST /api/payment
  -> payments.service.ts
  -> Stripe
  -> POST /api/orders
  -> orders.service.ts
  -> Prisma transaction
  -> Email de confirmation
  -> /order-confirmation?orderId=xxx
```

### Terminal Caissier

```text
/cashier
  -> pos-terminal.tsx
  -> recherche produit via /api/products
  -> panier local POS
  -> POST /api/orders
  -> orders.service.ts
  -> paiement ou validation caisse
  -> ticket ou confirmation
```

### Dashboard Administrateur

```text
/admin
  -> page.tsx
  -> GET /api/dashboard
  -> dashboard service
  -> Prisma aggregations
  -> stats-card.tsx
  -> revenue-chart.tsx
```

### Webhook Paiement

```text
Fournisseur paiement
  -> POST /api/payment/webhook
  -> verification signature
  -> payments.service.ts
  -> mise a jour Payment
  -> mise a jour Order
  -> operation idempotente
```

---

## Base de Donnees

### Entites Principales

| Entite | Role |
|--------|------|
| `User` | Compte utilisateur et role |
| `Product` | Catalogue et stock |
| `Category` | Organisation du catalogue |
| `Order` | Commande |
| `OrderItem` | Lignes de commande |
| `Payment` | Etat de paiement |
| `Address` | Adresse client |
| `Review` | Avis produit |
| `Promotion` | Remises et codes promo |

### Regles Importantes

- Les prix d'une ligne de commande sont figes au moment de l'achat.
- Le stock doit etre mis a jour dans une transaction.
- Un webhook de paiement doit etre idempotent.
- Une commande client ne doit etre visible que par son proprietaire, sauf role autorise.
- Une suppression utilisateur ou produit doit privilegier une desactivation logique si des commandes existent.

---

## Authentification et Autorisation

### Authentification

NextAuth.js gere :

- les sessions ;
- les cookies HTTP-only ;
- les providers ;
- la recuperation de session cote serveur ;
- la protection via middleware.

### Autorisation

L'autorisation est verifiee a deux niveaux :

1. dans les layouts ou pages protegees pour controler l'acces a l'interface ;
2. dans les Route Handlers pour proteger les mutations et lectures sensibles.

Ne jamais supposer qu'une page protegee suffit. Toute operation sensible doit verifier le role cote Route Handler.

---

## Variables d'Environnement

| Variable | Portee | Usage |
|----------|--------|-------|
| `NODE_ENV` | serveur | Environnement courant |
| `DATABASE_URL` | serveur | Connexion PostgreSQL |
| `NEXTAUTH_URL` | serveur | URL publique |
| `NEXTAUTH_SECRET` | serveur | Secret de session |
| `NEXT_PUBLIC_APP_URL` | navigateur | URL publique de l'application |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | navigateur | Cle publique Stripe |
| `STRIPE_SECRET_KEY` | serveur | Cle secrete Stripe |
| `STRIPE_WEBHOOK_SECRET` | serveur | Verification webhook |
| `SMTP_HOST` | serveur | Serveur email |
| `SMTP_PORT` | serveur | Port SMTP |
| `SMTP_USER` | serveur | Identifiant SMTP |
| `SMTP_PASSWORD` | serveur | Mot de passe SMTP |
| `EMAIL_FROM` | serveur | Expediteur |
| `UPLOAD_MAX_SIZE_MB` | serveur | Taille maximale upload |

Seules les variables prefixees par `NEXT_PUBLIC_` peuvent etre exposees au navigateur.

---

## Securite

### Principes

- refuser par defaut ;
- valider toutes les entrees ;
- verifier les roles dans les Route Handlers ;
- ne jamais exposer de secret cote navigateur ;
- ne jamais stocker de donnee bancaire ;
- logger sans inclure de secret ;
- rendre les webhooks idempotents ;
- limiter les uploads en taille et type MIME.

### Codes HTTP Recommandes

| Code | Cas |
|------|-----|
| `200` | Lecture ou modification reussie |
| `201` | Ressource creee |
| `400` | Requete mal formee |
| `401` | Session absente ou invalide |
| `403` | Role insuffisant |
| `404` | Ressource introuvable |
| `409` | Conflit metier |
| `422` | Donnees valides syntaxiquement mais invalides metier |
| `500` | Erreur interne |

---

## Gestion d'Etat

### Etat Serveur

L'etat persistant vit en base de donnees :

- utilisateurs ;
- produits ;
- commandes ;
- paiements ;
- adresses ;
- avis.

### Etat Navigateur

Zustand est reserve aux etats locaux :

- panier avant validation ;
- wishlist locale ;
- ouverture d'une sidebar ;
- modales ;
- preferences UI.

### Cache de Requetes

TanStack Query gere :

- les requetes declenchees cote navigateur ;
- les mutations ;
- les invalidations ;
- le polling si necessaire.

---

## Nommage

### Fichiers App Router

| Type | Convention |
|------|------------|
| Page | `page.tsx` |
| Layout | `layout.tsx` |
| Chargement | `loading.tsx` |
| Erreur | `error.tsx` |
| Route Handler | `route.ts` |
| Segment dynamique | `[id]`, `[slug]` |
| Route Group | `(admin)`, `(shop)` |

### Fichiers Applicatifs

| Type | Convention |
|------|------------|
| Composant | `product-card.tsx` |
| Hook | `use-products.ts` |
| Store | `cart.store.ts` |
| Service | `orders.service.ts` |
| Repository | `orders.repository.ts` |
| Type | `order.types.ts` |
| Config | `navigation.config.ts` |

---

## Tests

| Niveau | Cible | Outil |
|--------|-------|-------|
| Unitaire | helpers, validateurs, services purs | Jest |
| Composant | formulaires, composants UI | React Testing Library |
| Integration | Route Handlers, services, Prisma | Jest |
| E2E | login, achat, caisse, admin | Playwright |

Scenarios critiques :

- connexion ;
- refus d'acces role insuffisant ;
- creation produit admin ;
- ajout panier ;
- checkout ;
- paiement reussi ;
- webhook idempotent ;
- mise a jour stock ;
- consultation commande par proprietaire ;
- creation commande caisse.

---

## Ordre de Construction Recommande

1. initialiser Next.js, TypeScript et Tailwind CSS ;
2. ajouter Prisma et le schema minimal ;
3. configurer NextAuth.js ;
4. creer les layouts et Route Groups ;
5. creer les composants UI de base ;
6. creer le catalogue en lecture ;
7. ajouter panier et checkout ;
8. ajouter Stripe ;
9. ajouter administration produits ;
10. ajouter terminal caisse ;
11. ajouter tests critiques ;
12. ajouter CI/CD.

---

## Regles d'Evolution

- Ne pas ajouter de nouvelle couche si une fonction ou un service suffit.
- Ne pas mettre de logique metier complexe dans les composants.
- Ne pas appeler Prisma directement depuis un composant interactif.
- Ne pas dupliquer les regles de role entre plusieurs endroits sans helper partage.
- Ne pas exposer une variable secrete avec `NEXT_PUBLIC_`.
- Ne pas creer de dossier applicatif parallele sans decision d'architecture explicite.
- Toute nouvelle route protegee doit etre ajoutee a la matrice d'acces.
- Toute mutation critique doit avoir un test.
