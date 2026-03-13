"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const experiences = [
  {
    role: "Mobile App Developer",
    company: "Kazyon Plus",
    date: "Apr 2025 — Present",
    location: "Cairo, Egypt",
    achievements: [
      "Led migration from Android Native to Kotlin Multiplatform",
      "Reduced ANR rate from 7.59% → 0.14%",
      "500% MAU growth, 220% increase in online orders",
      "Built internal tools: Asset Tracker (Flutter) & Bikers (Android Native)",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Moalen CO",
    date: "Jun 2025 — Present",
    location: "Saudi Arabia",
    achievements: [
      "Built Sheft influencer-marketing platform",
      "Set up CI/CD pipelines via GitHub Actions",
      "Cross-platform deployment to App Store & Google Play",
    ],
  },
  {
    role: "Flutter Instructor",
    company: "Route Academy",
    date: "Jun 2024 — Present",
    location: "Cairo, Egypt",
    achievements: [
      "Designs Flutter & Dart curricula",
      "Mentors students from fundamentals to advanced cross-platform development",
    ],
  },
  {
    role: "Flutter Mentor",
    company: "Elevate Tech",
    date: "Nov 2024 — Nov 2025",
    location: "Cairo, Egypt",
    achievements: [
      "Advanced Flutter training with Agile, Clean Architecture, CI/CD",
      "Simulated production workflows via Jira & Confluence",
    ],
  },
  {
    role: "Flutter Developer",
    company: "LinkYou Inc.",
    date: "Sep 2024 — Apr 2025",
    location: "Toronto, Canada",
    achievements: [
      "Built 2Sooq (e-commerce) and Canadian Life (social app)",
      "Clean Architecture + BLoC + Dio REST APIs",
      "Multi-language support (EN/AR), Firebase, secure checkout",
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
      className="section-padding relative"
    >
      <div className="gradient-blob gradient-blob-purple w-[500px] h-[500px] top-1/3 -left-60 absolute" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            02
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Experience
          </span>
        </div>

        <h2 className="font-display text-section font-bold text-white mb-20 leading-[1.1]">
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
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500 group ${
                    i % 2 === 0 ? "" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-col gap-1 mb-4">
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
                        <span className="text-accent mt-1 shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
