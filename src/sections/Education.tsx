"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-accent">
            05
          </span>
          <div className="h-[1px] w-16 bg-accent/50" />
          <span className="font-body text-sm uppercase tracking-[0.3em] text-text-muted">
            Education
          </span>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative p-10 md:p-16 rounded-3xl bg-surface border border-white/5 overflow-hidden group hover:border-accent/20 transition-all duration-500"
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent/5 to-transparent rounded-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <span className="font-body text-xs uppercase tracking-wider text-accent mb-2 block">
                2020 — 2024
              </span>
              <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-2">
                Bachelor of Computer Science
              </h3>
              <p className="font-body text-lg text-text-muted">
                MTI University, Cairo
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-center p-6 rounded-2xl bg-accent/5 border border-accent/10">
                <span className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
                  3.59
                </span>
                <p className="font-body text-xs uppercase tracking-wider text-text-muted mt-1">
                  / 4.0 GPA
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
