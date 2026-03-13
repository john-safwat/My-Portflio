"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Counter animation
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        setCount(Math.round(counter.value));
      },
    });

    // Name reveal (clip-path wipe from left)
    tl.to(
      nameRef.current,
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        duration: 1,
        ease: "power4.inOut",
      },
      "-=1"
    );

    // Fade out the preloader
    tl.to(containerRef.current, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0.3,
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="preloader"
      style={{ willChange: "transform" }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Counter */}
        <span
          ref={counterRef}
          className="font-display text-6xl md:text-8xl font-bold text-text-muted tabular-nums"
        >
          {count}%
        </span>

        {/* Name reveal */}
        <div
          ref={nameRef}
          className="font-display text-3xl md:text-5xl font-bold text-white tracking-wider"
          style={{
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          }}
        >
          JOHN SAFWAT
        </div>
      </div>
    </div>
  );
}
