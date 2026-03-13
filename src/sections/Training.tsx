"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const trainingExperiences = [
  {
    role: "Flutter Instructor",
    organization: "Route Academy",
    url: "https://www.linkedin.com/company/routeacademy/posts/?feedView=all",
    date: "Jun 2024 — Present",
    location: "Cairo, Egypt",
    highlights: [
      "Improved and developed the content and curriculum for the Flutter track, ensuring a comprehensive learning path from beginner to advanced",
      "Delivers in-depth courses covering Flutter, Dart, state management, UI/UX design, and problem-solving techniques",
      "Spearheaded a team of mentors and implemented structured training programs for consistent quality",
    ],
  },
  {
    role: "Flutter Mentor",
    organization: "Elevate Tech",
    url: "https://www.linkedin.com/company/elevatecheg/posts/?feedView=all",
    date: "Nov 2024 — Nov 2025",
    location: "Cairo, Egypt",
    highlights: [
      "Built the system and structure for a unique learning experience, designing the training framework from the ground up",
      "Led advanced training sessions emphasizing Agile methodologies, Clean Architecture, and CI/CD pipelines",
      "Facilitated cross-functional collaboration through expert utilization of Jira and Confluence",
      "Mentored developers on real-world Dart applications with a focus on advanced state management and performance optimization",
    ],
  },
];

export default function Training() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
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
      id="training"
      className="section-padding relative"
    >
      <div className="gradient-blob gradient-blob-purple w-[400px] h-[400px] top-1/4 -right-40 absolute" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            06
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Training
          </span>
        </div>

        <h2 className="font-display text-section font-bold text-white mb-20 leading-[1.1]">
          Training <span className="text-accent">experience</span>
        </h2>

        {/* Training cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingExperiences.map((exp, i) => (
            <a
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el as unknown as HTMLDivElement;
              }}
              href={exp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative p-8 md:p-10 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 transition-all duration-500 group cursor-pointer overflow-hidden"
              data-cursor-hover
            >
              {/* Background accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="font-body text-xs uppercase tracking-wider text-accent block mb-1">
                      {exp.date}
                    </span>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-1">
                      {exp.role}
                    </h3>
                    <span className="font-body text-sm text-text-muted">
                      {exp.organization} · {exp.location}
                    </span>
                  </div>

                  {/* External link icon */}
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
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="font-body text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-accent mt-1 shrink-0">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
