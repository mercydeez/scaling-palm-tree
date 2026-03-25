import { Card } from '../components/ui/Card';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StaggerContainer, RevealItem } from '../components/ui/StaggerReveal';
import { aboutContent, aboutStats, skillsData } from '../data/portfolioData';

export function AboutSkillsSection() {
  return (
    <section id="about-skills" className="relative bg-surface border-t border-outline-variant/20 block-section">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)',
          backgroundSize: '42px 42px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8 mb-12">
        <RevealItem threshold={0.2}>
          <SectionHeading
            eyebrow={aboutContent.heading}
            title={aboutContent.heading}
            accent={aboutContent.accent}
          />
        </RevealItem>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Bio + Stats col */}
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <RevealItem threshold={0.15} delay={60}>
            <div className="border-l-4 border-primary pl-6 py-4 bg-surface-container-low/60 interactive-card">
            <p className="font-label text-base md:text-lg lg:text-xl text-secondary leading-relaxed">
              {aboutContent.description}
            </p>
            </div>
          </RevealItem>
          
          <div className="grid grid-cols-2 gap-4">
            {aboutStats.map((stat, index) => (
              <RevealItem key={stat.label} threshold={0.15} delay={100 + index * 70}>
                <div className="interactive-card" style={{ background: '#131313', padding: '1.5rem', border: '1px solid #262626' }}>
                <div style={{ color: '#b8fd4b', fontSize: '28px', fontWeight: '900', fontFamily: 'Space Grotesk, sans-serif' }}>
                  {stat.value}
                </div>
                <div style={{ color: '#888', fontSize: '13px', marginTop: '6px', fontFamily: 'Syne Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>

        {/* Skills grid col */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch content-start order-1 lg:order-2">
          {skillsData.map((skill, index) => (
            <RevealItem key={skill.label} className="h-full" threshold={0.15} delay={80 + index * 60}>
              <Card className="h-full bg-surface-container-low border-outline-variant/20 p-5 interactive-card">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-headline text-base lg:text-lg font-bold text-on-surface">{skill.label}</h3>
                </div>
                <p className="text-xs lg:text-sm text-on-surface-variant leading-relaxed mb-4">{skill.description}</p>
                <div style={{ display:'flex', gap:16, flexWrap:'wrap', marginTop:12 }}>
                  {skill.icons.map(icon => (
                    <div key={icon.name} title={icon.name} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4, width: 48 }}>
                      <div style={{ height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src={icon.url}
                          alt={icon.name}
                          style={{ 
                            width: icon.name === 'Antigravity' ? 42 : 32, 
                            height: icon.name === 'Antigravity' ? 42 : 32, 
                            objectFit:'contain'
                          }}
                          onError={e => e.target.style.opacity = '0'}
                        />
                      </div>
                      <span style={{ fontSize:9, fontFamily:'Syne Mono, monospace', color: '#484848', letterSpacing:'0.05em', whiteSpace:'nowrap', textAlign:'center' }}>
                        {icon.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </RevealItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
