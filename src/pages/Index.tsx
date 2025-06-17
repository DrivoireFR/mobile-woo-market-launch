import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Process />
      <Comparison />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;