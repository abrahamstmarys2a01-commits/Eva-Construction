import React from 'react';
import { Compass, Hammer, Sparkles, Building2, Users, CheckCircle, Clock, Shield, Settings } from 'lucide-react';

export default function Services({ scrollToSection }) {
  return (
    <section id="services" className="services-section" style={{ background: '#080809', padding: '5rem 0' }}>
      <div className="container">
        <div className="section-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
          <h2 style={{ fontSize: '2rem', fontWeight: 400, color: '#fff', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>OUR SERVICES</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Complete solutions for every space. From concept to creation, we deliver excellence in design, construction, and interiors.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
          {/* Card 1 */}
          <div style={{ border: '1px solid var(--border-gold)', background: '#050506', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px' }}>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #050506 0%, transparent 100%)' }}></div>
              <div style={{ position: 'absolute', bottom: '10px', left: '1.5rem', width: '36px', height: '36px', border: '1px solid var(--primary-gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(5, 5, 6, 0.8)' }}>
                <Compass size={18} style={{ color: 'var(--primary-gold)' }} />
              </div>
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' }}>ARCHITECTURE</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                Creative architectural designs that combine aesthetics, functionality, and sustainability.
              </p>
              <span onClick={() => scrollToSection('contact')} style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>LEARN MORE &rarr;</span>
            </div>
          </div>

          {/* Card 2 */}
          <div style={{ border: '1px solid var(--border-gold)', background: '#050506', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px' }}>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" alt="Construction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #050506 0%, transparent 100%)' }}></div>
              <div style={{ position: 'absolute', bottom: '10px', left: '1.5rem', width: '36px', height: '36px', border: '1px solid var(--primary-gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(5, 5, 6, 0.8)' }}>
                <Hammer size={18} style={{ color: 'var(--primary-gold)' }} />
              </div>
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' }}>CONSTRUCTION</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                High-quality construction with strict quality control and on-time delivery.
              </p>
              <span onClick={() => scrollToSection('contact')} style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>LEARN MORE &rarr;</span>
            </div>
          </div>

          {/* Card 3 */}
          <div style={{ border: '1px solid var(--border-gold)', background: '#050506', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px' }}>
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" alt="Interior Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #050506 0%, transparent 100%)' }}></div>
              <div style={{ position: 'absolute', bottom: '10px', left: '1.5rem', width: '36px', height: '36px', border: '1px solid var(--primary-gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(5, 5, 6, 0.8)' }}>
                <Sparkles size={18} style={{ color: 'var(--primary-gold)' }} />
              </div>
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' }}>INTERIOR DESIGN</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                Elegant interiors tailored to your lifestyle and preferences.
              </p>
              <span onClick={() => scrollToSection('contact')} style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>LEARN MORE &rarr;</span>
            </div>
          </div>

          {/* Card 4 */}
          <div style={{ border: '1px solid var(--border-gold)', background: '#050506', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px' }}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Turnkey Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #050506 0%, transparent 100%)' }}></div>
              <div style={{ position: 'absolute', bottom: '10px', left: '1.5rem', width: '36px', height: '36px', border: '1px solid var(--primary-gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(5, 5, 6, 0.8)' }}>
                <Building2 size={18} style={{ color: 'var(--primary-gold)' }} />
              </div>
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' }}>TURNKEY SOLUTIONS</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                End-to-end project management with seamless execution.
              </p>
              <span onClick={() => scrollToSection('contact')} style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>LEARN MORE &rarr;</span>
            </div>
          </div>

          {/* Card 5 */}
          <div style={{ border: '1px solid var(--border-gold)', background: '#050506', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '220px' }}>
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" alt="Renovation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, #050506 0%, transparent 100%)' }}></div>
              <div style={{ position: 'absolute', bottom: '10px', left: '1.5rem', width: '36px', height: '36px', border: '1px solid var(--primary-gold)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(5, 5, 6, 0.8)' }}>
                <Settings size={18} style={{ color: 'var(--primary-gold)' }} />
              </div>
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' }}>RENOVATION</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '2rem', flexGrow: 1 }}>
                Transforming existing spaces with modern design and quality.
              </p>
              <span onClick={() => scrollToSection('contact')} style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>LEARN MORE &rarr;</span>
            </div>
          </div>
        </div>

        {/* Quality Badges */}
        <div style={{ borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)', padding: '1.5rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', textAlign: 'center' }}>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <CheckCircle size={20} style={{ color: 'var(--primary-gold)' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>QUALITY ASSURANCE</span>
            </div>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <Clock size={20} style={{ color: 'var(--primary-gold)' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>ON-TIME DELIVERY</span>
            </div>
            <div style={{ borderRight: '1px solid rgba(197, 168, 128, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <Shield size={20} style={{ color: 'var(--primary-gold)' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>TRANSPARENT PROCESS</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <Users size={20} style={{ color: 'var(--primary-gold)' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', textTransform: 'uppercase', color: '#fff', fontWeight: 600 }}>AFTERCARE SUPPORT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
