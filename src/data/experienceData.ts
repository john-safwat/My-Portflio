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
    role: "Full-Stack Software Engineer",
    company: "Kazyon Plus",
    url: "https://www.linkedin.com/company/kazyon/posts/?feedView=all",
    date: "Apr 2025 — Present",
    location: "Cairo, Egypt",
    type: "Full-Time",
    meta: "Super-App / On-Demand Retail & Logistics (Egypt & Morocco)",
    headline: "Building multi-country KMP super-apps, Flutter field apps, autonomous AI agents (CS & NetOps), embedded IoT fleet hardware & Spring Boot services.",
    overview:
      "Engineering core mobile clients, autonomous AI systems, embedded IoT fleet hardware, and backend services for one of the largest discount retail and supermarket chains in MENA. Responsible for architectural delivery across the customer super-app, delivery rider tooling, store management dashboards, call center & NetOps AI agents, embedded truck fleet hardware/Android control app, and Spring Boot backend order microservices.",
    metrics: [
      { label: "ANR Rate Drop", value: "7.59% → 0.14%" },
      { label: "Crash Rate", value: "6.43% → 0.19%" },
      { label: "NetOps Auto-Fix", value: "97% Zero-Touch" },
      { label: "Active Users", value: "+500% MAU" },
      { label: "Online Orders", value: "+220% Growth" },
    ],
    achievements: [
      "Kazyon Plus Super-App (KMP): Led the architectural migration from separate Android and iOS native codebases to unified Kotlin Multiplatform & Compose Multiplatform, live across Egypt and Morocco.",
      "Transformative Performance Gains: Reduced ANR rate by 98% (7.59% to 0.14%), cut crash rate to 0.19%, and improved app cold-start speed by 40%, driving a 500% MAU surge and 220% order volume growth.",
      "Kazyon Biker (Flutter): Engineered the operations app for Pickers and Delivery Bikers, managing real-time order picking, GPS delivery routing, and shift attendance.",
      "Kazyon Call Center AI Agent: Built an omnichannel AI customer service agent with fine-tuned Egyptian Arabic TTS, ASR, and Local LLM models, handling customer orders, complaints, and inquiries over 3CX phone calls and all major social platforms.",
      "Kazyon NetOps AI Agent: Built an autonomous 24/7 AI agent on open-source AI models monitoring 1,200+ branches across Egypt, running diagnostics to guarantee timely sales updates, coordinating ISP/branch issues via a detailed dashboard, and achieving 97% automatic issue handling with zero human-in-the-loop.",
      "Kazyon Fleet Management (Embedded & Android): Designed and built the custom embedded hardware and PCBs for truck smart locks and sensor telemetry across the fleet, and developed the Android application controlling and reading data from the hardware.",
      "Kazyon Dashboard App (Flutter): Created the internal executive & area manager app monitoring live store sales, staff shifts, cash balances, and integrating the internal KAI AI chatbot.",
      "Kazyon Orders & Loyalty Backend (Spring Boot): Contributed to high-throughput Spring Boot microservices handling core checkout calculations and customer loyalty rewards across Egypt and Morocco.",
    ],
    architectureFocus:
      "Clean Architecture with MVI/BLoC on mobile; fine-tuned Egyptian Arabic TTS/ASR & Open-Source Local LLM agents with 3CX telephony; custom embedded hardware & PCB telemetry; decoupled Spring Boot microservices.",
    technologies: [
      "Kotlin Multiplatform (KMP)",
      "Compose Multiplatform",
      "Jetpack Compose",
      "Flutter & Dart",
      "Java & Spring Boot",
      "Local LLMs & AI Agents",
      "Fine-Tuned TTS & ASR",
      "3CX Telephony",
      "Embedded Systems & PCB Design",
      "REST APIs & Microservices",
      "WebSockets",
      "Firebase Cloud Messaging",
      "Room DB",
      "Google Maps SDK",
      "Git & CI/CD",
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
    headline: "Architecting the Sheft influencer marketing platform and automated deployment pipelines in KSA.",
    overview:
      "Engineered the flagship 'Sheft' influencer marketing and content request mobile application, connecting commercial brands with verified creators across Saudi Arabia and GCC markets.",
    metrics: [
      { label: "Platform", value: "iOS & Android" },
      { label: "Automation", value: "GitHub Actions CI/CD" },
      { label: "Store Status", value: "Live on Stores" },
    ],
    achievements: [
      "Architected and shipped the Sheft platform with video-request workflows, real-time messaging, and multi-tier approval states.",
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
    headline: "Developing 4 multi-platform mobile products (Canadian Life, 2Sooq, Muslims Meetup, Hala App) from scratch.",
    overview:
      "Led cross-platform mobile development for LinkYou's ecosystem of consumer and community applications in Canada: Canadian Life, 2Sooq Marketplace, Muslims Meetup, and Hala Food Delivery.",
    metrics: [
      { label: "Apps Shipped", value: "4 Production Apps" },
      { label: "Localization", value: "Arabic & English" },
      { label: "Architecture", value: "Clean Architecture + BLoC" },
    ],
    achievements: [
      "Canadian Life: Built newcomer community & immigration platform with rental housing locators, legal advisor directories, and discussion boards.",
      "2Sooq: Engineered cross-platform e-commerce marketplace with dual EN/AR localization, cart calculations, and secure payment checkout.",
      "Muslims Meetup: Shipped events management and community networking application with digital QR ticketing and RSVP tracking.",
      "Hala App: Developed on-demand food delivery app connecting restaurants, couriers, and diners with live GPS tracking on Google Maps.",
      "Implemented seamless English/Arabic RTL dynamic layout switching and optimized list rendering with lazy loading and disk caching.",
    ],
    architectureFocus:
      "Clean Architecture with Dio networking interceptors, dependency injection via GetIt, and BLoC state management.",
    technologies: [
      "Flutter",
      "Dart",
      "BLoC / Cubit",
      "Dio",
      "Firebase Auth / Firestore / FCM",
      "Google Maps SDK",
      "GetIt",
      "Clean Architecture",
      "Multi-Language RTL/LTR",
    ],
    featured: true,
  },
  {
    id: "route-academy",
    slug: "route-academy",
    role: "Mobile Instructor & Mentor",
    company: "Route Academy",
    url: "https://www.linkedin.com/company/routeacademy/posts/?feedView=all",
    date: "Jul 2024 — Present",
    location: "Cairo, Egypt",
    type: "Instruction & Mentorship",
    meta: "Mobile Engineering Instructor (Android Native, Flutter & React Native)",
    headline: "Training software engineers in Android Native, Flutter, and React Native production workflows.",
    overview:
      "Currently instructing intensive mobile engineering tracks covering Android Native (Kotlin & Jetpack Compose), Flutter (Dart & BLoC), and React Native, guiding students to ship production-standard apps.",
    metrics: [
      { label: "Tracks Taught", value: "Android, Flutter & React Native" },
      { label: "Students Mentored", value: "100+ Trainees" },
      { label: "Hands-on Labs", value: "20+ Production Projects" },
    ],
    achievements: [
      "Deliver comprehensive curricula in Android Native (Kotlin, Compose, Coroutines), Flutter (BLoC, Clean Architecture), and React Native.",
      "Lead weekly live architecture reviews, test-driven development workshops, and CI/CD pipelines.",
      "Prepare learners for technical interviews with algorithmic coding sessions and deep dives into mobile system design.",
    ],
    architectureFocus:
      "Foundation to advanced proficiency: OOP, Clean Architecture, Design Patterns, REST API integration, and architectural separation of concerns.",
    technologies: [
      "Android Native",
      "Kotlin",
      "Jetpack Compose",
      "Flutter",
      "React Native",
      "BLoC",
      "Retrofit / Dio",
      "Room / SQLite",
      "Git & GitHub",
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
    meta: "Promoted from Mobile Mentor",
    headline: "Upskilling 120+ software engineers in production-grade Android Native, KMP, and Flutter.",
    overview:
      "Delivered advanced mobile engineering masterclasses and technical mentoring. Guided engineers through architectural patterns, clean coding, and CI/CD.",
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
];
