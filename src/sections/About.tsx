"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

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

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

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
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8 md:mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            01
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            About Me
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Editorial text */}
          <div ref={textRef}>
            <h2 className="font-display text-section font-bold text-white mb-8 leading-[1.1]">
              <span className="about-line block overflow-hidden">
                <span className="inline-block">Building the</span>
              </span>
              <span className="about-line block overflow-hidden">
                <span className="inline-block">
                  future of <span className="text-accent">mobile</span>
                </span>
              </span>
            </h2>

            <div className="space-y-6">
              <p className="about-line font-body text-lg text-text-secondary leading-relaxed">
                Results-driven Mobile Application Developer with 3+ years of
                experience architecting production-grade applications across
                Flutter, Kotlin Multiplatform, and Android Native.
              </p>
              <p className="about-line font-body text-lg text-text-muted leading-relaxed">
                Passionate about crafting seamless cross-platform experiences
                that scale. From reducing ANR rates to driving 500% MAU growth,
                I focus on performance, clean architecture, and delivering real
                business impact.
              </p>
            </div>
          </div>

          {/* Right: Abstract visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Abstract geometric */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl rotate-6 transition-transform hover:rotate-12 duration-700" />
              <div className="absolute inset-4 border border-accent/20 rounded-2xl -rotate-3 transition-transform hover:-rotate-6 duration-700" />
              <div className="absolute inset-8 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <span className="font-display text-7xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
                    John.S
                  </span>
                  <div className="mt-2 font-body text-xs uppercase tracking-[0.3em] text-text-muted">
                    Mobile App Developer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
