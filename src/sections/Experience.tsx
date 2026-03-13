"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const experiences = [
  {
    role: "Mobile App Developer",
    company: "Kazyon Plus",
    url: "https://www.linkedin.com/company/kazyon/posts/?feedView=all",
    date: "Apr 2025 — Present",
    location: "Cairo, Egypt",
    achievements: [
      "Redesigned the Kazyon Plus app to achieve a 40% faster launch time",
      "Re-implemented UI using Android Native to improve performance and user experience",
      "Integrated REST APIs and utilized ViewModel for state management",
      "Implemented Firebase services for push notifications and analytics",
      "Applied Agile methodologies to deliver clean, maintainable code",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Moalen CO",
    url: "https://www.linkedin.com/company/moalen-co/posts/?feedView=all",
    date: "Jun 2025 — Present",
    location: "Saudi Arabia",
    achievements: [
      "Developed and deployed mobile applications, including the Sheft-app",
      "Managed the deployment process to both the App Store and Google Play",
      "Engaged in comprehensive troubleshooting and issue resolution to enhance system stability and scalability",
    ],
  },
  {
    role: "Flutter Instructor",
    company: "Route Academy",
    url: "https://www.linkedin.com/company/routeacademy/posts/?feedView=all",
    date: "Jun 2024 — Present",
    location: "Cairo, Egypt",
    achievements: [
      "Delivers comprehensive courses in Flutter and Dart from novice to advanced proficiency",
      "Spearheaded a team of mentors and implemented structured training programs",
      "Conducted detailed training on state management, core UI/UX design, and problem-solving",
    ],
  },
  {
    role: "Flutter Mentor",
    company: "Elevate Tech",
    url: "https://www.linkedin.com/company/elevatecheg/posts/?feedView=all",
    date: "Nov 2024 — Nov 2025",
    location: "Cairo, Egypt",
    achievements: [
      "Spearheaded advanced training emphasizing Agile methodologies, Clean Architecture, and CI/CD pipelines",
      "Facilitated cross-functional collaboration through the expert utilization of Jira and Confluence",
      "Provided mentorship on real-world Dart applications with a focus on advanced state management and performance optimization",
    ],
  },
  {
    role: "Flutter Developer",
    company: "LinkYou Inc.",
    url: "https://www.linkedin.com/company/linkyou-ca/posts/?feedView=all",
    date: "Sep 2024 — Apr 2025",
    location: "Toronto, Canada",
    achievements: [
      "Spearheaded the development of 2Sooq (e-commerce platform) and Canadian Life (social networking application)",
      "Guaranteed optimal performance and intuitive user interfaces using Flutter for cross-platform development",
      "Collaborated with diverse cross-functional teams to ensure the timely delivery of high-quality applications",
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