"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Link from "next/link";
import { TbFileText } from "react-icons/tb";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Training", href: "/#training" },
  { label: "Contact", href: "/#contact" },
];

interface NavbarProps {
  onOpenCVModal?: () => void;
  isInnerPage?: boolean;
}

export default function Navbar({ onOpenCVModal, isInnerPage = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section on main page
  useEffect(() => {
    if (isInnerPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isInnerPage]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#") && !isInnerPage) {
      e.preventDefault();
      setIsOpen(false);
      const targetId = href.replace("/#", "#");
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Stagger animation for nav links on mount
  useEffect(() => {
    if (!navRef.current) return;
    const links = navRef.current.querySelectorAll(".nav-link");
    gsap.fromTo(
      links,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, delay: isInnerPage ? 0.2 : 3.2, ease: "power2.out" }
    );
  }, [isInnerPage]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled || isInnerPage
            ? "bg-[#0a0a0d]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <MagneticButton strength={0.2}>
            <Link
              href="/"
              className="font-display text-xl font-bold text-white tracking-wider flex items-center gap-1"
              data-cursor-hover
            >
              <span>JS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </Link>
          </MagneticButton>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <MagneticButton key={item.href} strength={0.12}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`nav-link relative font-body text-sm transition-colors duration-300 py-1 ${
                    !isInnerPage && activeSection === item.href.replace("/#", "")
                      ? "text-white font-medium"
                      : "text-text-muted hover:text-white"
                  }`}
                  data-cursor-hover
                >
                  {item.label}
                  {!isInnerPage && activeSection === item.href.replace("/#", "") && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </MagneticButton>
            ))}

            {/* CV Trigger Button */}
            {onOpenCVModal ? (
              <MagneticButton strength={0.15}>
                <button
                  onClick={onOpenCVModal}
                  className="nav-link inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 font-body text-xs font-semibold"
                  data-cursor-hover
                >
                  <TbFileText className="w-3.5 h-3.5" />
                  <span>Resume / CV</span>
                </button>
              </MagneticButton>
            ) : (
              <MagneticButton strength={0.15}>
                <Link
                  href="/cv"
                  className="nav-link inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 font-body text-xs font-semibold"
                  data-cursor-hover
                >
                  <TbFileText className="w-3.5 h-3.5" />
                  <span>Resume / CV</span>
                </Link>
              </MagneticButton>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            data-cursor-hover
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[105] bg-[#0c0c10] flex flex-col items-center justify-center px-6 overflow-y-auto"
          >
            <div className="flex flex-col items-center gap-6 text-center my-auto py-12">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-display text-2xl sm:text-3xl font-bold transition-colors ${
                      !isInnerPage && activeSection === item.href.replace("/#", "")
                        ? "text-accent"
                        : "text-white hover:text-accent"
                    }`}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}

              <div className="w-16 h-[1px] bg-white/10 my-2" />

              {onOpenCVModal ? (
                <motion.button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenCVModal();
                  }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="inline-flex items-center gap-2 mt-2 px-7 py-3.5 rounded-full bg-accent text-white font-display text-base"
                >
                  <TbFileText className="w-5 h-5" />
                  <span>Resume / CV</span>
                </motion.button>
              ) : (
                <Link
                  href="/cv"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 mt-2 px-7 py-3.5 rounded-full bg-accent text-white font-display text-base"
                >
                  <TbFileText className="w-5 h-5" />
                  <span>Resume / CV</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
