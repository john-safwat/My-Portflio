"use client";

import { TrainingItem, trainingData } from "@/data/trainingData";
import ModalBackdrop from "./ModalBackdrop";
import { 
  TbExternalLink, 
  TbX, 
  TbChevronLeft, 
  TbChevronRight, 
  TbSchool, 
  TbMapPin, 
  TbCalendar, 
  TbChartLine, 
  TbBook, 
  TbBulb,
  TbBrandLinkedin
} from "react-icons/tb";

interface TrainingDetailModalProps {
  item: TrainingItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: TrainingItem) => void;
}

export default function TrainingDetailModal({
  item,
  isOpen,
  onClose,
  onSelectItem,
}: TrainingDetailModalProps) {
  if (!item) return null;

  const currentIndex = trainingData.findIndex((t) => t.id === item.id);
  const prevItem = currentIndex > 0 ? trainingData[currentIndex - 1] : trainingData[trainingData.length - 1];
  const nextItem = currentIndex < trainingData.length - 1 ? trainingData[currentIndex + 1] : trainingData[0];

  return (
    <ModalBackdrop
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel={`Training syllabus and mentorship for ${item.organization}`}
      maxWidth="max-w-4xl"
    >
      <div className="relative p-6 sm:p-8 md:p-12 text-white">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top bar controls */}
        <div className="relative z-10 flex items-center justify-between pb-6 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-body uppercase tracking-wider rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Instructor & Mentorship
            </span>
            <span className="text-xs text-text-muted hidden sm:inline">
              Track #{currentIndex + 1} of {trainingData.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectItem(prevItem)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
              title={`Previous: ${prevItem.organization}`}
              aria-label="Previous training track"
            >
              <TbChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => onSelectItem(nextItem)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
              title={`Next: ${nextItem.organization}`}
              aria-label="Next training track"
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
              {item.date}
            </span>
            <span className="flex items-center gap-1.5">
              <TbMapPin className="w-4 h-4" />
              {item.location}
            </span>
            <span className="flex items-center gap-1.5 text-text-dim">
              <TbSchool className="w-4 h-4" />
              {item.organization}
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight mb-1">
            {item.role}
          </h2>
          <h3 className="font-display text-lg sm:text-xl text-accent font-semibold mb-4">
            {item.organization}
          </h3>

          <p className="font-body text-base text-text-secondary leading-relaxed max-w-3xl">
            {item.summary}
          </p>

          {/* LinkedIn profile */}
          {item.url && (
            <div className="mt-5">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-xs sm:text-sm font-medium transition-all group"
              >
                <TbBrandLinkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Visit {item.organization} on LinkedIn</span>
                <TbExternalLink className="w-3.5 h-3.5 text-text-muted" />
              </a>
            </div>
          )}
        </div>

        {/* Mentorship Stats Grid */}
        {item.stats && item.stats.length > 0 && (
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-2 text-xs font-body uppercase tracking-wider text-text-muted mb-3">
              <TbChartLine className="w-4 h-4 text-accent" />
              Student Impact & Mentorship Metrics
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {item.stats.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
                >
                  <div className="font-display text-xl sm:text-2xl font-bold text-purple-300 mb-1">
                    {s.value}
                  </div>
                  <div className="font-body text-xs text-text-muted tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Course Modules & Curricula Tracks */}
        {item.tracks && item.tracks.length > 0 && (
          <div className="relative z-10 space-y-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-body uppercase tracking-wider text-text-muted">
              <TbBook className="w-4 h-4 text-accent" />
              Curriculum Tracks & Modules Instructed
            </div>
            <div className="space-y-4">
              {item.tracks.map((track, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/20 transition-all"
                >
                  <div className="flex items-baseline justify-between gap-2 flex-wrap mb-2">
                    <h4 className="font-display text-base sm:text-lg font-bold text-white">
                      {track.title}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-text-muted">
                      {track.duration}
                    </span>
                  </div>
                  <p className="font-body text-sm text-text-muted mb-3">
                    {track.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {track.focus.map((f, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-200 border border-purple-500/20 text-xs font-body"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mentorship Methodology */}
        {item.mentorshipMethodology && item.mentorshipMethodology.length > 0 && (
          <div className="relative z-10 mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-xs font-body uppercase tracking-wider text-accent-light mb-3">
              <TbBulb className="w-4 h-4" />
              Instruction & Mentorship Philosophy
            </div>
            <ul className="space-y-2">
              {item.mentorshipMethodology.map((meth, i) => (
                <li
                  key={i}
                  className="font-body text-sm text-text-secondary flex items-start gap-2.5"
                >
                  <span className="text-accent mt-0.5">▸</span>
                  <span>{meth}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Key Technologies Taught */}
        <div className="relative z-10">
          <h4 className="text-xs font-body uppercase tracking-wider text-text-muted mb-3">
            Core Technologies & Frameworks Taught
          </h4>
          <div className="flex flex-wrap gap-2">
            {item.keyTopicsTaught.map((topic, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-body text-text-secondary hover:border-purple-500/40 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Footer controls */}
        <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-text-muted">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-text-secondary font-mono text-[10px]">ESC</kbd> to close.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectItem(prevItem)}
              className="text-xs font-body text-text-muted hover:text-accent transition-colors flex items-center gap-1"
            >
              ← {prevItem.organization}
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => onSelectItem(nextItem)}
              className="text-xs font-body text-text-muted hover:text-accent transition-colors flex items-center gap-1"
            >
              {nextItem.organization} →
            </button>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
}
