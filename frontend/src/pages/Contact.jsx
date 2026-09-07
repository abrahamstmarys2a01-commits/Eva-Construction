import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact({ contactForm, setContactForm, handleContactSubmit, contactSuccess }) {
  return (
    <section id="contact" className="contact-section" style={{ background: '#050506', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 400, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CONTACT</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.2fr', gap: '3rem' }}>
          
          {/* Column 1: Map (Moved to left side) */}
          <div style={{ border: '1px solid var(--border-gold)', background: '#050506', borderRadius: '4px', overflow: 'hidden', position: 'relative', minHeight: '400px' }}>
            <iframe 
              src="https://maps.google.com/maps?q=WD-54,+Anandha+bhavan+complex,+Second+floor,+17/52,+Puthur+High+Rd,+Tiruchirappalli,+Tamil+Nadu+620017&t=m&z=15&output=embed&iwloc=near" 
              width="100%" 
              height="100%" 
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Eva Atelier Group Location"
            ></iframe>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--primary-gold)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>GET IN TOUCH</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '2rem' }}>
              We would love to hear from you.<br />Let's build something extraordinary together.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Phone size={24} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <h4 style={{ color: 'var(--primary-gold)', fontSize: '1rem', marginBottom: '0.25rem', fontWeight: 600 }}>Phone</h4>
                  <p style={{ color: '#fff', fontSize: '0.95rem' }}>+91 7397101215</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Mail size={24} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <h4 style={{ color: 'var(--primary-gold)', fontSize: '1rem', marginBottom: '0.25rem', fontWeight: 600 }}>Email</h4>
                  <p style={{ color: '#fff', fontSize: '0.95rem' }}>the.evaateliers@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <MapPin size={24} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <h4 style={{ color: 'var(--primary-gold)', fontSize: '1rem', marginBottom: '0.25rem', fontWeight: 600 }}>Address</h4>
                  <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    WD-54, Anandha bhavan complex, Second floor,<br />
                    17/52, Puthur High Rd, Tiruchirappalli,<br />
                    Tamil Nadu - 620017
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Clock size={24} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <h4 style={{ color: 'var(--primary-gold)', fontSize: '1rem', marginBottom: '0.25rem', fontWeight: 600 }}>Working Hours</h4>
                  <p style={{ color: '#fff', fontSize: '0.95rem' }}>Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Form */}
          <div style={{ border: '1px solid var(--border-gold)', background: '#050506', padding: '2.5rem', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-gold)', textTransform: 'uppercase', marginBottom: '2rem', letterSpacing: '0.05em' }}>
              SEND US A MESSAGE
            </h3>
            
            {contactSuccess ? (
              <div style={{ background: 'rgba(197, 168, 128, 0.1)', border: '1px solid var(--primary-gold)', padding: '2rem', textAlign: 'center', color: '#fff', borderRadius: '4px' }}>
                <h3 style={{ color: 'var(--primary-gold)', marginBottom: '1rem' }}>Message Sent!</h3>
                <p>Thank you for reaching out. Our design consultants will get in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input 
                  type="text" 
                  required 
                  placeholder="Full Name"
                  value={contactForm.fullName}
                  onChange={(e) => setContactForm({...contactForm, fullName: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
                <input 
                  type="email" 
                  required 
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
                <input 
                  type="tel" 
                  required 
                  placeholder="Phone Number"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
                <textarea 
                  required 
                  placeholder="Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  style={{ width: '100%', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '1rem', borderRadius: '4px', fontSize: '0.9rem', minHeight: '120px', resize: 'vertical', outline: 'none' }}
                ></textarea>
                
                <button type="submit" style={{ width: '100%', background: 'var(--primary-gold)', color: '#000', border: 'none', padding: '1rem', fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', cursor: 'pointer', borderRadius: '4px', marginTop: '1rem', letterSpacing: '0.05em' }}>
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
