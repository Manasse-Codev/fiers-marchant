# 📁 Architecture des Dossiers et Fichiers - CashCoin

## Arborescence Complète du Projet
ea-shop/
│
├── 📄 README.md # Documentation principale du projet
├── 📄 LICENSE # Licence MIT
├── 📄 .gitignore # Fichiers ignorés par Git
├── 📄 .editorconfig # Configuration éditeur de code
├── 📄 .env.example # Exemple de variables d'environnement
├── 📄 docker-compose.yml # Configuration Docker pour le développement
├── 📄 docker-compose.prod.yml # Configuration Docker pour la production
├── 📄 package.json # Scripts et dépendances racine
│
├── 📁 server/ # APPLICATION BACKEND NESTJS
│ ├── 📄 package.json # Dépendances backend
│ ├── 📄 tsconfig.json # Configuration TypeScript
│ ├── 📄 tsconfig.build.json # Configuration build TypeScript
│ ├── 📄 nest-cli.json # Configuration CLI NestJS
│ ├── 📄 .env # Variables d'environnement (non versionné)
│ ├── 📄 .env.example # Template variables d'environnement
│ ├── 📄 Dockerfile # Image Docker backend
│ ├── 📄 .dockerignore # Fichiers ignorés par Docker
│ │
│ ├── 📁 src/ # CODE SOURCE PRINCIPAL
│ │ ├── 📄 main.ts # Point d'entrée de l'application
│ │ ├── 📄 app.module.ts # Module racine NestJS
│ │ ├── 📄 app.controller.ts # Contrôleur racine
│ │ ├── 📄 app.service.ts # Service racine
│ │ │
│ │ ├── 📁 common/ # ÉLÉMENTS PARTAGÉS ET RÉUTILISABLES
│ │ │ ├── 📁 decorators/ # Décorateurs TypeScript personnalisés
│ │ │ │ ├── 📄 roles.decorator.ts # Décorateur pour définir les rôles requis
│ │ │ │ ├── 📄 current-user.decorator.ts # Décorateur pour extraire l'utilisateur
│ │ │ │ ├── 📄 public.decorator.ts # Décorateur pour routes publiques
│ │ │ │ └── 📄 api-paginated.decorator.ts # Décorateur pour réponses paginées
│ │ │ │
│ │ │ ├── 📁 guards/ # Guards d'authentification et autorisation
│ │ │ │ ├── 📄 jwt-auth.guard.ts # Guard vérifiant le JWT
│ │ │ │ ├── 📄 roles.guard.ts # Guard vérifiant le rôle utilisateur
│ │ │ │ ├── 📄 local-auth.guard.ts # Guard pour login/mot de passe
│ │ │ │ └── 📄 throttle.guard.ts # Guard anti brute-force
│ │ │ │
│ │ │ ├── 📁 filters/ # Filtres d'exception globaux
│ │ │ │ ├── 📄 http-exception.filter.ts # Filtre standard HTTP
│ │ │ │ ├── 📄 validation.filter.ts # Filtre pour erreurs validation
│ │ │ │ └── 📄 all-exceptions.filter.ts # Filtre catch-all
│ │ │ │
│ │ │ ├── 📁 interceptors/ # Intercepteurs de requêtes/réponses
│ │ │ │ ├── 📄 transform.interceptor.ts # Transforme les réponses
│ │ │ │ ├── 📄 logging.interceptor.ts # Log toutes les requêtes
│ │ │ │ ├── 📄 cache.interceptor.ts # Gestion du cache
│ │ │ │ └── 📄 timeout.interceptor.ts # Timeout des requêtes
│ │ │ │
│ │ │ ├── 📁 pipes/ # Pipes de validation et transformation
│ │ │ │ ├── 📄 validation.pipe.ts # Pipe validation globale
│ │ │ │ ├── 📄 parse-uuid.pipe.ts # Validation UUID
│ │ │ │ └── 📄 trim.pipe.ts # Trim des strings
│ │ │ │
│ │ │ ├── 📁 middleware/ # Middlewares Express
│ │ │ │ ├── 📄 logger.middleware.ts # Logging des requêtes
│ │ │ │ └── 📄 cors.middleware.ts # Configuration CORS
│ │ │ │
│ │ │ ├── 📁 enums/ # Énumérations partagées
│ │ │ │ ├── 📄 user-role.enum.ts # Rôles utilisateur
│ │ │ │ ├── 📄 order-status.enum.ts # Statuts de commande
│ │ │ │ └── 📄 payment-method.enum.ts # Méthodes de paiement
│ │ │ │
│ │ │ ├── 📁 interfaces/ # Interfaces TypeScript
│ │ │ │ ├── 📄 api-response.interface.ts # Format réponse standard
│ │ │ │ ├── 📄 pagination.interface.ts # Interface pagination
│ │ │ │ └── 📄 jwt-payload.interface.ts # Payload du JWT
│ │ │ │
│ │ │ └── 📁 utils/ # Fonctions utilitaires
│ │ │ ├── 📄 password.util.ts # Hashage et vérification
│ │ │ ├── 📄 slug.util.ts # Génération de slugs
│ │ │ └── 📄 date.util.ts # Formatage de dates
│ │ │
│ │ ├── 📁 config/ # CONFIGURATIONS EXTERNES
│ │ │ ├── 📄 database.config.ts # Configuration TypeORM
│ │ │ ├── 📄 jwt.config.ts # Configuration JWT
│ │ │ ├── 📄 stripe.config.ts # Configuration Stripe
│ │ │ ├── 📄 mail.config.ts # Configuration email
│ │ │ ├── 📄 redis.config.ts # Configuration Redis
│ │ │ ├── 📄 upload.config.ts # Configuration upload
│ │ │ └── 📄 app.config.ts # Configuration générale
│ │ │
│ │ ├── 📁 database/ # BASE DE DONNÉES
│ │ │ ├── 📁 migrations/ # Migrations TypeORM
│ │ │ │ ├── 📄 001-create-users.ts
│ │ │ │ ├── 📄 002-create-products.ts
│ │ │ │ ├── 📄 003-create-orders.ts
│ │ │ │ └── 📄 ...
│ │ │ │
│ │ │ └── 📁 seeds/ # Données de test
│ │ │ ├── 📄 seed.ts # Script principal de seed
│ │ │ ├── 📄 users.seed.ts # Seeds utilisateurs
│ │ │ ├── 📄 products.seed.ts # Seeds produits
│ │ │ └── 📄 orders.seed.ts # Seeds commandes
│ │ │
│ │ └── 📁 modules/ # MODULES MÉTIER (DOMAIN-DRIVEN)
│ │ │
│ │ ├── 📁 auth/ # AUTHENTIFICATION
│ │ │ ├── 📄 auth.module.ts # Module auth
│ │ │ ├── 📄 auth.controller.ts # Routes /auth/*
│ │ │ ├── 📄 auth.service.ts # Logique métier auth
│ │ │ ├── 📁 dto/ # Data Transfer Objects
│ │ │ │ ├── 📄 login.dto.ts # Validation login
│ │ │ │ ├── 📄 register.dto.ts # Validation inscription
│ │ │ │ ├── 📄 refresh-token.dto.ts # Validation refresh token
│ │ │ │ ├── 📄 forgot-password.dto.ts # Validation mot de passe oublié
│ │ │ │ └── 📄 reset-password.dto.ts # Validation reset mot de passe
│ │ │ ├── 📁 strategies/ # Stratégies Passport
│ │ │ │ ├── 📄 jwt.strategy.ts # Stratégie JWT
│ │ │ │ ├── 📄 local.strategy.ts # Stratégie locale
│ │ │ │ └── 📄 refresh.strategy.ts # Stratégie refresh token
│ │ │ └── 📁 tests/ # Tests unitaires auth
│ │ │ ├── 📄 auth.service.spec.ts
│ │ │ └── 📄 auth.controller.spec.ts
│ │ │
│ │ ├── 📁 users/ # GESTION UTILISATEURS
│ │ │ ├── 📄 users.module.ts # Module users
│ │ │ ├── 📄 users.controller.ts # Routes /users/*
│ │ │ ├── 📄 users.service.ts # Logique métier users
│ │ │ ├── 📁 entities/ # Entités TypeORM
│ │ │ │ └── 📄 user.entity.ts # Modèle User
│ │ │ ├── 📁 dto/ # DTOs utilisateurs
│ │ │ │ ├── 📄 create-user.dto.ts # Création utilisateur
│ │ │ │ ├── 📄 update-user.dto.ts # Modification utilisateur
│ │ │ │ └── 📄 user-response.dto.ts # Réponse utilisateur
│ │ │ ├── 📁 enums/ # Énumérations locales
│ │ │ │ └── 📄 user-role.enum.ts # Rôles disponibles
│ │ │ └── 📁 tests/
│ │ │ ├── 📄 users.service.spec.ts
│ │ │ └── 📄 users.controller.spec.ts
│ │ │
│ │ ├── 📁 products/ # CATALOGUE PRODUITS
│ │ │ ├── 📄 products.module.ts # Module products
│ │ │ ├── 📄 products.controller.ts # Routes /products/*
│ │ │ ├── 📄 products.service.ts # Logique métier produits
│ │ │ ├── 📁 entities/
│ │ │ │ └── 📄 product.entity.ts # Modèle Product
│ │ │ ├── 📁 dto/
│ │ │ │ ├── 📄 create-product.dto.ts # Création produit
│ │ │ │ ├── 📄 update-product.dto.ts # Modification produit
│ │ │ │ ├── 📄 query-product.dto.ts # Filtres et recherche
│ │ │ │ └── 📄 product-response.dto.ts # Réponse produit
│ │ │ ├── 📁 enums/
│ │ │ │ └── 📄 product-category.enum.ts
│ │ │ └── 📁 tests/
│ │ │ ├── 📄 products.service.spec.ts
│ │ │ └── 📄 products.controller.spec.ts
│ │ │
│ │ ├── 📁 cart/ # GESTION PANIER
│ │ │ ├── 📄 cart.module.ts # Module cart
│ │ │ ├── 📄 cart.controller.ts # Routes /cart/*
│ │ │ ├── 📄 cart.service.ts # Logique métier panier
│ │ │ ├── 📁 entities/
│ │ │ │ └── 📄 cart-item.entity.ts # Modèle CartItem
│ │ │ ├── 📁 dto/
│ │ │ │ ├── 📄 add-to-cart.dto.ts # Ajout au panier
│ │ │ │ ├── 📄 update-cart.dto.ts # Modification panier
│ │ │ │ └── 📄 cart-response.dto.ts # Réponse panier
│ │ │ └── 📁 tests/
│ │ │ └── 📄 cart.service.spec.ts
│ │ │
│ │ ├── 📁 orders/ # GESTION COMMANDES
│ │ │ ├── 📄 orders.module.ts # Module orders
│ │ │ ├── 📄 orders.controller.ts # Routes /orders/*
│ │ │ ├── 📄 orders.service.ts # Logique métier commandes
│ │ │ ├── 📁 entities/
│ │ │ │ ├── 📄 order.entity.ts # Modèle Order
│ │ │ │ └── 📄 order-item.entity.ts # Modèle OrderItem
│ │ │ ├── 📁 dto/
│ │ │ │ ├── 📄 create-order.dto.ts # Création commande
│ │ │ │ ├── 📄 update-order.dto.ts # Modification statut
│ │ │ │ └── 📄 order-response.dto.ts # Réponse commande
│ │ │ ├── 📁 enums/
│ │ │ │ └── 📄 order-status.enum.ts # Statuts de commande
│ │ │ └── 📁 tests/
│ │ │ ├── 📄 orders.service.spec.ts
│ │ │ └── 📄 orders.controller.spec.ts
│ │ │
│ │ ├── 📁 payment/ # PAIEMENT STRIPE
│ │ │ ├── 📄 payment.module.ts # Module payment
│ │ │ ├── 📄 payment.controller.ts # Routes /payment/*
│ │ │ ├── 📄 payment.service.ts # Logique métier paiement
│ │ │ ├── 📁 dto/
│ │ │ │ ├── 📄 create-payment.dto.ts # Intention de paiement
│ │ │ │ └── 📄 payment-response.dto.ts # Réponse paiement
│ │ │ ├── 📁 webhooks/ # Webhooks Stripe
│ │ │ │ └── 📄 stripe.webhook.ts # Handler webhook
│ │ │ └── 📁 tests/
│ │ │ └── 📄 payment.service.spec.ts
│ │ │
│ │ ├── 📁 dashboard/ # TABLEAU DE BORD
│ │ │ ├── 📄 dashboard.module.ts # Module dashboard
│ │ │ ├── 📄 dashboard.controller.ts # Routes /dashboard/*
│ │ │ ├── 📄 dashboard.service.ts # Logique métier stats
│ │ │ ├── 📁 dto/
│ │ │ │ └── 📄 dashboard-query.dto.ts # Filtres période
│ │ │ └── 📁 tests/
│ │ │ └── 📄 dashboard.service.spec.ts
│ │ │
│ │ ├── 📁 reviews/ # AVIS CLIENTS
│ │ │ ├── 📄 reviews.module.ts # Module reviews
│ │ │ ├── 📄 reviews.controller.ts # Routes /reviews/*
│ │ │ ├── 📄 reviews.service.ts # Logique métier avis
│ │ │ ├── 📁 entities/
│ │ │ │ └── 📄 review.entity.ts # Modèle Review
│ │ │ ├── 📁 dto/
│ │ │ │ ├── 📄 create-review.dto.ts # Création avis
│ │ │ │ └── 📄 review-response.dto.ts # Réponse avis
│ │ │ └── 📁 tests/
│ │ │ └── 📄 reviews.service.spec.ts
│ │ │
│ │ └── 📁 notifications/ # NOTIFICATIONS
│ │ ├── 📄 notifications.module.ts # Module notifications
│ │ ├── 📄 notifications.service.ts # Logique envoi emails
│ │ ├── 📁 templates/ # Templates emails HTML
│ │ │ ├── 📄 welcome.hbs # Email bienvenue
│ │ │ ├── 📄 order-confirmation.hbs # Confirmation commande
│ │ │ └── 📄 reset-password.hbs # Reset mot de passe
│ │ └── 📁 tests/
│ │ └── 📄 notifications.service.spec.ts
│ │
│ ├── 📁 test/ # TESTS END-TO-END
│ │ ├── 📄 app.e2e-spec.ts # Test E2E principal
│ │ ├── 📄 auth.e2e-spec.ts # Tests auth
│ │ ├── 📄 products.e2e-spec.ts # Tests produits
│ │ └── 📄 orders.e2e-spec.ts # Tests commandes
│ │
│ ├── 📁 uploads/ # FICHIERS UPLOADÉS (non versionné)
│ │ ├── 📁 products/ # Images produits
│ │ └── 📁 avatars/ # Avatars utilisateurs
│ │
│ └── 📁 logs/ # LOGS APPLICATIFS (non versionné)
│ ├── 📄 app.log
│ └── 📄 error.log
│
├── 📁 client/ # APPLICATION FRONTEND REACT
│ ├── 📄 package.json # Dépendances frontend
│ ├── 📄 tsconfig.json # Configuration TypeScript
│ ├── 📄 vite.config.ts # Configuration Vite
│ ├── 📄 index.html # Point d'entrée HTML
│ ├── 📄 .env # Variables environnement
│ ├── 📄 .env.example # Template variables
│ ├── 📄 Dockerfile # Image Docker frontend
│ ├── 📄 .dockerignore
│ │
│ ├── 📁 public/ # FICHIERS STATIQUES PUBLICS
│ │ ├── 📄 favicon.ico
│ │ ├── 📄 manifest.json
│ │ └── 📁 assets/
│ │ ├── 📁 images/
│ │ │ ├── 📄 logo.png
│ │ │ ├── 📄 hero-bg.jpg
│ │ │ └── 📄 placeholder-product.png
│ │ └── 📁 fonts/
│ │
│ ├── 📁 src/ # CODE SOURCE REACT
│ │ ├── 📄 main.tsx # Point d'entrée React
│ │ ├── 📄 App.tsx # Composant racine
│ │ ├── 📄 vite-env.d.ts # Types Vite
│ │ │
│ │ ├── 📁 assets/ # RESSOURCES STATIQUES
│ │ │ ├── 📁 images/
│ │ │ ├── 📁 icons/
│ │ │ └── 📁 styles/
│ │ │ ├── 📄 globals.css # Styles globaux
│ │ │ ├── 📄 variables.css # Variables CSS
│ │ │ └── 📄 tailwind.css # Entrée Tailwind
│ │ │
│ │ ├── 📁 components/ # COMPOSANTS RÉUTILISABLES
│ │ │ ├── 📁 common/ # Composants génériques
│ │ │ │ ├── 📁 Button/
│ │ │ │ │ ├── 📄 Button.tsx
│ │ │ │ │ ├── 📄 Button.types.ts
│ │ │ │ │ ├── 📄 Button.styles.ts
│ │ │ │ │ └── 📄 Button.test.tsx
│ │ │ │ ├── 📁 Modal/
│ │ │ │ │ ├── 📄 Modal.tsx
│ │ │ │ │ ├── 📄 Modal.types.ts
│ │ │ │ │ └── 📄 Modal.test.tsx
│ │ │ │ ├── 📁 Table/
│ │ │ │ │ ├── 📄 Table.tsx
│ │ │ │ │ ├── 📄 Table.types.ts
│ │ │ │ │ └── 📄 Table.test.tsx
│ │ │ │ ├── 📁 Card/
│ │ │ │ ├── 📁 Input/
│ │ │ │ ├── 📁 Select/
│ │ │ │ ├── 📁 Badge/
│ │ │ │ ├── 📁 Avatar/
│ │ │ │ ├── 📁 Spinner/
│ │ │ │ ├── 📁 Alert/
│ │ │ │ ├── 📁 Pagination/
│ │ │ │ ├── 📁 Breadcrumb/
│ │ │ │ ├── 📁 Tooltip/
│ │ │ │ ├── 📁 Dropdown/
│ │ │ │ └── 📁 SearchBar/
│ │ │ │
│ │ │ ├── 📁 layout/ # Composants de mise en page
│ │ │ │ ├── 📁 AdminLayout/
│ │ │ │ │ ├── 📄 AdminLayout.tsx
│ │ │ │ │ ├── 📄 AdminSidebar.tsx
│ │ │ │ │ ├── 📄 AdminHeader.tsx
│ │ │ │ │ └── 📄 AdminFooter.tsx
│ │ │ │ ├── 📁 CashierLayout/
│ │ │ │ │ ├── 📄 CashierLayout.tsx
│ │ │ │ │ └── 📄 CashierHeader.tsx
│ │ │ │ ├── 📁 ShopLayout/
│ │ │ │ │ ├── 📄 ShopLayout.tsx
│ │ │ │ │ ├── 📄 Navbar.tsx
│ │ │ │ │ └── 📄 Footer.tsx
│ │ │ │ └── 📁 AuthLayout/
│ │ │ │ └── 📄 AuthLayout.tsx
│ │ │ │
│ │ │ ├── 📁 guards/ # Guards de routes protégées
│ │ │ │ ├── 📄 AdminGuard.tsx
│ │ │ │ ├── 📄 CashierGuard.tsx
│ │ │ │ ├── 📄 AuthGuard.tsx
│ │ │ │ └── 📄 GuestGuard.tsx
│ │ │ │
│ │ │ └── 📁 forms/ # Composants formulaire complexes
│ │ │ ├── 📁 ProductForm/
│ │ │ │ ├── 📄 ProductForm.tsx
│ │ │ │ └── 📄 ProductForm.validation.ts
│ │ │ ├── 📁 UserForm/
│ │ │ └── 📁 OrderForm/
│ │ │
│ │ ├── 📁 pages/ # PAGES DE L'APPLICATION
│ │ │ ├── 📁 auth/ # Pages authentification
│ │ │ │ ├── 📄 LoginPage.tsx
│ │ │ │ ├── 📄 RegisterPage.tsx
│ │ │ │ ├── 📄 ForgotPasswordPage.tsx
│ │ │ │ └── 📄 ResetPasswordPage.tsx
│ │ │ │
│ │ │ ├── 📁 admin/ # Pages administrateur
│ │ │ │ ├── 📄 DashboardPage.tsx
│ │ │ │ ├── 📁 products/
│ │ │ │ │ ├── 📄 ProductListPage.tsx
│ │ │ │ │ ├── 📄 ProductCreatePage.tsx
│ │ │ │ │ ├── 📄 ProductEditPage.tsx
│ │ │ │ │ └── 📄 ProductDetailPage.tsx
│ │ │ │ ├── 📁 users/
│ │ │ │ │ ├── 📄 UserListPage.tsx
│ │ │ │ │ ├── 📄 UserCreatePage.tsx
│ │ │ │ │ └── 📄 UserDetailPage.tsx
│ │ │ │ ├── 📁 orders/
│ │ │ │ │ ├── 📄 AllOrdersPage.tsx
│ │ │ │ │ └── 📄 OrderDetailPage.tsx
│ │ │ │ ├── 📁 reports/
│ │ │ │ │ └── 📄 ReportsPage.tsx
│ │ │ │ └── 📁 settings/
│ │ │ │ └── 📄 SettingsPage.tsx
│ │ │ │
│ │ │ ├── 📁 cashier/ # Pages caissier
│ │ │ │ ├── 📄 POSPage.tsx
│ │ │ │ ├── 📄 TransactionsPage.tsx
│ │ │ │ └── 📄 DailyReportPage.tsx
│ │ │ │
│ │ │ ├── 📁 shop/ # Pages boutique client
│ │ │ │ ├── 📄 HomePage.tsx
│ │ │ │ ├── 📄 CatalogPage.tsx
│ │ │ │ ├── 📄 ProductDetailPage.tsx
│ │ │ │ ├── 📄 CartPage.tsx
│ │ │ │ ├── 📄 CheckoutPage.tsx
│ │ │ │ └── 📄 OrderConfirmationPage.tsx
│ │ │ │
│ │ │ ├── 📁 account/ # Pages compte client
│ │ │ │ ├── 📄 ProfilePage.tsx
│ │ │ │ ├── 📄 MyOrdersPage.tsx
│ │ │ │ ├── 📄 OrderDetailPage.tsx
│ │ │ │ ├── 📄 AddressesPage.tsx
│ │ │ │ └── 📄 WishlistPage.tsx
│ │ │ │
│ │ │ └── 📁 errors/ # Pages d'erreur
│ │ │ ├── 📄 NotFoundPage.tsx
│ │ │ ├── 📄 ForbiddenPage.tsx
│ │ │ └── 📄 ServerErrorPage.tsx
│ │ │
│ │ ├── 📁 services/ # SERVICES API
│ │ │ ├── 📄 api.ts # Instance Axios configurée
│ │ │ ├── 📄 auth.service.ts # Service authentification
│ │ │ ├── 📄 users.service.ts # Service utilisateurs
│ │ │ ├── 📄 products.service.ts # Service produits
│ │ │ ├── 📄 cart.service.ts # Service panier
│ │ │ ├── 📄 orders.service.ts # Service commandes
│ │ │ ├── 📄 payment.service.ts # Service paiement
│ │ │ ├── 📄 dashboard.service.ts # Service statistiques
│ │ │ ├── 📄 reviews.service.ts # Service avis
│ │ │ └── 📄 upload.service.ts # Service upload
│ │ │
│ │ ├── 📁 hooks/ # CUSTOM HOOKS REACT
│ │ │ ├── 📄 useAuth.ts # Hook authentification
│ │ │ ├── 📄 useCart.ts # Hook panier
│ │ │ ├── 📄 useProducts.ts # Hook produits
│ │ │ ├── 📄 useOrders.ts # Hook commandes
│ │ │ ├── 📄 usePagination.ts # Hook pagination
│ │ │ ├── 📄 useDebounce.ts # Hook debounce
│ │ │ ├── 📄 useLocalStorage.ts # Hook localStorage
│ │ │ ├── 📄 useMediaQuery.ts # Hook responsive
│ │ │ └── 📄 useForm.ts # Hook formulaire
│ │ │
│ │ ├── 📁 context/ # CONTEXTES REACT
│ │ │ ├── 📄 AuthContext.tsx # Contexte authentification
│ │ │ ├── 📄 CartContext.tsx # Contexte panier
│ │ │ ├── 📄 ThemeContext.tsx # Contexte thème
│ │ │ └── 📄 NotificationContext.tsx # Contexte notifications
│ │ │
│ │ ├── 📁 store/ # STATE MANAGEMENT (REDUX)
│ │ │ ├── 📄 store.ts # Configuration store
│ │ │ ├── 📄 rootReducer.ts # Reducer racine
│ │ │ └── 📁 slices/ # Slices Redux
│ │ │ ├── 📄 authSlice.ts
│ │ │ ├── 📄 cartSlice.ts
│ │ │ ├── 📄 productsSlice.ts
│ │ │ ├── 📄 ordersSlice.ts
│ │ │ └── 📄 uiSlice.ts
│ │ │
│ │ ├── 📁 types/ # TYPES TYPESCRIPT
│ │ │ ├── 📄 user.types.ts # Types utilisateur
│ │ │ ├── 📄 product.types.ts # Types produit
│ │ │ ├── 📄 order.types.ts # Types commande
│ │ │ ├── 📄 cart.types.ts # Types panier
│ │ │ ├── 📄 payment.types.ts # Types paiement
│ │ │ ├── 📄 api.types.ts # Types API
│ │ │ └── 📄 common.types.ts # Types communs
│ │ │
│ │ ├── 📁 utils/ # UTILITAIRES FRONTEND
│ │ │ ├── 📄 formatCurrency.ts # Formatage monétaire
│ │ │ ├── 📄 formatDate.ts # Formatage date
│ │ │ ├── 📄 validators.ts # Validations formulaire
│ │ │ ├── 📄 constants.ts # Constantes
│ │ │ ├── 📄 routes.ts # Routes de l'app
│ │ │ └── 📄 helpers.ts # Fonctions diverses
│ │ │
│ │ └── 📁 config/ # CONFIGURATION FRONTEND
│ │ ├── 📄 routes.config.tsx # Configuration routage
│ │ ├── 📄 menu.config.ts # Menus navigation
│ │ └── 📄 theme.config.ts # Thème Material-UI
│ │
│ ├── 📁 tests/ # TESTS FRONTEND
│ │ ├── 📁 unit/
│ │ │ ├── 📁 components/
│ │ │ ├── 📁 hooks/
│ │ │ └── 📁 utils/
│ │ ├── 📁 integration/
│ │ └── 📁 e2e/
│ │
│ └── 📁 storybook/ # DOCUMENTATION COMPOSANTS (optionnel)
│ └── 📁 stories/
│
├── 📁 docs/ # DOCUMENTATION SUPPLÉMENTAIRE
│ ├── 📄 API.md # Documentation API détaillée
│ ├── 📄 DATABASE.md # Schéma base de données
│ ├── 📄 DEPLOYMENT.md # Guide de déploiement
│ ├── 📄 CONTRIBUTING.md # Guide de contribution
│ └── 📁 images/ # Captures d'écran docs
│
├── 📁 scripts/ # SCRIPTS UTILITAIRES
│ ├── 📄 seed.sh # Script seed base de données
│ ├── 📄 backup-db.sh # Script backup
│ └── 📄 deploy.sh # Script déploiement
│
└── 📁 .github/ # CONFIGURATION GITHUB
├── 📁 workflows/ # GitHub Actions
│ ├── 📄 ci.yml # Intégration continue
│ ├── 📄 deploy-staging.yml # Déploiement staging
│ └── 📄 deploy-prod.yml # Déploiement production
├── 📁 ISSUE_TEMPLATE/ # Templates d'issues
│ ├── 📄 bug_report.md
│ └── 📄 feature_request.md
└── 📄 PULL_REQUEST_TEMPLATE.md # Template PR

---

## 📂 Description des Dossiers Principaux

### 🖥️ **Server** - Backend NestJS

| Dossier/Fichier | Description |
|-----------------|-------------|
| `src/main.ts` | Point d'entrée de l'application, configuration du serveur HTTP, Swagger, CORS |
| `src/app.module.ts` | Module racine qui importe tous les autres modules |
| `src/common/` | Code réutilisable dans toute l'application : guards, décorateurs, filtres |
| `src/config/` | Fichiers de configuration pour les services externes (DB, JWT, Stripe) |
| `src/database/` | Migrations TypeORM et scripts de seeding |
| `src/modules/` | Modules fonctionnels organisés par domaine métier |

### 🎨 **Client** - Frontend React

| Dossier/Fichier | Description |
|-----------------|-------------|
| `src/components/` | Composants React réutilisables classés par catégorie |
| `src/pages/` | Pages complètes de l'application, une par route |
| `src/services/` | Couche d'abstraction pour les appels API |
| `src/hooks/` | Hooks React personnalisés pour la logique réutilisable |
| `src/store/` | Configuration Redux pour la gestion d'état globale |
| `src/context/` | Contextes React pour l'état partagé |
| `src/types/` | Définitions de types TypeScript partagées |

---

## 🗂️ Structure d'un Module NestJS Type

Chaque module métier dans `server/src/modules/` suit cette structure :
om-module/
├── 📄 nom.module.ts # Définition du module, imports, providers
├── 📄 nom.controller.ts # Routes HTTP et gestion des requêtes
├── 📄 nom.service.ts # Logique métier, interactions BDD
├── 📁 dto/ # Data Transfer Objects (validation)
│ ├── 📄 create-.dto.ts # DTO pour la création
│ ├── 📄 update-.dto.ts # DTO pour la modification
│ └── 📄 *-response.dto.ts # DTO pour les réponses
├── 📁 entities/ # Modèles TypeORM (tables BDD)
│ └── 📄 *.entity.ts
├── 📁 enums/ # Énumérations spécifiques au module
└── 📁 tests/ # Tests unitaires du module

## 🧩 Structure d'un Composant React Type
Les composants complexes suivent cette organisation :
NomComposant/
├── 📄 NomComposant.tsx # Logique et rendu du composant
├── 📄 NomComposant.types.ts # Types et interfaces TypeScript
├── 📄 NomComposant.styles.ts # Styles spécifiques (CSS-in-JS)
├── 📄 NomComposant.test.tsx # Tests unitaires
└── 📄 index.ts # Export public

---

##  Flux de Données dans l'Application

### Création d'une Commande - Parcours Complet
NomComposant/
├── 📄 NomComposant.tsx # Logique et rendu du composant
├── 📄 NomComposant.types.ts # Types et interfaces TypeScript
├── 📄 NomComposant.styles.ts # Styles spécifiques (CSS-in-JS)
├── 📄 NomComposant.test.tsx # Tests unitaires
└── 📄 index.ts # Export public

text

---

## 🔄 Flux de Données dans l'Application

### Création d'une Commande - Parcours Complet
FRONTEND (React)
Client/ → /shop/cart → CartPage.tsx
├── useCart() → cartSlice (Redux)
├── Bouton "Commander" → CheckoutPage.tsx
└── CheckoutPage → payment.service.ts → POST /api/v1/payment

BACKEND (NestJS)
POST /api/v1/payment
├── JwtAuthGuard → Vérifie le token
├── RolesGuard → Vérifie rôle CLIENT
├── ValidationPipe → Valide create-payment.dto.ts
└── PaymentController
└── PaymentService → Stripe API
└── Retourne client_secret

FRONTEND
Stripe Elements → Confirme paiement
└── POST /api/v1/orders
└── OrdersController
└── OrdersService
├── Crée Order + OrderItems
├── Met à jour stock produits
└── NotificationsService → Email confirmation

ADMIN (Optionnel)
GET /api/v1/dashboard → DashboardService
└── DashboardPage.tsx → Mise à jour temps réel

text

---

## 📊 Gestion des Rôles et Accès

### Matrice d'Accès aux Routes

| Route | Admin | Caissier | Client | Public |
|-------|-------|----------|--------|--------|
| `/auth/*` | ✅ | ✅ | ✅ | ✅ |
| `/admin/*` | ✅ | ❌ | ❌ | ❌ |
| `/cashier/*` | ✅ | ✅ | ❌ | ❌ |
| `/shop/*` | ✅ | ✅ | ✅ | ✅ |
| `/api/v1/products` (GET) | ✅ | ✅ | ✅ | ✅ |
| `/api/v1/products` (POST) | ✅ | ❌ | ❌ | ❌ |
| `/api/v1/orders` (GET) | ✅ | ✅ | ✅(own) | ❌ |
| `/api/v1/users` | ✅ | ❌ | ❌ | ❌ |

---

## 🎯 Bonnes Pratiques de Nommage

### Fichiers Backend
- **Modules** : `nom.module.ts` (kebab-case)
- **Contrôleurs** : `nom.controller.ts`
- **Services** : `nom.service.ts`
- **DTOs** : `action-ressource.dto.ts` (ex: `create-user.dto.ts`)
- **Entités** : `nom.entity.ts` (ex: `user.entity.ts`)

### Fichiers Frontend
- **Composants** : `NomComposant.tsx` (PascalCase)
- **Pages** : `NomPage.tsx`
- **Hooks** : `useNom.ts` (camelCase avec prefix use)
- **Services** : `nom.service.ts`
- **Types** : `nom.types.ts`

---

## 📝 Notes Importantes

1. **Les dossiers `node_modules/`** ne sont pas versionnés (dans `.gitignore`)
2. **Les fichiers `.env`** sont locaux et jamais commités (utiliser `.env.example`)
3. **Le dossier `uploads/`** contient les fichiers utilisateurs (non versionné)
4. **Le dossier `logs/`** contient les logs applicatifs (non versionné)
5. **Le dossier `dist/` ou `build/`** est généré lors du build (non versionné)

---
