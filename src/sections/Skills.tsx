"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const skillGroups = [
  {
    label: "Languages",
    skills: ["Dart", "Kotlin", "Java", "Python"],
  },
  {
    label: "Frameworks",
    skills: [
      "Flutter",
      "KMP",
      "Compose Multiplatform",
      "Jetpack Compose",
      "Android Native",
    ],
  },
  {
    label: "Architecture",
    skills: ["Clean Architecture", "MVVM", "MVI", "MVC"],
  },
  {
    label: "State Management",
    skills: ["BLoC / Cubit", "Provider", "ViewModel"],
  },
  {
    label: "Networking",
    skills: ["Dio", "Retrofit", "Ktor", "OkHttp"],
  },
  {
    label: "DI",
    skills: ["GetIt", "Injectable", "Hilt", "Koin"],
  },
  {
    label: "Backend & Services",
    skills: [
      "Firebase",
      "Firestore",
      "Auth",
      "FCM",
      "Crashlytics",
      "Cloud Storage",
      "Analytics",
      "REST APIs",
    ],
  },
  {
    label: "Storage",
    skills: ["SQLite", "Hive", "Isar", "Room"],
  },
  {
    label: "DevOps & Testing",
    skills: [
      "GitHub Actions",
      "Fastlane",
      "SonarQube",
      "Unit Testing",
      "Widget Testing",
      "Integration Testing",
    ],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Jira", "Confluence", "Figma", "Adobe XD"],
  },
];

// Flatten skills into rows for marquee (alternating)
function getMarqueeRows() {
  const allSkills = skillGroups.flatMap((g) =>
    g.skills.map((s) => ({ skill: s, group: g.label }))
  );

  const rows: { skill: string; group: string }[][] = [];
  const perRow = Math.ceil(allSkills.length / 3);

  for (let i = 0; i < 3; i++) {
    rows.push(allSkills.slice(i * perRow, (i + 1) * perRow));
  }

  return rows;
}

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
}: {
  items: { skill: string; group: string }[];
  reverse?: boolean;
  speed?: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;
    const duplicated = rowRef.current.querySelector(".marquee-inner") as HTMLElement;
    if (!duplicated) return;

    const width = duplicated.offsetWidth / 2;

    gsap.to(duplicated, {
      x: reverse ? width : -width,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x: string) => {
          const val = parseFloat(x);
          if (reverse) {
            return (val % width) + "px";
          }
          return (val % width) + "px";
        },
      },
    });
  }, [reverse, speed]);

  return (
    <div ref={rowRef} className="overflow-hidden py-3">
      <div
        className="marquee-inner flex gap-4 w-max"
        style={{ willChange: "transform" }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-surface hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 whitespace-nowrap group"
            data-cursor-hover
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
            <span className="font-body text-sm text-text-secondary group-hover:text-white transition-colors">
              {item.skill}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const rows = getMarqueeRows();

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="gradient-blob gradient-blob-purple w-[500px] h-[500px] top-0 left-1/2 absolute" />

      <div className="max-w-7xl mx-auto mb-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            04
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Skills
          </span>
        </div>

        <h2 className="font-display text-section font-bold text-white mb-6 leading-[1.1]">
          Tech <span className="text-accent">stack</span>
        </h2>
        <p className="font-body text-lg text-text-muted max-w-2xl">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Marquee rows */}
      <div className="space-y-2">
        {rows.map((row, i) => (
          <MarqueeRow
            key={i}
            items={row}
            reverse={i % 2 === 1}
            speed={35 + i * 5}
          />
        ))}
      </div>

      {/* Skills grid by category (below marquee) */}
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-3">
            <h4 className="font-display text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              {group.label}
            </h4>
            <div className="space-y-1.5">
              {group.skills.map((skill, j) => (
                <p
                  key={j}
                  className="font-body text-sm text-text-muted hover:text-white transition-colors"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
