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
    id: "elevate-tech",
    slug: "elevate-tech",
    role: "Mobile Instructor & Lead Mentor",
    organization: "Elevate Tech",
    url: "https://www.linkedin.com/company/elevatecheg/posts/?feedView=all",
    date: "Mar 2025 — Feb 2026",
    location: "Cairo, Egypt",
    summary:
      "Instructed and mentored 120+ aspiring and junior software engineers in advanced mobile engineering. Designed rigorous hands-on tracks covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform (KMP), and Flutter Clean Architecture.",
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
  {
    id: "route-academy",
    slug: "route-academy",
    role: "Mobile Instructor & Mentor",
    organization: "Route Academy",
    url: "https://www.linkedin.com/company/routeacademy/posts/?feedView=all",
    date: "Jul 2025 — Nov 2025",
    location: "Cairo, Egypt",
    summary:
      "Delivered intensive mobile development bootcamps for 80+ trainees. Focused on core engineering fundamentals, Clean Architecture, reactive state management, and real-world API integration.",
    stats: [
      { label: "Students Mentored", value: "80+" },
      { label: "Lab Projects", value: "15+" },
      { label: "Role Progression", value: "Promoted to Instructor" },
      { label: "Satisfaction", value: "4.8 / 5.0" },
    ],
    highlights: [
      "Instructed mobile engineering bootcamps guiding students from core fundamentals to advanced proficiency.",
      "Built hands-on production labs: E-commerce apps, weather clients, chat applications, and ride-hailing clones.",
      "Promoted from Mobile Mentor to Instructor based on training excellence and high student achievement rates.",
      "Guided learners through API debugging with Postman, Charles Proxy, and Chrome DevTools.",
    ],
    tracks: [
      {
        title: "Mobile Development Fundamentals to Advanced",
        duration: "12 Weeks",
        focus: ["OOP & SOLID Principles", "Android Native (Kotlin)", "Flutter Development", "REST API Consumption", "Local Databases"],
        description:
          "Foundational engineering bootcamp establishing solid problem-solving skills, algorithmic thinking, and modern mobile app structures.",
      },
      {
        title: "State Management & Production Standards",
        duration: "4 Weeks",
        focus: ["BLoC Pattern", "MVVM Pattern", "Repository Pattern", "Error Handling & Logging", "Git Team Workflows"],
        description:
          "Transitioning students from basic scripts to scalable, maintainable multi-module software architectures.",
      },
    ],
    mentorshipMethodology: [
      "Hands-On Debugging: Teaching students how to trace stack traces and profile memory leaks.",
      "Pair Programming: Live refactoring of student code during weekly interactive workshops.",
      "Career Mentorship: Resume reviews, portfolio building, and technical mock interviews.",
    ],
    keyTopicsTaught: [
      "Kotlin",
      "Android Studio",
      "Flutter",
      "Dart",
      "Clean Architecture",
      "MVVM",
      "BLoC",
      "Retrofit & REST APIs",
      "SQLite / Room",
      "Git & GitHub",
      "Postman",
    ],
  },
];
