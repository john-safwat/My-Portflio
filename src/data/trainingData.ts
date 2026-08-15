export interface TrainingTrack {
  title: string;
  duration: string;
  focus: string[];
  description: string;
}

export interface TrainingItem {
  id: string;
  slug: string;
  role: string;
  organization: string;
  url: string;
  date: string;
  location: string;
  summary: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  tracks: TrainingTrack[];
  mentorshipMethodology: string[];
  keyTopicsTaught: string[];
}

export const trainingData: TrainingItem[] = [
  {
    id: "route-academy",
    slug: "route-academy",
    role: "Mobile Instructor (Android, Flutter & React Native)",
    organization: "Route Academy",
    url: "https://www.linkedin.com/company/routeacademy/posts/?feedView=all",
    date: "Jul 2024 — Present",
    location: "Cairo, Egypt",
    summary:
      "Currently instructing comprehensive mobile engineering tracks for 100+ engineers across Android Native (Kotlin & Jetpack Compose), Flutter (Dart & BLoC), and React Native. Focusing on industry production standards, Clean Architecture, and real-world project delivery.",
    stats: [
      { label: "Students Mentored", value: "100+" },
      { label: "Lab Projects", value: "20+" },
      { label: "Tracks Instructed", value: "Android, Flutter, React Native" },
      { label: "Satisfaction", value: "4.9 / 5.0" },
    ],
    highlights: [
      "Instructing mobile engineering bootcamps across three major mobile ecosystems: Android Native, Flutter, and React Native.",
      "Building hands-on production labs: E-commerce apps, food delivery clients, chat applications, and ride-hailing tracking clones.",
      "Delivering deep dives into Clean Architecture, reactive state management (BLoC, ViewModel, Redux/Zustand), and offline database sync.",
      "Guiding learners through API debugging, memory profiling, and automated app store publishing.",
    ],
    tracks: [
      {
        title: "Modern Android Native (Kotlin & Jetpack Compose)",
        duration: "10 Weeks",
        focus: ["Kotlin Coroutines & Flow", "Jetpack Compose UI", "Clean Architecture + MVVM/MVI", "Room DB", "Retrofit"],
        description:
          "Mastering declarative Android development from Kotlin fundamentals to multi-module architecture, dependency injection, and background work.",
      },
      {
        title: "Flutter Clean Architecture & BLoC",
        duration: "8 Weeks",
        focus: ["Dart 3 Patterns", "BLoC & Cubit State Management", "Dio Interceptors", "Firebase & Socket.IO", "Store Deployment"],
        description:
          "Building performant cross-platform iOS and Android apps with strict separation of concerns and automated testing.",
      },
      {
        title: "React Native & Cross-Platform Fundamentals",
        duration: "6 Weeks",
        focus: ["TypeScript & React Hooks", "React Native CLI / Expo", "State Management (Redux/Zustand)", "Native Modules & APIs", "Navigation"],
        description:
          "Equipping engineers to build cross-platform mobile experiences with React Native, modern hook-based architectures, and native device bridge integrations.",
      },
    ],
    mentorshipMethodology: [
      "Hands-On Debugging: Teaching students how to trace stack traces and profile memory leaks.",
      "Pair Programming: Live refactoring of student code during weekly interactive workshops.",
      "Career Mentorship: Resume reviews, portfolio building, and technical mock interviews.",
    ],
    keyTopicsTaught: [
      "Kotlin",
      "Android Native",
      "Jetpack Compose",
      "Flutter",
      "Dart",
      "React Native",
      "TypeScript",
      "Clean Architecture",
      "MVI / MVVM",
      "BLoC",
      "Retrofit & Dio",
      "Room & SQLite",
      "Git & CI/CD",
    ],
  },
  {
    id: "elevate-tech",
    slug: "elevate-tech",
    role: "Mobile Instructor & Lead Mentor",
    organization: "Elevate Tech",
    url: "https://www.linkedin.com/company/elevatecheg/posts/?feedView=all",
    date: "Mar 2025 — Feb 2026",
    location: "Cairo, Egypt",
    summary:
      "Instructed and mentored 120+ software engineers in advanced mobile engineering. Designed rigorous hands-on tracks covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform (KMP), and Flutter Clean Architecture.",
    stats: [
      { label: "Engineers Mentored", value: "120+" },
      { label: "Graduation Projects", value: "24+" },
      { label: "Hiring Rate", value: "85%" },
      { label: "Student Rating", value: "4.9 / 5.0" },
    ],
    highlights: [
      "Designed and delivered curriculum covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter.",
      "Conducted weekly code reviews enforcing Clean Architecture, MVVM/MVI, SOLID principles, and clean Git commits.",
      "Taught automated testing strategies (Unit tests with JUnit/Mockk, Widget/UI tests) and CI/CD setup via GitHub Actions.",
      "Mentored student capstone projects through complete lifecycles from architecture design to store submission.",
    ],
    tracks: [
      {
        title: "Modern Android Native (Kotlin & Compose)",
        duration: "10 Weeks",
        focus: ["Kotlin Coroutines & Flow", "Jetpack Compose UI", "Clean Arch + MVI", "Hilt & Koin DI", "Room & DataStore"],
        description:
          "In-depth track taking students from Kotlin fundamentals to building production-grade declarative UIs with unidirectional data flow and offline-first data caching.",
      },
      {
        title: "Kotlin Multiplatform (KMP & CMP)",
        duration: "6 Weeks",
        focus: ["Shared Kotlin Business Logic", "Compose Multiplatform", "Ktor Networking", "Expect/Actual Mechanism", "Cocoapods & SPM Integration"],
        description:
          "Pioneering cross-platform engineering with Kotlin Multiplatform, showing how to share domain use cases, repositories, and state machines between Android and iOS.",
      },
      {
        title: "Flutter Clean Architecture & BLoC",
        duration: "8 Weeks",
        focus: ["Dart 3 Patterns", "BLoC & Cubit State Management", "Dio Interceptors", "Firebase Integration", "App Store & Play Store Deployment"],
        description:
          "Mastering Flutter app architecture with strict separation of concerns, testable data providers, and resilient error recovery.",
      },
    ],
    mentorshipMethodology: [
      "Code-First Learning: 80% practical live coding and lab exercises, 20% theory.",
      "Industry Code Reviews: Every PR reviewed against senior production standards.",
      "System Design & Interview Prep: Dedicated modules on algorithmic complexity and architectural problem-solving.",
    ],
    keyTopicsTaught: [
      "Kotlin",
      "Jetpack Compose",
      "Kotlin Multiplatform (KMP)",
      "Compose Multiplatform",
      "Flutter & Dart",
      "Clean Architecture",
      "MVI / MVVM",
      "State Management (BLoC, ViewModel)",
      "Coroutines & Flow",
      "Networking (Retrofit, Ktor, Dio)",
      "Dependency Injection (Hilt, Koin, GetIt)",
      "CI/CD (GitHub Actions, Fastlane)",
    ],
  },
];
