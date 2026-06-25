import Image from "next/image";

interface LogoProps {
  size?: number;
  showText?: boolean;
  className?: string;
}

export default function Logo({ size = 32, showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt="The Valley Inc logo"
        width={size}
        height={size}
        className="rounded-2xl"
      />
      {showText && (
        <span className="text-[15px] font-medium tracking-[0.04em] text-[#f0f0f0]">
          The Valley Inc<span className="text-white/35">.</span>
        </span>
      )}
    </div>
  );
}
