"use client";

import { ExperienceItem, experienceData } from "@/data/experienceData";
import ModalBackdrop from "./ModalBackdrop";
import { 
  TbExternalLink, 
  TbX, 
  TbChevronLeft, 
  TbChevronRight, 
  TbBriefcase, 
  TbMapPin, 
  TbCalendar, 
  TbChartBar, 
  TbCheck, 
  TbLayersIntersect,
  TbBrandLinkedin
} from "react-icons/tb";

interface ExperienceDetailModalProps {
  experience: ExperienceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectExperience: (item: ExperienceItem) => void;
}

export default function ExperienceDetailModal({
  experience,
  isOpen,
  onClose,
  onSelectExperience,
}: ExperienceDetailModalProps) {
  if (!experience) return null;

  const currentIndex = experienceData.findIndex((e) => e.id === experience.id);
  const prevExp = currentIndex > 0 ? experienceData[currentIndex - 1] : experienceData[experienceData.length - 1];
  const nextExp = currentIndex < experienceData.length - 1 ? experienceData[currentIndex + 1] : experienceData[0];

  return (
    <ModalBackdrop
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={`Experience deep dive for ${experience.company}`}
      maxWidth="max-w-4xl"
    >
      <div className="relative p-6 sm:p-8 md:p-12 text-white">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar controls */}
        <div className="relative z-10 flex items-center justify-between pb-6 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-body uppercase tracking-wider rounded-full bg-accent/20 text-accent-light border border-accent/30">
              {experience.type}
            </span>
            <span className="text-xs text-text-muted hidden sm:inline">
              Role #{currentIndex + 1} of {experienceData.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectExperience(prevExp)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
              title={`Previous: ${prevExp.company}`}
              aria-label="Previous role"
            >
              <TbChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => onSelectExperience(nextExp)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
              title={`Next: ${nextExp.company}`}
              aria-label="Next role"
            >
              <TbChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors ml-2"
              aria-label="Close dialog"
            >
              <TbX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="relative z-10 mb-8">
          <div className="flex flex-wrap items-center gap-4 text-xs font-body text-text-muted mb-2">
            <span className="flex items-center gap-1.5 text-accent-light">
              <TbCalendar className="w-4 h-4" />
              {experience.date}
            </span>
            <span className="flex items-center gap-1.5">
              <TbMapPin className="w-4 h-4" />
              {experience.location}
            </span>
            {experience.meta && (
              <span className="flex items-center gap-1.5 text-text-dim">
                <TbBriefcase className="w-4 h-4" />
                {experience.meta}
              </span>
            )}
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-1">
            {experience.role}
          </h2>
          <h3 className="font-display text-lg sm:text-xl text-accent font-semibold mb-4">
            {experience.company}
          </h3>

          <p className="font-body text-base text-text-secondary leading-relaxed max-w-3xl">
            {experience.overview}
          </p>

          {/* Direct verification link */}
          {experience.url && (
            <div className="mt-5">
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/40 text-xs sm:text-sm font-medium transition-all group"
              >
                <TbBrandLinkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Verify Company Profile on LinkedIn</span>
                <TbExternalLink className="w-3.5 h-3.5 text-text-muted" />
              </a>
            </div>
          )}
        </div>

        {/* Metrics Grid */}
        {experience.metrics && experience.metrics.length > 0 && (
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-2 text-xs font-body uppercase tracking-wider text-text-muted mb-3">
              <TbChartBar className="w-4 h-4 text-accent" />
              Impact & Key Metrics
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {experience.metrics.map((m, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
                >
                  <div className="font-display text-lg sm:text-xl font-bold text-accent-light mb-1">
                    {m.value}
                  </div>
                  <div className="font-body text-xs text-text-muted tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Engineering Achievements */}
        <div className="relative z-10 space-y-6 mb-8">
          <div>
            <h4 className="text-xs font-body uppercase tracking-wider text-text-muted mb-3">
              Key Engineering Contributions & Achievements
            </h4>
            <ul className="space-y-3">
              {experience.achievements.map((item, i) => (
                <li
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-body text-sm text-text-secondary flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs shrink-0 mt-0.5">
                    <TbCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture Focus */}
          {experience.architectureFocus && (
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-xs font-body uppercase tracking-wider text-accent-light mb-2">
                <TbLayersIntersect className="w-4 h-4" />
                Architecture & Design Philosophy
              </div>
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {experience.architectureFocus}
              </p>
            </div>
          )}

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-body uppercase tracking-wider text-text-muted mb-3">
              Technologies & Tools Utilized
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-body text-text-secondary hover:border-accent/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-text-muted">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-text-secondary font-mono text-[10px]">ESC</kbd> to close.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectExperience(prevExp)}
              className="text-xs font-body text-text-muted hover:text-accent transition-colors flex items-center gap-1"
            >
              ← {prevExp.company}
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => onSelectExperience(nextExp)}
              className="text-xs font-body text-text-muted hover:text-accent transition-colors flex items-center gap-1"
            >
              {nextExp.company} →
            </button>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
}
