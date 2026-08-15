"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ExperienceDetailModal from "@/components/modals/ExperienceDetailModal";
import CVModal from "@/components/modals/CVModal";
import { ExperienceItem, experienceData } from "@/data/experienceData";
import { TbArrowLeft, TbCalendar, TbMapPin, TbBriefcase, TbSparkles, TbLayersIntersect, TbExternalLink, TbBrandLinkedin } from "react-icons/tb";

function ExperiencePageContent() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text-secondary">
      <Navbar isInnerPage onOpenCVModal={() => setIsCVOpen(true)} />

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.2em] text-text-muted hover:text-accent transition-colors group"
          >
            <TbArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Page Hero */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs uppercase font-body tracking-[0.25em] text-accent font-semibold">
              Career Retrospective
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
            Work <span className="text-accent">Experience</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-text-muted max-w-3xl leading-relaxed">
            3+ years engineering high-scale mobile applications, architecting cross-platform systems,
            and building resilient Spring Boot backend microservices.
          </p>

          {/* Quick Summary Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-white">3+</div>
              <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-400">0.14%</div>
              <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider">ANR Rate Achieved</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-accent-light">+220%</div>
              <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider">Order Volume Growth</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-purple-400">200+</div>
              <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider">Engineers Mentored</div>
            </div>
          </div>
        </div>

        {/* Chronological List of Experiences */}
        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={exp.id}
              onClick={() => setSelectedExperience(exp)}
              className="p-7 sm:p-10 rounded-3xl bg-surface border border-white/5 hover:border-accent/30 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              data-cursor-hover
            >
              {/* Subtle hover gradient */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2 text-xs font-body text-text-muted">
                      <span className="flex items-center gap-1 text-accent font-semibold">
                        <TbCalendar className="w-3.5 h-3.5" />
                        {exp.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <TbMapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-accent transition-colors">
                      {exp.role}
                    </h2>

                    <div className="font-display text-base text-accent-light font-medium mt-0.5">
                      {exp.company} {exp.meta && <span className="text-text-dim font-normal">— {exp.meta}</span>}
                    </div>
                  </div>

                  {/* External LinkedIn icon */}
                  {exp.url && (
                    <a
                      href={exp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-body text-text-secondary hover:text-white transition-all self-start"
                      title="Company LinkedIn"
                    >
                      <TbBrandLinkedin className="w-4 h-4 text-blue-400" />
                      <span>Company Profile</span>
                      <TbExternalLink className="w-3 h-3 text-text-muted" />
                    </a>
                  )}
                </div>

                {/* Headline summary */}
                <p className="font-body text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                  {exp.headline}
                </p>

                {/* Metric Badges */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {exp.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent/10 border border-accent/20 text-xs font-body text-accent-light font-medium"
                      >
                        <TbSparkles className="w-3.5 h-3.5" />
                        <strong>{m.value}</strong>
                        <span className="text-text-muted text-[11px] font-normal">({m.label})</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Key Achievements Bullet points */}
                <div className="space-y-2 mb-6">
                  {exp.achievements.map((ach, i) => (
                    <div
                      key={i}
                      className="font-body text-xs sm:text-sm text-text-secondary flex items-start gap-2.5"
                    >
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies List */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.slice(0, 6).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-body bg-white/[0.03] text-text-muted border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 6 && (
                      <span className="px-2 py-1 rounded-md text-[11px] font-body text-text-dim">
                        +{exp.technologies.length - 6} more
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-body uppercase tracking-wider text-accent font-semibold group-hover:text-accent-light transition-colors">
                    <TbLayersIntersect className="w-4 h-4" />
                    Deep-Dive Modal
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ExperienceDetailModal
        experience={selectedExperience}
        isOpen={Boolean(selectedExperience)}
        onClose={() => setSelectedExperience(null)}
        onSelectExperience={(e) => setSelectedExperience(e)}
      />

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <Suspense fallback={null}>
      <ExperiencePageContent />
    </Suspense>
  );
}
