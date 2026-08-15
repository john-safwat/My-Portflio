"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ExperienceItem, experienceData } from "@/data/experienceData";
import Link from "next/link";
import { TbArrowRight, TbSparkles, TbLayersIntersect, TbBrandLinkedin } from "react-icons/tb";

interface ExperienceSectionProps {
  onOpenExperienceModal?: (item: ExperienceItem) => void;
}

export default function Experience({ onOpenExperienceModal }: ExperienceSectionProps) {
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
      <div className="gradient-blob gradient-blob-purple w-[250px] h-[250px] md:w-[500px] md:h-[500px] top-1/3 -left-32 md:-left-60 absolute pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-body text-sm text-accent font-semibold">
                02
              </span>
              <div className="h-[1px] w-16 bg-accent/50" />
              <span className="font-body text-sm text-text-muted">
                Career Experience
              </span>
            </div>

            <h2 className="font-display text-section font-bold text-white leading-[1.1]">
              Where I&apos;ve <span className="text-accent">Worked</span> &amp; Led
            </h2>
          </div>

          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm font-body text-accent hover:text-accent-light transition-colors group shrink-0 font-medium"
          >
            <span>Full career history</span>
            <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

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
          <div className="space-y-12 md:space-y-20">
            {experienceData.map((exp, i) => (
              <div
                key={exp.id}
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
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(37,99,235,0.6)]" />

                {/* Card */}
                <div
                  onClick={() => onOpenExperienceModal?.(exp)}
                  className={`block ml-16 md:ml-0 md:w-[calc(50%-3rem)] p-7 sm:p-8 rounded-2xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300 group cursor-pointer ${
                    i % 2 === 0 ? "" : "md:ml-auto"
                  }`}
                  data-cursor-hover
                >
                  {/* Top Header */}
                  <div
                    className={`flex items-start justify-between gap-4 mb-4 ${
                      i % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-body text-xs uppercase tracking-wider text-accent font-semibold">
                          {exp.date}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-text-muted">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {exp.role}
                      </h3>
                      <span className="font-body text-sm text-text-muted">
                        {exp.company} · {exp.location}
                      </span>
                    </div>

                    {/* LinkedIn External icon */}
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-text-muted hover:text-accent transition-colors p-1.5 rounded-lg hover:bg-white/5"
                        title="View company on LinkedIn"
                        aria-label="LinkedIn"
                      >
                        <TbBrandLinkedin className="w-4 h-4 text-blue-400" />
                      </a>
                    )}
                  </div>

                  {/* Primary highlight metric */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className={`mb-4 flex flex-wrap gap-2 ${i % 2 !== 0 ? "md:justify-end" : ""}`}>
                      {exp.metrics.slice(0, 2).map((m, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-body font-medium bg-accent/10 text-accent-light border border-accent/20"
                        >
                          <TbSparkles className="w-3 h-3" />
                          <span>{m.value}</span>
                          <span className="text-text-muted text-[10px]">({m.label})</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Achievements Preview */}
                  <ul className={`space-y-2 mb-5 ${i % 2 !== 0 ? "md:text-right" : ""}`}>
                    {exp.achievements.slice(0, 3).map((achievement, j) => (
                      <li
                        key={j}
                        className="font-body text-xs sm:text-sm text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0 text-start">▸</span>
                        <span className="text-start line-clamp-2">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Footer */}
                  <div
                    className={`pt-3 border-t border-white/5 flex items-center justify-between text-xs text-accent group-hover:text-accent-light font-body uppercase tracking-wider font-semibold ${
                      i % 2 !== 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <TbLayersIntersect className="w-4 h-4" />
                      Explore Role &amp; Architecture
                    </span>
                    <span className="text-text-muted group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}