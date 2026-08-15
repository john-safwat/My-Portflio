"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ProjectItem, projectsData } from "@/data/projectsData";
import Link from "next/link";
import { TbArrowRight, TbFilter } from "react-icons/tb";

interface ProjectsSectionProps {
  onOpenProjectModal?: (project: ProjectItem) => void;
}

type FilterCategory = "All" | "Android / KMP" | "Flutter" | "Backend" | "AI & Systems";

export default function Projects({ onOpenProjectModal }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = ["All", "Android / KMP", "Flutter", "Backend", "AI & Systems"];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="gradient-blob gradient-blob-blue w-[200px] h-[200px] md:w-[400px] md:h-[400px] bottom-20 right-0 absolute pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-body text-sm text-accent font-semibold">
                03
              </span>
              <div className="h-[1px] w-16 bg-accent/50" />
              <span className="font-body text-sm text-text-muted">
                Portfolio
              </span>
            </div>

            <h2 className="font-display text-section font-bold text-white leading-[1.1]">
              Selected <span className="text-accent">Work</span> &amp; Case Studies
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-body text-accent hover:text-accent-light transition-colors group shrink-0 font-medium"
          >
            <span>View all projects</span>
            <TbArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 pb-6 mb-10 overflow-x-auto custom-scroll border-b border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-text-muted mr-2 shrink-0">
            <TbFilter className="w-4 h-4 text-accent" />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-body tracking-wider transition-all duration-300 shrink-0 ${
                activeFilter === cat
                  ? "bg-accent text-white font-medium shadow-lg shadow-accent/25"
                  : "bg-white/5 text-text-muted hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-60 text-[10px]">
                ({cat === "All" ? projectsData.length : projectsData.filter((p) => p.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpenDetail={onOpenProjectModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
