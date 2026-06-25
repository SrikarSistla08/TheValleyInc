import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <hr className="border-none border-t border-white/[0.06] mx-auto max-w-content" />
      <AnimatedSection>
        <Products />
      </AnimatedSection>
      <hr className="border-none border-t border-white/[0.06] mx-auto max-w-content" />
      <AnimatedSection delay={100}>
        <Founder />
      </AnimatedSection>
      <Footer />
    </main>
  );
}
