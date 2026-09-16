import React from 'react';
import { Target, Compass, Shield } from 'lucide-react';

export default function About({ aboutVillaImg, isHomePage = false }) {
  return (
    <section id="about" className="about-section" style={{ padding: 0, position: 'relative', background: '#050506' }}>
      {/* Top Section with Split Background */}
      <div style={{ position: 'relative', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', zIndex: 0 }}>
          <div style={{ flex: 1, background: '#050506' }}></div>
          <div style={{ flex: 1.2, position: 'relative' }}>
            <img src={aboutVillaImg} alt="About Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, #050506 0%, rgba(5,5,6,0.7) 40%, transparent 100%)' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30%', background: 'linear-gradient(to top, #050506 0%, transparent 100%)' }}></div>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="section-header-left" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 400, color: '#fff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>ABOUT US</h2>
        </div>

        <div style={{ maxWidth: '600px' }}>
          <h2 style={{fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--primary-gold)'}}>Building Tomorrow, Together.</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '3rem' }}>
            EVA ATELIER GROUP is a multidisciplinary firm specializing in Architecture, Construction, and Interior Design. We blend creativity, functionality, and engineering expertise to deliver spaces that inspire and elevate everyday living.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <Compass size={28} style={{ color: 'var(--primary-gold)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-gold)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Our Vision</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>To be a global leader in innovative design and construction.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <Target size={28} style={{ color: 'var(--primary-gold)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-gold)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Our Mission</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>To deliver exceptional spaces through creativity, quality, and commitment.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <Shield size={28} style={{ color: 'var(--primary-gold)', flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--primary-gold)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Our Values</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>Integrity, innovation, quality, transparency, and client satisfaction.</p>
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
        <div className="container">
          <div className="about-stats-bar-horizontal" style={{ padding: '2.5rem 0', textAlign: 'center' }}>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)' }}>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>15+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Years of Experience</p>
            </div>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)' }}>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>150+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Projects Completed</p>
            </div>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)' }}>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>100+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Happy Clients</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--primary-gold)', fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>50+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
