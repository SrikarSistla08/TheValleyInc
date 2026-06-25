import Image from "next/image";

export default function Founder() {
  return (
    <section id="about" className="px-10 py-20 max-w-content mx-auto">
      <div className="max-w-2xl">
        <p className="text-[11px] tracking-[0.1em] text-white/25 uppercase mb-6">
          About
        </p>
        <h2 className="font-display text-[36px] leading-[1.15] text-[#f0f0f0] mb-6">
          Why we build this way.
        </h2>
        <p className="text-[15px] text-white/45 leading-[1.8] mb-4">
          I&apos;m an international student on OPT, building products from
          Baltimore. Not because it&apos;s the safe route — because I kept seeing
          problems worth solving and couldn&apos;t stop thinking about them.
        </p>
        <p className="text-[15px] text-white/45 leading-[1.8] mb-4">
          The Valley Inc. is structured like Alphabet — each product is its own
          business, its own LLC, its own story. But they all share a thesis:
          technology hasn&apos;t caught up to the communities that need it most.
        </p>
        <p className="text-[15px] text-white/45 leading-[1.8]">
          We&apos;re closing that gap, one product at a time.
        </p>
        <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/[0.06]">
          <Image
            src="/headshot.jpeg"
            alt="Srikar Sistla"
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
          <div>
            <p className="text-[14px] text-[#f0f0f0] font-medium">
              Srikar Sistla
            </p>
            <p className="text-[12px] text-white/30">Founder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
