"use client";

import { motion } from "framer-motion";
import { 
  TbSchool, 
  TbAward, 
  TbCertificate, 
  TbCode, 
  TbBook, 
  TbSparkles,
  TbCheck
} from "react-icons/tb";

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming (OOP)",
  "Software Engineering & Clean Architecture",
  "Database Management Systems (RDBMS & SQL)",
  "Operating Systems & Multithreading",
  "Computer Networks & API Protocols",
  "Distributed Systems & Cloud Computing",
  "Design Patterns & System Architecture",
  "Mobile & Web Application Development",
  "Artificial Intelligence & Machine Learning"
];

const achievements = [
  {
    title: "Graduated with High Honors",
    desc: "Achieved a cumulative 3.59 / 4.0 GPA, earning Dean's List academic recognition across academic years."
  },
  {
    title: "Graduation Project: Excellent (A+)",
    desc: "Architected a scalable on-demand mobile application ecosystem with real-time location streaming and microservices."
  },
  {
    title: "Algorithmic Problem Solving & Contests",
    desc: "Active participant in algorithmic problem solving and competitive coding contests focusing on time and space complexity."
  },
  {
    title: "Student Technical Workshops",
    desc: "Organized peer coding sessions and workshops introducing underclassmen to mobile development and clean coding fundamentals."
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative overflow-hidden">
      <div className="gradient-blob gradient-blob-blue w-[200px] h-[200px] md:w-[400px] md:h-[400px] top-1/2 left-0 absolute pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-body text-sm text-accent font-semibold">
            05
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm text-text-muted">
            Academic Background
          </span>
        </div>

        {/* Main Degree Showcase Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="p-8 sm:p-12 md:p-14 rounded-3xl bg-surface border border-white/10 relative overflow-hidden shadow-2xl mb-10 group hover:border-accent/30 transition-all duration-500"
        >
          {/* Ambient decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/15 transition-colors pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-8 mb-8 border-b border-white/5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono text-accent-light">
                <TbSchool className="w-4 h-4" />
                <span>2020 — 2024 &bull; 4-Year Undergraduate Program</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                Bachelor of Science in Computer Science
              </h3>
              <p className="font-body text-base sm:text-lg text-text-secondary">
                Modern University for Technology &amp; Information (MTI) · <span className="text-text-muted">Faculty of Computer Science, Cairo, Egypt</span>
              </p>
            </div>

            {/* GPA & Honors Badges */}
            <div className="flex items-center gap-4 shrink-0 flex-wrap">
              <div className="text-center px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm shadow-inner">
                <span className="font-display text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent via-accent-light to-purple-400 bg-clip-text text-transparent">
                  3.59
                </span>
                <p className="font-body text-[11px] uppercase tracking-wider text-text-muted mt-0.5">
                  / 4.00 GPA
                </p>
              </div>

              <div className="text-center px-6 py-4 rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-1 text-amber-400 mb-0.5">
                  <TbAward className="w-5 h-5" />
                </div>
                <span className="font-display text-sm font-bold text-white block">
                  Very Good
                </span>
                <p className="font-body text-[11px] text-accent-light">
                  With Honors
                </p>
              </div>
            </div>
          </div>

          {/* Highlights & Capstone Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Graduation Project Spotlight */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-light uppercase tracking-wider">
                  <TbSparkles className="w-4 h-4 text-accent" />
                  Graduation Project
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  Grade: Excellent (A+)
                </span>
              </div>
              <h4 className="font-display text-lg font-bold text-white">
                Intelligent On-Demand Mobile Delivery &amp; Operations Architecture
              </h4>
              <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                Engineered a full-stack on-demand delivery ecosystem featuring reactive mobile client architecture, live driver geolocation streaming, automated dispatch routing, and resilient offline-first data caching.
              </p>
            </div>

            {/* Academic Honors & Standing */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-accent-light uppercase tracking-wider">
                <TbCertificate className="w-4 h-4 text-accent" />
                Academic Standing
              </div>
              <h4 className="font-display text-lg font-bold text-white">
                Dean&apos;s Honor Roll &amp; Engineering Rigor
              </h4>
              <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed">
                Ranked in the top percentile of the graduating class. Maintained consistent academic excellence across core software engineering curricula, systems architecture, and mathematical algorithms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Detailed Two-Column Grid: Coursework & Extracurriculars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Core Coursework */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-surface border border-white/5 shadow-xl"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
              <TbBook className="w-5 h-5 text-accent" />
              <h4 className="font-display text-lg font-bold text-white">
                Core Academic Coursework
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coursework.map((course, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-body text-text-secondary"
                >
                  <TbCode className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Academic Honors & Milestones */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-surface border border-white/5 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/5">
                <TbAward className="w-5 h-5 text-accent" />
                <h4 className="font-display text-lg font-bold text-white">
                  Key Milestones &amp; Activities
                </h4>
              </div>

              <div className="space-y-4">
                {achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-accent/15 text-accent-light shrink-0 mt-0.5">
                      <TbCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h5 className="font-display text-xs font-bold text-white">
                        {item.title}
                      </h5>
                      <p className="font-body text-xs text-text-muted mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-text-muted">
              <span>Cairo, Egypt</span>
              <span className="font-mono text-accent-light">Class of 2024</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
