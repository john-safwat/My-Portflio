"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ProjectItem } from "@/data/projectsData";
import { SiGoogleplay, SiApple, SiGithub } from "react-icons/si";
import { TbExternalLink, TbSparkles, TbWorld } from "react-icons/tb";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  onOpenDetail?: (project: ProjectItem) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpenDetail,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX((y - centerY) / 14);
    setRotateY((centerX - x) / 14);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    if (onOpenDetail) {
      onOpenDetail(project);
    }
  };

  // Top highlight metric
  const primaryMetric = project.metrics && project.metrics[0];

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="group relative cursor-pointer"
      style={{
        perspective: "1000px",
      }}
      data-cursor-hover
    >
      <div
        className="relative p-7 sm:p-8 rounded-2xl bg-surface border border-white/5 group-hover:border-accent/30 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full min-h-[380px]"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out, border-color 0.3s ease",
        }}
      >
        {/* Glow ambient on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-radial-gradient pointer-events-none"
             style={{
               background: "radial-gradient(400px circle at 50% 0%, rgba(37, 99, 235, 0.12), transparent 70%)"
             }}
        />

        {/* Top subtle border glow line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Background Project Index Number */}
        <span className="font-display text-7xl font-bold text-white/[0.03] group-hover:text-accent/[0.08] transition-colors absolute top-4 right-6 pointer-events-none select-none">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Card Header & Content */}
        <div className="relative z-10">
          {/* Category & Metric Badge */}
          <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-body bg-white/5 border border-white/10 text-text-muted group-hover:text-accent-light group-hover:border-accent/20 transition-colors">
              {project.category}
            </span>

            {primaryMetric && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-body font-semibold bg-accent/15 text-accent-light border border-accent/25">
                <TbSparkles className="w-3 h-3" />
                {primaryMetric.value}
              </span>
            )}
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="font-body text-xs sm:text-sm text-text-muted mb-5 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Tech tags preview */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techTags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-body bg-white/[0.03] text-text-secondary border border-white/5 group-hover:border-accent/20 transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.techTags.length > 4 && (
              <span className="px-2 py-1 rounded-md text-[11px] font-body text-text-muted bg-white/[0.02]">
                +{project.techTags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Bottom: Action CTA & External Links */}
        <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-body text-accent group-hover:text-accent-light font-semibold transition-colors">
            View case study
            <TbExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>

          {/* Direct Store / Repo / Live Links */}
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-text-muted hover:text-accent-light hover:border-accent/40 hover:bg-accent/10 transition-all"
                title="Live Demo"
                aria-label="Live Demo"
              >
                <TbWorld className="w-4 h-4" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all"
                title="GitHub Repo"
                aria-label="GitHub Repo"
              >
                <SiGithub className="w-3.5 h-3.5" />
              </a>
            )}
            {project.googlePlay && (
              <a
                href={project.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-text-muted hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all"
                title="Google Play"
                aria-label="Google Play"
              >
                <SiGoogleplay className="w-3.5 h-3.5" />
              </a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-text-muted hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                title="App Store"
                aria-label="App Store"
              >
                <SiApple className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
