"use client";

import { useState } from "react";
import Link from "next/link";
import { CVVersion, cvDataStore } from "@/data/cvData";
import { 
  TbArrowLeft, 
  TbPrinter, 
  TbDownload, 
  TbCopy, 
  TbCheck, 
  TbMail, 
  TbPhone, 
  TbMapPin, 
  TbSun, 
  TbMoon,
  TbBrandLinkedin
} from "react-icons/tb";
import { SiGithub } from "react-icons/si";

export default function CVPage() {
  const [version, setVersion] = useState<CVVersion>("fullstack");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const data = cvDataStore[version];

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

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

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-[#0b0b0e] text-white" : "bg-[#f8f9fa] text-gray-900"}`}>
      {/* Top Floating Control Bar — hidden when printing */}
      <header className="cv-no-print sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 bg-opacity-90 dark:bg-opacity-90 border-white/10"
              style={{ backgroundColor: isDarkMode ? "rgba(11, 11, 14, 0.85)" : "rgba(255, 255, 255, 0.9)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
          {/* Back button */}
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-xs font-body font-medium transition-colors ${
              isDarkMode ? "text-text-muted hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <TbArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Controls */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Version Toggle */}
            <div className={`inline-flex p-1 rounded-full border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-gray-100 border-gray-300"}`}>
              <button
                onClick={() => setVersion("fullstack")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-body font-medium transition-all ${
                  version === "fullstack"
                    ? "bg-accent text-white shadow-sm"
                    : isDarkMode ? "text-text-muted hover:text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                Software Engineer
              </button>
              <button
                onClick={() => setVersion("mobile")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-body font-medium transition-all ${
                  version === "mobile"
                    ? "bg-accent text-white shadow-sm"
                    : isDarkMode ? "text-text-muted hover:text-white" : "text-gray-600 hover:text-black"
                }`}
              >
                Mobile Software Engineer
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full border transition-all ${
                isDarkMode
                  ? "bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10"
                  : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
              title={isDarkMode ? "Switch to Light View" : "Switch to Dark View"}
              aria-label="Toggle CV theme"
            >
              {isDarkMode ? <TbSun className="w-4 h-4" /> : <TbMoon className="w-4 h-4" />}
            </button>

            {/* Markdown Download */}
            <a
              href={version === "fullstack" ? "/John_Safwat_Boles_FullStack_CV.md" : "/John_Safwat_Boles_Mobile_CV.md"}
              download
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium border transition-all ${
                isDarkMode
                  ? "bg-white/5 border-white/10 text-text-secondary hover:bg-white/10 hover:text-white"
                  : "bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
            >
              <TbDownload className="w-3.5 h-3.5 text-emerald-400" />
              <span>Markdown (.md)</span>
            </a>

            {/* Print / Save as PDF */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white hover:bg-accent-light text-xs font-medium shadow-md shadow-accent/25 transition-all"
            >
              <TbPrinter className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* CV Sheet Canvas */}
      <main className="max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-16">
        <article
          className={`p-8 sm:p-14 rounded-3xl border transition-all ${
            isDarkMode
              ? "bg-[#121217] border-white/10 shadow-2xl shadow-black/40"
              : "bg-white border-gray-200 shadow-xl shadow-gray-200/50 text-gray-900"
          }`}
        >
          {/* Header */}
          <header className="pb-8 mb-8 border-b border-gray-200 dark:border-white/10">
            <h1 className={`font-display text-3xl sm:text-5xl font-bold tracking-tight mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              John Safwat Boles
            </h1>
            <p className="font-display text-base sm:text-lg font-semibold text-accent mb-4">
              {data.title}
            </p>

            {/* Contact details */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                  isDarkMode ? "bg-white/5 border-white/10 text-text-secondary hover:border-accent" : "bg-gray-50 border-gray-200 text-gray-700 hover:border-accent"
                }`}
              >
                <TbMail className="w-3.5 h-3.5 text-accent" />
                <span>johnsafwat362@gmail.com</span>
                {copiedEmail ? <TbCheck className="w-3.5 h-3.5 text-green-400" /> : <TbCopy className="w-3 h-3 text-text-dim" />}
              </button>

              <button
                onClick={handleCopyPhone}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                  isDarkMode ? "bg-white/5 border-white/10 text-text-secondary hover:border-accent" : "bg-gray-50 border-gray-200 text-gray-700 hover:border-accent"
                }`}
              >
                <TbPhone className="w-3.5 h-3.5 text-accent" />
                <span>+20 104 047 6728</span>
                {copiedPhone ? <TbCheck className="w-3.5 h-3.5 text-green-400" /> : <TbCopy className="w-3 h-3 text-text-dim" />}
              </button>

              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                isDarkMode ? "bg-white/5 border-white/10 text-text-muted" : "bg-gray-50 border-gray-200 text-gray-600"
              }`}>
                <TbMapPin className="w-3.5 h-3.5 text-accent" />
                <span>Cairo, Egypt</span>
              </span>

              <a
                href="https://www.linkedin.com/in/johnsafwat-mobiledev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                  isDarkMode ? "bg-white/5 border-white/10 text-text-secondary hover:text-white hover:border-accent" : "bg-gray-50 border-gray-200 text-gray-700 hover:text-black hover:border-accent"
                }`}
              >
                <TbBrandLinkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/john-safwat"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                  isDarkMode ? "bg-white/5 border-white/10 text-text-secondary hover:text-white hover:border-accent" : "bg-gray-50 border-gray-200 text-gray-700 hover:text-black hover:border-accent"
                }`}
              >
                <SiGithub className="w-3 h-3 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="mb-10">
            <h2 className="text-base font-display font-semibold text-accent mb-3 pb-1 border-b border-accent/20">
              Professional Summary
            </h2>
            <p className={`font-body text-sm sm:text-base leading-relaxed ${isDarkMode ? "text-text-secondary" : "text-gray-800"}`}>
              {data.summary}
            </p>
          </section>

          {/* Professional Experience */}
          <section className="mb-10">
            <h2 className="text-base font-display font-semibold text-accent mb-6 pb-1 border-b border-accent/20">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {data.experiences.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className={`font-display text-base sm:text-lg font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-accent font-semibold">{exp.date}</span>
                  </div>

                  <div className={`text-xs font-body mb-3 ${isDarkMode ? "text-text-muted" : "text-gray-600"}`}>
                    <strong className={isDarkMode ? "text-text-secondary" : "text-gray-800"}>{exp.company}</strong> · {exp.location}
                    {exp.meta && <span> — {exp.meta}</span>}
                  </div>

                  <ul className="space-y-2 pl-4 list-disc marker:text-accent">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className={`font-body text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-text-secondary" : "text-gray-700"}`}>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-10">
            <h2 className="text-base font-display font-semibold text-accent mb-4 pb-1 border-b border-accent/20">
              Technical Skills Matrix
            </h2>
            <div className="space-y-2.5">
              {data.skills.map((skill, i) => (
                <div key={i} className={`p-2.5 rounded-xl text-xs sm:text-sm ${isDarkMode ? "bg-white/[0.02]" : "bg-gray-50"}`}>
                  <strong className={isDarkMode ? "text-white" : "text-gray-900"}>{skill.label}: </strong>
                  <span className={isDarkMode ? "text-text-muted" : "text-gray-700"}>{skill.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section className="mb-10">
            <h2 className="text-base font-display font-semibold text-accent mb-4 pb-1 border-b border-accent/20">
              Key Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((proj, i) => (
                <div key={i} className={`p-4 rounded-xl border ${isDarkMode ? "bg-white/[0.02] border-white/5" : "bg-gray-50 border-gray-200"}`}>
                  <div className="flex items-baseline justify-between gap-2 flex-wrap mb-1">
                    <h3 className={`font-display text-sm sm:text-base font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {proj.title}
                    </h3>
                  </div>
                  <div className="text-xs text-accent font-mono mb-2">{proj.tech}</div>
                  <p className={`font-body text-xs sm:text-sm leading-relaxed ${isDarkMode ? "text-text-secondary" : "text-gray-700"}`}>
                    {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-base font-display font-semibold text-accent mb-3 pb-1 border-b border-accent/20">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className={`font-display text-base font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                Bachelor of Science in Computer Science
              </h3>
              <span className="text-xs font-mono text-text-muted">2020 — 2024</span>
            </div>
            <p className={`font-body text-xs sm:text-sm ${isDarkMode ? "text-text-muted" : "text-gray-600"}`}>
              Modern University for Technology &amp; Information (MTI) · Cairo, Egypt — <strong className={isDarkMode ? "text-accent-light" : "text-accent"}>GPA 3.59 / 4.0</strong>
            </p>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-base font-display font-semibold text-accent mb-2 pb-1 border-b border-accent/20">
              Languages
            </h2>
            <p className={`font-body text-xs sm:text-sm ${isDarkMode ? "text-text-secondary" : "text-gray-700"}`}>
              Arabic (Native) &bull; English (Professional Working Proficiency)
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}