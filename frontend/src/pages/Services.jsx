import React from 'react';
import { Compass, Hammer, Sparkles, Building2, Users, CheckCircle, Clock, Shield } from 'lucide-react';

export default function Services({ navigateTo }) {
  return (
    <section className="services-section">
      <div className="container">
        <span className="breadcrumbs">Home &gt; Services</span>
        <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2>Our Services</h2>
          <span className="subtitle" style={{textTransform: 'none', letterSpacing: 'normal', fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '800px', margin: '1rem auto 0', display: 'block', lineHeight: '1.5'}}>
            Complete solutions for every space. From concept to creation, we deliver excellence in design, construction, and interiors.
          </span>
        </div>

        <div className="services-grid">
          <div className="service-card luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" alt="Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Compass className="service-card-icon" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem' }}>Architecture</h3>
              <p style={{ fontSize: '0.85rem' }}>Creative architectural designs that combine aesthetics, functionality, and sustainability.</p>
              <span className="service-learn-more" onClick={() => navigateTo('BOQ')} style={{ marginTop: 'auto' }}>Learn More &rarr;</span>
            </div>
          </div>

          <div className="service-card luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" alt="Construction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Hammer className="service-card-icon" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem' }}>Construction</h3>
              <p style={{ fontSize: '0.85rem' }}>High quality construction with strict quality control and on-time delivery.</p>
              <span className="service-learn-more" onClick={() => navigateTo('CONTACT')} style={{ marginTop: 'auto' }}>Learn More &rarr;</span>
            </div>
          </div>

          <div className="service-card luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" alt="Interior Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Sparkles className="service-card-icon" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem' }}>Interior Design</h3>
              <p style={{ fontSize: '0.85rem' }}>Elegant interiors tailored to your lifestyle and preferences.</p>
              <span className="service-learn-more" onClick={() => navigateTo('BOQ')} style={{ marginTop: 'auto' }}>Learn More &rarr;</span>
            </div>
          </div>

          <div className="service-card luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" alt="Turnkey Solutions" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Building2 className="service-card-icon" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem' }}>Turnkey Solutions</h3>
              <p style={{ fontSize: '0.85rem' }}>End-to-end project management with seamless execution.</p>
              <span className="service-learn-more" onClick={() => navigateTo('CONTACT')} style={{ marginTop: 'auto' }}>Learn More &rarr;</span>
            </div>
          </div>

          <div className="service-card luxury-card" style={{ padding: 0 }}>
            <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80" alt="Renovation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Users className="service-card-icon" size={32} style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.1rem' }}>Renovation</h3>
              <p style={{ fontSize: '0.85rem' }}>Transforming existing spaces with modern design and quality.</p>
              <span className="service-learn-more" onClick={() => navigateTo('CONTACT')} style={{ marginTop: 'auto' }}>Learn More &rarr;</span>
            </div>
          </div>
        </div>

        {/* Quality Badges */}
        <div className="services-badges-bar">
          <div className="service-badge-item">
            <CheckCircle size={20} />
            <span>Quality Assurance</span>
          </div>
          <div className="service-badge-item">
            <Clock size={20} />
            <span>On-Time Delivery</span>
          </div>
          <div className="service-badge-item">
            <Shield size={20} />
            <span>Transparent Process</span>
          </div>
          <div className="service-badge-item">
            <Users size={20} />
            <span>Aftercare Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
