"use client";

import { useState } from "react";
import ModalBackdrop from "./ModalBackdrop";
import { 
  TbCopy, 
  TbCheck, 
  TbDownload, 
  TbX, 
  TbMail, 
  TbPhone, 
  TbMapPin, 
  TbBrandLinkedin, 
  TbFileText,
  TbCalendar
} from "react-icons/tb";
import { SiGithub } from "react-icons/si";

interface CoverLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CoverLetterModal({ isOpen, onClose }: CoverLetterModalProps) {
  const [copied, setCopied] = useState(false);

  const coverLetterText = `JOHN SAFWAT BOLES
Software Engineer — Mobile (Android/Kotlin, Flutter/KMP) & Full-Stack (Java, Spring Boot)
johnsafwat362@gmail.com | +20 104 047 6728 | Cairo, Egypt | Open to Remote
LinkedIn: https://www.linkedin.com/in/johnsafwat-mobiledev/
GitHub: https://github.com/john-safwat
Portfolio: https://my-portflio-mu.vercel.app/

August 9, 2026

Dear Hiring Manager,

I'm writing to express my interest in joining your engineering team. I'm a Software Engineer with 3+ years of experience building production-grade applications across mobile and backend, most recently at Kazyon Plus, a high-traffic super-app for retail and on-demand delivery. My background spans native Android development in Kotlin and Jetpack Compose, cross-platform delivery with Kotlin Multiplatform and Flutter, and backend services in Java and Spring Boot — giving me the flexibility to contribute wherever a team needs strong engineering, whether that's a mobile role, a full-stack role, or something that spans both.

At Kazyon Plus, I led the architectural migration from Android Native to Kotlin Multiplatform, unifying the codebase across Android and iOS, and drove performance work that cut the ANR rate from 7.59% to 0.14%, reduced crash rate from 6.43% to 0.19%, and shortened app launch time by 40%. I also built and maintained the backend Ordering and Loyalty services in Spring Boot that power the app's checkout and rewards experience live in production across Egypt and Morocco. Together, these improvements supported 500% growth in Monthly Active Users and a 220% increase in online orders. Beyond that role, I've shipped cross-platform apps from scratch at LinkYou Inc. and Moalen CO, engineered a last-mile delivery operations tool with GPS route tracking, and mentored aspiring developers as an instructor at Elevate Tech and Route Academy.

What draws me to new opportunities is the chance to work on products at meaningful scale, where clean architecture, reliable APIs, and attention to performance directly translate into a better experience for real users. I bring hands-on fluency with REST APIs and microservices, Firebase, CI/CD pipelines, and Clean Architecture patterns, along with a habit of digging into root causes rather than symptoms — the same approach that got Kazyon Plus's ANR rate down by 98%.

I'd welcome the opportunity to discuss how my mobile and full-stack experience could contribute to your team. Thank you for your time and consideration — I've attached my resume and would be glad to share more detail on any of the projects above.

Sincerely,

John Safwat Boles`;

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetterText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ModalBackdrop
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="Cover Letter — John Safwat Boles"
      maxWidth="max-w-3xl"
    >
      <div className="relative p-6 sm:p-8 md:p-12 text-white">
        {/* Ambient glows */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Bar */}
        <div className="relative z-10 flex items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-accent/15 text-accent-light">
              <TbFileText className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display text-base font-bold text-white">Letter of Intent</h3>
              <p className="text-xs font-body text-text-muted">Personal Cover Letter &amp; Engineering Philosophy</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-text-secondary hover:text-white transition-all"
              title="Copy Cover Letter text"
            >
              {copied ? <TbCheck className="w-4 h-4 text-green-400" /> : <TbCopy className="w-4 h-4 text-accent-light" />}
              <span>{copied ? "Copied!" : "Copy Text"}</span>
            </button>

            <a
              href="/John_Safwat_Boles_Cover_Letter.md"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-text-secondary hover:text-white transition-all"
              title="Download as Markdown"
            >
              <TbDownload className="w-4 h-4 text-emerald-400" />
              <span>Markdown</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors ml-1"
              aria-label="Close dialog"
            >
              <TbX className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Letter Header */}
        <div className="relative z-10 mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              John Safwat Boles
            </h2>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-light bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
              <TbCalendar className="w-3.5 h-3.5" />
              <span>August 9, 2026</span>
            </div>
          </div>

          <p className="font-display text-sm text-accent font-semibold mb-4">
            Full-Stack Software Engineer — Mobile (Android/Kotlin, Flutter/KMP) &amp; Backend (Java, Spring Boot)
          </p>

          <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted pt-3 border-t border-white/5">
            <span className="inline-flex items-center gap-1">
              <TbMail className="w-3.5 h-3.5 text-accent" />
              <span>johnsafwat362@gmail.com</span>
            </span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1">
              <TbPhone className="w-3.5 h-3.5 text-accent" />
              <span>+20 104 047 6728</span>
            </span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1">
              <TbMapPin className="w-3.5 h-3.5 text-accent" />
              <span>Cairo, Egypt (Open to Remote)</span>
            </span>
          </div>
        </div>

        {/* Letter Body */}
        <div className="relative z-10 space-y-5 text-sm sm:text-base font-body text-text-secondary leading-relaxed">
          <p className="font-semibold text-white">
            Dear Hiring Manager,
          </p>

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
            <p className="text-text-muted">Sincerely,</p>
            <p className="font-display text-lg font-bold text-white mt-1">John Safwat Boles</p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="relative z-10 pt-6 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <span>Press ESC or click outside to close.</span>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/johnsafwat-mobiledev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-white transition-colors"
            >
              <TbBrandLinkedin className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/john-safwat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-white transition-colors"
            >
              <SiGithub className="w-3.5 h-3.5 text-purple-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </ModalBackdrop>
  );
}
