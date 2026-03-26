import { contactContent, socialLinks, footerContent } from '../data/portfolioData';
import { RevealItem } from '../components/ui/StaggerReveal';
import { SectionTransitionLine } from '../components/ui/SectionTransitionLine';

function getSocialIconSrc(icon) {
  if (icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('data:') || icon.startsWith('/')) {
    return icon;
  }
  return `https://cdn.simpleicons.org/${icon}`;
}

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-surface border-t border-outline-variant/20 overflow-hidden text-left">
      <SectionTransitionLine />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1f1f1f 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side - Contact Info (Full width now) */}
          <RevealItem
            className="lg:col-span-12 flex flex-col justify-center max-w-2xl mx-auto text-center"
            threshold={0.2}
          >
            <h2 className="font-headline text-5xl md:text-7xl font-black text-on-surface tracking-tight mb-4 leading-none">
              {contactContent.title} <br className="hidden md:block"/>
              <span className="text-primary">{contactContent.accent}</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 mx-auto">
              {contactContent.description}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <a
                href={`tel:${contactContent.phone}`}
                className="interactive-input group flex items-center justify-center gap-4 p-5 border border-outline-variant/20 hover:border-primary/50 bg-surface-container-low/30 min-w-[280px]"
              >
                <span className="material-symbols-outlined text-primary text-2xl">call</span>
                <span className="font-mono text-lg text-on-surface group-hover:text-primary">
                  {contactContent.phone}
                </span>
              </a>
              <a
                href={`mailto:${contactContent.email}`}
                className="interactive-input group flex items-center justify-center gap-4 p-5 border border-outline-variant/20 hover:border-primary/50 bg-surface-container-low/30 min-w-[280px]"
              >
                <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                <span className="font-mono text-lg text-on-surface group-hover:text-primary break-all">
                  {contactContent.email}
                </span>
              </a>
            </div>
          </RevealItem>


        </div>

        {/* Bottom Footer Line */}
        <div className="mt-24 pt-8 border-t border-outline-variant/20 flex flex-col items-center gap-6 font-mono text-[11px] text-[#888]">
          <p>© 2026 Atharva Soundankar</p>
          
          {/* Social Icons Row */}
          <div className="flex gap-[20px] flex-wrap justify-center items-center pointer-events-auto">
            <a href="https://github.com/mercydeez" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="GitHub">
              <img src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" width={22} height={22} />
            </a>
            <a href="https://www.linkedin.com/in/atharva-soundankar/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="LinkedIn">
              <img src="/images/linkedin.png" alt="LinkedIn" width={22} height={22} style={{ objectFit: 'contain' }} />
            </a>
            <a href="https://x.com/Atharva3895" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="X/Twitter">
              <img src="https://cdn.simpleicons.org/x/FFFFFF" alt="Twitter" width={22} height={22} />
            </a>
            <a href="https://www.kaggle.com/atharvasoundankar" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="Kaggle">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="#20BEFF"><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v12.562l6.44-6.235c.15-.161.297-.241.449-.241h3.275c.149 0 .223.053.207.159-.015.101-.086.181-.196.247l-6.568 6.172 6.788 8.634c.149.186.186.365.117.494z" /></svg>
            </a>
            <a href="https://medium.com/@atharva3895" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="Medium">
              <img src="https://cdn.simpleicons.org/medium/FFFFFF" alt="Medium" width={22} height={22} />
            </a>
            <a href="https://instagram.com/atharava_soundankar" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="Instagram">
              <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" width={22} height={22} />
            </a>
            <a href="https://www.facebook.com/atharva.soundankar.7/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="Facebook">
              <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" width={22} height={22} />
            </a>
            <a href="https://www.threads.com/@ai.with.atharva" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="Threads">
              <img src="https://cdn.simpleicons.org/threads/FFFFFF" alt="Threads" width={22} height={22} />
            </a>
            <a href="mailto:atharva3895@gmail.com" className="opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300" title="Gmail">
              <img src="https://cdn.simpleicons.org/gmail/EA4335" alt="Gmail" width={22} height={22} />
            </a>
          </div>

          <p>Built with React · Tailwind · Framer Motion · Three.js</p>
        </div>
      </div>
    </section>
  );
}
