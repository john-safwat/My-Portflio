"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("johnsafwat362@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (!headingRef.current) return;

    const chars = headingRef.current.querySelectorAll(".contact-char");
    gsap.fromTo(
      chars,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const headingText = "GET IN TOUCH";

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative min-h-screen flex items-center"
    >
      <div className="gradient-blob gradient-blob-blue w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2 absolute" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            06
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Contact
          </span>
        </div>

        {/* Large kinetic heading */}
        <div
          ref={headingRef}
          className="font-display text-section md:text-[8vw] font-bold text-white leading-[0.95] mb-16"
          style={{ perspective: "1000px" }}
        >
          {headingText.split("").map((char, i) => (
            <span
              key={i}
              className="contact-char inline-block"
              style={{
                whiteSpace: char === " " ? "pre" : undefined,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Email */}
            <div>
              <span className="font-body text-xs uppercase tracking-wider text-text-muted block mb-2">
                Email
              </span>
              <MagneticButton strength={0.15}>
                <button
                  onClick={copyEmail}
                  className="font-display text-xl md:text-2xl text-white hover:text-accent transition-colors duration-300 relative group"
                  data-cursor-hover
                >
                  johnsafwat362@gmail.com
                  <span className="absolute -top-8 left-0 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    {copied ? "Copied!" : "Click to copy"}
                  </span>
                </button>
              </MagneticButton>
            </div>

            {/* Phone */}
            <div>
              <span className="font-body text-xs uppercase tracking-wider text-text-muted block mb-2">
                Phone
              </span>
              <a
                href="tel:+201040476728"
                className="font-display text-xl md:text-2xl text-white hover:text-accent transition-colors duration-300"
                data-cursor-hover
              >
                +20 104 047 6728
              </a>
            </div>

            {/* Languages */}
            <div>
              <span className="font-body text-xs uppercase tracking-wider text-text-muted block mb-2">
                Languages
              </span>
              <p className="font-body text-text-secondary">
                Arabic <span className="text-text-muted">(Native)</span> ·
                English <span className="text-text-muted">(Professional)</span>
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-6">
            <span className="font-body text-xs uppercase tracking-wider text-text-muted block mb-4">
              Connect
            </span>

            <MagneticButton strength={0.15}>
              <a
                href="https://www.linkedin.com/in/john-safwat-b3645427a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-display text-lg text-white group-hover:text-accent transition-colors block">
                    LinkedIn
                  </span>
                  <span className="font-body text-xs text-text-muted">
                    /in/john-safwat
                  </span>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-text-muted group-hover:text-accent ml-auto transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path
                    d="M1 13L13 1M13 1H4M13 1V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.15}>
              <a
                href="https://github.com/john-safwat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-display text-lg text-white group-hover:text-accent transition-colors block">
                    GitHub
                  </span>
                  <span className="font-body text-xs text-text-muted">
                    /john-safwat
                  </span>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-text-muted group-hover:text-accent ml-auto transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <path
                    d="M1 13L13 1M13 1H4M13 1V10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-text-dim">
            © {new Date().getFullYear()} John Safwat. All rights reserved.
          </p>
          <p className="font-body text-sm text-text-dim">
            Designed &amp; Built by{" "}
            <span className="text-accent">John Safwat</span>
          </p>
        </div>
      </div>
    </section>
  );
}
