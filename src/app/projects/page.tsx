"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailModal from "@/components/modals/ProjectDetailModal";
import CVModal from "@/components/modals/CVModal";
import { ProjectItem, projectsData } from "@/data/projectsData";
import { TbArrowLeft, TbSearch, TbFilter, TbSparkles } from "react-icons/tb";

function ProjectsPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCVOpen, setIsCVOpen] = useState(false);

  const categories = ["All", "Android / KMP", "Flutter", "Backend"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techTags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background text-text-secondary">
      <Navbar isInnerPage onOpenCVModal={() => setIsCVOpen(true)} />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* Breadcrumb / Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-body text-text-muted hover:text-accent transition-colors group"
          >
            <TbArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Portfolio</span>
          </Link>
        </div>

        {/* Page Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-body text-accent font-semibold">
              Archive &amp; Case Studies
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
            Selected <span className="text-accent">Projects</span>
          </h1>

          <p className="font-body text-base sm:text-lg text-text-muted max-w-3xl leading-relaxed">
            A comprehensive showcase of production mobile super-apps, cross-platform applications,
            and high-throughput Spring Boot backend microservices built for millions of users.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-accent-light">8+</div>
              <div className="font-body text-xs text-text-muted mt-1">Production Apps</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-400">98%</div>
              <div className="font-body text-xs text-text-muted mt-1">ANR Reduction</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-purple-400">+500%</div>
              <div className="font-body text-xs text-text-muted mt-1">MAU Growth</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="font-display text-2xl sm:text-3xl font-bold text-blue-400">2</div>
              <div className="font-body text-xs text-text-muted mt-1">Live Countries</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-2xl bg-surface border border-white/5 mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto custom-scroll pb-2 md:pb-0">
            <div className="flex items-center gap-1.5 text-xs text-text-muted mr-1 shrink-0">
              <TbFilter className="w-3.5 h-3.5 text-accent" />
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-body tracking-wider transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-accent text-white font-medium shadow-md shadow-accent/25"
                    : "bg-white/5 text-text-muted hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <TbSearch className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech, stack, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-body text-white placeholder-text-dim focus:outline-none focus:border-accent transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenDetail={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-white/5 rounded-3xl bg-surface">
            <TbSparkles className="w-8 h-8 text-accent mx-auto mb-3 opacity-60" />
            <h3 className="font-display text-lg font-bold text-white mb-1">No projects matched your query</h3>
            <p className="font-body text-xs text-text-muted">
              Try adjusting your category filter or search keywords.
            </p>
          </div>
        )}
      </main>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsPageContent />
    </Suspense>
  );
}
