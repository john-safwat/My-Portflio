"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "@/lib/gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    posRef.current = { x: e.clientX, y: e.clientY };
    if (dotRef.current) {
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    }
    if (followerRef.current) {
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, []);

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    document.addEventListener("mousemove", onMouseMove);

    // Scale up on interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-cursor-hover], input, textarea"
    );
    const onEnter = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, { scale: 2.5, opacity: 0.5, duration: 0.3 });
      }
      if (dotRef.current) {
        gsap.to(dotRef.current, { scale: 0, duration: 0.3 });
      }
    };
    const onLeave = () => {
      if (followerRef.current) {
        gsap.to(followerRef.current, { scale: 1, opacity: 1, duration: 0.3 });
      }
      if (dotRef.current) {
        gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      }
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [onMouseMove]);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{ willChange: "transform" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[10001] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
