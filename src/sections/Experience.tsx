"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const experiences = [
  {
    role: "Full-Stack Software Engineer",
    company: "Kazyon Plus",
    url: "https://www.linkedin.com/company/kazyon/posts/?feedView=all",
    date: "Apr 2025 — Present",
    location: "Cairo, Egypt",
    achievements: [
      "Build and maintain a high-traffic super-app for retail and on-demand delivery across Kotlin/Jetpack Compose (Android/iOS via Compose Multiplatform) and Java/Spring Boot on the backend.",
      "Developed and maintained backend services for Kazyon Ordering and the Loyalty System as Spring Boot REST microservices consumed by mobile clients, serving live production traffic across Egypt and Morocco.",
      "Led the architectural redesign and migration from Android Native to Kotlin Multiplatform, delivering a unified, maintainable cross-platform codebase.",
      "Reduced ANR rate from 7.59% to 0.14%, cut crash rate from 6.43% to 0.19%, and achieved a 40% reduction in app launch time.",
      "Contributed to 500% growth in Monthly Active Users and a 220% increase in online orders through improved stability, faster load times, and a streamlined checkout.",
      "Engineered Kazyon Biker (Android Native, Kotlin) — a last-mile delivery operations app with order assignment, GPS route tracking, and delivery confirmation; built an Asset Tracker tool in Flutter for real-time monitoring.",
      "Integrated mobile clients with backend REST APIs and microservices, and implemented push notifications via Firebase Cloud Messaging.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Moalen CO",
    url: "https://www.linkedin.com/company/moalen-co/posts/?feedView=all",
    date: "Jun 2025 — Feb 2026",
    location: "Saudi Arabia",
    achievements: [
      "Architected and shipped the Sheft influencer-marketing platform with content-request workflows, real-time messaging, and store deployment to App Store and Google Play.",
      "Established CI/CD pipelines with GitHub Actions, automating build, test, and deployment for iOS and Android.",
      "Partnered with backend and QA teams to resolve performance bottlenecks, optimizing API response handling and overall system stability.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "LinkYou Inc.",
    url: "https://www.linkedin.com/company/linkyou-ca/posts/?feedView=all",
    date: "Sep 2024 — Apr 2025",
    location: "Toronto, Canada",
    achievements: [
      "Built two cross-platform apps from inception: 2Sooq (e-commerce marketplace) and Canadian Life (social networking) — both deployed to App Store and Google Play.",
      "Implemented Clean Architecture with BLoC state management and Dio-based REST API layers for scalable, testable codebases.",
      "Integrated multi-language support (EN/AR), Firebase Cloud Messaging push notifications, and secure checkout flows; optimized rendering via lazy loading and image caching.",
    ],
  },
  {
    role: "Mobile Instructor",
    company: "Elevate Tech",
    url: "https://www.linkedin.com/company/elevatecheg/posts/?feedView=all",
    date: "Mar 2025 — Feb 2026",
    location: "Cairo, Egypt",
    achievements: [
      "Lead an industry-aligned curriculum covering Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter — Clean Architecture, MVVM/MVI, state management, DI, and CI/CD.",
      "Conduct technical assessments and code reviews, preparing trainees to ship production-grade applications.",
      "Promoted from Mobile Mentor (Nov 2024) based on training impact and student outcomes.",
    ],
  },
  {
    role: "Mobile Instructor",
    company: "Route Academy",
    url: "https://www.linkedin.com/company/routeacademy/posts/?feedView=all",
    date: "Jul 2025 — Nov 2025",
    location: "Cairo, Egypt",
    achievements: [
      "Designed and delivered mobile development training in Android Native (Kotlin, Jetpack Compose), Kotlin Multiplatform, and Flutter, guiding students from foundations to advanced proficiency.",
      "Built hands-on labs aligned to production standards — Clean Architecture, state management, networking, and CI/CD.",
      "Promoted from Mobile Mentor (Jul 2024) based on training quality and learner progression.",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    // Timeline line fills as you scroll
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      }
    );

    // Each item reveals on scroll
    itemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { y: 60, opacity: 0, x: i % 2 === 0 ? -30 : 30 },
        {
          y: 0,
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-padding relative overflow-hidden"
    >
      <div className="gradient-blob gradient-blob-purple w-[250px] h-[250px] md:w-[500px] md:h-[500px] top-1/3 -left-32 md:-left-60 absolute" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8 md:mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            02
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Experience
          </span>
        </div>

        <h2 className="font-display text-section font-bold text-white mb-10 md:mb-20 leading-[1.1]">
          Where I&apos;ve <span className="text-accent">worked</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2">
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-accent to-purple-500 origin-top"
              style={{ height: "100%", transformOrigin: "top" }}
            />
          </div>

          {/* Experience items */}
          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) itemsRef.current[i] = el;
                }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse md:text-right"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(37,99,235,0.5)]" />

                {/* Card */}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block ml-16 md:ml-0 md:w-[calc(50%-3rem)] p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500 group cursor-pointer ${
                    i % 2 === 0 ? "" : "md:ml-auto"
                  }`}
                >
                  {/* Header Container with Icon */}
                  <div 
                    className={`flex items-start justify-between gap-4 mb-4 ${
                      i % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-body text-xs uppercase tracking-wider text-accent">
                        {exp.date}
                      </span>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <span className="font-body text-sm text-text-muted">
                        {exp.company} · {exp.location}
                      </span>
                    </div>

                    {/* External Link SVG Icon */}
                    <div className="text-white/20 group-hover:text-accent transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 mt-1 shrink-0">
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </div>

                  <ul
                    className={`space-y-2 ${
                      i % 2 !== 0 ? "md:text-right" : ""
                    }`}
                  >
                    {exp.achievements.map((achievement, j) => (
                      <li
                        key={j}
                        className="font-body text-sm text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-accent mt-1 shrink-0 text-start">▸</span>
                        <span className="text-start">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}