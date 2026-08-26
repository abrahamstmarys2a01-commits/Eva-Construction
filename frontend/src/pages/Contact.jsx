import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact({ contactForm, setContactForm, handleContactSubmit, contactSuccess }) {
  return (
    <section className="contact-section">
      <div className="container">
        <span className="breadcrumbs">Home &gt; Contact</span>
        <div className="section-header-left">
          <h2>Get in Touch</h2>
          <span className="subtitle" style={{textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-secondary)', marginTop: '0.5rem', display: 'block'}}>
            We would love to hear from you. Let's build something extraordinary together.
          </span>
        </div>

        <div className="contact-grid" style={{marginBottom: '3rem'}}>
          <div className="contact-info">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <Phone className="contact-info-icon" size={24} />
                <div className="contact-info-text">
                  <h4>Phone</h4>
                  <p>+91 12345 67890</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Mail className="contact-info-icon" size={24} />
                <div className="contact-info-text">
                  <h4>Email</h4>
                  <p>info@evaateliergroup.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <MapPin className="contact-info-icon" size={24} />
                <div className="contact-info-text">
                  <h4>Address</h4>
                  <p>No. 123, Anna Salai, Chennai,<br />Tamil Nadu - 600002</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Clock className="contact-info-icon" size={24} />
                <div className="contact-info-text">
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {contactSuccess ? (
              <div className="form-success-alert">
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our design consultants will get in touch within 24 hours.</p>
              </div>
            ) : (
              <form className="luxury-form" onSubmit={handleContactSubmit} style={{padding: '2.5rem'}}>
                <h3 style={{fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '1.15rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>
                  Send Us a Message
                </h3>
                
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    required 
                    placeholder="Full Name"
                    value={contactForm.fullName}
                    onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    required 
                    placeholder="Email Address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    required 
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea 
                    className="form-control" 
                    required 
                    placeholder="Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{width: '100%'}}>Send Message</button>
              </form>
            )}
          </div>
        </div>

        {/* Map Widget */}
        <div className="map-widget">
          <div className="map-placeholder" style={{height: '350px'}}>
            <div className="map-dots"></div>
            <MapPin className="map-marker" size={50} style={{color: 'var(--primary-gold)'}} />
            <div className="map-label" style={{fontSize: '1rem', color: '#fff'}}>Eva Atelier Group</div>
            <p style={{fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem'}}>No. 123, Anna Salai, Chennai, Tamil Nadu - 600002</p>
          </div>
        </div>
      </div>
    </section>
  );
}
