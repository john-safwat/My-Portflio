"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { IconType } from "react-icons";
import {
  SiDart,
  SiKotlin,
  SiOpenjdk,
  SiPython,
  SiFlutter,
  SiJetpackcompose,
  SiAndroid,
  SiFirebase,
  SiSqlite,
  SiGit,
  SiGithub,
  SiJira,
  SiConfluence,
  SiFigma,
  SiFastlane,
  SiGithubactions,
  SiHive,
  SiSonar,
} from "react-icons/si";
import {
  TbBrandKotlin,
  TbApi,
  TbBell,
  TbDatabase,
  TbPackage,
  TbBolt,
  TbWorld,
  TbStar,
  TbNeedle,
  TbLayout,
  TbLayoutDashboard,
  TbArrowsShuffle,
  TbWaveSine,
  TbBinaryTree,
  TbChartDots,
  TbServer,
  TbColumns,
  TbPalette,
} from "react-icons/tb";

interface TechItem {
  name: string;
  Icon: IconType;
}

const techStack: TechItem[][] = [
  // Row 1 — Languages & Core Frameworks
  [
    { name: "Dart", Icon: SiDart },
    { name: "Kotlin", Icon: SiKotlin },
    { name: "Java", Icon: SiOpenjdk },
    { name: "Python", Icon: SiPython },
    { name: "Flutter", Icon: SiFlutter },
    { name: "KMP", Icon: TbBrandKotlin },
    { name: "Compose", Icon: SiJetpackcompose },
    { name: "Jetpack", Icon: TbPackage },
    { name: "Android", Icon: SiAndroid },
    { name: "Firebase", Icon: SiFirebase },
    { name: "GitHub", Icon: SiGithub },
  ],
  // Row 2 — Architecture & State Management
  [
    { name: "Clean Arch", Icon: TbLayout },
    { name: "MVVM", Icon: TbLayoutDashboard },
    { name: "MVI", Icon: TbArrowsShuffle },
    { name: "BLoC", Icon: TbWaveSine },
    { name: "Provider", Icon: TbBinaryTree },
    { name: "ViewModel", Icon: TbColumns },
    { name: "Dio", Icon: TbBolt },
    { name: "FCM", Icon: TbBell },
    { name: "Retrofit", Icon: TbChartDots },
  ],
  // Row 3 — Networking, DI & Backend
  [
    { name: "Ktor", Icon: TbBolt },
    { name: "OkHttp", Icon: TbWorld },
    { name: "GetIt", Icon: TbStar },
    { name: "Hilt", Icon: TbNeedle },
    { name: "Koin", Icon: TbPackage },
    { name: "REST APIs", Icon: TbApi },
    { name: "Firestore", Icon: TbServer },
  ],
  // Row 4 — Storage & DevOps
  [
    { name: "SQLite", Icon: SiSqlite },
    { name: "Hive", Icon: SiHive },
    { name: "Room", Icon: TbDatabase },
    { name: "GH Actions", Icon: SiGithubactions },
    { name: "Fastlane", Icon: SiFastlane },
    { name: "SonarQube", Icon: SiSonar },
  ],
  // Row 5 — Tools
  [
    { name: "Git", Icon: SiGit },
    { name: "Jira", Icon: SiJira },
    { name: "Confluence", Icon: SiConfluence },
    { name: "Figma", Icon: SiFigma },
    { name: "Adobe XD", Icon: TbPalette },
  ],
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".tech-card");

    gsap.fromTo(
      cards,
      { y: 40, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.03,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-padding relative overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ opacity: 0.3 }}
        >
          <source src="/skills-bg.webm" type="video/webm" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-bg/60" />
      </div>

      {/* Background purple glow — bright center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div
          className="w-[1000px] h-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(54, 51, 234, 0.35) 0%, rgba(34, 43, 206, 0.2) 30%, rgba(28, 101, 135, 0.1) 40%, transparent 10%)",
            filter: "blur(120px)",
          }}
        />
      </div>
    

      <div className="max-w-7xl mx-auto relative z-10">
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

        {/* Centered heading */}
        <h2 className="font-display text-section md:text-[5vw] font-bold text-white mb-20 text-center leading-[1.1]">
          TECH <span className="text-accent">STACK</span>
        </h2>

        {/* Hover styles */}
        <style jsx>{`
          .tech-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border-width: 1px;
          }
          
          .tech-card:hover {
            transform: translateY(-10px) scale(1.20) !important;
            border-width: 3px;
            border-color: rgba(255, 255, 255, 1);
            background: rgba(129, 2, 247, 0.15);
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(147, 51, 234, 0.15), inset 0 0 20px rgba(147, 51, 234, 0.1);
          }

          /* Base colors: Pure white for both icon and text */
          .tech-icon,
          .tech-label {
            color: #ffffff;
            transition: all 0.3s ease;
          }
        `}</style>
        {/* Tech grid — centered rows */}
        <div ref={gridRef} className="flex flex-col items-center gap-4">
          {techStack.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {row.map((tech, techIdx) => (
                <div
                  key={techIdx}
                  className="tech-card flex flex-col items-center justify-center w-[72px] h-[72px] md:w-[80px] md:h-[80px] rounded-xl border cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(4px)",
                  }}
                  data-cursor-hover
                >
                  <tech.Icon className="tech-icon w-7 h-7 mb-1" />
                  <span className="tech-label font-body text-[9px] md:text-[10px] text-center leading-tight px-1 truncate max-w-full">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>  
      </div>
    </section>
  );
}
