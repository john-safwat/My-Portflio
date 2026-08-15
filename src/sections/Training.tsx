"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { TrainingItem, trainingData } from "@/data/trainingData";
import Link from "next/link";
import { TbArrowRight, TbSparkles, TbBook, TbBrandLinkedin } from "react-icons/tb";

interface TrainingSectionProps {
  onOpenTrainingModal?: (item: TrainingItem) => void;
}

export default function Training({ onOpenTrainingModal }: TrainingSectionProps) {
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
      className="section-padding relative overflow-hidden"
    >
      <div className="gradient-blob gradient-blob-purple w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-1/4 -right-20 md:-right-40 absolute pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-body text-sm uppercase tracking-[0.3em] text-accent font-semibold">
                06
              </span>
              <div className="h-[1px] w-16 bg-accent/50" />
              <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
                Mentorship
              </span>
            </div>

            <h2 className="font-display text-section font-bold text-white leading-[1.1]">
              Instruction &amp; <span className="text-accent">Training</span> Experience
            </h2>
          </div>

          <Link
            href="/training"
            className="inline-flex items-center gap-2 text-sm font-body uppercase tracking-wider text-accent hover:text-accent-light transition-colors group shrink-0"
          >
            <span>Explore Full Curricula &amp; Labs</span>
            <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Training cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingData.map((exp, i) => (
            <div
              key={exp.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              onClick={() => onOpenTrainingModal?.(exp)}
              className="block relative p-7 sm:p-10 rounded-2xl bg-surface border border-white/5 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between"
              data-cursor-hover
            >
              {/* Background accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-body text-xs uppercase tracking-wider text-accent font-semibold">
                        {exp.date}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-text-muted">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <span className="font-body text-sm text-text-muted">
                      {exp.organization}
                    </span>
                  </div>

                  {/* LinkedIn Icon */}
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-text-muted hover:text-blue-400 transition-colors p-1.5 rounded-lg hover:bg-white/5"
                      title="View Organization on LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <TbBrandLinkedin className="w-4 h-4 text-blue-400" />
                    </a>
                  )}
                </div>

                {/* Stat pills */}
                {exp.stats && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.stats.slice(0, 2).map((s, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-body font-medium bg-purple-500/10 text-purple-200 border border-purple-500/20"
                      >
                        <TbSparkles className="w-3 h-3 text-purple-400" />
                        <span>{s.value}</span>
                        <span className="text-text-muted text-[10px]">({s.label})</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <ul className="space-y-2.5 mb-6">
                  {exp.highlights.slice(0, 3).map((highlight, j) => (
                    <li
                      key={j}
                      className="font-body text-xs sm:text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span className="line-clamp-2">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer */}
              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-accent group-hover:text-accent-light font-body uppercase tracking-wider font-semibold">
                <span className="inline-flex items-center gap-1.5">
                  <TbBook className="w-4 h-4" />
                  View Syllabus &amp; Modules
                </span>
                <span className="text-text-muted group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
