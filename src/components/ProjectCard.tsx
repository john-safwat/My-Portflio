"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tech: string;
  description: string;
  index: number;
}

export default function ProjectCard({
  title,
  tech,
  description,
  index,
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
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-body bg-accent/10 text-accent border border-accent/20 group-hover:bg-accent/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="text-white"
          >
            <path
              d="M1 13L13 1M13 1H4M13 1V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
