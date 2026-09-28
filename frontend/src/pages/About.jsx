import React from 'react';
import { Target, Compass, Shield } from 'lucide-react';

export default function About({ aboutVillaImg, isHomePage = false }) {
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
                filter: 'brightness(1.05) contrast(1.02)'
              }} 
            />
            {/* Smooth edge overlay */}
            <div className="about-split-overlay"></div>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: 'clamp(2rem, 5vw, 2.5rem)', paddingBottom: 'clamp(2.5rem, 6vw, 4rem)', paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
          <div className="section-header-left" style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', fontWeight: 400, color: '#fff', textTransform: 'uppercase' }}>ABOUT US</h2>
          </div>

        <div style={{ maxWidth: '600px' }}>
          <h2 style={{fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '1.25rem', color: 'var(--primary-gold)'}}>Building Tomorrow, Together.</h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2.5vw, 0.95rem)', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            EVA ATELIER GROUP is a multidisciplinary firm specializing in Architecture, Construction, and Interior Design. We blend creativity, functionality, and engineering expertise to deliver spaces that inspire and elevate everyday living.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <Compass size={26} style={{ color: 'var(--primary-gold)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '0.95rem', color: 'var(--primary-gold)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Our Vision</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>To be a global leader in innovative design and construction.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <Target size={26} style={{ color: 'var(--primary-gold)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '0.95rem', color: 'var(--primary-gold)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Our Mission</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>To deliver exceptional spaces through creativity, quality, and commitment.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
              <Shield size={26} style={{ color: 'var(--primary-gold)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '0.95rem', color: 'var(--primary-gold)', marginBottom: '0.35rem', textTransform: 'uppercase' }}>Our Values</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Integrity, innovation, quality, transparency, and client satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Team Section */}
      {!isHomePage && (
        <div style={{ background: '#050506', position: 'relative', zIndex: 1 }}>
          <div className="container" style={{ paddingBottom: '4rem', paddingTop: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--primary-gold)', marginBottom: '2rem' }}>Meet Our Leadership</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 320px))', justifyContent: 'center', gap: '2rem' }}>
            {/* CEO */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', padding: '1rem', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" alt="CEO" style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '1rem' }} />
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.25rem' }}>John Doe</h3>
              <p style={{ color: 'var(--primary-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Chief Executive Officer</p>
            </div>
            
            {/* Project Manager 1 */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', padding: '1rem', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" alt="Project Manager" style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '1rem' }} />
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Jane Smith</h3>
              <p style={{ color: 'var(--primary-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project Manager</p>
            </div>

            {/* Project Manager 2 */}
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-gold)', padding: '1rem', textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" alt="Project Manager" style={{ width: '100%', height: '250px', objectFit: 'cover', marginBottom: '1rem' }} />
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Robert Chen</h3>
              <p style={{ color: 'var(--primary-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Project Manager</p>
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
              <h3 style={{ color: 'var(--primary-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.35rem', fontWeight: 'bold' }}>15+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Years of Experience</p>
            </div>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)' }}>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.35rem', fontWeight: 'bold' }}>150+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Projects Completed</p>
            </div>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)' }}>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.35rem', fontWeight: 'bold' }}>100+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Happy Clients</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '0.35rem', fontWeight: 'bold' }}>50+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
