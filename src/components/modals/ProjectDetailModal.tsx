"use client";

import { useState } from "react";
import { ProjectItem, projectsData } from "@/data/projectsData";
import ModalBackdrop from "./ModalBackdrop";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiGoogleplay, 
  SiApple, 
  SiGithub 
} from "react-icons/si";
import { 
  TbExternalLink, 
  TbX, 
  TbChevronLeft, 
  TbChevronRight, 
  TbSparkles, 
  TbLayersIntersect, 
  TbAlertTriangle, 
  TbCodeDots 
} from "react-icons/tb";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onSelectProject,
}: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "challenges" | "tech">("overview");

  if (!project) return null;

  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <ModalBackdrop isOpen={isOpen} onClose={onClose} ariaLabel={`Project case study for ${project.title}`} maxWidth="max-w-5xl">
      <div className="relative p-6 sm:p-8 md:p-12 text-white">
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Bar */}
        <div className="relative z-10 flex items-center justify-between pb-6 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-body uppercase tracking-wider rounded-full bg-accent/20 text-accent-light border border-accent/30">
              {project.category}
            </span>
            <span className="text-xs text-text-muted hidden sm:inline">
              Project #{currentIndex + 1} of {projectsData.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next switchers */}
            <button
              onClick={() => onSelectProject(prevProject)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
              title={`Previous: ${prevProject.title}`}
              aria-label="Previous project"
            >
              <TbChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
              title={`Next: ${nextProject.title}`}
              aria-label="Next project"
            >
              <TbChevronRight className="w-5 h-5" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors ml-2"
              aria-label="Close dialog"
            >
              <TbX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 mb-8">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
            {project.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-text-muted max-w-3xl">
            {project.subtitle}
          </p>

          {/* External Action Links */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            {project.googlePlay && (
              <a
                href={project.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-accent/40 text-xs sm:text-sm font-medium transition-all duration-300 group"
              >
                <SiGoogleplay className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Google Play</span>
                <TbExternalLink className="w-3.5 h-3.5 text-text-muted" />
              </a>
            )}

            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-accent/40 text-xs sm:text-sm font-medium transition-all duration-300 group"
              >
                <SiApple className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>App Store</span>
                <TbExternalLink className="w-3.5 h-3.5 text-text-muted" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 hover:border-accent/40 text-xs sm:text-sm font-medium transition-all duration-300 group"
              >
                <SiGithub className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>GitHub Repo</span>
                <TbExternalLink className="w-3.5 h-3.5 text-text-muted" />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white hover:bg-accent-light text-xs sm:text-sm font-medium transition-all duration-300"
              >
                <TbExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm"
              >
                <div className="font-display text-xl sm:text-2xl font-bold text-accent-light mb-1">
                  {metric.value}
                </div>
                <div className="font-body text-xs text-text-muted tracking-wider uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="relative z-10 flex items-center gap-2 pb-4 mb-6 border-b border-white/10 overflow-x-auto custom-scroll">
          <button
            onClick={() => setActiveTab("overview")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
              activeTab === "overview"
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "bg-white/5 text-text-muted hover:text-white"
            }`}
          >
            <TbSparkles className="w-4 h-4" />
            Overview & Features
          </button>

          <button
            onClick={() => setActiveTab("architecture")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
              activeTab === "architecture"
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "bg-white/5 text-text-muted hover:text-white"
            }`}
          >
            <TbLayersIntersect className="w-4 h-4" />
            Architecture & Design
          </button>

          <button
            onClick={() => setActiveTab("challenges")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
              activeTab === "challenges"
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "bg-white/5 text-text-muted hover:text-white"
            }`}
          >
            <TbAlertTriangle className="w-4 h-4" />
            Engineering Challenges
          </button>

          <button
            onClick={() => setActiveTab("tech")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all shrink-0 ${
              activeTab === "tech"
                ? "bg-accent text-white shadow-lg shadow-accent/20"
                : "bg-white/5 text-text-muted hover:text-white"
            }`}
          >
            <TbCodeDots className="w-4 h-4" />
            Tech Stack
          </button>
        </div>

        {/* Tab Content Panels */}
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-sm font-body uppercase tracking-wider text-text-muted mb-3">
                  Summary & Impact
                </h3>
                <p className="font-body text-base text-text-secondary leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-body uppercase tracking-wider text-text-muted mb-3">
                  Key Capabilities Delivered
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, i) => (
                    <li
                      key={i}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-body text-sm text-text-secondary flex items-start gap-2.5"
                    >
                      <span className="text-accent mt-0.5 shrink-0">✦</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === "architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  Architectural Foundation
                </h3>
                <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
                  {project.architectureOverview}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-text-muted mb-3">
                  Architecture Patterns Enforced
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-accent/10 text-accent-light border border-accent/20 text-xs font-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "challenges" && (
            <motion.div
              key="challenges"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-body uppercase tracking-wider text-text-muted mb-2">
                Technical Challenges & Solutions
              </h3>
              <div className="space-y-3">
                {project.technicalChallenges.map((challenge, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      0{i + 1}
                    </div>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "tech" && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-sm font-body uppercase tracking-wider text-text-muted mb-3">
                  Core Technologies & Libraries
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.techTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-body text-white hover:border-accent/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 font-body text-xs text-text-muted leading-relaxed">
                <span className="font-bold text-text-secondary">Full Tech Summary:</span> {project.tech}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Footer */}
        <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-text-muted text-center sm:text-left">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-text-secondary font-mono text-[10px]">ESC</kbd> or click outside to dismiss.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="text-xs font-body text-text-muted hover:text-accent transition-colors flex items-center gap-1"
            >
              ← {prevProject.title.slice(0, 18)}...
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="text-xs font-body text-text-muted hover:text-accent transition-colors flex items-center gap-1"
            >
              {nextProject.title.slice(0, 18)}... →
            </button>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
}
