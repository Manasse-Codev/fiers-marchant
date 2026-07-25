# 📁 Architecture des Dossiers et Fichiers - CashCoin (Next.js 15)

> **Migration** : React + Vite → **Next.js 15 (App Router)**
> Backend NestJS inchangé — seul le dossier `client/` est migré vers `web/`

---

## Arborescence Complète du Projet

```
cashcoin/
│
├── 📄 README.md
├── 📄 LICENSE
├── 📄 .gitignore
├── 📄 .editorconfig
├── 📄 .env.example
├── 📄 docker-compose.yml
├── 📄 docker-compose.prod.yml
├── 📄 package.json                    # Scripts racine (monorepo avec workspaces npm)
│
├── 📁 server/                         # APPLICATION BACKEND NESTJS (inchangé)
│   └── ... (voir architecture originale)
│
├── 📁 web/                            # APPLICATION FRONTEND NEXT.JS 15
│   ├── 📄 package.json
│   ├── 📄 tsconfig.json
│   ├── 📄 next.config.ts              # Configuration Next.js
│   ├── 📄 middleware.ts               # Middleware auth/redirections global
│   ├── 📄 .env.local                  # Variables d'environnement (non versionné)
│   ├── 📄 .env.example
│   ├── 📄 Dockerfile
│   ├── 📄 .dockerignore
│   │
│   ├── 📁 public/                     # FICHIERS STATIQUES PUBLICS
│   │   ├── 📄 favicon.ico
│   │   ├── 📄 manifest.json
│   │   ├── 📄 robots.txt
│   │   └── 📁 assets/
│   │       ├── 📁 images/
│   │       │   ├── 📄 logo.png
│   │       │   ├── 📄 hero-bg.jpg
│   │       │   └── 📄 placeholder-product.png
│   │       └── 📁 fonts/
│   │
│   └── 📁 src/                        # CODE SOURCE PRINCIPAL
│       │
│       ├── 📁 app/                    # APP ROUTER - TOUTES LES ROUTES
│       │   │
│       │   ├── 📄 layout.tsx          # Layout racine (html, body, providers)
│       │   ├── 📄 page.tsx            # Page d'accueil "/" → redirige vers /shop
│       │   ├── 📄 error.tsx           # Page d'erreur globale
│       │   ├── 📄 not-found.tsx       # Page 404 globale
│       │   ├── 📄 loading.tsx         # Skeleton chargement global
│       │   ├── 📄 globals.css         # Styles globaux
│       │   │
│       │   ├── 📁 (auth)/             # ROUTE GROUP - Auth (layout partagé)
│       │   │   ├── 📄 layout.tsx      # AuthLayout (centré, sans navbar)
│       │   │   ├── 📁 login/
│       │   │   │   └── 📄 page.tsx    # /login
│       │   │   ├── 📁 register/
│       │   │   │   └── 📄 page.tsx    # /register
│       │   │   ├── 📁 forgot-password/
│       │   │   │   └── 📄 page.tsx    # /forgot-password
│       │   │   └── 📁 reset-password/
│       │   │       └── 📄 page.tsx    # /reset-password?token=xxx
│       │   │
│       │   ├── 📁 (shop)/             # ROUTE GROUP - Boutique publique
│       │   │   ├── 📄 layout.tsx      # ShopLayout (Navbar + Footer)
│       │   │   ├── 📁 shop/
│       │   │   │   └── 📄 page.tsx    # /shop → HomePage
│       │   │   ├── 📁 catalog/
│       │   │   │   ├── 📄 page.tsx    # /catalog → liste produits
│       │   │   │   └── 📄 loading.tsx # Skeleton catalogue
│       │   │   ├── 📁 products/
│       │   │   │   └── 📁 [slug]/
│       │   │   │       ├── 📄 page.tsx      # /products/[slug] → détail produit
│       │   │   │       └── 📄 loading.tsx
│       │   │   ├── 📁 cart/
│       │   │   │   └── 📄 page.tsx    # /cart
│       │   │   ├── 📁 checkout/
│       │   │   │   └── 📄 page.tsx    # /checkout (protégé CLIENT)
│       │   │   └── 📁 order-confirmation/
│       │   │       └── 📄 page.tsx    # /order-confirmation?orderId=xxx
│       │   │
│       │   ├── 📁 (account)/          # ROUTE GROUP - Compte client (protégé)
│       │   │   ├── 📄 layout.tsx      # AccountLayout (sidebar compte)
│       │   │   └── 📁 account/
│       │   │       ├── 📁 profile/
│       │   │       │   └── 📄 page.tsx    # /account/profile
│       │   │       ├── 📁 orders/
│       │   │       │   ├── 📄 page.tsx    # /account/orders
│       │   │       │   └── 📁 [id]/
│       │   │       │       └── 📄 page.tsx # /account/orders/[id]
│       │   │       ├── 📁 addresses/
│       │   │       │   └── 📄 page.tsx    # /account/addresses
│       │   │       └── 📁 wishlist/
│       │   │           └── 📄 page.tsx    # /account/wishlist
│       │   │
│       │   ├── 📁 (admin)/            # ROUTE GROUP - Admin (protégé ADMIN)
│       │   │   ├── 📄 layout.tsx      # AdminLayout (sidebar + header admin)
│       │   │   └── 📁 admin/
│       │   │       ├── 📄 page.tsx             # /admin → Dashboard
│       │   │       ├── 📄 loading.tsx
│       │   │       ├── 📁 products/
│       │   │       │   ├── 📄 page.tsx          # /admin/products
│       │   │       │   ├── 📁 new/
│       │   │       │   │   └── 📄 page.tsx      # /admin/products/new
│       │   │       │   └── 📁 [id]/
│       │   │       │       ├── 📄 page.tsx      # /admin/products/[id]
│       │   │       │       └── 📁 edit/
│       │   │       │           └── 📄 page.tsx  # /admin/products/[id]/edit
│       │   │       ├── 📁 users/
│       │   │       │   ├── 📄 page.tsx          # /admin/users
│       │   │       │   ├── 📁 new/
│       │   │       │   │   └── 📄 page.tsx      # /admin/users/new
│       │   │       │   └── 📁 [id]/
│       │   │       │       └── 📄 page.tsx      # /admin/users/[id]
│       │   │       ├── 📁 orders/
│       │   │       │   ├── 📄 page.tsx          # /admin/orders
│       │   │       │   └── 📁 [id]/
│       │   │       │       └── 📄 page.tsx      # /admin/orders/[id]
│       │   │       ├── 📁 reports/
│       │   │       │   └── 📄 page.tsx          # /admin/reports
│       │   │       └── 📁 settings/
│       │   │           └── 📄 page.tsx          # /admin/settings
│       │   │
│       │   ├── 📁 (cashier)/          # ROUTE GROUP - Caissier (protégé CASHIER)
│       │   │   ├── 📄 layout.tsx      # CashierLayout
│       │   │   └── 📁 cashier/
│       │   │       ├── 📄 page.tsx           # /cashier → POS
│       │   │       ├── 📁 transactions/
│       │   │       │   └── 📄 page.tsx       # /cashier/transactions
│       │   │       └── 📁 daily-report/
│       │   │           └── 📄 page.tsx       # /cashier/daily-report
│       │   │
│       │   └── 📁 api/                # NEXT.JS API ROUTES (BFF optionnel)
│       │       ├── 📁 auth/
│       │       │   └── 📁 [...nextauth]/
│       │       │       └── 📄 route.ts     # NextAuth.js handler
│       │       ├── 📁 revalidate/
│       │       │   └── 📄 route.ts         # Revalidation ISR on-demand
│       │       └── 📁 upload/
│       │           └── 📄 route.ts         # Proxy upload vers le backend
│       │
│       ├── 📁 components/             # COMPOSANTS RÉUTILISABLES
│       │   │
│       │   ├── 📁 ui/                 # Composants UI atomiques
│       │   │   ├── 📁 button/
│       │   │   │   ├── 📄 button.tsx
│       │   │   │   └── 📄 button.types.ts
│       │   │   ├── 📁 modal/
│       │   │   │   └── 📄 modal.tsx
│       │   │   ├── 📁 table/
│       │   │   │   └── 📄 table.tsx
│       │   │   ├── 📁 card/
│       │   │   ├── 📁 input/
│       │   │   ├── 📁 select/
│       │   │   ├── 📁 badge/
│       │   │   ├── 📁 avatar/
│       │   │   ├── 📁 spinner/
│       │   │   ├── 📁 alert/
│       │   │   ├── 📁 pagination/
│       │   │   ├── 📁 breadcrumb/
│       │   │   ├── 📁 tooltip/
│       │   │   ├── 📁 dropdown/
│       │   │   └── 📁 search-bar/
│       │   │
│       │   ├── 📁 layout/             # Composants de mise en page
│       │   │   ├── 📄 admin-sidebar.tsx
│       │   │   ├── 📄 admin-header.tsx
│       │   │   ├── 📄 cashier-header.tsx
│       │   │   ├── 📄 navbar.tsx          # Navbar boutique (Server Component)
│       │   │   ├── 📄 footer.tsx          # Footer (Server Component)
│       │   │   └── 📄 account-sidebar.tsx
│       │   │
│       │   ├── 📁 features/           # Composants métier spécifiques
│       │   │   ├── 📁 products/
│       │   │   │   ├── 📄 product-card.tsx        # Server Component
│       │   │   │   ├── 📄 product-grid.tsx         # Server Component
│       │   │   │   ├── 📄 product-filters.tsx      # 'use client'
│       │   │   │   ├── 📄 product-form.tsx         # 'use client'
│       │   │   │   └── 📄 product-image-upload.tsx # 'use client'
│       │   │   ├── 📁 cart/
│       │   │   │   ├── 📄 cart-drawer.tsx          # 'use client'
│       │   │   │   ├── 📄 cart-item.tsx             # 'use client'
│       │   │   │   └── 📄 cart-summary.tsx
│       │   │   ├── 📁 checkout/
│       │   │   │   ├── 📄 checkout-form.tsx        # 'use client'
│       │   │   │   └── 📄 stripe-payment.tsx       # 'use client'
│       │   │   ├── 📁 orders/
│       │   │   │   ├── 📄 order-list.tsx
│       │   │   │   ├── 📄 order-detail.tsx
│       │   │   │   └── 📄 order-status-badge.tsx
│       │   │   ├── 📁 dashboard/
│       │   │   │   ├── 📄 stats-card.tsx
│       │   │   │   ├── 📄 revenue-chart.tsx        # 'use client'
│       │   │   │   └── 📄 recent-orders-table.tsx
│       │   │   ├── 📁 auth/
│       │   │   │   ├── 📄 login-form.tsx           # 'use client'
│       │   │   │   ├── 📄 register-form.tsx        # 'use client'
│       │   │   │   └── 📄 forgot-password-form.tsx # 'use client'
│       │   │   └── 📁 pos/
│       │   │       ├── 📄 pos-terminal.tsx         # 'use client'
│       │   │       └── 📄 pos-cart.tsx             # 'use client'
│       │   │
│       │   └── 📁 providers/          # Context Providers ('use client')
│       │       ├── 📄 query-provider.tsx   # TanStack Query
│       │       ├── 📄 auth-provider.tsx    # NextAuth SessionProvider
│       │       ├── 📄 theme-provider.tsx   # Thème dark/light
│       │       └── 📄 toast-provider.tsx   # Notifications toast
│       │
│       ├── 📁 lib/                    # COUCHE SERVICES & LOGIQUE MÉTIER
│       │   │
│       │   ├── 📁 api/                # Clients API (fetch vers NestJS)
│       │   │   ├── 📄 client.ts           # fetch() configuré (baseURL, headers)
│       │   │   ├── 📄 auth.api.ts
│       │   │   ├── 📄 users.api.ts
│       │   │   ├── 📄 products.api.ts
│       │   │   ├── 📄 cart.api.ts
│       │   │   ├── 📄 orders.api.ts
│       │   │   ├── 📄 payment.api.ts
│       │   │   ├── 📄 dashboard.api.ts
│       │   │   ├── 📄 reviews.api.ts
│       │   │   └── 📄 upload.api.ts
│       │   │
│       │   ├── 📁 queries/            # TanStack Query hooks
│       │   │   ├── 📄 use-products.ts
│       │   │   ├── 📄 use-orders.ts
│       │   │   ├── 📄 use-cart.ts
│       │   │   ├── 📄 use-users.ts
│       │   │   ├── 📄 use-dashboard.ts
│       │   │   └── 📄 use-reviews.ts
│       │   │
│       │   ├── 📁 store/              # État global Zustand (remplace Redux)
│       │   │   ├── 📄 cart.store.ts       # Panier (persisté localStorage)
│       │   │   ├── 📄 ui.store.ts         # État UI (sidebar, modals)
│       │   │   └── 📄 wishlist.store.ts   # Wishlist (persisté localStorage)
│       │   │
│       │   ├── 📁 auth/               # Authentification NextAuth.js v5
│       │   │   ├── 📄 auth.config.ts      # Configuration NextAuth providers
│       │   │   ├── 📄 auth.ts             # Instance auth exportée
│       │   │   └── 📄 session.ts          # Helpers session (getServerSession)
│       │   │
│       │   └── 📁 utils/              # Utilitaires
│       │       ├── 📄 format-currency.ts
│       │       ├── 📄 format-date.ts
│       │       ├── 📄 validators.ts
│       │       ├── 📄 constants.ts
│       │       └── 📄 helpers.ts
│       │
│       ├── 📁 types/                  # TYPES TYPESCRIPT PARTAGÉS
│       │   ├── 📄 user.types.ts
│       │   ├── 📄 product.types.ts
│       │   ├── 📄 order.types.ts
│       │   ├── 📄 cart.types.ts
│       │   ├── 📄 payment.types.ts
│       │   ├── 📄 api.types.ts
│       │   ├── 📄 next-auth.d.ts      # Extension types NextAuth
│       │   └── 📄 common.types.ts
│       │
│       └── 📁 config/                 # CONFIGURATION FRONTEND
│           ├── 📄 navigation.config.ts  # Menus de navigation
│           └── 📄 site.config.ts        # Métadonnées SEO globales
│
├── 📁 docs/
│   ├── 📄 API.md
│   ├── 📄 DATABASE.md
│   ├── 📄 DEPLOYMENT.md
│   └── 📄 CONTRIBUTING.md
│
├── 📁 scripts/
│   ├── 📄 seed.sh
│   ├── 📄 backup-db.sh
│   └── 📄 deploy.sh
│
└── 📁 .github/
    ├── 📁 workflows/
    │   ├── 📄 ci.yml
    │   ├── 📄 deploy-staging.yml
    │   └── 📄 deploy-prod.yml
    └── 📄 PULL_REQUEST_TEMPLATE.md
```

---

## 🔑 Décisions Clés de Migration

### 1. App Router & Route Groups
Next.js 15 utilise l'**App Router** avec des **route groups** `(nom)` pour partager des layouts sans affecter l'URL :

| Route Group | URL générées | Layout appliqué |
|------------|-------------|-----------------|
| `(auth)` | `/login`, `/register` | `AuthLayout` centré, sans Navbar |
| `(shop)` | `/shop`, `/catalog`, `/products/[slug]` | `ShopLayout` avec Navbar + Footer |
| `(account)` | `/account/*` | `AccountLayout` avec sidebar compte |
| `(admin)` | `/admin/*` | `AdminLayout` avec sidebar admin |
| `(cashier)` | `/cashier/*` | `CashierLayout` |

### 2. Server Components vs Client Components

| Type | Usage | Marqueur |
|------|-------|----------|
| **Server Component** | Data fetching, SEO, rendu statique | *(défaut — aucun marqueur)* |
| **Client Component** | Interactivité, hooks, événements | `'use client'` en tête de fichier |

```
Règle : "Server by default, Client when needed"

Server Components → product-card, product-grid, order-list, stats-card, navbar, footer
Client Components → product-filters, cart-drawer, checkout-form, stripe-payment, login-form, pos-terminal
```

### 3. Gestion d'état : Redux → Zustand
Redux Toolkit est remplacé par **Zustand** plus léger et compatible SSR :

```typescript
// lib/store/cart.store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(persist(
  (set, get) => ({
    items: [],
    addItem: (product) => set((state) => ({ ... })),
    removeItem: (id) => set((state) => ({ ... })),
    total: () => get().items.reduce(...)
  }),
  { name: 'cart-storage' }
))
```

### 4. Data Fetching : Axios → fetch natif + React Query

```typescript
// Server Component → fetch() natif avec cache Next.js
async function ProductsPage() {
  const products = await fetch(`${API_URL}/products`, {
    next: { revalidate: 60 } // ISR : revalidation toutes les 60s
  }).then(r => r.json())
  return <ProductGrid products={products} />
}

// Client Component → TanStack Query (React Query v5)
'use client'
function ProductFilters() {
  const { data } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => productsApi.getAll(filters)
  })
}
```

### 5. Authentification : JWT manuel → NextAuth.js v5
**NextAuth.js v5** gère les sessions, les tokens JWT et les redirections depuis le middleware :

```typescript
// middleware.ts (racine de src/) — protège les routes automatiquement
export { auth as middleware } from '@/lib/auth/auth'

export const config = {
  matcher: ['/admin/:path*', '/cashier/:path*', '/account/:path*', '/checkout']
}
```

---

## 🛡️ Matrice d'Accès aux Routes

| Route | Admin | Caissier | Client | Public |
|-------|-------|----------|--------|--------|
| `/login`, `/register` | ✅ | ✅ | ✅ | ✅ |
| `/shop`, `/catalog`, `/products/*` | ✅ | ✅ | ✅ | ✅ |
| `/cart` | ✅ | ✅ | ✅ | ✅ |
| `/checkout` | ✅ | ✅ | ✅ | ❌ |
| `/account/*` | ✅ | ✅ | ✅ | ❌ |
| `/admin/*` | ✅ | ❌ | ❌ | ❌ |
| `/cashier/*` | ✅ | ✅ | ❌ | ❌ |
| `POST /api/v1/products` (NestJS) | ✅ | ❌ | ❌ | ❌ |

---

## 📂 Description des Dossiers Clés

### 🗂️ `src/app/` — App Router
Le cœur de Next.js 15. Chaque dossier = une route. Fichiers spéciaux :

| Fichier | Rôle |
|---------|------|
| `layout.tsx` | Layout partagé pour le segment et ses enfants |
| `page.tsx` | UI unique d'une route (rendu public) |
| `loading.tsx` | UI de chargement (Suspense automatique) |
| `error.tsx` | UI d'erreur (Error Boundary automatique) |
| `not-found.tsx` | UI 404 |
| `route.ts` | API Route handler (GET, POST, etc.) |

### 🧩 `src/components/` — Composants

| Dossier | Contenu |
|---------|---------|
| `ui/` | Composants atomiques génériques (Button, Modal, Table…) |
| `layout/` | Navbar, Footer, Sidebars |
| `features/` | Composants métier par domaine (products, cart, orders…) |
| `providers/` | Wrappers de contexte (QueryProvider, AuthProvider…) |

### 🔧 `src/lib/` — Logique Applicative

| Dossier | Contenu |
|---------|---------|
| `api/` | Fonctions fetch vers l'API NestJS |
| `queries/` | Hooks TanStack Query (useQuery, useMutation) |
| `store/` | Stores Zustand (panier, UI, wishlist) |
| `auth/` | Configuration et helpers NextAuth.js v5 |
| `utils/` | Fonctions utilitaires pures |

---


## 🔄 Flux de Données - Création d'une Commande

```
BOUTIQUE (Next.js)
  Client → /cart → CartPage (Server Component + cartStore Zustand)
    ↓
  Bouton "Commander" → /checkout → CheckoutPage
    ├── checkout-form.tsx ('use client')
    └── stripe-payment.tsx ('use client')
          ↓
    fetch POST /api/v1/payment  →  NestJS PaymentController
          ↓
    Stripe API → client_secret
          ↓
    Stripe Elements → confirmPayment()
          ↓
    fetch POST /api/v1/orders  →  NestJS OrdersController
          ↓
    → OrdersService (DB + Email confirmation)
    → redirect vers /order-confirmation?orderId=xxx

ADMIN (Next.js)
  /admin → DashboardPage (Server Component)
    └── fetch GET /api/v1/dashboard (avec next: { revalidate: 30 })
          → revenue-chart.tsx ('use client', polling React Query)
```

---

## 📦 Stack Technique Frontend

| Catégorie | Ancienne stack | Nouvelle stack |
|-----------|---------------|----------------|
| Framework | React 18 + Vite | **Next.js 15 (App Router)** |
| Routage | React Router v6 | **App Router natif** |
| Data fetching | Axios | **fetch() natif + TanStack Query v5** |
| État global | Redux Toolkit | **Zustand v4** |
| Auth | JWT manuel (localStorage) | **NextAuth.js v5** |
| Styling | Tailwind CSS | **Tailwind CSS v3** |
| TypeScript | ✅ | ✅ |
| Tests | Vitest + RTL | **Jest + RTL + Playwright (E2E)** |

---

## 🎯 Bonnes Pratiques de Nommage

### Fichiers Next.js App Router
- **Fichiers spéciaux** : `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` (minuscule, imposé par Next.js)
- **Route dynamique** : `[id]`, `[slug]` (dossier entre crochets)
- **Route group** : `(nom)` (dossier entre parenthèses, n'affecte pas l'URL)
- **Catch-all** : `[...slug]` ou `[[...slug]]` pour routes optionnelles
- **API Route** : `route.ts` (obligatoire pour les handlers API)

### Composants et fichiers
- **Composants** : `product-card.tsx` (kebab-case recommandé avec App Router)
- **Hooks custom** : `use-products.ts` (kebab-case)
- **Stores Zustand** : `cart.store.ts`
- **Clients API** : `products.api.ts`
- **Types** : `product.types.ts`

---

## 📝 Notes Importantes

1. **`'use client'`** doit être placé en **première ligne** des composants interactifs
2. **Les cookies & headers** ne sont accessibles que côté serveur via `next/headers`
3. **`middleware.ts`** doit être à la racine de `src/` (ou racine projet si pas de `src/`)
4. **`.env.local`** pour les variables privées, **`NEXT_PUBLIC_`** pour les variables exposées côté client
5. **Les dossiers `node_modules/`, `.next/`, `uploads/`, `logs/`** ne sont pas versionnés
6. **ISR** via `{ next: { revalidate: N } }` dans `fetch()` ou `export const revalidate = N` dans la page
7. **Les Server Actions** (`'use server'`) peuvent remplacer certains API Routes pour les mutations de formulaires

