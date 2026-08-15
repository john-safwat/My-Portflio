export interface ExperienceItem {
  id: string;
  slug: string;
  role: string;
  company: string;
  url: string;
  date: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Instruction & Mentorship";
  meta?: string;
  headline: string;
  overview: string;
  metrics: { label: string; value: string }[];
  achievements: string[];
  architectureFocus: string;
  technologies: string[];
  featured?: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: "kazyon-plus",
    slug: "kazyon-plus",
    role: "Software Engineer",
    company: "Kazyon Plus",
    url: "https://www.linkedin.com/company/kazyon/posts/?feedView=all",
    date: "Apr 2025 — Present",
    location: "Cairo, Egypt",
    type: "Full-Time",
    meta: "Super-App / On-Demand Retail & Delivery",
    headline: "Building multi-country super-app mobile clients & high-throughput Spring Boot microservices.",
    overview:
      "Engineering core retail ordering and customer-facing mobile clients for one of the largest discount supermarket chains in the Middle East & North Africa. Working across full-stack systems spanning Kotlin Multiplatform / Jetpack Compose on mobile and Java / Spring Boot on the backend.",
    metrics: [
      { label: "ANR Rate Drop", value: "7.59% → 0.14%" },
      { label: "Crash Rate", value: "6.43% → 0.19%" },
      { label: "Cold Start", value: "-40% Time" },
      { label: "Active Users", value: "+500% MAU" },
      { label: "Online Orders", value: "+220% Growth" },
    ],
    achievements: [
      "Architected and shipped Kazyon Plus across Android & iOS using Kotlin Multiplatform (KMP) and Compose Multiplatform, unifying 70%+ of business logic.",
      "Developed and maintained backend services for Kazyon Ordering and the Loyalty System as Spring Boot REST microservices serving high-volume live production traffic in Egypt and Morocco.",
      "Spearheaded major performance initiatives eliminating UI thread blocking: slashed ANRs by 98% and reduced crash rates to 0.19%.",
      "Engineered Kazyon Biker (Android Native, Kotlin, Compose) for field delivery riders with GPS route tracking, battery-optimized background services, and offline caching.",
      "Built real-time Asset Tracker in Flutter enabling operational visibility into delivery assets and warehouse dispatching.",
      "Integrated secure payment gateways, digital wallet top-ups, and automated push notification campaigns via Firebase Cloud Messaging.",
    ],
    architectureFocus:
      "Clean Architecture with MVI on mobile; decoupled Spring Boot microservices with Spring Data JPA and asynchronous event publishing on the backend.",
    technologies: [
      "Kotlin",
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Kotlin Multiplatform (KMP)",
      "Compose Multiplatform",
      "Jetpack Compose",
      "Android Native",
      "Flutter",
      "REST APIs",
      "Microservices",
      "Firebase Cloud Messaging",
      "Room DB",
      "Koin",
      "Coroutines / Flow",
      "Git",
    ],
    featured: true,
  },
  {
    id: "moalen-co",
    slug: "moalen-co",
    role: "Flutter Developer",
    company: "Moalen CO",
    url: "https://www.linkedin.com/company/moalen-co/posts/?feedView=all",
    date: "Jun 2025 — Feb 2026",
    location: "Saudi Arabia (Remote)",
    type: "Part-Time",
    headline: "Architecting cross-platform creator platforms and automated deployment pipelines.",
    overview:
      "Engineered the flagship 'Sheft' influencer marketing and content request mobile application, connecting top brands with verified creators across GCC markets.",
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Automation", value: "GitHub Actions CI/CD" },
      { label: "Store Status", value: "Live on Stores" },
    ],
    achievements: [
      "Architected and launched the Sheft platform with video-request workflows, real-time messaging, and multi-tier approval states.",
      "Built automated CI/CD pipelines with GitHub Actions, cutting release deployment time by 60% and enabling automated builds for Google Play & Apple TestFlight.",
      "Collaborated with cross-functional backend and QA teams in Saudi Arabia to optimize API response formats and resolve edge-case rendering bottlenecks.",
    ],
    architectureFocus:
      "BLoC pattern with reactive repository layers, robust token interceptors, and modular feature packaging.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC",
      "Firebase",
      "REST APIs",
      "GitHub Actions",
      "Dio",
      "App Store Connect",
      "Google Play Console",
    ],
    featured: true,
  },
  {
    id: "linkyou-inc",
    slug: "linkyou-inc",
    role: "Flutter Developer",
    company: "LinkYou Inc.",
    url: "https://www.linkedin.com/company/linkyou-ca/posts/?feedView=all",
    date: "Sep 2024 — Apr 2025",
    location: "Toronto, Canada (Remote)",
    type: "Full-Time",
    headline: "Developing multi-language e-commerce and community mobile products from scratch.",
    overview:
      "Led mobile development for two core production products from greenfield to store release: 2Sooq (E-Commerce marketplace) and Canadian Life (Community and newcomer immigration social platform).",
    metrics: [
      { label: "Apps Shipped", value: "2 Commercial Apps" },
      { label: "Localization", value: "Arabic & English" },
      { label: "Architecture", value: "Clean Architecture + BLoC" },
    ],
    achievements: [
      "Engineered 2Sooq e-commerce app with dynamic multi-vendor catalogs, cart calculation, and payment checkout flows.",
      "Built Canadian Life community app with discussion forums, legal advisor directories, and housing listings.",
      "Implemented seamless English/Arabic RTL dynamic layout switching and localized font rendering.",
      "Optimized list rendering with lazy loading and smart disk caching for high-density image feeds.",
    ],
    architectureFocus:
      "Clean Architecture with Dio networking interceptors, dependency injection via GetIt, and BLoC state management.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC / Cubit",
      "Dio",
      "Firebase Auth / Firestore / FCM",
      "GetIt",
      "Clean Architecture",
      "Multi-Language RTL/LTR",
    ],
    featured: true,
  },
  {
    id: "elevate-tech",
    slug: "elevate-tech",
    role: "Mobile Instructor & Mentor",
    company: "Elevate Tech",
    url: "https://www.linkedin.com/company/elevatecheg/posts/?feedView=all",
    date: "Mar 2025 — Feb 2026",
    location: "Cairo, Egypt",
    type: "Instruction & Mentorship",
    meta: "Promoted from Mobile Mentor (Nov 2024)",
    headline: "Upskilling over 120+ software engineers in production-grade Android Native, KMP, and Flutter.",
    overview:
      "Delivering advanced mobile engineering masterclasses and technical mentoring. Guiding software engineers and graduates through industry-standard architectural patterns, clean coding, and CI/CD.",
    metrics: [
      { label: "Trainees Taught", value: "120+ Engineers" },
      { label: "Career Shift Rate", value: "85% Placement" },
      { label: "Curriculum Tracks", value: "Android Native, KMP, Flutter" },
    ],
    achievements: [
      "Authored and led comprehensive curricula covering Kotlin Native (Jetpack Compose, MVVM/MVI), Kotlin Multiplatform (KMP), and Flutter Clean Architecture.",
      "Conducted weekly live code reviews, refactoring sessions, and automated testing workshops (Unit & Widget testing).",
      "Promoted to Lead Instructor from Mobile Mentor in recognition of top-rated student feedback and curriculum delivery.",
    ],
    architectureFocus:
      "Production-ready design patterns: Clean Architecture, SOLID principles, MVI/MVVM, Dependency Injection, and reactive data streams.",
    technologies: [
      "Android Native",
      "Kotlin",
      "Jetpack Compose",
      "Kotlin Multiplatform",
      "Flutter",
      "Clean Architecture",
      "MVI / MVVM",
      "Hilt / Koin",
      "CI/CD Workflows",
    ],
    featured: false,
  },
  {
    id: "route-academy",
    slug: "route-academy",
    role: "Mobile Instructor & Mentor",
    company: "Route Academy",
    url: "https://www.linkedin.com/company/routeacademy/posts/?feedView=all",
    date: "Jul 2025 — Nov 2025",
    location: "Cairo, Egypt",
    type: "Instruction & Mentorship",
    meta: "Promoted from Mobile Mentor (Jul 2024)",
    headline: "Teaching modern mobile engineering practices and hands-on lab projects.",
    overview:
      "Designed and instructed intensive bootcamps focused on mobile development fundamentals, modern UI frameworks, and real-world API integration.",
    metrics: [
      { label: "Students Mentored", value: "80+ Trainees" },
      { label: "Hands-on Labs", value: "15+ Production Projects" },
      { label: "Promotion", value: "Mentor to Instructor" },
    ],
    achievements: [
      "Guided learners through full application lifecycles from Figma designs to production deployment.",
      "Delivered deep dives on state management (BLoC, ViewModel), Coroutines, Flow, and networking libraries.",
      "Prepared students for technical interviews through mock interviews and algorithmic problem-solving sessions.",
    ],
    architectureFocus:
      "Foundation to advanced proficiency: OOP, Design Patterns, REST API integration, and architectural separation of concerns.",
    technologies: [
      "Android Native",
      "Kotlin",
      "Jetpack Compose",
      "Flutter",
      "BLoC",
      "Retrofit",
      "Room",
      "Git & GitHub",
    ],
    featured: false,
  },
];
