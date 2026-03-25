import { lazy, Suspense, useCallback } from 'react';
import ScrambleText from '../components/ui/ScrambleText';
import { RevealItem } from '../components/ui/StaggerReveal';
import { useInViewReveal } from '../hooks/useInViewReveal';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useTypewriter } from '../hooks/useTypewriter';
import { heroContent, socialLinks } from '../data/portfolioData';

const LazyHeroCanvas = lazy(() =>
  import('../components/three/HeroCanvas').then((module) => ({ default: module.HeroCanvas })),
);

function getSocialIconSrc(icon) {
  if (icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('data:') || icon.startsWith('/')) {
    return icon;
  }
  return `https://cdn.simpleicons.org/${icon}`;
}

export function HeroSection() {
  const displayText = useTypewriter(heroContent.subtitle, 50);
  const prefersReducedMotion = usePrefersReducedMotion();
  const canUseWebGL = typeof window !== 'undefined' && !window.matchMedia('(max-width: 768px)').matches;
  const { elementRef: heroLoadRef, isVisible: isHeroVisible } = useInViewReveal({ threshold: 0.05, rootMargin: '200px 0px', once: true });
  const { elementRef: heroActiveRef, isVisible: isHeroActive } = useInViewReveal({ threshold: 0.08, rootMargin: '80px 0px', once: false });
  const shouldRender3D = isHeroVisible && !prefersReducedMotion && canUseWebGL;

  const setHeroRefs = useCallback((node) => {
    heroLoadRef.current = node;
    heroActiveRef.current = node;
  }, [heroActiveRef, heroLoadRef]);

  return (
    <section ref={setHeroRefs} id="hero" className="relative min-h-[85vh] flex items-center px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`hero-grid-fallback absolute inset-0 transition-opacity duration-500 ${shouldRender3D ? 'opacity-30' : 'opacity-100'}`} />
        <div className={`absolute inset-0 transition-opacity duration-500 ${shouldRender3D ? 'opacity-100' : 'opacity-0'}`}>
          {shouldRender3D ? (
            <Suspense fallback={null}>
              <LazyHeroCanvas isActive={isHeroActive} />
            </Suspense>
          ) : null}
        </div>
        <div className="hero-grid-glow absolute inset-0" />
      </div>

      <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none hero-grid-overlay" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pb-12 md:pb-20">
        
        {/* Left Side - Text */}
        <RevealItem
          className="flex-1 w-full order-2 lg:order-1"
          threshold={0.25}
          delay={80}
        >


          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-black font-headline tracking-tighter text-on-surface leading-[0.85] max-w-full overflow-hidden">
            <ScrambleText text="ATHARVA" delay={300} style={{ display: 'block' }} />
            <ScrambleText text="SOUNDANKAR" delay={600} style={{ display: 'block' }} />
          </h1>

          <p className="mt-6 md:mt-8 max-w-xl font-mono text-base md:text-lg text-on-surface-variant min-h-[48px]">
            {displayText}
            <span className="animate-blink">|</span>
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 md:mt-12 mb-10">
            <a href="#experience-projects" className="btn-primary interactive-button">VIEW_WORK</a>
            <a href="#contact" className="btn-secondary interactive-button">CONTACT</a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 items-center border-t border-outline-variant/20 pt-8 w-full max-w-md">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-button group p-2 -m-2 opacity-100 hover:-translate-y-1"
                aria-label={link.label}
              >
                <img 
                  src={getSocialIconSrc(link.icon)} 
                  alt={link.label} 
                  className="w-5 h-5 object-contain shrink-0 filter-none group-hover:brightness-110 transition-all" 
                />
              </a>
            ))}
          </div>
        </RevealItem>

        {/* Right Side - Photo Card */}
        <RevealItem
          className="w-full max-w-[320px] sm:max-w-[380px] lg:w-[400px] shrink-0 order-1 lg:order-2 mb-10 lg:mb-0"
          threshold={0.25}
          delay={140}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '340px', margin: '0 auto' }}>
            <div style={{ border: '1px solid rgba(184,253,75,0.2)', background: '#131313', padding: '16px', position: 'relative' }}>
              <img
                src="/images/profile_pic.png"
                alt="Atharva Soundankar"
                className="w-full block filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
              />
              <div style={{ position:'absolute', top:4, left:4, width:16, height:16, borderTop:'2px solid #b8fd4b', borderLeft:'2px solid #b8fd4b' }} />
              <div style={{ position:'absolute', top:4, right:4, width:16, height:16, borderTop:'2px solid #b8fd4b', borderRight:'2px solid #b8fd4b' }} />
              <div style={{ position:'absolute', bottom:4, left:4, width:16, height:16, borderBottom:'2px solid #b8fd4b', borderLeft:'2px solid #b8fd4b' }} />
              <div style={{ position:'absolute', bottom:4, right:4, width:16, height:16, borderBottom:'2px solid #b8fd4b', borderRight:'2px solid #b8fd4b' }} />
            </div>

          </div>
        </RevealItem>
      </div>
    </section>
  );
}
