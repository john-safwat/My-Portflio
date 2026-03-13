"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function ScrollIndicator() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      ref={ref}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="font-body text-xs uppercase tracking-[0.3em] text-text-muted">
        Scroll
      </span>
      <svg
        width="20"
        height="30"
        viewBox="0 0 20 30"
        fill="none"
        className="text-text-muted"
      >
        <rect
          x="1"
          y="1"
          width="18"
          height="28"
          rx="9"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="10" cy="10" r="2" fill="currentColor">
          <animate
            attributeName="cy"
            values="10;18;10"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
