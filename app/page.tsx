import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/Features";
import WhyUs from "@/components/sections/WhyUs";
import ProblemSolution from "@/components/sections/ProblemSolution";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <WhyUs />
        <ProblemSolution />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}