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
          <div className="service-card luxury-card">
            <Compass className="service-card-icon" size={40} />
            <h3>Architecture</h3>
            <p>Creative architectural designs that combine aesthetics, functionality, and sustainability.</p>
            <span className="service-learn-more" onClick={() => navigateTo('BOQ')}>Learn More &rarr;</span>
          </div>

          <div className="service-card luxury-card">
            <Hammer className="service-card-icon" size={40} />
            <h3>Construction</h3>
            <p>High quality construction with strict quality control and on-time delivery.</p>
            <span className="service-learn-more" onClick={() => navigateTo('CONTACT')}>Learn More &rarr;</span>
          </div>

          <div className="service-card luxury-card">
            <Sparkles className="service-card-icon" size={40} />
            <h3>Interior Design</h3>
            <p>Elegant interiors tailored to your lifestyle and preferences.</p>
            <span className="service-learn-more" onClick={() => navigateTo('BOQ')}>Learn More &rarr;</span>
          </div>

          <div className="service-card luxury-card">
            <Building2 className="service-card-icon" size={40} />
            <h3>Turnkey Solutions</h3>
            <p>End-to-end project management with seamless execution.</p>
            <span className="service-learn-more" onClick={() => navigateTo('CONTACT')}>Learn More &rarr;</span>
          </div>

          <div className="service-card luxury-card">
            <Users className="service-card-icon" size={40} />
            <h3>Renovation</h3>
            <p>Transforming existing spaces with modern design and quality.</p>
            <span className="service-learn-more" onClick={() => navigateTo('CONTACT')}>Learn More &rarr;</span>
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
