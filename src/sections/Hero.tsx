"use client";

import { useEffect, useRef, Suspense } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import ScrollIndicator from "@/components/ScrollIndicator";
import dynamic from "next/dynamic";

const FloatingShape = dynamic(() => import("@/components/FloatingShape"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !nameRef.current) return;

    // Pin the hero section
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=50%",
      pin: true,
      pinSpacing: true,
    });

    // Animate name letters
    const chars = nameRef.current.querySelectorAll(".hero-char");
    const tl = gsap.timeline({ delay: 3.2 });

    tl.fromTo(
      chars,
      { y: 120, rotateX: -90, opacity: 0 },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        stagger: 0.04,
        duration: 1,
        ease: "power4.out",
      }
    );

    tl.fromTo(
      subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    tl.fromTo(
      taglineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    );

    tl.fromTo(
      badgeRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Parallax on scroll
    gsap.to(nameRef.current, {
      yPercent: -30,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const nameText = "JOHN SAFWAT";

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="gradient-blob gradient-blob-blue w-[300px] h-[300px] md:w-[600px] md:h-[600px] -top-20 -right-20 md:-top-40 md:-right-40 absolute" />
      <div className="gradient-blob gradient-blob-purple w-[250px] h-[250px] md:w-[500px] md:h-[500px] -bottom-20 -left-20 md:-bottom-40 md:-left-40 absolute" />

      {/* 3D Shape */}
      <Suspense fallback={null}>
        <FloatingShape />
      </Suspense>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Location badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 opacity-0"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-body text-xs uppercase tracking-wider text-text-muted">
            Cairo, Egypt
          </span>
        </div>

        {/* Hero name */}
        <div
          ref={nameRef}
          className="font-display text-hero font-bold text-white leading-[0.9] tracking-tight mb-6"
          style={{ perspective: "1000px" }}
        >
          {nameText.split("").map((char, i) => (
            <span
              key={i}
              className="hero-char inline-block opacity-0"
              style={{
                whiteSpace: char === " " ? "pre" : undefined,
                transformOrigin: "bottom center",
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="opacity-0">
          <h2 className="font-display text-xl md:text-3xl text-text-secondary font-medium mb-4">
            Mobile Application Developer
          </h2>
        </div>

        {/* Tagline */}
        <div ref={taglineRef} className="opacity-0">
          <p className="font-body text-sm md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Crafting seamless cross-platform experiences with Flutter,
            <br className="hidden md:block" />
            Kotlin Multiplatform &amp; Android Native
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
}
