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

  const emailAddress = "johnsafwat362@gmail.com";
  const mailtoLink = `mailto:${emailAddress}`;

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
      className="section-padding relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="gradient-blob gradient-blob-blue w-[300px] h-[300px] md:w-[600px] md:h-[600px] bottom-0 left-1/2 -translate-x-1/2 absolute" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            07
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Contact
          </span>
        </div>

        {/* Large kinetic heading */}
        <div
          ref={headingRef}
          className="font-display text-section md:text-[6vw] font-bold text-white leading-[0.95] mb-16"
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
              <div className="flex items-center gap-3">
                <MagneticButton strength={0.15}>
                  <a
                    href={mailtoLink}
                    className="font-display text-xl md:text-2xl text-white hover:text-accent transition-colors duration-300"
                    data-cursor-hover
                  >
                    {emailAddress}
                  </a>
                </MagneticButton>
                <button
                  onClick={copyEmail}
                  className="relative p-2 rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                  data-cursor-hover
                  aria-label="Copy email"
                >
                  {copied ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-muted group-hover:text-accent transition-colors">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {copied ? "Copied!" : "Copy"}
                  </span>
                </button>
              </div>
            </div>

            {/* Phone */}
            <div>
              <span className="font-body text-xs uppercase tracking-wider text-text-muted block mb-2">
                Phone
              </span>
              <a
                href="https://wa.me/201040476728"
                target="_blank"
                rel="noopener noreferrer"
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
          <div className="flex flex-col gap-8">
            <span className="font-body text-xs uppercase tracking-wider text-text-muted block mb-1">
              Connect
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 items-start justify-items-start">
                                      {/* LinkedIn */}
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

            {/* GitHub */}
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

            {/* Instagram */}
            <MagneticButton strength={0.15}>
              <a
                href="https://www.instagram.com/john_s_911/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-display text-lg text-white group-hover:text-accent transition-colors block">
                    Instagram
                  </span>
                  <span className="font-body text-xs text-text-muted">
                    /john_s_911
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

            {/* Facebook */}
            <MagneticButton strength={0.15}>
              <a
                href="https://www.facebook.com/john.safwat.77"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-display text-lg text-white group-hover:text-accent transition-colors block">
                    Facebook
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