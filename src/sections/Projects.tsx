"use client";

import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Kazyon Plus",
    tech: "Kotlin Multiplatform, Compose Multiplatform, Android Native",
    description:
      "Production super app migrated from Android Native to KMP. MVI architecture, secure payments, 40% cold-start improvement.",
  },
  {
    title: "Kazyon Biker",
    tech: "Android Native, Kotlin, Jetpack Compose",
    description:
      "Field operations app for delivery heroes. Order assignment, GPS tracking, delivery confirmation, advanced caching.",
  },
  {
    title: "Sheft",
    tech: "Flutter, Firebase, REST APIs",
    description:
      "Connects brands with content creators. Real-time messaging, video-request workflows, cross-platform deployment.",
  },
  {
    title: "Qurah",
    tech: "Flutter, Firebase, REST APIs",
    description:
      "Saudi Arabia's first water-services app. Real-time order tracking, technician matching, electronic payments.",
  },
  {
    title: "2Sooq",
    tech: "Flutter, BLoC, Firebase",
    description:
      "Cross-platform marketplace with EN/AR support, real-time push notifications, secure payment flows.",
  },
  {
    title: "Canadian Life",
    tech: "Flutter, Dio, Firebase",
    description:
      "Community platform for Canadian immigrants covering travel, housing, education, and local resources.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="gradient-blob gradient-blob-blue w-[400px] h-[400px] bottom-20 right-0 absolute" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            03
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Projects
          </span>
        </div>

        <h2 className="font-display text-section font-bold text-white mb-20 leading-[1.1]">
          Selected <span className="text-accent">work</span>
        </h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              tech={project.tech}
              description={project.description}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
