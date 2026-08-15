"use client";

import { useState } from "react";
import { CVVersion, cvDataStore } from "@/data/cvData";
import ModalBackdrop from "./ModalBackdrop";
import Link from "next/link";
import { 
  TbDownload, 
  TbPrinter, 
  TbCopy, 
  TbCheck, 
  TbX, 
  TbMail, 
  TbPhone, 
  TbMapPin, 
  TbExternalLink, 
  TbFileText,
  TbBrandLinkedin
} from "react-icons/tb";
import { SiGithub } from "react-icons/si";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [version, setVersion] = useState<CVVersion>("fullstack");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const data = cvDataStore[version];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("johnsafwat362@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+201040476728");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePrint = () => {
    // Open dedicated CV page with print trigger
    window.open("/cv", "_blank");
  };

  return (
    <ModalBackdrop
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="Interactive Curriculum Vitae"
      maxWidth="max-w-4xl"
    >
      <div className="relative p-6 sm:p-8 md:p-12 text-white">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
          {/* Profile Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setVersion("fullstack")}
              className={`px-4 py-2 rounded-lg text-xs font-display uppercase tracking-wider transition-all ${
                version === "fullstack"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-text-muted hover:text-white"
              }`}
            >
              Full-Stack CV
            </button>
            <button
              onClick={() => setVersion("mobile")}
              className={`px-4 py-2 rounded-lg text-xs font-display uppercase tracking-wider transition-all ${
                version === "mobile"
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-text-muted hover:text-white"
              }`}
            >
              Mobile CV
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-text-secondary hover:text-white transition-all"
              title="Printable / PDF View"
            >
              <TbPrinter className="w-4 h-4 text-accent-light" />
              <span>Print / PDF</span>
            </button>

            <a
              href={version === "fullstack" ? "/John_Safwat_Boles_FullStack_CV.md" : "/John_Safwat_Boles_Mobile_CV.md"}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-text-secondary hover:text-white transition-all"
              title="Download Markdown"
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

        {/* CV Header */}
        <div className="relative z-10 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                JOHN SAFWAT BOLES
              </h2>
              <p className="font-display text-sm sm:text-base text-accent-light font-semibold mt-1">
                {data.title}
              </p>
            </div>

            <Link
              href="/cv"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/30 text-accent-light hover:bg-accent/20 text-xs font-medium transition-all shrink-0 self-start md:self-auto"
            >
              <TbFileText className="w-4 h-4" />
              <span>Dedicated Page View</span>
              <TbExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap items-center gap-2.5 mt-4 pt-4 border-t border-white/5 text-xs">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-text-secondary hover:border-accent/40 transition-colors"
            >
              <TbMail className="w-3.5 h-3.5 text-accent" />
              <span>johnsafwat362@gmail.com</span>
              {copiedEmail ? <TbCheck className="w-3.5 h-3.5 text-green-400" /> : <TbCopy className="w-3 h-3 text-text-dim" />}
            </button>

            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-text-secondary hover:border-accent/40 transition-colors"
            >
              <TbPhone className="w-3.5 h-3.5 text-accent" />
              <span>+20 104 047 6728</span>
              {copiedPhone ? <TbCheck className="w-3.5 h-3.5 text-green-400" /> : <TbCopy className="w-3 h-3 text-text-dim" />}
            </button>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-text-muted">
              <TbMapPin className="w-3.5 h-3.5 text-accent" />
              <span>Cairo, Egypt</span>
            </span>

            <a
              href="https://www.linkedin.com/in/johnsafwat-mobiledev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-text-secondary hover:text-white hover:border-accent/40 transition-colors"
            >
              <TbBrandLinkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/john-safwat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-text-secondary hover:text-white hover:border-accent/40 transition-colors"
            >
              <SiGithub className="w-3 h-3 text-purple-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Section: Professional Summary */}
        <div className="relative z-10 mb-8 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <h3 className="text-xs font-body uppercase tracking-[0.2em] text-accent-light font-bold mb-3">
            Professional Summary
          </h3>
          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed">
            {data.summary}
          </p>
        </div>

        {/* Section: Experience */}
        <div className="relative z-10 mb-8">
          <h3 className="text-xs font-body uppercase tracking-[0.2em] text-accent-light font-bold mb-4 pb-2 border-b border-white/10">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {data.experiences.map((exp, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                  <h4 className="font-display text-base sm:text-lg font-bold text-white">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-body text-accent font-mono">
                    {exp.date}
                  </span>
                </div>
                <div className="text-xs font-body text-text-muted mb-3">
                  {exp.company} · {exp.location} {exp.meta && `— ${exp.meta}`}
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, j) => (
                    <li
                      key={j}
                      className="font-body text-xs sm:text-sm text-text-secondary flex items-start gap-2.5"
                    >
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Technical Skills Matrix */}
        <div className="relative z-10 mb-8">
          <h3 className="text-xs font-body uppercase tracking-[0.2em] text-accent-light font-bold mb-4 pb-2 border-b border-white/10">
            Technical Skills Matrix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {data.skills.map((skill, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 font-body text-xs sm:text-sm"
              >
                <div className="font-bold text-white mb-1">{skill.label}:</div>
                <div className="text-text-muted text-xs leading-relaxed">{skill.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Education */}
        <div className="relative z-10 mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
          <h3 className="text-xs font-body uppercase tracking-[0.2em] text-accent-light font-bold mb-3">
            Education
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <span className="font-display text-base font-bold text-white">
              BSc in Computer Science (GPA 3.59 / 4.0)
            </span>
            <span className="text-xs font-mono text-text-muted">2020 — 2024</span>
          </div>
          <p className="font-body text-xs sm:text-sm text-text-muted">
            Modern University for Technology & Information (MTI) · Cairo, Egypt
          </p>
        </div>

        {/* Section: Languages */}
        <div className="relative z-10 mb-8 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-text-secondary">
          <strong className="text-white">Languages:</strong> Arabic (Native) &bull; English (Professional Working Proficiency)
        </div>

        {/* Footer */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-text-muted">
          <span>Press ESC or click outside to dismiss.</span>
          <button
            onClick={handlePrint}
            className="text-accent-light hover:underline flex items-center gap-1"
          >
            <TbPrinter className="w-3.5 h-3.5" />
            Print full version
          </button>
        </div>
      </div>
    </ModalBackdrop>
  );
}
