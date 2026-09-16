import React from 'react';
import { Compass, Hammer, Clock, Shield } from 'lucide-react';

import About from './About';
import Services from './Services';
import Projects from './Projects';
import Gallery from './Gallery';
import Contact from './Contact';

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
  contactSuccess
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

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-content" style={{ maxWidth: '650px', padding: '4rem 0 6rem' }}>
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

      {/* Featured Projects Grid & Stats Column */}
      <section className="projects-section" style={{ background: '#050506', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header-left" style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--primary-gold)', letterSpacing: '0.1em' }}>FEATURED PROJECTS</h2>
          </div>

          <div className="featured-section-grid">
            <div style={{ flex: '1' }}>
              <div className="projects-grid" style={{ marginBottom: '2rem' }}>
                {projects.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="project-card" onClick={() => openProjectDetails(proj)} style={{ border: '1px solid var(--border-gold)', padding: '0.25rem', background: 'rgba(197, 168, 128, 0.05)', aspectRatio: 'auto', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ overflow: 'hidden', height: '160px' }}>
                      <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '0.75rem 0.5rem', background: '#050506', marginTop: '0.25rem', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                      <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>{proj.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center' }}>
                <button className="btn-outline" onClick={() => scrollToSection('projects')} style={{ padding: '0.75rem 2rem', fontSize: '0.8rem' }}>VIEW ALL PROJECTS</button>
              </div>
            </div>

            <div className="home-stats-panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Shield size={36} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.1rem' }}>15+</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Years of Experience</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Hammer size={36} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.1rem' }}>150+</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Projects Completed</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Shield size={36} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.1rem' }}>100+</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Happy Clients</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Shield size={36} style={{ color: 'var(--primary-gold)' }} />
                <div>
                  <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.1rem' }}>50+</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Render all other sections to make the home page scrollable */}
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
      <Contact 
        contactForm={contactForm} 
        setContactForm={setContactForm} 
        handleContactSubmit={handleContactSubmit} 
        contactSuccess={contactSuccess} 
      />
    </div>
  );
}
