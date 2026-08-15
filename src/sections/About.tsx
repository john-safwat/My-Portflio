"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { TbFileText, TbExternalLink, TbDownload, TbQuote } from "react-icons/tb";

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 7, suffix: "+", label: "Production Apps" },
  { value: 200, suffix: "+", label: "Students Taught" },
  { value: 500, suffix: "%", label: "MAU Growth" }
];

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => setCount(Math.round(counter.value)),
    });
  }, [inView, target]);

  return (
    <span className="font-display text-4xl md:text-6xl font-bold text-white tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

interface AboutProps {
  onOpenCoverLetter?: () => void;
}

export default function About({ onOpenCoverLetter }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  const [activeTab, setActiveTab] = useState<"story" | "letter">("story");

  useEffect(() => {
    if (!sectionRef.current || !textRef.current || !statsRef.current) return;

    // Text lines animate in
    const lines = textRef.current.querySelectorAll(".about-line");
    gsap.fromTo(
      lines,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stats counter trigger
    ScrollTrigger.create({
      trigger: statsRef.current,
      start: "top 80%",
      onEnter: () => setStatsInView(true),
    });

    // Stats stagger
    const statItems = statsRef.current.querySelectorAll(".stat-item");
    gsap.fromTo(
      statItems,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="gradient-blob gradient-blob-blue w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-20 right-0 absolute" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section label & Tab Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 md:mb-14">
          <div className="flex items-center gap-4">
            <span className="font-body text-sm text-accent font-semibold">
              01
            </span>
            <div className="h-[1px] w-16 bg-accent/50" />
            <span className="font-body text-sm text-text-muted">
              About Me
            </span>
          </div>

          {/* Story vs Cover Letter View Toggle */}
          <div className="inline-flex p-1 rounded-2xl bg-white/[0.03] border border-white/10 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab("story")}
              className={`px-4 py-1.5 rounded-xl text-xs font-body font-medium transition-all ${
                activeTab === "story"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-text-muted hover:text-white"
              }`}
            >
              Engineering Story
            </button>
            <button
              onClick={() => setActiveTab("letter")}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-body font-medium transition-all ${
                activeTab === "letter"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-text-muted hover:text-white"
              }`}
            >
              <TbFileText className="w-3.5 h-3.5" />
              <span>Cover Letter</span>
            </button>
          </div>
        </div>

        {activeTab === "story" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
            {/* Left: Editorial text */}
            <div ref={textRef} className="lg:col-span-7">
              <h2 className="font-display text-section font-bold text-white mb-8 leading-[1.1]">
                <span className="about-line block overflow-hidden">
                  <span className="inline-block">Crafting scalable</span>
                </span>
                <span className="about-line block overflow-hidden">
                  <span className="inline-block">
                    modern <span className="text-accent">software &amp; mobile apps</span>
                  </span>
                </span>
              </h2>

              <div className="space-y-6">
                <p className="about-line font-body text-lg text-text-secondary leading-relaxed">
                  Full-Stack Software Engineer with 3+ years of engineering experience,
                  specializing deeply in Mobile Development (Android Native with Kotlin &amp; Jetpack Compose,
                  Kotlin Multiplatform, and Flutter), complemented by robust Backend Engineering in Java and Spring Boot microservices.
                </p>
                <p className="about-line font-body text-lg text-text-muted leading-relaxed">
                  Hands-on in the on-demand and super-app space — ride-hailing-style
                  customer apps, last-mile delivery tooling with GPS route tracking,
                  and the Ordering and Loyalty backend services powering a multi-country
                  super-app live in Egypt and Morocco. Reduced ANR rate by 98%, grew
                  MAU by 500%, and cut app launch time by 40%.
                </p>
              </div>

              {/* Cover letter callout banner */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4 flex-wrap">
                <button
                  onClick={onOpenCoverLetter}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-accent hover:text-white border border-white/10 text-xs font-body font-semibold text-text-secondary transition-all group"
                >
                  <TbFileText className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                  <span>Read Full Cover Letter</span>
                  <TbExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href="/John_Safwat_Boles_Cover_Letter.md"
                  download
                  className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent font-body transition-colors"
                >
                  <TbDownload className="w-3.5 h-3.5" />
                  <span>Download Cover Letter (.md)</span>
                </a>
              </div>
            </div>

            {/* Right: Glassmorphic Cover Letter preview card */}
            <div className="lg:col-span-5 relative">
              <div
                onClick={onOpenCoverLetter}
                className="p-6 sm:p-8 rounded-3xl bg-surface border border-white/10 hover:border-accent/40 transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-2xl shadow-black/40"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors pointer-events-none" />

                {/* Card Header */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-accent/15 text-accent-light">
                      <TbQuote className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="font-display text-sm font-bold text-white">Letter of Intent</div>
                      <div className="text-[11px] font-mono text-text-muted">August 9, 2026</div>
                    </div>
                  </div>
                  <span className="text-xs font-body text-accent group-hover:text-accent-light flex items-center gap-1 font-semibold">
                    Open <TbExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Excerpt quote */}
                <div className="space-y-3 font-body text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  <p className="font-semibold text-white">Dear Hiring Manager,</p>
                  <p className="line-clamp-4 text-text-muted">
                    &ldquo;I&apos;m a Software Engineer with 3+ years of experience building production-grade applications across mobile and backend, most recently at Kazyon Plus. My background spans native Android in Kotlin &amp; Jetpack Compose, Kotlin Multiplatform, Flutter, and Spring Boot backend microservices...&rdquo;
                  </p>
                  <div className="p-3 rounded-xl bg-accent/5 border border-accent/15 text-xs text-accent-light font-medium">
                    ✦ Slashed ANR 7.59% → 0.14% &bull; +500% MAU &bull; Egypt &amp; Morocco
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
                  <span className="font-display font-semibold text-white">John Safwat Boles</span>
                  <span className="text-accent group-hover:underline">Click to read full letter &rarr;</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Inline Full Cover Letter View */
          <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-surface border border-white/10 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">Cover Letter</h3>
                <p className="text-xs font-body text-accent-light font-medium mt-0.5">
                  Full-Stack Software Engineer — Mobile (Android/Kotlin, Flutter/KMP) &amp; Backend (Java, Spring Boot)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/John_Safwat_Boles_Cover_Letter.md"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-body font-medium text-text-secondary hover:text-white transition-all"
                >
                  <TbDownload className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download .md</span>
                </a>
              </div>
            </div>

            <div className="space-y-5 font-body text-sm sm:text-base text-text-secondary leading-relaxed max-w-4xl">
              <p className="text-xs font-mono text-text-muted">August 9, 2026</p>
              <p className="font-semibold text-white">Dear Hiring Manager,</p>
              <p>
                I&apos;m writing to express my interest in joining your engineering team. I&apos;m a Software Engineer with 3+ years of experience building production-grade applications across mobile and backend, most recently at <strong className="text-white">Kazyon Plus</strong>, a high-traffic super-app for retail and on-demand delivery. My background spans native Android development in Kotlin and Jetpack Compose, cross-platform delivery with Kotlin Multiplatform and Flutter, and backend services in Java and Spring Boot — giving me the flexibility to contribute wherever a team needs strong engineering, whether that&apos;s a mobile role, a full-stack role, or something that spans both.
              </p>
              <p>
                At <strong className="text-white">Kazyon Plus</strong>, I led the architectural migration from Android Native to Kotlin Multiplatform, unifying the codebase across Android and iOS, and drove performance work that <span className="text-accent-light font-semibold">cut the ANR rate from 7.59% to 0.14%</span>, reduced crash rate from 6.43% to 0.19%, and shortened app launch time by 40%. I also built and maintained the backend Ordering and Loyalty services in Spring Boot that power the app&apos;s checkout and rewards experience live in production across Egypt and Morocco. Together, these improvements supported <span className="text-accent-light font-semibold">500% growth in Monthly Active Users</span> and a 220% increase in online orders. Beyond that role, I&apos;ve shipped cross-platform apps from scratch at LinkYou Inc. and Moalen CO, engineered a last-mile delivery operations tool with GPS route tracking, and mentored aspiring developers as an instructor at Elevate Tech and Route Academy.
              </p>
              <p>
                What draws me to new opportunities is the chance to work on products at meaningful scale, where clean architecture, reliable APIs, and attention to performance directly translate into a better experience for real users. I bring hands-on fluency with REST APIs and microservices, Firebase, CI/CD pipelines, and Clean Architecture patterns, along with a habit of digging into root causes rather than symptoms — the same approach that got Kazyon Plus&apos;s ANR rate down by 98%.
              </p>
              <p>
                I&apos;d welcome the opportunity to discuss how my mobile and full-stack experience could contribute to your team. Thank you for your time and consideration — I&apos;ve attached my resume and would be glad to share more detail on any of the projects above.
              </p>
              <div className="pt-4">
                <p className="text-text-muted text-xs">Sincerely,</p>
                <p className="font-display text-lg font-bold text-white mt-1">John Safwat Boles</p>
              </div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20 pt-12 md:pt-20 border-t border-white/5"
        >
          {stats.map((stat, i) => (
            <div key={i} className="stat-item text-center md:text-left">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                inView={statsInView}
              />
              <p className="font-body text-sm text-text-muted mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
