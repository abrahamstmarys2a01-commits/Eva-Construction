import React from 'react';
import { Target, Compass, Shield } from 'lucide-react';

export default function About({ aboutVillaImg }) {
  return (
    <section id="about" className="about-section" style={{ padding: 0, position: 'relative', background: '#050506' }}>
      {/* Full width split background for the top part */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'calc(100% - 120px)', display: 'flex', zIndex: 0 }}>
        <div style={{ flex: 1, background: '#050506' }}></div>
        <div style={{ flex: 1.2, position: 'relative' }}>
          <img src={aboutVillaImg} alt="About Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, #050506 0%, rgba(5,5,6,0.7) 40%, transparent 100%)' }}></div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30%', background: 'linear-gradient(to top, #050506 0%, transparent 100%)' }}></div>
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '3rem' }}>
        <div className="section-header-left" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 400, color: '#fff', textTransform: 'uppercase', marginBottom: '0.5rem' }}>ABOUT US</h2>
          <span className="breadcrumbs" style={{ color: 'var(--text-secondary)', textTransform: 'none', letterSpacing: 'normal', fontSize: '0.9rem' }}>Home &gt; About Us</span>
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

      {/* Bottom Stats Bar */}
      <div style={{ position: 'relative', zIndex: 1, background: '#080809', borderTop: '1px solid var(--border-gold)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '2.5rem 0', textAlign: 'center' }}>
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
