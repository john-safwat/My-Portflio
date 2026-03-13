"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  index: number;
  github?: string;
  googlePlay?: string;
  appStore?: string;
}

export default function ProjectCard({
  title,
  tech,
  description,
  index,
  github,
  googlePlay,
  appStore,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX((y - centerY) / 10);
    setRotateY((centerX - x) / 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const techTags = tech.split(", ");

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{
        perspective: "1000px",
      }}
      data-cursor-hover
    >
      <div
        className="relative p-8 rounded-2xl bg-surface border border-white/5 transition-all duration-500 overflow-hidden"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37, 99, 235, 0.1), transparent 40%)",
          }}
        />

        {/* Top border glow */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Project number */}
        <span className="font-display text-7xl font-bold text-white/[0.03] absolute top-4 right-6">
          0{index + 1}
        </span>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>

          <p className="font-body text-sm text-text-muted mb-6 leading-relaxed">
            {description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {techTags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-body bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project links */}
          {(github || googlePlay || appStore) && (
            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                  data-cursor-hover
                  onClick={(e) => e.stopPropagation()}
                  aria-label="GitHub"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-muted hover:text-accent transition-colors">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {googlePlay && (
                <a
                  href={googlePlay}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                  data-cursor-hover
                  onClick={(e) => e.stopPropagation()}
                  aria-label="Google Play"
                >
                  <svg width="14" height="16" viewBox="0 0 512 512" fill="currentColor" className="text-text-muted hover:text-accent transition-colors">
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                  </svg>
                </a>
              )}
              {appStore && (
                <a
                  href={appStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                  data-cursor-hover
                  onClick={(e) => e.stopPropagation()}
                  aria-label="App Store"
                >
                  <svg width="14" height="16" viewBox="0 0 384 512" fill="currentColor" className="text-text-muted hover:text-accent transition-colors">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
