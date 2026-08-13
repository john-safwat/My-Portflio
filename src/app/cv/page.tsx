"use client";

import { useState } from "react";
import Link from "next/link";

type CVVersion = "fullstack" | "mobile";

interface ExperienceEntry {
  role: string;
  company: string;
  meta: string;
  date: string;
  achievements: string[];
}

interface ProjectEntry {
  title: string;
  tech: string;
  description: string;
}

interface CVData {
  title: string;
  summary: string;
  experiences: ExperienceEntry[];
  skills: { label: string; value: string }[];
  projects: ProjectEntry[];
}

const fullStackCV: CVData = {
  title:
    "Full-Stack Software Engineer  |  Backend (Java, Spring Boot) & Mobile (Android/Kotlin, Flutter/KMP)",
  summary:
    "Full-stack Software Engineer with 3+ years building production-grade Android applications in Kotlin and Jetpack Compose, complemented by cross-platform delivery in Kotlin Multiplatform and Flutter, and backend services in Java and Spring Boot. Hands-on experience in the on-demand and super-app space — delivering ride-hailing-style customer apps, last-mile delivery operations tooling with GPS route tracking, and the backend Ordering and Loyalty services powering a multi-country super-app live in Egypt and Morocco. Proven impact at scale: reduced ANR rate by 98%, grew Monthly Active Users by 500%, and cut app launch time by 40%. Strong command of REST/RESTful APIs, Spring Boot microservices, Firebase Cloud Messaging push notifications, Clean Architecture, and Git-based CI/CD. Thrives in fast-moving, collaborative teams that value root-cause analysis and shipping quality on schedule.",
  experiences: [
    {
      role: "Full-Stack Software Engineer — Kazyon Plus",
      company: "Kazyon Plus (Full-Time) · Cairo, Egypt",
      meta: "super-app / on-demand retail & delivery",
      date: "Apr 2025 – Present",
      achievements: [
        "Build and maintain a high-traffic super-app for retail and on-demand delivery, working across the full stack in Kotlin/Jetpack Compose (Android/iOS via Compose Multiplatform) and Java/Spring Boot on the backend.",
        "Developed and maintained backend services for Kazyon Ordering Services and the Loyalty System, built with Spring Boot and exposed as REST APIs/microservices consumed by the mobile clients, serving live production traffic across two countries — Egypt and Morocco.",
        "Led the architectural redesign and migration from Android Native to Kotlin Multiplatform, delivering a unified, maintainable cross-platform codebase.",
        "Drove transformative performance gains: reduced ANR rate from 7.59% to 0.14%, cut crash rate from 6.43% to 0.19%, and achieved a 40% reduction in app launch time.",
        "Contributed to 500% growth in Monthly Active Users and a 220% increase in online orders through improved stability, faster load times, a streamlined checkout, and a more reliable ordering/loyalty backend.",
        "Engineered Kazyon Biker (Android Native, Kotlin) — a last-mile delivery operations app for field agents with order assignment, GPS route tracking, and delivery confirmation; built an Asset Tracker tool in Flutter for real-time monitoring.",
        "Integrated mobile clients with backend REST APIs and microservices (including the Spring Boot Ordering and Loyalty services), and implemented push notifications via Firebase Cloud Messaging.",
      ],
    },
    {
      role: "Flutter Developer — Moalen CO",
      company: "Moalen CO (Part-Time) · Saudi Arabia",
      meta: "",
      date: "Jun 2025 – Feb 2026",
      achievements: [
        "Architected and shipped the Sheft influencer-marketing platform with content-request workflows, real-time messaging, and store deployment to App Store and Google Play.",
        "Established CI/CD pipelines with GitHub Actions, automating build, test, and deployment for iOS and Android.",
        "Partnered with backend and QA teams to resolve performance bottlenecks, optimizing API response handling and overall system stability.",
      ],
    },
    {
      role: "Flutter Developer — LinkYou Inc.",
      company: "LinkYou Inc. (Full-Time) · Toronto, Canada",
      meta: "",
      date: "Sep 2024 – Apr 2025",
      achievements: [
        "Built two cross-platform apps from inception: 2Sooq (e-commerce marketplace) and Canadian Life (social networking) — both deployed to App Store and Google Play.",
        "Implemented Clean Architecture with BLoC state management and Dio-based REST API layers for scalable, testable codebases.",
        "Integrated multi-language support (EN/AR), Firebase Cloud Messaging push notifications, and secure checkout flows; optimized rendering via lazy loading and image caching.",
      ],
    },
    {
      role: "Mobile Instructor — Elevate Tech",
      company: "Elevate Tech (Weekend Sessions) · Cairo, Egypt",
      meta: "promoted from Mobile Mentor (Nov 2024)",
      date: "Mar 2025 – Feb 2026",
      achievements: [
        "Lead an industry-aligned curriculum covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter — Clean Architecture, MVVM/MVI, state management, DI, and CI/CD.",
        "Conduct technical assessments and code reviews, preparing trainees to ship production-grade applications.",
      ],
    },
    {
      role: "Mobile Instructor — Route Academy",
      company: "Route Academy (Weekend Sessions) · Cairo, Egypt",
      meta: "promoted from Mobile Mentor (Jul 2024)",
      date: "Jul 2025 – Nov 2025",
      achievements: [
        "Designed and delivered mobile development training in Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter, guiding students from foundations to advanced proficiency.",
        "Built hands-on labs aligned to production standards — Clean Architecture, state management, networking, and CI/CD.",
      ],
    },
  ],
  skills: [
    { label: "Languages", value: "Kotlin, Java, Dart, Python" },
    {
      label: "Backend",
      value:
        "Spring Boot, Spring MVC, Spring Data JPA, REST API design, Microservices architecture",
    },
    {
      label: "Android / Mobile",
      value:
        "Android Native, Jetpack Compose, Kotlin Multiplatform (KMP), Compose Multiplatform, Flutter",
    },
    { label: "Architecture", value: "Clean Architecture, MVI, MVVM, MVC" },
    {
      label: "State Management",
      value: "ViewModel (Android/KMP), BLoC/Cubit, Provider",
    },
    {
      label: "Networking & APIs",
      value: "REST / RESTful APIs, microservices, Retrofit, Ktor, OkHttp, Dio",
    },
    {
      label: "Messaging & Push",
      value: "Firebase Cloud Messaging (FCM), push notifications",
    },
    { label: "Dependency Injection", value: "Hilt, Koin, GetIt, Injectable" },
    {
      label: "Backend & Cloud",
      value:
        "Spring Boot, Firebase (Firestore, Auth, FCM, Crashlytics, Storage, Analytics)",
    },
    { label: "Local Storage", value: "Room, SQLite/Sqflite, Hive, Isar" },
    {
      label: "DevOps & Testing",
      value:
        "Git, GitHub, CI/CD (GitHub Actions, Fastlane), SonarQube, Unit/Widget/Integration Testing",
    },
    {
      label: "Tools & Collaboration",
      value: "Git, Jira, Confluence, Figma, Adobe XD, Agile/Scrum",
    },
  ],
  projects: [
    {
      title: "Kazyon Ordering & Loyalty Services — Backend (Spring Boot)",
      tech: "Java, Spring Boot, REST APIs, Microservices",
      description:
        "Backend services powering the Kazyon Plus super-app's ordering flow and customer loyalty program, live in production across Egypt and Morocco; built as REST/microservice APIs consumed by the Android/iOS mobile clients.",
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

const mobileCV: CVData = {
  title:
    "Mobile Software Engineer  |  Android (Kotlin) & Cross-Platform (Flutter - KMP)",
  summary:
    "Mobile Software Engineer with 3+ years building production-grade Android applications in Kotlin and Jetpack Compose, complemented by cross-platform delivery in Kotlin Multiplatform and Flutter. Hands-on experience in the on-demand and super-app space — delivering ride-hailing-style customer apps and last-mile delivery operations tooling with GPS route tracking, real-time order workflows, and secure payments. Proven impact at scale: reduced ANR rate by 98%, grew Monthly Active Users by 500%, and cut app launch time by 40%. Strong command of REST/RESTful APIs and microservice integration, Firebase Cloud Messaging push notifications, Clean Architecture, and Git-based CI/CD. Thrives in fast-moving, collaborative teams that value root-cause analysis and shipping quality on schedule.",
  experiences: [
    {
      role: "Mobile Software Engineer — Kazyon Plus",
      company: "Kazyon Plus (Full-Time) · Cairo, Egypt",
      meta: "super-app / on-demand retail & delivery",
      date: "Apr 2025 – Present",
      achievements: [
        "Build and maintain a high-traffic super-app for retail and on-demand delivery, working in Kotlin with Jetpack Compose and Compose Multiplatform across Android and iOS.",
        "Led the architectural redesign and migration from Android Native to Kotlin Multiplatform, delivering a unified, maintainable cross-platform codebase.",
        "Drove transformative performance gains: reduced ANR rate from 7.59% to 0.14%, cut crash rate from 6.43% to 0.19%, and achieved a 40% reduction in app launch time.",
        "Contributed to 500% growth in Monthly Active Users and a 220% increase in online orders through improved stability, faster load times, and a streamlined checkout.",
        "Engineered Kazyon Biker (Android Native, Kotlin) — a last-mile delivery operations app for field agents with order assignment, GPS route tracking, and delivery confirmation; built an Asset Tracker tool in Flutter for real-time monitoring.",
        "Integrated mobile clients with backend REST APIs and microservices, and implemented push notifications via Firebase Cloud Messaging.",
      ],
    },
    {
      role: "Flutter Developer — Moalen CO",
      company: "Moalen CO (Part-Time) · Saudi Arabia",
      meta: "",
      date: "Jun 2025 – Feb 2026",
      achievements: [
        "Architected and shipped the Sheft influencer-marketing platform with content-request workflows, real-time messaging, and store deployment to App Store and Google Play.",
        "Established CI/CD pipelines with GitHub Actions, automating build, test, and deployment for iOS and Android.",
        "Partnered with backend and QA teams to resolve performance bottlenecks, optimizing API response handling and overall system stability.",
      ],
    },
    {
      role: "Flutter Developer — LinkYou Inc.",
      company: "LinkYou Inc. (Full-Time) · Toronto, Canada",
      meta: "",
      date: "Sep 2024 – Apr 2025",
      achievements: [
        "Built two cross-platform apps from inception: 2Sooq (e-commerce marketplace) and Canadian Life (social networking) — both deployed to App Store and Google Play.",
        "Implemented Clean Architecture with BLoC state management and Dio-based REST API layers for scalable, testable codebases.",
        "Integrated multi-language support (EN/AR), Firebase Cloud Messaging push notifications, and secure checkout flows; optimized rendering via lazy loading and image caching.",
      ],
    },
    {
      role: "Mobile Instructor — Elevate Tech",
      company: "Elevate Tech (Weekend Sessions) · Cairo, Egypt",
      meta: "promoted from Mobile Mentor (Nov 2024)",
      date: "Mar 2025 – Feb 2026",
      achievements: [
        "Lead an industry-aligned curriculum covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter — Clean Architecture, MVVM/MVI, state management, DI, and CI/CD.",
        "Conduct technical assessments and code reviews, preparing trainees to ship production-grade applications.",
      ],
    },
    {
      role: "Mobile Instructor — Route Academy",
      company: "Route Academy (Weekend Sessions) · Cairo, Egypt",
      meta: "promoted from Mobile Mentor (Jul 2024)",
      date: "Jul 2025 – Nov 2025",
      achievements: [
        "Designed and delivered mobile development training in Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter, guiding students from foundations to advanced proficiency.",
        "Built hands-on labs aligned to production standards — Clean Architecture, state management, networking, and CI/CD.",
      ],
    },
  ],
  skills: [
    { label: "Languages", value: "Kotlin, Dart, Java, Python" },
    {
      label: "Android / Mobile",
      value:
        "Android Native, Jetpack Compose, Kotlin Multiplatform (KMP), Compose Multiplatform, Flutter",
    },
    { label: "Architecture", value: "Clean Architecture, MVI, MVVM, MVC" },
    {
      label: "State Management",
      value: "ViewModel (Android/KMP), BLoC/Cubit, Provider",
    },
    {
      label: "Networking & APIs",
      value: "REST / RESTful APIs, microservices, Retrofit, Ktor, OkHttp, Dio",
    },
    {
      label: "Messaging & Push",
      value: "Firebase Cloud Messaging (FCM), push notifications",
    },
    { label: "Dependency Injection", value: "Hilt, Koin, GetIt, Injectable" },
    {
      label: "Backend & Cloud",
      value:
        "Firebase (Firestore, Auth, FCM, Crashlytics, Storage, Analytics)",
    },
    { label: "Local Storage", value: "Room, SQLite/Sqflite, Hive, Isar" },
    {
      label: "DevOps & Testing",
      value:
        "Git, GitHub, CI/CD (GitHub Actions, Fastlane), SonarQube, Unit/Widget/Integration Testing",
    },
    {
      label: "Tools & Collaboration",
      value: "Git, Jira, Confluence, Figma, Adobe XD, Agile/Scrum",
    },
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

const cvData: Record<CVVersion, CVData> = {
  fullstack: fullStackCV,
  mobile: mobileCV,
};

export default function CVPage() {
  const [version, setVersion] = useState<CVVersion>("fullstack");
  const data = cvData[version];

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <div className="cv-page">
      {/* Toolbar — hidden on print */}
      <div className="cv-no-print sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          <Link
            href="/"
            className="font-body text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to portfolio
          </Link>

          <div className="flex items-center gap-3">
            {/* Version toggle */}
            <div className="inline-flex rounded-full border border-gray-300 overflow-hidden">
              <button
                onClick={() => setVersion("fullstack")}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  version === "fullstack"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:text-gray-900"
                }`}
              >
                Full-Stack
              </button>
              <button
                onClick={() => setVersion("mobile")}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors ${
                  version === "mobile"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:text-gray-900"
                }`}
              >
                Mobile
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-xs uppercase tracking-wider hover:bg-blue-700 transition-colors"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              Save as PDF
            </button>
          </div>
        </div>
      </div>

      {/* CV sheet */}
      <div className="cv-sheet">
        {/* Header */}
        <header className="mb-2">
          <h1 className="cv-name">JOHN SAFWAT BOLES</h1>
          <p className="cv-title">{data.title}</p>
          <p className="cv-contact">
            johnsafwat362@gmail.com  |  +20 104 047 6728  |  Cairo, Egypt
          </p>
          <p className="cv-contact">
            <a href="https://www.linkedin.com/in/johnsafwat-mobiledev/">
              LinkedIn
            </a>{"  |  "}
            <a href="https://github.com/john-safwat">GitHub</a>{"  |  "}
            <a href="https://my-portflio-mu.vercel.app/">Portfolio</a>
          </p>
        </header>

        {/* Summary */}
        <section>
          <h2>Professional Summary</h2>
          <p>{data.summary}</p>
        </section>

        {/* Experience */}
        <section>
          <h2>Professional Experience</h2>
          <div className="space-y-5">
            {data.experiences.map((exp, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <span className="cv-exp-role">{exp.role}</span>
                  <span className="cv-exp-date">{exp.date}</span>
                </div>
                <p className="cv-exp-company">
                  {exp.company}
                  {exp.meta && <span className="text-gray-500"> — {exp.meta}</span>}
                </p>
                <ul className="mt-2 space-y-1.5 pl-5 list-disc">
                  {exp.achievements.map((a, j) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2>Technical Skills</h2>
          <div className="space-y-1">
            {data.skills.map((skill, i) => (
              <p key={i} className="cv-skills-line">
                <strong>{skill.label}:</strong> {skill.value}
              </p>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2>Key Projects</h2>
          <div className="space-y-3">
            {data.projects.map((project, i) => (
              <div key={i}>
                <p>
                  <span className="cv-project-title">{project.title}</span>{" "}
                  <span className="cv-project-tech">|  {project.tech}</span>
                </p>
                <p className="mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2>Education</h2>
          <div className="flex items-baseline justify-between gap-4 flex-wrap">
            <span className="cv-exp-role">BSc in Computer Science</span>
            <span className="cv-exp-date">2020 – 2024</span>
          </div>
          <p className="cv-exp-company">
            Modern University for Technology & Information (MTI) · Cairo, Egypt —
            GPA 3.59 / 4.0
          </p>
        </section>

        {/* Languages */}
        <section>
          <h2>Languages</h2>
          <p>Arabic (Native)  |  English (Professional Working Proficiency)</p>
        </section>
      </div>
    </div>
  );
}