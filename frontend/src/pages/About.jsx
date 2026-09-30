import React from 'react';
import { Lightbulb, Award, ClipboardCheck, Clock, Target, Compass, Shield } from 'lucide-react';

export default function About({ aboutVillaImg, isHomePage = false, scrollToSection }) {
  const highlights = [
    {
      icon: <Lightbulb size={26} style={{ color: 'var(--primary-gold)' }} />,
      title: 'Innovative Design'
    },
    {
      icon: <Award size={26} style={{ color: 'var(--primary-gold)' }} />,
      title: 'Superior Quality'
    },
    {
      icon: <ClipboardCheck size={26} style={{ color: 'var(--primary-gold)' }} />,
      title: 'Transparent Execution'
    },
    {
      icon: <Clock size={26} style={{ color: 'var(--primary-gold)' }} />,
      title: 'Timely Delivery'
    }
  ];

  return (
    <section id="about" className="about-section" style={{ padding: 0, position: 'relative', background: '#050506' }}>
      {/* Top Section with Split Background */}
      <div style={{ position: 'relative', zIndex: 0 }}>
        <div className="about-split-bg">
          <div className="about-split-left"></div>
          <div className="about-split-right">
            <img 
              src={aboutVillaImg} 
              alt="About Studio" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', 
                objectPosition: 'center',
                filter: 'brightness(1.08) contrast(1.05)'
              }} 
            />
            {/* Smooth edge overlay */}
            <div className="about-split-overlay"></div>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(2.5rem, 5vw, 3.5rem)', paddingBottom: 'clamp(3rem, 6vw, 4.5rem)', paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
          
          {/* Main Section Header matching OUR SERVICES size */}
          <div className="section-header-left" style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ 
              fontSize: 'clamp(2rem, 4.5vw, 2.5rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em', 
              fontFamily: 'var(--font-serif)',
              margin: 0
            }}>
              ABOUT US
            </h2>
          </div>

          <div className="about-hero-grid">
            {/* Left Content Area */}
            <div style={{ maxWidth: '620px' }}>
              <h3 style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', 
                lineHeight: 1.2,
                fontWeight: 700,
                marginBottom: '1.5rem',
                textTransform: 'none'
              }}>
                <span style={{ color: '#ffffff', display: 'block' }}>Designing Spaces.</span>
                <span style={{ color: 'var(--primary-gold)', display: 'block' }}>Building Trust.</span>
              </h3>

              <p style={{ 
                fontSize: 'clamp(0.98rem, 2.2vw, 1.12rem)', 
                color: '#d8d8dc', 
                lineHeight: '1.8', 
                marginBottom: '2.5rem',
                fontWeight: 400
              }}>
                EVA ATELIER GROUP is a multidisciplinary firm specializing in Architecture, Construction, and Interior Design. We deliver end-to-end solutions with innovation, precision, and a commitment to excellence.
              </p>

              {isHomePage ? (
                <button 
                  className="btn-outline" 
                  onClick={() => {
                    if (scrollToSection) {
                      scrollToSection('about');
                    }
                  }}
                  style={{ 
                    padding: '0.95rem 2.2rem', 
                    fontSize: '0.9rem', 
                    letterSpacing: '0.1em', 
                    fontWeight: 800,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    border: '1.5px solid var(--primary-gold)'
                  }}
                >
                  KNOW MORE ABOUT US &rarr;
                </button>
              ) : (
                <button 
                  className="btn-primary" 
                  onClick={() => {
                    if (scrollToSection) {
                      scrollToSection('contact');
                    }
                  }}
                  style={{ 
                    padding: '0.95rem 2.2rem', 
                    fontSize: '0.9rem', 
                    letterSpacing: '0.1em', 
                    fontWeight: 800
                  }}
                >
                  GET A CONSULTATION &rarr;
                </button>
              )}
            </div>

            {/* Right Highlights Column (Bright & Crisp on image background) */}
            <div className="about-highlights-list">
              {highlights.map((item, idx) => (
                <div key={idx} className="about-highlight-card">
                  <div style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '50%', 
                    border: '1.5px solid var(--primary-gold)', 
                    background: 'rgba(212, 175, 55, 0.15)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexShrink: 0,
                    boxShadow: '0 0 14px rgba(212, 175, 55, 0.35)'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ 
                    color: '#ffffff', 
                    fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)', 
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.9)'
                  }}>
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Vision, Mission, Values on dedicated About page */}
      {!isHomePage && (
        <div style={{ background: '#080809', position: 'relative', zIndex: 1, padding: '4rem 0', borderTop: '1px solid var(--border-gold)' }}>
          <div className="container" style={{ paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 800 }}>OUR FOUNDATION</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: '#fff', marginTop: '0.5rem' }}>Vision, Mission & Core Values</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', borderRadius: '8px', padding: '2.5rem 2rem', textAlign: 'center' }}>
                <Compass size={40} style={{ color: 'var(--primary-gold)', margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-serif)' }}>Our Vision</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>To be a global leader in innovative architectural design, sustainable engineering, and master crafted luxury living spaces.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', borderRadius: '8px', padding: '2.5rem 2rem', textAlign: 'center' }}>
                <Target size={40} style={{ color: 'var(--primary-gold)', margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-serif)' }}>Our Mission</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>To deliver extraordinary turnkey spaces through relentless creativity, unwavering construction quality, and total client trust.</p>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', borderRadius: '8px', padding: '2.5rem 2rem', textAlign: 'center' }}>
                <Shield size={40} style={{ color: 'var(--primary-gold)', margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', fontFamily: 'var(--font-serif)' }}>Our Values</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>Integrity in pricing, uncompromising material quality, transparent progress tracking, and on-time project completion.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Team Section */}
      {!isHomePage && (
        <div style={{ background: '#050506', position: 'relative', zIndex: 1 }}>
          <div className="container" style={{ paddingBottom: '4.5rem', paddingTop: '4.5rem', paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 800 }}>EXECUTIVE LEADERSHIP</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontFamily: 'var(--font-serif)', color: '#fff', marginTop: '0.5rem' }}>Meet The Minds Behind EVA</h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 320px))', justifyContent: 'center', gap: '2rem' }}>
              {/* CEO */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', borderRadius: '6px', padding: '1.25rem', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="CEO" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.25rem', fontFamily: 'var(--font-serif)' }}>John Doe</h3>
                <p style={{ color: 'var(--primary-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Chief Executive Officer</p>
              </div>
              
              {/* Project Manager 1 */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', borderRadius: '6px', padding: '1.25rem', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Principal Architect" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.25rem', fontFamily: 'var(--font-serif)' }}>Jane Smith</h3>
                <p style={{ color: 'var(--primary-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Principal Architect</p>
              </div>

              {/* Project Manager 2 */}
              <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', borderRadius: '6px', padding: '1.25rem', textAlign: 'center' }}>
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="Head of Construction" style={{ width: '100%', height: '260px', objectFit: 'cover', borderRadius: '4px', marginBottom: '1rem' }} />
                <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.25rem', fontFamily: 'var(--font-serif)' }}>Robert Chen</h3>
                <p style={{ color: 'var(--primary-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>Head of Construction</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Stats Bar */}
      <div style={{ position: 'relative', zIndex: 1, background: '#080809', borderTop: '1px solid var(--border-gold)' }}>
        <div className="container" style={{ paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
          <div className="about-stats-bar-horizontal" style={{ padding: 'clamp(1.75rem, 4vw, 2.5rem) 0', textAlign: 'center' }}>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)' }}>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.35rem', fontWeight: 700, fontFamily: 'var(--font-sans)', fontVariantNumeric: 'normal', letterSpacing: '0.02em' }}>15+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Years of Experience</p>
            </div>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)' }}>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.35rem', fontWeight: 700, fontFamily: 'var(--font-sans)', fontVariantNumeric: 'normal', letterSpacing: '0.02em' }}>150+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Projects Completed</p>
            </div>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)' }}>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.35rem', fontWeight: 700, fontFamily: 'var(--font-sans)', fontVariantNumeric: 'normal', letterSpacing: '0.02em' }}>100+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Happy Clients</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.35rem', fontWeight: 700, fontFamily: 'var(--font-sans)', fontVariantNumeric: 'normal', letterSpacing: '0.02em' }}>50+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
