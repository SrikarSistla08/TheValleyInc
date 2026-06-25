"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

export default function Hero() {
  const text = "Building in public";
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);
  const phase = useRef<"typing" | "erasing">("typing");
  const paused = useRef(false);

  useEffect(() => {
    const tick = () => {
      if (paused.current) {
        paused.current = false;
        phase.current = "erasing";
        setTimeout(tick, 50);
        return;
      }

      if (phase.current === "typing") {
        i.current++;
        setDisplayed(text.slice(0, i.current));
        if (i.current >= text.length) {
          paused.current = true;
          setTimeout(tick, 1500);
        } else {
          setTimeout(tick, 50);
        }
      } else {
        i.current--;
        setDisplayed(text.slice(0, i.current));
        if (i.current <= 0) {
          phase.current = "typing";
          setTimeout(tick, 500);
        } else {
          setTimeout(tick, 30);
        }
      }
    };

    const id = setTimeout(tick, 500);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="px-10 pt-24 pb-20 max-w-content mx-auto">
      <div className="flex flex-col items-start gap-4 mb-8">
        <Logo size={200} showText={false} />
      </div>

      <div className="inline-flex items-center gap-2 text-[11px] text-[#5DCAA5] bg-[rgba(29,158,117,0.1)] border border-[rgba(29,158,117,0.2)] rounded-full px-3 py-1 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#5DCAA5] inline-block" />
        {displayed}
        <span className="animate-pulse">|</span>
      </div>

      <h1 className="font-display text-[56px] sm:text-[64px] leading-[1.08] text-[#f0f0f0] mb-6 tracking-tight">
        Products built for{" "}
        <em className="not-italic text-white/35">Real</em> people,{" "}
        <em className="not-italic text-white/35">Real</em> problems.
      </h1>

      <p className="text-[17px] text-white/45 leading-relaxed max-w-xl mb-10">
        A portfolio of startups serving students, local businesses, and
        underserved communities. Each product stands alone. Together they
        build something bigger.
      </p>

      <div className="flex gap-3 items-center">
        <a
          href="#products"
          className="bg-[#f0f0f0] text-[#0a0a0a] text-[14px] font-medium px-5 py-2.5 rounded-lg hover:bg-white transition-all duration-150 active:scale-[0.97]"
        >
          See our products
        </a>
        <a
          href="https://www.linkedin.com/in/srikarsistla/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] text-white/50 border border-white/15 px-5 py-2.5 rounded-lg hover:text-white hover:border-white/30 transition-all duration-150 active:scale-[0.97] inline-flex items-center gap-1.5"
        >
          Follow the journey
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
