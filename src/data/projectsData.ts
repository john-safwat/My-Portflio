export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Android / KMP" | "Flutter" | "Backend";
  tech: string;
  techTags: string[];
  description: string;
  longDescription: string;
  metrics: { label: string; value: string }[];
  architectureOverview: string;
  keyFeatures: string[];
  technicalChallenges: string[];
  github?: string;
  googlePlay?: string;
  appStore?: string;
  liveDemo?: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "kazyon-ordering-loyalty",
    slug: "kazyon-ordering-loyalty",
    title: "Kazyon Ordering & Loyalty Services",
    subtitle: "High-Traffic Backend Microservices & API Gateway",
    category: "Backend",
    tech: "Java, Spring Boot, Spring MVC, REST APIs, Microservices, Spring Data JPA",
    techTags: ["Java", "Spring Boot", "REST APIs", "Microservices", "Spring Data JPA", "PostgreSQL", "Kafka", "Docker"],
    description:
      "Backend services powering the Kazyon Plus super-app's ordering flow and customer loyalty program — live in production across Egypt and Morocco.",
    longDescription:
      "Engineered resilient backend services that power the core retail ordering, cart checkout, and multi-tier loyalty reward system for the Kazyon Plus super-app. Designed as high-throughput Spring Boot microservices handling heavy concurrent transactions across multiple international markets.",
    metrics: [
      { label: "Markets Live", value: "Egypt & Morocco" },
      { label: "Orders Grew", value: "+220%" },
      { label: "Service Uptime", value: "99.9%" },
      { label: "Architecture", value: "Microservices" },
    ],
    architectureOverview:
      "Constructed using Spring Boot with clean layered architecture (Controller, Service, Repository, DTO). Communicates via secure RESTful APIs with mobile clients and uses decoupled messaging for asynchronous loyalty point calculations, stock validation, and promotional discounts.",
    keyFeatures: [
      "High-concurrency order placement and automated cart calculation engine.",
      "Multi-country currency and regional localization support (Egypt & Morocco).",
      "Dynamic loyalty tier engine calculating instant cashbacks, discount vouchers, and point redemptions.",
      "Idempotent payment webhook processing and real-time inventory validation.",
      "Robust API versioning and centralized exception handling for seamless mobile consumption.",
    ],
    technicalChallenges: [
      "Handling peak promotional traffic spikes during national retail flash sales without latency degradation.",
      "Ensuring transactional consistency between order creation, coupon redemption, and loyalty point deduction.",
      "Maintaining low-latency REST endpoints for mobile client consumption over varying network conditions.",
    ],
    featured: true,
  },
  {
    id: "kazyon-plus",
    slug: "kazyon-plus",
    title: "Kazyon Plus",
    subtitle: "Retail & On-Demand Super App (Multiplatform)",
    category: "Android / KMP",
    tech: "Kotlin Multiplatform, Compose Multiplatform, Android Native, MVI",
    techTags: ["Kotlin Multiplatform", "Compose Multiplatform", "Jetpack Compose", "MVI", "Koin", "Coroutines", "Ktor", "FCM"],
    description:
      "Production super app migrated from Android Native to KMP. MVI architecture, secure payment integration, and a 40% cold-start improvement.",
    longDescription:
      "The flagship customer super-app for Kazyon, serving millions of shoppers for on-demand groceries, retail deals, and loyalty rewards. Led the major architectural migration from legacy Android Native to Kotlin Multiplatform (KMP), unifying business logic across Android and iOS while maximizing performance.",
    metrics: [
      { label: "ANR Reduction", value: "98% (7.59% → 0.14%)" },
      { label: "Crash Rate", value: "0.19% (from 6.43%)" },
      { label: "Cold Launch", value: "-40% Time" },
      { label: "MAU Growth", value: "+500%" },
    ],
    architectureOverview:
      "Architected with strict MVI (Model-View-Intent) pattern with unidirectional data flow (UDF). Shared KMP modules handle domain use cases, repositories, caching, and network layers using Ktor and Kotlinx Serialization. The UI is built natively with Jetpack Compose & Compose Multiplatform.",
    keyFeatures: [
      "Smooth on-demand catalog browsing with multi-level category navigation and instant search.",
      "Integrated secure payment gateways (credit cards, digital wallets, cash-on-delivery).",
      "Real-time order progress tracking and delivery estimation.",
      "Gamified loyalty dashboard with barcode scanner for in-store checkout discounts.",
      "Deep linking and personalized push notifications via Firebase Cloud Messaging.",
    ],
    technicalChallenges: [
      "Migrating a mission-critical production codebase to Kotlin Multiplatform without introducing user-facing regressions.",
      "Diagnosing and eliminating legacy main-thread I/O bottlenecks to slash ANR rate from 7.59% down to 0.14%.",
      "Optimizing memory allocation and Compose recomposition trees for lower-end Android devices.",
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.kazyon.customer&hl=en",
    appStore: "https://apps.apple.com/eg/app/kazyon-plus/id1584830119",
    featured: true,
  },
  {
    id: "kazyon-biker",
    slug: "kazyon-biker",
    title: "Kazyon Biker",
    subtitle: "Field Operations & Real-Time Delivery Logistics",
    category: "Android / KMP",
    tech: "Android Native, Kotlin, Jetpack Compose, Google Maps SDK, Room",
    techTags: ["Android Native", "Kotlin", "Jetpack Compose", "Google Maps SDK", "Room DB", "WorkManager", "Clean Arch"],
    description:
      "Field operations app for delivery agents — order assignment, GPS route tracking, and delivery confirmation, with advanced caching.",
    longDescription:
      "Mission-critical enterprise Android application used by delivery riders across nationwide fulfillment hubs. Empowers riders with automated order routing, turn-by-turn navigation, proof-of-delivery photo capture, and offline-first data sync.",
    metrics: [
      { label: "Routing Latency", value: "<150ms" },
      { label: "Offline Sync", value: "100% Reliable" },
      { label: "Battery Drain", value: "-30% Optimized" },
      { label: "App Size", value: "<18MB" },
    ],
    architectureOverview:
      "Built with Android Clean Architecture, utilizing Room database as a single source of truth for offline capability. WorkManager orchestrates background telemetry and GPS synchronization, while Jetpack Compose delivers an ergonomic, high-contrast dark UI optimized for daylight riding.",
    keyFeatures: [
      "Instant order dispatch notifications and one-tap acceptance flow.",
      "Turn-by-turn navigation overlay with real-time traffic updates via Google Maps SDK.",
      "Digital proof-of-delivery via OTP verification, signature, and camera snapshot.",
      "Smart battery-efficient background location tracker minimizing GPS battery drain.",
      "Full offline mode allowing riders to view order details and log statuses without cellular coverage.",
    ],
    technicalChallenges: [
      "Managing continuous foreground location tracking while minimizing battery consumption during 8-hour rider shifts.",
      "Building a bulletproof SQLite/Room caching layer that reconciles conflicting state changes when returning online.",
      "Ensuring rapid startup times and UI responsiveness on budget-tier field devices.",
    ],
    featured: true,
  },
  {
    id: "sheft",
    slug: "sheft",
    title: "Sheft",
    subtitle: "Influencer Marketing & Creator Collaboration Platform",
    category: "Flutter",
    tech: "Flutter, Firebase, REST APIs, GitHub Actions CI/CD",
    techTags: ["Flutter", "Dart", "Firebase", "REST APIs", "BLoC", "GitHub Actions", "WebSockets", "Cloud Storage"],
    description:
      "Connects brands with content creators. Real-time messaging, video-request workflows, and cross-platform store deployment.",
    longDescription:
      "A premium cross-platform marketplace mobile app in Saudi Arabia connecting commercial brands with digital content creators. Enables brands to launch campaigns, review video auditions, contract influencers, and process escrow payments.",
    metrics: [
      { label: "Deployment", value: "iOS & Android" },
      { label: "CI/CD Pipeline", value: "100% Automated" },
      { label: "State Pattern", value: "BLoC Architecture" },
      { label: "Stores", value: "App Store & Play Store" },
    ],
    architectureOverview:
      "Engineered in Flutter following Clean Architecture principles with BLoC state management. Backed by Firebase Auth, Firestore, and custom REST API endpoints for secure campaign management and real-time messaging.",
    keyFeatures: [
      "Interactive campaign creation wizard with target audience and budget controls.",
      "Real-time in-app chat with audio/video preview and attachment uploads.",
      "Contract signing and milestone-based payment release mechanism.",
      "Custom video player with compression and upload acceleration.",
      "Automated multi-flavor CI/CD build matrix using GitHub Actions.",
    ],
    technicalChallenges: [
      "Implementing efficient video compression before uploading large 4K creator submissions.",
      "Managing complex bidirectional chat state with optimistic message rendering and offline queues.",
      "Coordinating multi-timezone campaign deadlines and push notifications.",
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.moalen.sheft_app&hl=en",
    appStore: "https://apps.apple.com/eg/app/sheft/id6748038220",
    featured: true,
  },
  {
    id: "qurah",
    slug: "qurah",
    title: "Qurah",
    subtitle: "Saudi Arabia's Premier Water Services Platform",
    category: "Flutter",
    tech: "Flutter, Firebase, REST APIs, Google Maps, Electronic Payments",
    techTags: ["Flutter", "Dart", "Firebase", "BLoC", "Google Maps", "Payment Gateways", "REST APIs"],
    description:
      "Saudi Arabia's first water-services app. Real-time order tracking, technician matching, and electronic payments.",
    longDescription:
      "On-demand water delivery and maintenance service platform in Saudi Arabia. Connects residential and commercial customers with certified water suppliers and maintenance technicians with real-time dispatch and scheduled recurring deliveries.",
    metrics: [
      { label: "Target Market", value: "Saudi Arabia" },
      { label: "Languages", value: "Arabic & English" },
      { label: "Platforms", value: "iOS & Android" },
      { label: "Order Tracking", value: "Real-time Live GPS" },
    ],
    architectureOverview:
      "Built with Flutter and BLoC pattern, providing silky 60fps animations. Integrates local Saudi payment gateways (Mada, Apple Pay, STC Pay) and Google Maps Geocoding API for precise address pin-pointing.",
    keyFeatures: [
      "Interactive map pin selector with reverse geocoding for precise tanker delivery.",
      "Subscription model for scheduled weekly/monthly water tank replenishment.",
      "Live tanker tracking on map with ETA countdown.",
      "Comprehensive Arabic/English RTL/LTR dynamic layout switching.",
      "In-app invoices and digital payment receipt generation.",
    ],
    technicalChallenges: [
      "Precision GPS geofencing and address validation in new urban developments across KSA.",
      "Seamless RTL Arabic typography handling with custom Arabic font kerning.",
      "Handling complex recurring subscription billing logic smoothly on mobile.",
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.qarah.userapp&hl=en",
    appStore: "https://apps.apple.com/eg/app/qarah-%D9%82%D8%B1%D8%A7%D8%AD/id6749554152",
    featured: false,
  },
  {
    id: "qurah-provider",
    slug: "qurah-provider",
    title: "Qurah Provider",
    subtitle: "Technician & Supplier Fleet Management",
    category: "Flutter",
    tech: "Flutter, Firebase, REST APIs, Geolocation, Order Management",
    techTags: ["Flutter", "Dart", "Firebase", "BLoC", "Geolocation", "REST APIs"],
    description:
      "Service provider and technician app for Qurah — order dispatching, tanker route navigation, and revenue analytics.",
    longDescription:
      "The companion provider application enabling water delivery suppliers, drivers, and technical maintenance teams to receive jobs, navigate to customer coordinates, and track daily revenue earnings.",
    metrics: [
      { label: "Job Dispatch", value: "Instant Push" },
      { label: "Navigation", value: "Turn-by-turn" },
      { label: "Analytics", value: "Daily Revenue" },
      { label: "Status", value: "Production Live" },
    ],
    architectureOverview:
      "Flutter Clean Architecture with shared domain libraries with the customer client. Utilizes background location broadcasting and secure JWT token renewal.",
    keyFeatures: [
      "Shift management and online/offline availability toggle.",
      "Smart job assignment based on driver proximity and capacity.",
      "Built-in route navigation with destination contact shortcuts.",
      "Daily and monthly payout analytics with transaction logs.",
      "Customer verification code check at point-of-service.",
    ],
    technicalChallenges: [
      "Keeping persistent real-time socket connections open during driver transit.",
      "Synchronizing offline status changes when providers drive through desert areas with intermittent signals.",
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.qarah.providerapp&hl=en",
    appStore: "https://apps.apple.com/eg/app/qarah-provider/id6749553815",
    featured: false,
  },
  {
    id: "2sooq",
    slug: "2sooq",
    title: "2Sooq",
    subtitle: "Cross-Platform E-Commerce Marketplace",
    category: "Flutter",
    tech: "Flutter, BLoC, Firebase Auth/Firestore/FCM, Dio REST API",
    techTags: ["Flutter", "Dart", "BLoC", "Firebase", "Dio", "Clean Arch", "FCM", "Multi-Lang"],
    description:
      "Cross-platform marketplace with EN/AR support, real-time push notifications, and secure payment flows.",
    longDescription:
      "Modern e-commerce platform built for high catalog density, fast search indexing, and smooth checkout. Features product comparisons, localized currency rates, vendor profiles, and coupon engines.",
    metrics: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Localization", value: "EN & AR Dual" },
      { label: "State Machine", value: "BLoC / Cubit" },
      { label: "Performance", value: "60 FPS List Scrolling" },
    ],
    architectureOverview:
      "Structured with Dio networking interceptors, automated token refreshes, and cached network image pipelines. Uses BLoC for state predictability and granular error recovery.",
    keyFeatures: [
      "Dynamic catalog filters (brand, price range, ratings, availability).",
      "Multi-vendor store directories with customer reviews and ratings.",
      "Integrated coupon code and promotional discount calculator.",
      "FCM push notifications for price drops and order tracking updates.",
    ],
    technicalChallenges: [
      "Optimizing complex multi-image product grids for smooth 60fps scrolling on low-spec hardware.",
      "Designing responsive tablet and phone layouts with shared components.",
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.linkyou.sooq&hl=en",
    appStore: "https://apps.apple.com/eg/app/2sooq/id1574532077",
    featured: false,
  },
  {
    id: "canadian-life",
    slug: "canadian-life",
    title: "Canadian Life",
    subtitle: "Community, Housing & Immigration Resources App",
    category: "Flutter",
    tech: "Flutter, Dio, Firebase, Clean Architecture, Social Workflows",
    techTags: ["Flutter", "Dart", "Dio", "Firebase", "Social Feed", "Maps", "Push Notifications"],
    description:
      "Community platform for Canadian immigrants covering travel, housing, education, and local resources.",
    longDescription:
      "Comprehensive digital hub created by LinkYou Inc. (Toronto, Canada) designed to assist new immigrants and international students arriving in Canada. Includes verified rental listings, legal consultation directories, community discussion boards, and resettlement guides.",
    metrics: [
      { label: "Location", value: "Toronto, Canada" },
      { label: "Community", value: "Thousands of Users" },
      { label: "Resource Hubs", value: "Housing, Legal, Jobs" },
      { label: "Stores", value: "Live iOS & Android" },
    ],
    architectureOverview:
      "Flutter app with Dio REST API integration, cloud image storage, and Firebase authentication. Built with modular feature directories for rapid feature additions.",
    keyFeatures: [
      "Interactive rental and accommodation locator with neighborhood safety scores.",
      "Community discussion forum with topic tagging and moderation.",
      "Immigration checklist wizard guiding users step-by-step through provincial paperwork.",
      "Direct chat and appointment booking with certified Canadian advisors.",
    ],
    technicalChallenges: [
      "Managing complex search filters across disparate data sources (housing, legal, jobs).",
      "Ensuring strict user privacy and secure document attachment handling.",
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.linkyou.lifeincanadaa&hl=en",
    appStore: "https://apps.apple.com/eg/app/%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D9%81%D9%8A-%D9%83%D9%86%D8%AF%D8%A7/id1593238063",
    featured: false,
  },
];
