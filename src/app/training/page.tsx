"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import TrainingDetailModal from "@/components/modals/TrainingDetailModal";
import CVModal from "@/components/modals/CVModal";
import { TrainingItem, trainingData } from "@/data/trainingData";
import { TbArrowLeft, TbCalendar, TbMapPin, TbSchool, TbSparkles, TbBook, TbBulb, TbCheck, TbExternalLink, TbBrandLinkedin } from "react-icons/tb";

function TrainingPageContent() {
  const [selectedTraining, setSelectedTraining] = useState<TrainingItem | null>(null);
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

        {/* Hero */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs uppercase font-body tracking-[0.25em] text-purple-400 font-semibold">
              Curriculum &amp; Mentorship
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
            Training &amp; <span className="text-purple-400">Mentorship</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-text-muted max-w-3xl leading-relaxed">
            Upskilling the next generation of engineers in Android Native (Kotlin &amp; Jetpack Compose),
            Kotlin Multiplatform (KMP), and Flutter Clean Architecture through production-grade labs and code reviews.
          </p>

          {/* Stat Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-purple-300">200+</div>
              <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider">Engineers Mentored</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-400">85%</div>
              <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider">Hiring / Placement</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-accent-light">4.9 / 5.0</div>
              <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider">Student Rating</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-blue-400">30+</div>
              <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wider">Capstone Projects</div>
            </div>
          </div>
        </div>

        {/* Training Organizations & Tracks */}
        <div className="space-y-10">
          {trainingData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTraining(item)}
              className="p-7 sm:p-10 rounded-3xl bg-surface border border-white/5 hover:border-purple-500/30 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              data-cursor-hover
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Organization Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2 text-xs font-body text-text-muted">
                      <span className="flex items-center gap-1 text-purple-300 font-semibold">
                        <TbCalendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <TbMapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-200 border border-purple-500/20 text-[10px] uppercase tracking-wider">
                        Lead Instructor
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.role}
                    </h2>

                    <div className="font-display text-base text-accent font-medium mt-0.5">
                      {item.organization}
                    </div>
                  </div>

                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-body text-text-secondary hover:text-white transition-all self-start"
                      title="Organization LinkedIn"
                    >
                      <TbBrandLinkedin className="w-4 h-4 text-blue-400" />
                      <span>{item.organization}</span>
                      <TbExternalLink className="w-3 h-3 text-text-muted" />
                    </a>
                  )}
                </div>

                {/* Summary */}
                <p className="font-body text-sm sm:text-base text-text-secondary mb-6 leading-relaxed">
                  {item.summary}
                </p>

                {/* Metrics */}
                {item.stats && (
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {item.stats.map((s, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs font-body text-purple-200 font-medium"
                      >
                        <TbSparkles className="w-3.5 h-3.5" />
                        <strong>{s.value}</strong>
                        <span className="text-text-muted text-[11px]">({s.label})</span>
                      </span>
                    ))}
                  </div>
                )}

                {/* Curricula Modules Preview */}
                {item.tracks && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {item.tracks.map((track, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/5"
                      >
                        <div className="font-display text-sm font-bold text-white mb-1">
                          {track.title}
                        </div>
                        <div className="text-[11px] font-mono text-purple-300 mb-2">
                          Duration: {track.duration}
                        </div>
                        <p className="font-body text-xs text-text-muted line-clamp-2">
                          {track.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer CTA */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-accent group-hover:text-accent-light font-body uppercase tracking-wider font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <TbBook className="w-4 h-4" />
                    View Detailed Syllabus &amp; Lab Modules
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <TrainingDetailModal
        item={selectedTraining}
        isOpen={Boolean(selectedTraining)}
        onClose={() => setSelectedTraining(null)}
        onSelectItem={(t) => setSelectedTraining(t)}
      />

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}

export default function TrainingPage() {
  return (
    <Suspense fallback={null}>
      <TrainingPageContent />
    </Suspense>
  );
}
