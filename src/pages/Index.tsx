import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import AIEngineering from '@/components/AIEngineering';
import Achievements from '@/components/Achievements';
import CodingBackground from '@/components/CodingBackground';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ScrollProgress from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <AIEngineering />
        <Achievements />
        <CodingBackground />
        <Contact />
        <Footer />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
