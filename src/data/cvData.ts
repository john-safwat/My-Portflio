export type CVVersion = "fullstack" | "mobile";

export interface ExperienceEntry {
  role: string;
  company: string;
  meta: string;
  date: string;
  location: string;
  achievements: string[];
}

export interface ProjectEntry {
  title: string;
  tech: string;
  description: string;
  link?: string;
}

export interface SkillCategory {
  label: string;
  value: string;
}

export interface CVContent {
  title: string;
  summary: string;
  experiences: ExperienceEntry[];
  skills: SkillCategory[];
  projects: ProjectEntry[];
}

export const fullStackCV: CVContent = {
  title: "Full-Stack Software Engineer  |  Mobile Specialist (Android/Kotlin, Flutter, KMP) & Backend (Java, Spring Boot)",
  summary:
    "Full-Stack Software Engineer with 3+ years of intensive engineering experience, primarily specialized in production-grade Mobile Development (Android Native with Kotlin & Jetpack Compose, Kotlin Multiplatform, Flutter) alongside robust Backend Engineering in Java and Spring Boot microservices. Deep hands-on experience across the Kazyon ecosystem in Egypt and Morocco — delivering customer KMP super-apps, delivery operations tooling, AI customer support agents with Local LLMs and 3CX telephony, executive management dashboards, and resilient Spring Boot ordering/loyalty backend services. Proven impact at scale: reduced ANR rate by 98%, grew Monthly Active Users by 500%, and cut app launch time by 40%.",
  experiences: [
    {
      role: "Full-Stack Software Engineer",
      company: "Kazyon Plus (Full-Time)",
      meta: "Super-app / On-demand retail & delivery (Egypt & Morocco)",
      date: "Apr 2025 – Present",
      location: "Cairo, Egypt",
      achievements: [
        "Kazyon Plus Super-App (KMP): Led architectural migration from separate Android & iOS native codebases to unified Kotlin Multiplatform (KMP) & Compose Multiplatform, live in Egypt and Morocco.",
        "Performance Engineering: Reduced ANR rate by 98% (7.59% to 0.14%), cut crash rate to 0.19%, and improved cold-start time by 40%, driving a 500% MAU growth and 220% increase in online orders.",
        "Kazyon Biker (Flutter): Engineered the delivery operations app for pickers and bikers, managing real-time picking checklists, GPS route navigation, and shift attendance.",
        "Kazyon Call Center AI Agent: Built an omnichannel AI customer service agent with fine-tuned Egyptian Arabic TTS, ASR, and Local LLMs, handling customer orders, complaints, and inquiries over 3CX phone calls and all social platforms.",
        "Kazyon NetOps AI Agent: Built an autonomous 24/7 AI agent on open-source AI models monitoring 1,200+ branches across Egypt, running diagnostics for timely sales syncs, coordinating ISP/branch issues via a monitoring dashboard, and achieving 97% zero-touch resolution.",
        "Kazyon Fleet Management: Designed custom embedded hardware and PCBs for truck smart locks and sensor telemetry across the fleet, and contributed to the companion Android app controlling and reading hardware data.",
        "Kazyon Dashboard App (Flutter): Developed the enterprise mobile dashboard for Area and Store Managers, tracking live store KPIs, staff shifts, cash balances, and integrating the internal KAI AI chatbot.",
        "Kazyon Orders & Loyalty Services (Spring Boot): Contributed to high-throughput Spring Boot microservices handling core checkout calculations and customer loyalty rewards across Egypt and Morocco.",
      ],
    },
    {
      role: "Flutter Developer",
      company: "Moalen CO (Part-Time)",
      meta: "Influencer marketing platform",
      date: "Jun 2025 – Feb 2026",
      location: "Saudi Arabia (Remote)",
      achievements: [
        "Architected and shipped the Sheft influencer-marketing platform with content-request workflows, real-time messaging, and store deployment to App Store and Google Play.",
        "Established CI/CD pipelines with GitHub Actions, automating build, test, and deployment for iOS and Android.",
        "Partnered with backend and QA teams to resolve performance bottlenecks, optimizing API response handling and overall system stability.",
      ],
    },
    {
      role: "Flutter Developer",
      company: "LinkYou Inc. (Full-Time)",
      meta: "E-Commerce & Community products",
      date: "Sep 2024 – Apr 2025",
      location: "Toronto, Canada (Remote)",
      achievements: [
        "Canadian Life: Built newcomer community & immigration platform with rental housing locators, legal advisor directories, and discussion boards.",
        "2Sooq: Engineered cross-platform e-commerce marketplace with dual EN/AR localization, cart calculations, and secure payment checkout.",
        "Muslims Meetup: Shipped events management and community networking application with digital QR ticketing and RSVP tracking.",
        "Hala App: Developed on-demand food delivery app connecting restaurants, couriers, and diners with live GPS tracking on Google Maps.",
        "Implemented seamless English/Arabic RTL dynamic layout switching and optimized list rendering with lazy loading and disk caching.",
      ],
    },
    {
      role: "Mobile Instructor & Mentor",
      company: "Route Academy",
      meta: "Mobile Engineering Instructor (Android Native, Flutter & React Native)",
      date: "Jul 2024 – Present",
      location: "Cairo, Egypt",
      achievements: [
        "Instruct intensive mobile engineering bootcamps covering Android Native (Kotlin & Jetpack Compose), Flutter (Dart & BLoC), and React Native for 100+ software engineers.",
        "Lead production-grade labs and weekly code reviews enforcing Clean Architecture, reactive state management, and CI/CD pipelines.",
      ],
    },
    {
      role: "Mobile Instructor & Mentor",
      company: "Elevate Tech",
      meta: "Promoted from Mobile Mentor",
      date: "Mar 2025 – Feb 2026",
      location: "Cairo, Egypt",
      achievements: [
        "Led an industry-aligned curriculum covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter — Clean Architecture, MVVM/MVI, and DI.",
        "Conducted technical assessments and code reviews, preparing trainees to ship production-grade applications.",
      ],
    },
  ],
  skills: [
    { label: "Mobile Development", value: "Kotlin Multiplatform (KMP), Compose Multiplatform, Android Native (Kotlin & Jetpack Compose), Flutter (Dart), React Native" },
    { label: "Backend & Cloud", value: "Java, Spring Boot, Spring MVC, Spring Data JPA, RESTful API design, Microservices architecture, Docker, PostgreSQL" },
    { label: "AI, Voice & IoT", value: "Open-Source & Local LLMs, Fine-Tuned Egyptian Arabic TTS & ASR, Autonomous NetOps Agents, 3CX Telephony, Embedded Hardware & PCB Design" },
    { label: "Architecture", value: "Clean Architecture, MVI, MVVM, SOLID Principles, Unidirectional Data Flow (UDF)" },
    { label: "State Management", value: "BLoC / Cubit, ViewModel (Android/KMP), Redux, Provider" },
    { label: "Networking & Real-Time", value: "REST APIs, Microservices, WebSockets, Socket.IO, Ktor, Retrofit, Dio" },
    { label: "Messaging & Push", value: "Firebase Cloud Messaging (FCM), Push Notifications, Background Geolocation" },
    { label: "Dependency Injection", value: "Hilt, Koin, GetIt, Injectable" },
    { label: "Local Storage", value: "Room DB, SQLite / Sqflite, Hive, Isar, DataStore" },
    { label: "DevOps & Testing", value: "Git, GitHub Actions CI/CD, Fastlane, Unit / Widget / Integration Testing" },
  ],
  projects: [
    {
      title: "Kazyon Plus — E-Commerce Super-App (KMP)",
      tech: "Kotlin Multiplatform, Compose Multiplatform, Jetpack Compose, Ktor",
      description:
        "High-traffic retail & grocery super-app migrated from native Android & iOS codebases to unified KMP, live in Egypt and Morocco. Cut ANRs by 98% and boosted MAU by 500%.",
    },
    {
      title: "Kazyon Biker — Delivery & Operations App",
      tech: "Flutter, Dart, BLoC, Google Maps SDK, Background Location",
      description:
        "Operations mobile app for Kazyon delivery agents, pickers, and bikers — managing order assignments, GPS route tracking, and shift attendance.",
    },
    {
      title: "Kazyon Call Center AI Agent",
      tech: "Local LLMs, Fine-Tuned Egyptian Arabic TTS & ASR, Python, 3CX Telephony, Social Platforms",
      description:
        "Omnichannel AI customer service agent with fine-tuned Egyptian Arabic TTS & ASR models handling customer orders, complaints, and inquiries over 3CX phone calls and all social platforms.",
    },
    {
      title: "Kazyon NetOps AI Agent",
      tech: "Open-Source AI Models, Autonomous AI Agents, Python, 24/7 Diagnostics, Monitoring Dashboard",
      description:
        "Autonomous 24/7 NetOps AI agent monitoring 1,200+ branches across Egypt, ensuring timely sales updates, coordinating ISP/branch issues, and achieving 97% zero-touch automatic resolution.",
    },
    {
      title: "Kazyon Fleet Management — Embedded Hardware & Android",
      tech: "Embedded Systems, PCB Design, Smart Locks & Sensors, Android Native (Kotlin)",
      description:
        "Designed custom embedded hardware and PCBs for fleet truck locks and sensor telemetry, plus built the Android application to control and read live hardware data.",
    },
    {
      title: "Store POS System — Multi-Platform",
      tech: "Web App, Desktop App, Mobile App, Retail POS & Inventory",
      description:
        "Independent retail store Point of Sale (POS) application running seamlessly across Web, Desktop, and Mobile platforms.",
      link: "https://pos.johnsafwat.online",
    },
    {
      title: "Kazyon Management Dashboard App",
      tech: "Flutter, Dart, BLoC, WebSockets, Internal AI Chatbot (KAI)",
      description:
        "Enterprise mobile dashboard for Area and Store Managers — live store revenue, staff shifts, cash balances, and the internal AI chatbot KAI.",
    },
    {
      title: "Kazyon Orders & Loyalty Services — Backend",
      tech: "Java, Spring Boot, REST APIs, Microservices, Spring Data JPA",
      description:
        "Backend microservices powering the Kazyon Plus super-app's ordering flow and customer loyalty program across Egypt and Morocco.",
    },
    {
      title: "Sheft — Influencer Marketing Platform",
      tech: "Flutter, Firebase, REST APIs, GitHub Actions CI/CD",
      description:
        "Connects commercial brands with digital content creators in Saudi Arabia. Real-time messaging, video request workflows, and automated multi-flavor CI/CD.",
    },
    {
      title: "Canadian Life — Community Hub (Canada)",
      tech: "Flutter, Dio, Firebase, Social Workflows",
      description:
        "Digital platform for Canadian newcomers and students featuring rental housing locators, legal directories, and community boards.",
    },
    {
      title: "2Sooq — E-Commerce Marketplace",
      tech: "Flutter, BLoC, Firebase (Auth, Firestore, FCM), Dio",
      description:
        "Cross-platform marketplace with dual Arabic & English localization, dynamic vendor catalogs, and secure checkout flows.",
    },
    {
      title: "Muslims Meetup — Events Management (Canada)",
      tech: "Flutter, Dart, BLoC, Firebase, Event Ticketing",
      description:
        "Community events discovery and networking app in Canada with digital QR ticketing, calendar syncing, and attendee messaging.",
    },
    {
      title: "Hala App — Food Delivery Platform",
      tech: "Flutter, Dart, BLoC, Google Maps SDK, Socket.IO",
      description:
        "On-demand food delivery application connecting restaurants, diners, and couriers with live GPS driver tracking on interactive maps.",
    },
    {
      title: "Abdal Platform — Skilled Services in KSA",
      tech: "Flutter, Dart, BLoC, Geolocation, Mada / Apple Pay",
      description:
        "On-demand home services marketplace in Saudi Arabia connecting certified technicians (plumbing, electrical, HVAC) with customers.",
    },
    {
      title: "Qurah & Qurah Provider — Water Services",
      tech: "Flutter, Firebase, REST APIs, Google Maps SDK",
      description:
        "Dual-app platform in Saudi Arabia for water tanker deliveries and provider fleet dispatching with real-time tracking.",
    },
  ],
};

export const mobileCV: CVContent = {
  title: "Mobile Software Engineer  |  Android (Kotlin) & Cross-Platform (Flutter - KMP - React Native)",
  summary:
    "Mobile Software Engineer with 3+ years building production-grade applications across Android Native (Kotlin & Jetpack Compose), Kotlin Multiplatform (KMP), Flutter, and React Native. Hands-on experience across the high-traffic Kazyon ecosystem in Egypt and Morocco — shipping customer super-apps, courier logistics apps, executive analytics dashboards, and AI support agents with 3CX telephony. Proven impact at scale: reduced ANR rate by 98%, grew Monthly Active Users by 500%, and cut app launch time by 40%.",
  experiences: [
    {
      role: "Mobile Software Engineer",
      company: "Kazyon Plus (Full-Time)",
      meta: "Super-app / On-demand retail & delivery",
      date: "Apr 2025 – Present",
      location: "Cairo, Egypt",
      achievements: [
        "Kazyon Plus Super-App (KMP): Led the architectural redesign and migration from separate native codebases to unified Kotlin Multiplatform and Compose Multiplatform, live in Egypt and Morocco.",
        "Transformative Performance Gains: Reduced ANR rate by 98% (7.59% to 0.14%), cut crash rate to 0.19%, and shortened app launch time by 40%.",
        "Kazyon Biker (Flutter): Engineered the delivery operations app for pickers and bikers, managing real-time order picking, GPS routing, and shift attendance.",
        "Kazyon Call Center AI Agent: Built an omnichannel AI customer support agent with fine-tuned Egyptian Arabic TTS, ASR, and Local LLMs, handling orders, complaints, and inquiries over 3CX phone calls and all social platforms.",
        "Kazyon NetOps AI Agent: Built an autonomous 24/7 AI agent on open-source AI models monitoring 1,200+ branches across Egypt with 97% automatic zero-touch resolution.",
        "Kazyon Fleet Management: Designed custom embedded hardware & PCBs for truck smart locks and sensor telemetry, and developed the Android app controlling and reading hardware data.",
        "Kazyon Dashboard App (Flutter): Created the enterprise executive app for live store KPIs, staff shifts, cash audits, and the internal KAI AI chatbot.",
      ],
    },
    {
      role: "Flutter Developer",
      company: "Moalen CO (Part-Time)",
      meta: "Influencer marketing platform",
      date: "Jun 2025 – Feb 2026",
      location: "Saudi Arabia (Remote)",
      achievements: [
        "Architected and shipped the Sheft influencer-marketing platform with content-request workflows, real-time messaging, and store deployment to App Store and Google Play.",
        "Established CI/CD pipelines with GitHub Actions, automating build, test, and deployment for iOS and Android.",
      ],
    },
    {
      role: "Flutter Developer",
      company: "LinkYou Inc. (Full-Time)",
      meta: "E-Commerce & Community products",
      date: "Sep 2024 – Apr 2025",
      location: "Toronto, Canada (Remote)",
      achievements: [
        "Built 4 commercial applications: Canadian Life (community hub), 2Sooq (e-commerce marketplace), Muslims Meetup (events platform), and Hala App (food delivery).",
        "Implemented Clean Architecture with BLoC state management and Dio-based REST API layers for scalable codebases.",
      ],
    },
    {
      role: "Mobile Instructor & Mentor",
      company: "Route Academy",
      meta: "Mobile Engineering Instructor (Android Native, Flutter & React Native)",
      date: "Jul 2024 – Present",
      location: "Cairo, Egypt",
      achievements: [
        "Instruct mobile engineering tracks in Android Native (Kotlin, Compose), Flutter (Dart, BLoC), and React Native for 100+ software engineers.",
        "Lead production-grade labs and code reviews enforcing Clean Architecture and reactive state management.",
      ],
    },
    {
      role: "Mobile Instructor & Mentor",
      company: "Elevate Tech",
      meta: "Promoted from Mobile Mentor",
      date: "Mar 2025 – Feb 2026",
      location: "Cairo, Egypt",
      achievements: [
        "Led an industry-aligned curriculum covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter.",
      ],
    },
  ],
  skills: [
    { label: "Mobile Frameworks", value: "Kotlin Multiplatform (KMP), Compose Multiplatform, Android Native (Kotlin & Jetpack Compose), Flutter (Dart), React Native" },
    { label: "Architecture", value: "Clean Architecture, MVI, MVVM, SOLID Principles, Unidirectional Data Flow (UDF)" },
    { label: "State Management", value: "BLoC / Cubit, ViewModel (Android/KMP), Redux, Provider" },
    { label: "Networking & Real-Time", value: "REST APIs, Microservices, WebSockets, Socket.IO, Ktor, Retrofit, Dio" },
    { label: "Messaging & Push", value: "Firebase Cloud Messaging (FCM), Background Geolocation, Google Maps SDK" },
    { label: "AI, Voice & Hardware", value: "Local LLMs, Fine-Tuned Egyptian Arabic TTS & ASR, 3CX Telephony, Embedded Hardware & PCB Design" },
    { label: "Dependency Injection", value: "Hilt, Koin, GetIt, Injectable" },
    { label: "Local Storage", value: "Room DB, SQLite / Sqflite, Hive, Isar, DataStore" },
    { label: "DevOps & Testing", value: "Git, GitHub Actions CI/CD, Fastlane, Unit / Widget Testing" },
  ],
  projects: [
    {
      title: "Kazyon Plus — E-Commerce Super-App (KMP)",
      tech: "Kotlin Multiplatform, Compose Multiplatform, Jetpack Compose, Ktor",
      description:
        "High-traffic retail & grocery super-app migrated from native Android & iOS codebases to unified KMP, live in Egypt and Morocco.",
    },
    {
      title: "Kazyon Biker — Delivery Operations App",
      tech: "Flutter, Dart, BLoC, Google Maps SDK, Background Location",
      description:
        "Operations mobile app for Kazyon delivery agents, pickers, and bikers — managing order assignments, GPS route tracking, and shift attendance.",
    },
    {
      title: "Kazyon Call Center AI Agent",
      tech: "Local LLMs, Fine-Tuned Egyptian Arabic TTS & ASR, Python, 3CX Telephony, Social Platforms",
      description:
        "Omnichannel AI customer service agent with fine-tuned Egyptian Arabic TTS & ASR handling customer orders, complaints, and inquiries over 3CX phone calls and all social platforms.",
    },
    {
      title: "Kazyon NetOps AI Agent",
      tech: "Open-Source AI Models, Autonomous AI Agents, Python, 24/7 Diagnostics, Dashboard",
      description:
        "Autonomous 24/7 NetOps AI agent monitoring 1,200+ sites across Egypt and resolving 97% of network issues automatically with zero human-in-the-loop.",
    },
    {
      title: "Kazyon Fleet Management — Embedded & Android",
      tech: "Embedded Systems, PCB Design, Smart Locks & Sensors, Android Native (Kotlin)",
      description:
        "Custom embedded hardware and PCB design for fleet truck locks and sensors paired with an Android application controlling and reading hardware telemetry.",
    },
    {
      title: "Store POS System — Multi-Platform",
      tech: "Web App, Desktop App, Mobile App, Retail POS",
      description:
        "Independent retail store Point of Sale (POS) application running across Web, Desktop, and Mobile platforms.",
      link: "https://pos.johnsafwat.online",
    },
    {
      title: "Kazyon Management Dashboard App",
      tech: "Flutter, Dart, BLoC, WebSockets, Internal AI Chatbot (KAI)",
      description:
        "Enterprise mobile dashboard for Area and Store Managers — live store revenue, staff shifts, cash balances, and the internal AI chatbot KAI.",
    },
    {
      title: "Sheft — Influencer Marketing Platform",
      tech: "Flutter, Firebase, REST APIs, GitHub Actions CI/CD",
      description:
        "Connects commercial brands with digital content creators in Saudi Arabia. Real-time messaging, video request workflows, and automated CI/CD.",
    },
    {
      title: "Canadian Life — Community Hub (Canada)",
      tech: "Flutter, Dio, Firebase, Social Workflows",
      description:
        "Digital platform for Canadian newcomers and students featuring rental housing locators, legal directories, and community boards.",
    },
    {
      title: "2Sooq — E-Commerce Marketplace",
      tech: "Flutter, BLoC, Firebase (Auth, Firestore, FCM), Dio",
      description:
        "Cross-platform marketplace with dual Arabic & English localization, dynamic vendor catalogs, and secure checkout flows.",
    },
    {
      title: "Muslims Meetup — Events Management (Canada)",
      tech: "Flutter, Dart, BLoC, Firebase, Event Ticketing",
      description:
        "Community events discovery and networking app in Canada with digital QR ticketing and RSVP tracking.",
    },
    {
      title: "Hala App — Food Delivery Platform",
      tech: "Flutter, Dart, BLoC, Google Maps SDK, Socket.IO",
      description:
        "On-demand food delivery application connecting restaurants, diners, and couriers with live GPS driver tracking on interactive maps.",
    },
    {
      title: "Abdal Platform — Skilled Services in KSA",
      tech: "Flutter, Dart, BLoC, Geolocation, Mada / Apple Pay",
      description:
        "On-demand home services marketplace in Saudi Arabia connecting certified technicians with customers.",
    },
    {
      title: "Qurah & Qurah Provider — Water Services",
      tech: "Flutter, Firebase, REST APIs, Google Maps SDK",
      description:
        "Dual-app platform in Saudi Arabia for water tanker deliveries and provider fleet dispatching with real-time tracking.",
    },
  ],
};

export const cvDataStore: Record<CVVersion, CVContent> = {
  fullstack: fullStackCV,
  mobile: mobileCV,
  };
