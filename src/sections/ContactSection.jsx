import { contactContent, socialLinks, footerContent } from '../data/portfolioData';
import { RevealItem } from '../components/ui/StaggerReveal';

function getSocialIconSrc(icon) {
  if (icon.startsWith('http://') || icon.startsWith('https://') || icon.startsWith('data:') || icon.startsWith('/')) {
    return icon;
  }
  return `https://cdn.simpleicons.org/${icon}`;
}

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-surface border-t border-outline-variant/20 overflow-hidden text-left">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#1f1f1f 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side - Contact Info (60% ~ col-span-7) */}
          <RevealItem
            className="lg:col-span-7 flex flex-col justify-center"
            threshold={0.2}
          >
            <h2 className="font-headline text-5xl md:text-7xl font-black text-on-surface tracking-tight mb-4 leading-none">
              {contactContent.title} <br className="hidden md:block"/>
              <span className="text-primary">{contactContent.accent}</span>
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg">
              {contactContent.description}
            </p>
            
            <div className="space-y-6">
              <a
                href={`tel:${contactContent.phone}`}
                className="interactive-input group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 border border-outline-variant/20 hover:border-primary/50 bg-surface-container-low/30"
              >
                <span className="material-symbols-outlined text-primary text-3xl">call</span>
                <span className="font-mono text-xl md:text-2xl text-on-surface group-hover:text-primary">
                  {contactContent.phone}
                </span>
              </a>
              <a
                href={`mailto:${contactContent.email}`}
                className="interactive-input group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 border border-outline-variant/20 hover:border-primary/50 bg-surface-container-low/30"
              >
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <span className="font-mono text-lg md:text-xl text-on-surface group-hover:text-primary break-all">
                  {contactContent.email}
                </span>
              </a>
            </div>
          </RevealItem>

          {/* Right Side - Social Links (40% ~ col-span-5) */}
          <RevealItem
            className="lg:col-span-5 flex flex-col justify-center lg:border-l lg:border-outline-variant/20 lg:pl-12"
            threshold={0.2}
            delay={80}
          >
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-8">Connect</h3>
            <div className="flex flex-col">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-input group flex items-center justify-between py-5 border-b border-outline-variant/10 hover:border-primary/40"
                >
                  <div className="flex items-center gap-5">
                    <img 
                      src={getSocialIconSrc(link.icon)} 
                      alt={link.label} 
                      className="w-5 h-5 object-contain shrink-0 opacity-100 transition-opacity filter-none group-hover:brightness-110" 
                    />
                    <span className="font-headline text-lg sm:text-xl text-on-surface-variant group-hover:text-white">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-on-surface-variant group-hover:text-primary font-mono mr-2">↗</span>
                </a>
              ))}
            </div>
          </RevealItem>
        </div>

        {/* Bottom Footer Line */}
        <div className="mt-24 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-headline text-sm font-bold tracking-tight text-white/50">{footerContent.brandName || 'Atharva Soundankar'}</p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 truncate max-w-full text-center">{footerContent.copyright || '© 2024 Atharva Soundankar.'}</p>
        </div>
      </div>
    </section>
  );
}
