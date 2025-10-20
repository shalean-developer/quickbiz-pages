import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyBizBudLink } from "@/components/WhyBizBudLink";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhyBizBudLink />
      <HowItWorks />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
