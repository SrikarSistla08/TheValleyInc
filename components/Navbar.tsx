"use client";

import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/[0.06]">
      <div className="mx-auto max-w-content flex justify-between items-center px-10 py-4">
        <a href="#" className="flex items-center gap-3 group">
          <Logo size={28} />
        </a>
        <div className="flex gap-8">
          <a
            href="#products"
            className="text-[13px] text-white/45 hover:text-white transition-colors duration-150 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[#5DCAA5] after:transition-all after:duration-300 hover:after:w-full"
          >
            Products
          </a>
          <a
            href="#about"
            className="text-[13px] text-white/45 hover:text-white transition-colors duration-150 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[#5DCAA5] after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="mailto:hello@thevalleyinc.co"
            className="text-[13px] text-white/45 hover:text-white transition-colors duration-150 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:w-0 after:bg-[#5DCAA5] after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/srikarsistla/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-white/45 hover:text-white transition-colors duration-150 flex items-center gap-1"
          >
            LinkedIn
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-35">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
