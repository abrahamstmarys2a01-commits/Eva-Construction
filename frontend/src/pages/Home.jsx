import React from 'react';
import { Compass, Hammer, Clock, Shield } from 'lucide-react';

import About from './About';
import Services from './Services';
import Projects from './Projects';
import Gallery from './Gallery';
import Contact from './Contact';

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home({ 
  scrollToSection, 
  projects, 
  openProjectDetails, 
  heroVillaImg, 
  aboutVillaImg, 
  projectFilter, 
  setProjectFilter, 
  galleryItems, 
  galleryFilter, 
  setGalleryFilter, 
  setSelectedGalleryImg, 
  contactForm, 
  setContactForm, 
  handleContactSubmit, 
  contactSuccess,
  setShowQuotePage
}) {
  return (
    <div id="home">
      <section className="hero-section" style={{ padding: 0, position: 'relative' }}>
        {/* Full width split background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', zIndex: 0 }}>
          <div style={{ flex: 1, background: '#050506' }}></div>
          <div style={{ flex: 1.2, position: 'relative' }}>
            <img src={heroVillaImg} alt="Hero Villa" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, #050506 0%, rgba(5,5,6,0.4) 30%, transparent 100%)' }}></div>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '2rem' }}>
          
          {/* Vertical Follow Us Sidebar */}
          <div className="hero-social-sidebar">
            <div className="hero-social-line"></div>
            <span className="hero-social-text">FOLLOW US</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero-social-icon" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="hero-content" style={{ maxWidth: '650px', padding: '4rem 1rem 6rem 1rem' }}>
            <h2 className="hero-title-main" style={{ fontSize: '4rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: '1.1', background: 'none', WebkitTextFillColor: 'initial' }}>
              CRAFTING THE <span style={{display: 'block', fontSize: '5.5rem', color: 'var(--primary-gold)'}}>FUTURE,</span> <span style={{fontSize: '2rem'}}>ONE SPACE AT A TIME.</span>
            </h2>
            <p className="hero-desc" style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '500px' }}>
              We design, build, and transform exceptional residential and commercial spaces with innovative architecture, quality construction, and refined interior design.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>GET A FREE CONSULTATION &rarr;</button>
              <button className="btn-outline" onClick={() => scrollToSection('projects')}>VIEW OUR PROJECTS &rarr;</button>
            </div>
          </div>
        </div>

        {/* Badges Strip */}
        <div style={{ position: 'relative', zIndex: 1, background: '#080809', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
          <div className="container">
            <div className="hero-badges-row" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem', border: 'none', alignItems: 'center' }}>
              <div className="hero-badge-item" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                <Compass size={32} style={{ color: 'var(--primary-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.8rem', color: '#fff' }}>INNOVATIVE DESIGN</span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-secondary)' }}>Creative solutions that inspire and elevate.</span>
                </div>
              </div>
              <div className="hero-badge-item" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                <Shield size={32} style={{ color: 'var(--primary-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.8rem', color: '#fff' }}>QUALITY CONSTRUCTION</span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-secondary)' }}>Top-grade materials and skilled craftsmanship.</span>
                </div>
              </div>
              <div className="hero-badge-item" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                <Clock size={32} style={{ color: 'var(--primary-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.8rem', color: '#fff' }}>ON-TIME DELIVERY</span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-secondary)' }}>We deliver on time, every time.</span>
                </div>
              </div>
              <div className="hero-badge-item" style={{ flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                <Hammer size={32} style={{ color: 'var(--primary-gold)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.8rem', color: '#fff' }}>TRANSPARENT PROCESS</span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-secondary)' }}>Clear communication and honest pricing.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gap between Hero and About Us */}
      <div style={{ height: '4rem', background: '#050506' }}></div>

      {/* Render core sections */}
      <About aboutVillaImg={aboutVillaImg} isHomePage={true} />
      <Services scrollToSection={scrollToSection} />
      <Projects 
        projects={projects} 
        openProjectDetails={openProjectDetails} 
        projectFilter={projectFilter} 
        setProjectFilter={setProjectFilter} 
      />
      <Gallery 
        galleryItems={galleryItems} 
        galleryFilter={galleryFilter} 
        setGalleryFilter={setGalleryFilter} 
        setSelectedGalleryImg={setSelectedGalleryImg} 
      />

      {/* What Our Clients Say - Testimonials Section */}
      <section className="testimonials-section" style={{ background: '#050506', paddingTop: '4rem', paddingBottom: '3.5rem' }}>
        <div className="container" style={{ maxWidth: '1200px', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ color: 'var(--primary-gold)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
              WHAT OUR CLIENTS SAY
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 2.6rem)', color: '#fff', fontWeight: 400 }}>
              Trusted by Hundreds of Clients
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Testimonial 1 */}
            <div style={{ 
              border: '1px solid var(--border-gold)', 
              background: 'rgba(255, 255, 255, 0.02)', 
              borderRadius: '8px', 
              padding: '2.5rem 2rem',
              position: 'relative'
            }}>
              <div style={{ color: 'var(--primary-gold)', fontSize: '3rem', fontFamily: 'serif', lineHeight: 1, marginBottom: '0.5rem', opacity: 0.9 }}>
                “
              </div>
              <p style={{ color: '#d1d1d1', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                EVA ATELIER GROUP transformed our dream into reality. Their professionalism, attention to detail and commitment to quality are truly exceptional.
              </p>
              <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, display: 'block' }}>
                &mdash; Mr. Raghav, Chennai
              </span>
            </div>

            {/* Testimonial 2 */}
            <div style={{ 
              border: '1px solid var(--border-gold)', 
              background: 'rgba(255, 255, 255, 0.02)', 
              borderRadius: '8px', 
              padding: '2.5rem 2rem',
              position: 'relative'
            }}>
              <div style={{ color: 'var(--primary-gold)', fontSize: '3rem', fontFamily: 'serif', lineHeight: 1, marginBottom: '0.5rem', opacity: 0.9 }}>
                “
              </div>
              <p style={{ color: '#d1d1d1', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                Excellent team, excellent execution! They delivered our project on time and beyond our expectations. Highly recommended.
              </p>
              <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, display: 'block' }}>
                &mdash; Mrs. Priya, Coimbatore
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="featured-projects-home-section" style={{ background: '#050506', paddingTop: '2.5rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
          <div className="section-header-left" style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-gold)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>FEATURED PROJECTS</h2>
          </div>

          <div className="featured-projects-grid-full" style={{ marginBottom: '2.5rem' }}>
            {projects.slice(0, 4).map((proj) => (
              <div 
                key={proj.id} 
                className="project-card" 
                onClick={() => openProjectDetails(proj)} 
                style={{ 
                  border: '1px solid var(--border-gold)', 
                  padding: '0.25rem', 
                  background: 'rgba(197, 168, 128, 0.05)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  cursor: 'pointer' 
                }}
              >
                <div style={{ overflow: 'hidden', height: '170px' }}>
                  <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '0.85rem 0.6rem', background: '#050506', marginTop: '0.25rem', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#fff', fontSize: '0.82rem', fontWeight: 600 }}>{proj.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button 
              className="btn-outline" 
              onClick={() => scrollToSection('projects')} 
              style={{ padding: '0.75rem 2.5rem', fontSize: '0.85rem', letterSpacing: '0.05em', fontWeight: 600 }}
            >
              VIEW ALL PROJECTS
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner: Ready to Build Your Dream Space */}
      <section style={{ 
        position: 'relative', 
        padding: '5rem 2rem', 
        background: 'linear-gradient(rgba(5, 5, 6, 0.88), rgba(5, 5, 6, 0.94)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textAlign: 'center',
        borderTop: '1px solid var(--border-gold)',
        borderBottom: '1px solid var(--border-gold)'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Diamond Logo Icon */}
          <div style={{
            width: '42px',
            height: '42px',
            margin: '0 auto 1.5rem',
            border: '1px solid var(--primary-gold)',
            transform: 'rotate(45deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '18px',
              height: '18px',
              border: '1px solid var(--primary-gold)'
            }}></div>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4.5vw, 3rem)', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
            READY TO <span style={{ color: 'var(--primary-gold)' }}>BUILD YOUR DREAM SPACE?</span>
          </h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '2.5rem', letterSpacing: '0.02em' }}>
            Let's create something extraordinary together.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button 
              className="btn-primary" 
              onClick={() => scrollToSection('contact')}
              style={{ padding: '0.9rem 2.2rem', fontSize: '0.85rem' }}
            >
              REQUEST A CONSULTATION &rarr;
            </button>
            
            <button 
              className="btn-outline" 
              onClick={() => {
                if (setShowQuotePage) {
                  setShowQuotePage(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  scrollToSection('contact');
                }
              }}
              style={{ padding: '0.9rem 2.2rem', fontSize: '0.85rem' }}
            >
              GET A QUOTE &rarr;
            </button>
          </div>

        </div>
      </section>

      <Contact 
        contactForm={contactForm} 
        setContactForm={setContactForm} 
        handleContactSubmit={handleContactSubmit} 
        contactSuccess={contactSuccess} 
      />
    </div>
  );
}
