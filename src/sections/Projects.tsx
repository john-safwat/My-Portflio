"use client";

import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Kazyon Plus",
    tech: "Kotlin Multiplatform, Compose Multiplatform, Android Native",
    description:
      "Production super app migrated from Android Native to KMP. MVI architecture, secure payments, 40% cold-start improvement.",
    github: "",
    googlePlay: "https://play.google.com/store/apps/details?id=com.kazyon.customer&hl=en",
    appStore: "https://apps.apple.com/eg/app/kazyon-plus/id1584830119",
  },
  {
    title: "Kazyon Biker",
    tech: "Android Native, Kotlin, Jetpack Compose",
    description:
      "Field operations app for delivery heroes. Order assignment, GPS tracking, delivery confirmation, advanced caching.",
    github: "",
    googlePlay: "",
    appStore: "",
  },
  {
    title: "Sheft",
    tech: "Flutter, Firebase, REST APIs",
    description:
      "Connects brands with content creators. Real-time messaging, video-request workflows, cross-platform deployment.",
    github: "",
    googlePlay: "https://play.google.com/store/apps/details?id=com.moalen.sheft_app&hl=en",
    appStore: "https://apps.apple.com/eg/app/sheft/id6748038220",
  },
  {
    title: "Qurah",
    tech: "Flutter, Firebase, REST APIs",
    description:
      "Saudi Arabia's first water-services app. Real-time order tracking, technician matching, electronic payments.",
    github: "",
    googlePlay: "https://play.google.com/store/apps/details?id=com.qarah.userapp&hl=en",
    appStore: "https://apps.apple.com/eg/app/qarah-%D9%82%D8%B1%D8%A7%D8%AD/id6749554152",
  },
    {
    title: "Qurah-Provider",
    tech: "Flutter, Firebase, REST APIs",
    description:
      "Saudi Arabia's first water-services app. Real-time order tracking, technician matching, electronic payments.",
    github: "",
    googlePlay: "https://play.google.com/store/apps/details?id=com.qarah.providerapp&hl=en",
    appStore: "https://apps.apple.com/eg/app/qarah-provider/id6749553815",
  },
  {
    title: "2Sooq",
    tech: "Flutter, BLoC, Firebase",
    description:
      "Cross-platform marketplace with EN/AR support, real-time push notifications, secure payment flows.",
    github: "",
    googlePlay: "https://play.google.com/store/apps/details?id=com.linkyou.sooq&hl=en",
    appStore: "https://apps.apple.com/eg/app/2sooq/id1574532077",
  },
  {
    title: "Canadian Life",
    tech: "Flutter, Dio, Firebase",
    description:
      "Community platform for Canadian immigrants covering travel, housing, education, and local resources.",
    github: "",
    googlePlay: "https://play.google.com/store/apps/details?id=com.linkyou.lifeincanadaa&hl=en",
    appStore: "https://apps.apple.com/eg/app/%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-%D9%81%D9%8A-%D9%83%D9%86%D8%AF%D8%A7/id1593238063",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="gradient-blob gradient-blob-blue w-[200px] h-[200px] md:w-[400px] md:h-[400px] bottom-20 right-0 absolute" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8 md:mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            03
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Projects
          </span>
        </div>

        <h2 className="font-display text-section font-bold text-white mb-10 md:mb-20 leading-[1.1]">
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
              github={project.github}
              googlePlay={project.googlePlay}
              appStore={project.appStore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
