import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import BeforeAfterSection from '@/components/landing/BeforeAfterSection';
import WorkflowSection from '@/components/landing/WorkflowSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <BeforeAfterSection />
      <WorkflowSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Landing;
