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
  title: "Software Engineer  |  Mobile (Android/Kotlin, Flutter/KMP) & Backend (Java, Spring Boot)",
  summary:
    "Software Engineer with 3+ years building production-grade Android applications in Kotlin and Jetpack Compose, complemented by cross-platform delivery in Kotlin Multiplatform and Flutter, and backend services in Java and Spring Boot. Hands-on experience in the on-demand and super-app space — delivering ride-hailing-style customer apps, last-mile delivery operations tooling with GPS route tracking, and the backend Ordering and Loyalty services powering a multi-country super-app live in Egypt and Morocco. Proven impact at scale: reduced ANR rate by 98%, grew Monthly Active Users by 500%, and cut app launch time by 40%. Strong command of REST/RESTful APIs, Spring Boot microservices, Firebase Cloud Messaging push notifications, Clean Architecture, and Git-based CI/CD.",
  experiences: [
    {
      role: "Software Engineer",
      company: "Kazyon Plus (Full-Time)",
      meta: "Super-app / On-demand retail & delivery",
      date: "Apr 2025 – Present",
      location: "Cairo, Egypt",
      achievements: [
        "Build and maintain a high-traffic super-app for retail and on-demand delivery across Kotlin/Jetpack Compose (Android/iOS via Compose Multiplatform) and Java/Spring Boot on the backend.",
        "Developed and maintained backend services for Kazyon Ordering Services and the Loyalty System, built with Spring Boot and exposed as REST APIs/microservices consumed by the mobile clients, serving live production traffic across Egypt and Morocco.",
        "Led the architectural redesign and migration from Android Native to Kotlin Multiplatform, delivering a unified, maintainable cross-platform codebase.",
        "Drove transformative performance gains: reduced ANR rate from 7.59% to 0.14%, cut crash rate from 6.43% to 0.19%, and achieved a 40% reduction in app launch time.",
        "Contributed to 500% growth in Monthly Active Users and a 220% increase in online orders through improved stability, faster load times, and a streamlined checkout.",
        "Engineered Kazyon Biker (Android Native, Kotlin) — a last-mile delivery operations app with order assignment, GPS route tracking, and delivery confirmation; built an Asset Tracker tool in Flutter for real-time monitoring.",
        "Integrated mobile clients with backend REST APIs and microservices, and implemented push notifications via Firebase Cloud Messaging.",
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
        "Built two cross-platform apps from inception: 2Sooq (e-commerce marketplace) and Canadian Life (social networking) — both deployed to App Store and Google Play.",
        "Implemented Clean Architecture with BLoC state management and Dio-based REST API layers for scalable, testable codebases.",
        "Integrated multi-language support (EN/AR), Firebase Cloud Messaging push notifications, and secure checkout flows; optimized rendering via lazy loading and image caching.",
      ],
    },
    {
      role: "Mobile Instructor & Mentor",
      company: "Elevate Tech (Weekend Sessions)",
      meta: "Promoted from Mobile Mentor (Nov 2024)",
      date: "Mar 2025 – Feb 2026",
      location: "Cairo, Egypt",
      achievements: [
        "Lead an industry-aligned curriculum covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter — Clean Architecture, MVVM/MVI, state management, DI, and CI/CD.",
        "Conduct technical assessments and code reviews, preparing trainees to ship production-grade applications.",
      ],
    },
    {
      role: "Mobile Instructor & Mentor",
      company: "Route Academy (Weekend Sessions)",
      meta: "Promoted from Mobile Mentor (Jul 2024)",
      date: "Jul 2025 – Nov 2025",
      location: "Cairo, Egypt",
      achievements: [
        "Designed and delivered mobile development training in Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter, guiding students from foundations to advanced proficiency.",
        "Built hands-on labs aligned to production standards — Clean Architecture, state management, networking, and CI/CD.",
      ],
    },
  ],
  skills: [
    { label: "Languages", value: "Kotlin, Java, Dart, Python, SQL" },
    { label: "Backend", value: "Spring Boot, Spring MVC, Spring Data JPA, RESTful API design, Microservices architecture" },
    { label: "Android / Mobile", value: "Android Native, Jetpack Compose, Kotlin Multiplatform (KMP), Compose Multiplatform, Flutter" },
    { label: "Architecture", value: "Clean Architecture, MVI, MVVM, MVC, SOLID Principles" },
    { label: "State Management", value: "ViewModel (Android/KMP), BLoC / Cubit, Provider" },
    { label: "Networking & APIs", value: "REST / RESTful APIs, Microservices, Retrofit, Ktor, OkHttp, Dio" },
    { label: "Messaging & Push", value: "Firebase Cloud Messaging (FCM), Push Notifications" },
    { label: "Dependency Injection", value: "Hilt, Koin, GetIt, Injectable" },
    { label: "Backend & Cloud", value: "Spring Boot, Firebase (Firestore, Auth, FCM, Crashlytics, Storage, Analytics)" },
    { label: "Local Storage", value: "Room DB, SQLite / Sqflite, Hive, Isar, DataStore" },
    { label: "DevOps & Testing", value: "Git, GitHub, CI/CD (GitHub Actions, Fastlane), SonarQube, Unit/Widget/Integration Testing" },
    { label: "Tools & Agile", value: "Git, Jira, Confluence, Figma, Adobe XD, Agile / Scrum" },
  ],
  projects: [
    {
      title: "Kazyon Ordering & Loyalty Services — Backend (Spring Boot)",
      tech: "Java, Spring Boot, REST APIs, Microservices",
      description:
        "Backend services powering the Kazyon Plus super-app's ordering flow and customer loyalty program, live in production across Egypt and Morocco; built as REST/microservice APIs consumed by mobile clients.",
    },
    {
      title: "Kazyon Plus — Super App (Retail & On-Demand)",
      tech: "Kotlin Multiplatform, Compose Multiplatform, Android Native, Spring Boot",
      description:
        "Production super app migrated from Android Native to KMP, with a Spring Boot backend for ordering and loyalty. MVI architecture, secure payment integration, and a 40% cold-start improvement.",
    },
    {
      title: "Kazyon Biker — Last-Mile Delivery Operations App",
      tech: "Android Native, Kotlin, Jetpack Compose",
      description:
        "Field operations app for delivery agents: order assignment, GPS route tracking, and delivery confirmation, with advanced caching to reduce data use and speed launch.",
    },
    {
      title: "Sheft — Influencer-Marketing Platform",
      tech: "Flutter, Firebase, REST APIs",
      description:
        "Connects brands with creators; real-time messaging, video-request workflows, and cross-platform store deployment.",
    },
    {
      title: "2Sooq — E-Commerce Marketplace",
      tech: "Flutter, BLoC, Firebase (Auth, Firestore, FCM)",
      description:
        "Cross-platform marketplace with EN/AR support, push notifications, and secure payment flows. Live on App Store and Google Play.",
    },
    {
      title: "Qurah — Water Services Platform",
      tech: "Flutter, Firebase, REST APIs",
      description:
        "On-demand services app with real-time order tracking, technician matching, and secure electronic payments.",
    },
  ],
};

export const mobileCV: CVContent = {
  title: "Mobile Software Engineer  |  Android (Kotlin) & Cross-Platform (Flutter - KMP)",
  summary:
    "Mobile Software Engineer with 3+ years building production-grade Android applications in Kotlin and Jetpack Compose, complemented by cross-platform delivery in Kotlin Multiplatform and Flutter. Hands-on experience in the on-demand and super-app space — delivering ride-hailing-style customer apps and last-mile delivery operations tooling with GPS route tracking, real-time order workflows, and secure payments. Proven impact at scale: reduced ANR rate by 98%, grew Monthly Active Users by 500%, and cut app launch time by 40%. Strong command of REST/RESTful APIs and microservice integration, Firebase Cloud Messaging push notifications, Clean Architecture, and Git-based CI/CD.",
  experiences: [
    {
      role: "Mobile Software Engineer",
      company: "Kazyon Plus (Full-Time)",
      meta: "Super-app / On-demand retail & delivery",
      date: "Apr 2025 – Present",
      location: "Cairo, Egypt",
      achievements: [
        "Build and maintain a high-traffic super-app for retail and on-demand delivery, working in Kotlin with Jetpack Compose and Compose Multiplatform across Android and iOS.",
        "Led the architectural redesign and migration from Android Native to Kotlin Multiplatform, delivering a unified, maintainable cross-platform codebase.",
        "Drove transformative performance gains: reduced ANR rate from 7.59% to 0.14%, cut crash rate from 6.43% to 0.19%, and achieved a 40% reduction in app launch time.",
        "Contributed to 500% growth in Monthly Active Users and a 220% increase in online orders through improved stability, faster load times, and a streamlined checkout.",
        "Engineered Kazyon Biker (Android Native, Kotlin) — a last-mile delivery operations app with order assignment, GPS route tracking, and delivery confirmation; built an Asset Tracker tool in Flutter for real-time monitoring.",
        "Integrated mobile clients with backend REST APIs and microservices, and implemented push notifications via Firebase Cloud Messaging.",
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
        "Built two cross-platform apps from inception: 2Sooq (e-commerce marketplace) and Canadian Life (social networking) — both deployed to App Store and Google Play.",
        "Implemented Clean Architecture with BLoC state management and Dio-based REST API layers for scalable, testable codebases.",
        "Integrated multi-language support (EN/AR), Firebase Cloud Messaging push notifications, and secure checkout flows; optimized rendering via lazy loading and image caching.",
      ],
    },
    {
      role: "Mobile Instructor & Mentor",
      company: "Elevate Tech (Weekend Sessions)",
      meta: "Promoted from Mobile Mentor (Nov 2024)",
      date: "Mar 2025 – Feb 2026",
      location: "Cairo, Egypt",
      achievements: [
        "Lead an industry-aligned curriculum covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter — Clean Architecture, MVVM/MVI, state management, DI, and CI/CD.",
        "Conduct technical assessments and code reviews, preparing trainees to ship production-grade applications.",
      ],
    },
    {
      role: "Mobile Instructor & Mentor",
      company: "Route Academy (Weekend Sessions)",
      meta: "Promoted from Mobile Mentor (Jul 2024)",
      date: "Jul 2025 – Nov 2025",
      location: "Cairo, Egypt",
      achievements: [
        "Designed and delivered mobile development training in Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter, guiding students from foundations to advanced proficiency.",
        "Built hands-on labs aligned to production standards — Clean Architecture, state management, networking, and CI/CD.",
      ],
    },
  ],
  skills: [
    { label: "Languages", value: "Kotlin, Dart, Java, Python" },
    { label: "Android / Mobile", value: "Android Native, Jetpack Compose, Kotlin Multiplatform (KMP), Compose Multiplatform, Flutter" },
    { label: "Architecture", value: "Clean Architecture, MVI, MVVM, MVC, SOLID Principles" },
    { label: "State Management", value: "ViewModel (Android/KMP), BLoC / Cubit, Provider" },
    { label: "Networking & APIs", value: "REST / RESTful APIs, Microservices, Retrofit, Ktor, OkHttp, Dio" },
    { label: "Messaging & Push", value: "Firebase Cloud Messaging (FCM), Push Notifications" },
    { label: "Dependency Injection", value: "Hilt, Koin, GetIt, Injectable" },
    { label: "Backend & Cloud", value: "Firebase (Firestore, Auth, FCM, Crashlytics, Storage, Analytics)" },
    { label: "Local Storage", value: "Room DB, SQLite / Sqflite, Hive, Isar, DataStore" },
    { label: "DevOps & Testing", value: "Git, GitHub, CI/CD (GitHub Actions, Fastlane), SonarQube, Unit/Widget/Integration Testing" },
    { label: "Tools & Agile", value: "Git, Jira, Confluence, Figma, Adobe XD, Agile / Scrum" },
  ],
  projects: [
    {
      title: "Kazyon Plus — Super App (Retail & On-Demand)",
      tech: "Kotlin Multiplatform, Compose Multiplatform, Android Native",
      description:
        "Production super app migrated from Android Native to KMP. MVI architecture, secure payment integration, and a 40% cold-start improvement.",
    },
    {
      title: "Kazyon Biker — Last-Mile Delivery Operations App",
      tech: "Android Native, Kotlin, Jetpack Compose",
      description:
        "Field operations app for delivery agents: order assignment, GPS route tracking, and delivery confirmation, with advanced caching to reduce data use and speed launch.",
    },
    {
      title: "Sheft — Influencer-Marketing Platform",
      tech: "Flutter, Firebase, REST APIs",
      description:
        "Connects brands with creators; real-time messaging, video-request workflows, and cross-platform store deployment.",
    },
    {
      title: "2Sooq — E-Commerce Marketplace",
      tech: "Flutter, BLoC, Firebase (Auth, Firestore, FCM)",
      description:
        "Cross-platform marketplace with EN/AR support, push notifications, and secure payment flows. Live on App Store and Google Play.",
    },
    {
      title: "Qurah — Water Services Platform",
      tech: "Flutter, Firebase, REST APIs",
      description:
        "On-demand services app with real-time order tracking, technician matching, and secure electronic payments.",
    },
  ],
};

export const cvDataStore: Record<CVVersion, CVContent> = {
  fullstack: fullStackCV,
  mobile: mobileCV,
};
