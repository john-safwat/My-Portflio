export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Android / KMP" | "Flutter" | "Backend" | "AI & Systems";
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
  // --- KAZYON ECOSYSTEM ---
  {
    id: "kazyon-plus",
    slug: "kazyon-plus",
    title: "Kazyon Plus Super-App",
    subtitle: "Multi-Country E-Commerce & On-Demand Grocery (Egypt & Morocco)",
    category: "Android / KMP",
    tech: "Kotlin Multiplatform (KMP), Compose Multiplatform, Android & iOS Native, MVI",
    techTags: ["Kotlin Multiplatform", "Compose Multiplatform", "Jetpack Compose", "MVI", "Koin", "Coroutines", "Ktor", "FCM"],
    description:
      "High-traffic retail & grocery super-app migrated from separate Android & iOS native apps to a unified KMP codebase, live in Egypt and Morocco.",
    longDescription:
      "The flagship customer super-app for Kazyon, serving millions of shoppers for on-demand groceries, retail deals, and loyalty rewards across Egypt and Morocco. Spearheaded the major architectural migration from separate legacy Android & iOS Native codebases to a unified, shared Kotlin Multiplatform (KMP) & Compose Multiplatform architecture, dramatically speeding up feature velocity while cutting bugs.",
    metrics: [
      { label: "ANR Reduction", value: "98% (7.59% → 0.14%)" },
      { label: "Crash Rate", value: "0.19% (from 6.43%)" },
      { label: "Cold Launch", value: "-40% Time" },
      { label: "MAU Growth", value: "+500%" },
    ],
    architectureOverview:
      "Built with strict MVI (Model-View-Intent) and Unidirectional Data Flow (UDF). Shared KMP domain modules contain all business logic, caching policies, cart reconciliation, and network layers via Ktor. UI is rendered cleanly with Jetpack Compose on Android and Compose Multiplatform for iOS.",
    keyFeatures: [
      "High-scale catalog browsing with multi-level categories, real-time search, and price calculations.",
      "Multi-country localization and currency handling for Egypt (EGP) and Morocco (MAD).",
      "Seamless checkout with integrated card payments, digital wallets, and cash-on-delivery.",
      "Real-time order progress timeline with delivery driver tracking.",
      "Gamified loyalty points card with in-store barcode scanning for instant cashbacks.",
    ],
    technicalChallenges: [
      "Migrating an active multi-million user production app from native codebases to KMP without service disruption.",
      "Root-cause diagnosing UI thread blocks to slash the ANR rate by 98% (from 7.59% to 0.14%).",
      "Optimizing memory allocations and Compose recompositions on lower-end Android field devices.",
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.kazyon.customer&hl=en",
    appStore: "https://apps.apple.com/eg/app/kazyon-plus/id1584830119",
    featured: true,
  },
  {
    id: "kazyon-biker",
    slug: "kazyon-biker",
    title: "Kazyon Biker & Delivery Operations",
    subtitle: "Logistics App for Delivery Agents, Pickers & Bikers",
    category: "Flutter",
    tech: "Flutter, Dart, BLoC, Google Maps SDK, Background Location, Offline Sync",
    techTags: ["Flutter", "Dart", "BLoC", "Google Maps SDK", "Background Geolocation", "Shift Management", "Offline Sync"],
    description:
      "Operations mobile app for Kazyon delivery agents, pickers, and bikers — managing order assignments, turn-by-turn delivery routes, and shift attendance.",
    longDescription:
      "Enterprise logistics application built with Flutter, powering the daily fulfillment workflows of hundreds of Kazyon pickers and delivery riders. The app handles order dispatching, store picking verification, turn-by-turn navigation to customer doorsteps, proof-of-delivery OTP confirmation, and shift clock-in/out management.",
    metrics: [
      { label: "Role Scope", value: "Pickers & Bikers" },
      { label: "GPS Tracking", value: "Real-Time Telemetry" },
      { label: "Shift Ops", value: "Full Attendance Mgmt" },
      { label: "Offline Sync", value: "100% Guaranteed" },
    ],
    architectureOverview:
      "Architected in Flutter using Clean Architecture with BLoC state management. Employs background location services for battery-efficient GPS streaming and a robust local caching layer that seamlessly syncs delivery confirmations when re-entering cellular coverage.",
    keyFeatures: [
      "Dynamic shift scheduling, clock-in/clock-out, and attendance verification.",
      "Store picker checklist with barcode scanning to eliminate picking errors.",
      "Turn-by-turn navigation with Google Maps SDK and live route optimization.",
      "Proof of delivery via secure customer OTP code and camera snapshot.",
      "Offline-first sync allowing riders to complete deliveries in basement or low-signal areas.",
    ],
    technicalChallenges: [
      "Optimizing continuous background GPS telemetry to preserve rider device battery throughout an 8-hour shift.",
      "Handling sudden connection drops during transit and reconciling offline delivery confirmations reliably.",
    ],
    featured: true,
  },
  {
    id: "kazyon-ai-agent",
    slug: "kazyon-ai-agent",
    title: "Kazyon Call Center AI Agent",
    subtitle: "Omnichannel Customer Support Agent with Egyptian Arabic Local LLMs",
    category: "AI & Systems",
    tech: "Local LLMs, Python, 3CX Telephony, WhatsApp API, Messenger, Instagram Graph API",
    techTags: ["Local LLMs", "Python", "3CX Phone Calls", "Egyptian Arabic NLP", "WhatsApp API", "Webhooks", "FastAPI"],
    description:
      "Automated customer service AI agent powered by fine-tuned Local LLMs in Egyptian Arabic, handling voice calls over 3CX and chats on WhatsApp, Facebook, and Instagram.",
    longDescription:
      "Engineered an omnichannel AI call center agent designed to autonomously understand, converse, and resolve customer issues in authentic Egyptian Arabic dialect. The agent directly integrates into the 3CX phone PBX system for live voice inquiries as well as social messaging channels (WhatsApp, Facebook Messenger, and Instagram Direct), resolving order status queries, missing items, refund requests, and store inquiries.",
    metrics: [
      { label: "Voice PBX", value: "3CX Telephony Live" },
      { label: "Dialect Support", value: "Egyptian Arabic NLP" },
      { label: "Channels", value: "Voice, WA, FB, IG" },
      { label: "Core Model", value: "Fine-Tuned Local LLMs" },
    ],
    architectureOverview:
      "Built with Python and high-concurrency FastAPI microservices hosting quantized local LLMs for low-latency inference. Connected to the 3CX phone system via SIP/RTP audio streams and real-time Speech-to-Text / Text-to-Speech engines, with webhooks routing social media messages into a unified RAG context pipeline.",
    keyFeatures: [
      "Real-time voice conversation answering customer calls on the 3CX telephony network.",
      "Native comprehension of Egyptian Arabic slang, colloquial vocabulary, and customer sentiments.",
      "Omnichannel chat automation across WhatsApp Business API, Facebook Messenger, and Instagram.",
      "Automated order tracking, complaint ticketing, and escalation to human supervisors.",
      "Strict data privacy and security with local on-premise model execution.",
    ],
    technicalChallenges: [
      "Achieving sub-second voice response latency on conversational turns over 3CX audio streams.",
      "Fine-tuning local language models to accurately comprehend Egyptian dialect nuances and supermarket terminology.",
      "Maintaining contextual session state across channel switches (e.g. caller who also messaged on WhatsApp).",
    ],
    featured: true,
  },
  {
    id: "kazyon-dashboard",
    slug: "kazyon-dashboard",
    title: "Kazyon Management Dashboard App",
    subtitle: "Executive & Area Manager Real-Time Analytics & KAI Chatbot",
    category: "Flutter",
    tech: "Flutter, Dart, BLoC, WebSockets, REST APIs, Internal Chatbot (KAI)",
    techTags: ["Flutter", "Dart", "BLoC", "WebSockets", "KAI Chatbot", "Executive Analytics", "Finance & Cash Flow"],
    description:
      "Internal enterprise mobile dashboard for Area Managers and executives — live store KPIs, staff shifts, finance/cash flow audits, and the internal AI chatbot KAI.",
    longDescription:
      "Enterprise management mobile application built with Flutter, providing Kazyon leadership, area managers, and store supervisors with live operational intelligence across 1,000+ retail branches. The app surfaces real-time sales telemetry, staff attendance, stock shortage alerts, store cash balance audits, and embeds Kazyon's internal AI assistant (KAI) for ad-hoc business queries.",
    metrics: [
      { label: "Store Coverage", value: "1,000+ Branches" },
      { label: "Target Users", value: "Area & Store Managers" },
      { label: "Data Pipeline", value: "Real-Time WebSockets" },
      { label: "AI Co-pilot", value: "KAI Chatbot Embedded" },
    ],
    architectureOverview:
      "Engineered in Flutter with Clean Architecture and BLoC. Subscribes to live WebSocket data streams for instant revenue and inventory updates, with multi-level role-based access control (RBAC) securing executive financial views.",
    keyFeatures: [
      "Live store performance metrics (hourly revenue, basket size, top-selling items).",
      "Area manager view with aggregated regional performance and store rankings.",
      "Branch staff shift rosters, attendance records, and overtime tracking.",
      "Store finance module for cash register reconciliation and safe audits.",
      "Embedded 'KAI' internal AI chatbot answering queries on store metrics, SOP policies, and inventory trends.",
    ],
    technicalChallenges: [
      "Rendering dense financial charts and tabular data fluidly across tablets and smartphones.",
      "Ensuring robust role-based data isolation so managers only see their designated store clusters.",
    ],
    featured: true,
  },
  {
    id: "kazyon-ordering-loyalty",
    slug: "kazyon-ordering-loyalty",
    title: "Kazyon Orders & Loyalty Backend",
    subtitle: "High-Throughput Spring Boot Microservices (Egypt & Morocco)",
    category: "Backend",
    tech: "Java, Spring Boot, Spring MVC, REST APIs, Microservices, Spring Data JPA",
    techTags: ["Java", "Spring Boot", "REST APIs", "Microservices", "Spring Data JPA", "PostgreSQL", "Kafka", "Docker"],
    description:
      "Backend microservices powering the Kazyon Plus super-app's ordering pipeline and loyalty reward calculations across Egypt and Morocco.",
    longDescription:
      "Contributed to core backend services powering the ordering engine, shopping cart calculations, and customer loyalty rewards for the Kazyon Plus platform. Designed as resilient Spring Boot microservices handling heavy concurrent transactions across multiple international markets with low latency.",
    metrics: [
      { label: "Markets Live", value: "Egypt & Morocco" },
      { label: "Orders Grew", value: "+220%" },
      { label: "Service Uptime", value: "99.9%" },
      { label: "Architecture", value: "Spring Boot Microservices" },
    ],
    architectureOverview:
      "Constructed using Spring Boot with clean layered architecture (Controller, Service, Repository, DTO). Communicates via secure RESTful APIs with mobile clients and uses decoupled messaging for asynchronous loyalty point calculations, stock validation, and promotional discounts.",
    keyFeatures: [
      "High-concurrency order placement and automated cart pricing engine.",
      "Multi-country currency and regional tax localization (Egypt & Morocco).",
      "Dynamic loyalty tier engine calculating instant cashbacks, discount vouchers, and point redemptions.",
      "Idempotent payment webhook processing and real-time inventory validation.",
      "Centralized error handling and API versioning for mobile client resilience.",
    ],
    technicalChallenges: [
      "Handling massive promotional traffic spikes during retail flash sales without database locks.",
      "Ensuring strict ACID consistency between order creation, coupon validation, and wallet balance deductions.",
    ],
    featured: true,
  },

  // --- MOALEN ---
  {
    id: "sheft",
    slug: "sheft",
    title: "Sheft Platform",
    subtitle: "Influencer Marketing & Content Creator Marketplace in KSA",
    category: "Flutter",
    tech: "Flutter, Dart, Firebase, REST APIs, GitHub Actions CI/CD",
    techTags: ["Flutter", "Dart", "Firebase", "REST APIs", "BLoC", "GitHub Actions", "WebSockets", "Cloud Storage"],
    description:
      "Connects brands with content creators in Saudi Arabia. Real-time messaging, video-request workflows, and store deployment to App Store & Google Play.",
    longDescription:
      "A premium cross-platform marketplace mobile app in Saudi Arabia connecting commercial brands with digital content creators. Enables brands to launch campaigns, review video auditions, contract influencers, and process milestone escrow payments.",
    metrics: [
      { label: "Deployment", value: "iOS & Android" },
      { label: "CI/CD Pipeline", value: "100% Automated" },
      { label: "State Pattern", value: "BLoC Architecture" },
      { label: "Target Market", value: "Saudi Arabia" },
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
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.moalen.sheft_app&hl=en",
    appStore: "https://apps.apple.com/eg/app/sheft/id6748038220",
    featured: false,
  },

  // --- LINKYOU INC. (CANADA) ---
  {
    id: "canadian-life",
    slug: "canadian-life",
    title: "Canadian Life",
    subtitle: "Immigration, Housing & Community Hub in Toronto, Canada",
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
  {
    id: "2sooq",
    slug: "2sooq",
    title: "2Sooq Marketplace",
    subtitle: "Cross-Platform E-Commerce App with EN/AR Localization",
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
    id: "muslims-meetup",
    slug: "muslims-meetup",
    title: "Muslims Meetup",
    subtitle: "Community Events & Networking Platform in Canada",
    category: "Flutter",
    tech: "Flutter, Dart, BLoC, Firebase Auth, Firestore, FCM, Event Management",
    techTags: ["Flutter", "Dart", "BLoC", "Firebase", "Event Ticketing", "Geolocation", "Social Networking"],
    description:
      "Events management and community networking application in Canada — event discovery, RSVP tracking, speaker schedules, and attendee networking.",
    longDescription:
      "Built for the Canadian community, Muslims Meetup is an event discovery and social gathering platform. Allows organizers to publish local workshops, conferences, and charity meetups while providing attendees with digital tickets, calendar syncing, and direct attendee messaging.",
    metrics: [
      { label: "Market", value: "Canada" },
      { label: "Purpose", value: "Events & Networking" },
      { label: "Ticketing", value: "Digital QR Passes" },
      { label: "State", value: "BLoC Pattern" },
    ],
    architectureOverview:
      "Engineered in Flutter with Clean Architecture. Utilizes Firebase for real-time RSVP counters, push notifications for event updates, and local device calendar integration.",
    keyFeatures: [
      "Interactive map and calendar view for discovering nearby community events.",
      "Digital ticket purchasing and QR code check-in scanner for organizers.",
      "Community group chats for event attendees and topic-based networking.",
      "Automated calendar syncing and reminder push notifications.",
    ],
    technicalChallenges: [
      "Synchronizing live ticket inventory and waitlists under high concurrent reservation bursts.",
      "Implementing frictionless calendar exports across iOS EventKit and Android Calendar Provider.",
    ],
    featured: false,
  },
  {
    id: "hala-app",
    slug: "hala-app",
    title: "Hala App",
    subtitle: "Food Delivery & Restaurant Ordering Platform",
    category: "Flutter",
    tech: "Flutter, Dart, BLoC, Google Maps SDK, Real-Time Socket.IO, Payment Gateways",
    techTags: ["Flutter", "Dart", "BLoC", "Food Delivery", "Google Maps", "Socket.IO", "Live Tracking"],
    description:
      "Food delivery application connecting restaurants, couriers, and customers with custom menu builders and real-time live GPS order tracking.",
    longDescription:
      "On-demand food delivery platform bridging local restaurants with diners. Supports complex dish customizations (addons, sizing, special requests), automated dispatching to nearby delivery riders, and real-time courier tracking on interactive maps.",
    metrics: [
      { label: "Ecosystem", value: "Restaurant & Diner" },
      { label: "Tracking", value: "Live GPS Map" },
      { label: "Payments", value: "Card, Wallet & COD" },
      { label: "State", value: "BLoC" },
    ],
    architectureOverview:
      "Clean Architecture in Flutter with WebSockets/Socket.IO for instant order state broadcasts (Placed &rarr; Preparing &rarr; On the Way &rarr; Delivered). Integrates Google Maps SDK for smooth driver marker animations.",
    keyFeatures: [
      "Dynamic menu browsing with ingredient customizers and dietary filters.",
      "Live order status tracker with driver marker moving smoothly on Google Maps.",
      "Multiple payment methods (Apple Pay, credit cards, digital wallet).",
      "Driver rating and order review mechanism with tip management.",
    ],
    technicalChallenges: [
      "Smoothing driver location marker interpolation along map roads without jittering.",
      "Handling real-time order cancellation and restaurant inventory out-of-stock events gracefully.",
    ],
    featured: false,
  },

  // --- FREELANCE & CONTRACT (SAUDI ARABIA) ---
  {
    id: "abdal",
    slug: "abdal",
    title: "Abdal Platform",
    subtitle: "Skilled Home Services & Technician Marketplace in KSA",
    category: "Flutter",
    tech: "Flutter, Dart, Clean Architecture, BLoC, Geolocation, Payment Gateways",
    techTags: ["Flutter", "Dart", "BLoC", "Skilled Trades", "Geolocation", "Mada Payments", "In-App Chat"],
    description:
      "On-demand services platform connecting certified skilled technicians with customers requiring home maintenance, plumbing, electrical, and HVAC repairs in Saudi Arabia.",
    longDescription:
      "A comprehensive on-demand home services marketplace in Saudi Arabia. Abdal allows homeowners and property managers to request skilled craftsmen (plumbers, electricians, AC technicians, cleaning staff), receive competitive price bids, schedule visits, and pay securely online.",
    metrics: [
      { label: "Target Market", value: "Saudi Arabia (KSA)" },
      { label: "Service Scope", value: "Home & Commercial Trades" },
      { label: "Matching", value: "Geo-Proximity Algorithm" },
      { label: "Payments", value: "Mada, Apple Pay, STC Pay" },
    ],
    architectureOverview:
      "Flutter app built with BLoC and Clean Architecture. Integrates Saudi local payment gateways (Mada/Apple Pay), in-app chat for technician-customer alignment, and geolocation-based technician dispatching.",
    keyFeatures: [
      "Service categorization covering plumbing, electricity, HVAC, and carpentry.",
      "Automated matching with the nearest verified technicians with ratings and past work reviews.",
      "Direct in-app messaging and photo/video diagnostic uploads.",
      "Scheduled bookings and urgent same-day emergency dispatch.",
      "Integrated electronic invoicing and secure escrow payments.",
    ],
    technicalChallenges: [
      "Designing a flexible scheduling engine accounting for technician working hours and prayer times in KSA.",
      "Ensuring accurate map pin geocoding in newly developing residential districts in Riyadh and Jeddah.",
    ],
    featured: false,
  },
  {
    id: "qurah",
    slug: "qurah",
    title: "Qurah",
    subtitle: "Saudi Arabia's Premier Water Delivery Platform",
    category: "Flutter",
    tech: "Flutter, Firebase, REST APIs, Google Maps, Electronic Payments",
    techTags: ["Flutter", "Dart", "Firebase", "BLoC", "Google Maps", "Payment Gateways", "REST APIs"],
    description:
      "On-demand water services app in Saudi Arabia. Real-time tanker tracking, technician matching, and electronic payments.",
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
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.qarah.userapp&hl=en",
    appStore: "https://apps.apple.com/eg/app/qarah-%D9%82%D8%B1%D8%A7%D8%AD/id6749554152",
    featured: false,
  },
  {
    id: "qurah-provider",
    slug: "qurah-provider",
    title: "Qurah Provider",
    subtitle: "Water Supplier & Driver Fleet Operations App",
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
      "Synchronizing offline status changes when providers drive through areas with intermittent signals.",
    ],
    googlePlay: "https://play.google.com/store/apps/details?id=com.qarah.providerapp&hl=en",
    appStore: "https://apps.apple.com/eg/app/qarah-provider/id6749553815",
    featured: false,
  },
];
