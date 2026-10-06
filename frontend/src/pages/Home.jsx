import React, { useState, useEffect } from 'react';
import { Compass, Hammer, Clock, Shield } from 'lucide-react';

import galleryVilla1 from '../assets/gallery_villa_1.jpg';
import galleryVilla6 from '../assets/gallery_villa_6.jpg';
import galleryVilla7 from '../assets/gallery_villa_7.jpg';
import modernVillaChennai from '../assets/modern_villa_chennai.jpg';
import corporateStudioTrichy from '../assets/corporate_studio_trichy.jpg';

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

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.484-8.414z" />
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
  const heroImages = [
    corporateStudioTrichy,
    galleryVilla1,
    galleryVilla6,
    galleryVilla7
  ];

  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const testimonialSlides = [
    [
      {
        quote: "EVA ATELIER transformed our dream into reality. Their professionalism, attention to detail and commitment to quality are truly exceptional.",
        author: "Mr. Raghav, Chennai"
      },
      {
        quote: "Excellent team, excellent execution! They delivered our project on time and beyond our expectations. Highly recommended.",
        author: "Mrs. Priya, Coimbatore"
      }
    ],
    [
      {
        quote: "From conceptual 3D architecture to flawless handover, their team delivered sheer luxury. The attention to space and natural lighting is unmatched.",
        author: "Mr. & Mrs. Karthik, Bangalore"
      },
      {
        quote: "Exceptional design aesthetics, premium material craftsmanship, and total transparency throughout the construction. Truly a benchmark in luxury architecture.",
        author: "Dr. Ananya Sundaram, Madurai"
      }
    ],
    [
      {
        quote: "The luxury villa designed and executed by EVA ATELIER in Trichy exceeded our highest expectations. Their turnkey management made the entire journey seamless and enjoyable.",
        author: "Mr. S. Balasubramanian, Trichy"
      },
      {
        quote: "Outstanding contemporary architecture and flawless execution. They meticulously paid attention to every fixture, material, and detail. Highly recommended!",
        author: "Mrs. Deepa & Mr. Rajesh, Salem"
      }
    ]
  ];

  const [currentTestimonialIdx, setCurrentTestimonialIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIdx((prev) => (prev + 1) % testimonialSlides.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [testimonialSlides.length]);

  return (
    <div id="home">
      <section className="hero-section" style={{ padding: 0, position: 'relative' }}>
        {/* Full width split background with 4-image slider */}
        <div className="hero-split-bg">
          <div className="hero-split-left"></div>
          <div className="hero-split-right">
            <div className="hero-slider-wrapper">
              <div 
                className="hero-slider-track" 
                style={{ transform: `translateX(-${currentHeroIdx * 100}%)` }}
              >
                {heroImages.map((img, idx) => (
                  <div key={idx} className="hero-slide-item">
                    <img 
                      src={img} 
                      alt={`Luxury Architecture ${idx + 1}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                ))}
              </div>
              <div className="hero-split-overlay"></div>
              <div className="hero-slider-dots">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`hero-slider-dot ${currentHeroIdx === idx ? 'active' : ''}`}
                    onClick={() => setCurrentHeroIdx(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)', display: 'flex', alignItems: 'center' }}>
          
          {/* Vertical Follow Us Sidebar */}
          <div className="hero-social-sidebar">
            <div className="hero-social-line"></div>
            <span className="hero-social-text">FOLLOW US</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.5rem' }}>
              <a href="https://www.facebook.com/profile.php?id=61592784964504" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/eva_atelier_group" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/in/ar-ramkumar-muruganandam-0a4486395/" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="https://wa.me/917397101215" target="_blank" rel="noopener noreferrer" className="hero-social-icon" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          <div className="hero-content" style={{ maxWidth: '650px', padding: 'clamp(2.5rem, 6vw, 4.5rem) 0' }}>
            <h2 className="hero-title-main" style={{ marginBottom: '1rem', background: 'none', WebkitTextFillColor: 'initial' }}>
              <span className="hero-title-top">CRAFTING THE</span>
              <span className="hero-title-gold">FUTURE,</span>
              <span className="hero-title-sub">ONE SPACE AT A TIME.</span>
            </h2>
            <p className="hero-desc" style={{ marginBottom: '2rem', maxWidth: '500px' }}>
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
          <div className="container" style={{ paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
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
      <About aboutVillaImg={aboutVillaImg} isHomePage={true} scrollToSection={scrollToSection} />
      <Services scrollToSection={scrollToSection} />
      <Projects 
        projects={projects} 
        openProjectDetails={openProjectDetails} 
        projectFilter={projectFilter} 
        setProjectFilter={setProjectFilter} 
        isHomePage={true}
        scrollToSection={scrollToSection}
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

          <div className="testimonials-slider-wrapper">
            <div 
              className="testimonials-slider-track"
              style={{ transform: `translateX(-${currentTestimonialIdx * 100}%)` }}
            >
              {testimonialSlides.map((slide, slideIdx) => (
                <div key={slideIdx} className="testimonials-slide-page">
                  {slide.map((item, itemIdx) => (
                    <div key={itemIdx} className="testimonial-card-item">
                      <div>
                        <div style={{ color: 'var(--primary-gold)', fontSize: '3rem', fontFamily: 'serif', lineHeight: 1, marginBottom: '0.5rem', opacity: 0.9 }}>
                          “
                        </div>
                        <p style={{ color: '#d1d1d1', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                          {item.quote}
                        </p>
                      </div>
                      <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600, display: 'block' }}>
                        &mdash; {item.author}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slider navigation dots */}
          <div className="testimonials-dots">
            {testimonialSlides.map((_, idx) => (
              <button
                key={idx}
                className={`testimonials-dot ${currentTestimonialIdx === idx ? 'active' : ''}`}
                onClick={() => setCurrentTestimonialIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>


      {/* CTA Banner: Ready to Build Your Dream Space */}
      <section style={{ 
        position: 'relative', 
        padding: '5rem 2rem', 
        background: `linear-gradient(rgba(5, 5, 6, 0.88), rgba(5, 5, 6, 0.94)), url("${modernVillaChennai}")`,
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
