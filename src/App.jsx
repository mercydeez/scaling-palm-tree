import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import SmoothScroll from './components/ui/SmoothScroll';
import MagneticCursor from './components/ui/MagneticCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import { MainLayout } from './components/layout/MainLayout';

import SplashScreen from './components/SplashScreen';
import { HeroSection } from './sections/HeroSection';
import { AboutSkillsSection } from './sections/AboutSkillsSection';
import { ExperienceProjectsSection } from './sections/ExperienceProjectsSection';
import { ContactSection } from './sections/ContactSection';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
      return;
    }

    document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [showSplash]);

  return (
    <>
      <SmoothScroll />
      <MagneticCursor />
      <ScrollProgress />
      <MainLayout>
        <HeroSection />
        <AboutSkillsSection />
        <ExperienceProjectsSection />
        <ContactSection />

      </MainLayout>

      <AnimatePresence mode="wait">
        {showSplash ? <SplashScreen key="portfolio-splash" /> : null}
      </AnimatePresence>
    </>
  );
}
