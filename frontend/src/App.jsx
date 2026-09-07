import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Hammer, 
  Clock, 
  Shield, 
  Building2, 
  Users, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  X, 
  Menu, 
  Maximize2, 
  Sparkles
} from 'lucide-react';
import './App.css';

// Import local generated assets
import heroVillaImg from './assets/hero_villa.png';
import aboutVillaImg from './assets/about_villa.png';

// Import newly created page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Filtering & Detail States
  const [projectFilter, setProjectFilter] = useState('ALL');
  const [galleryFilter, setGalleryFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);
  const [activeProjectThumbIndex, setActiveProjectThumbIndex] = useState(0);
  const [showQuotePage, setShowQuotePage] = useState(false);

  // Forms
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Scroll to top on page change or project detail open
  useEffect(() => {
    if (selectedProject) {
      window.scrollTo(0, 0);
    }
  }, [selectedProject]);

  const closeProjectDetails = () => {
    setSelectedProject(null);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80; // 80px is navbar height
        window.scrollTo({ top: y, behavior: 'instant' });
      }
    }, 100);
  };

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scrollspy (active section)
  useEffect(() => {
    if (showQuotePage || selectedProject) return;

    const sections = document.querySelectorAll('div[id="home"], section[id="about"], section[id="services"], section[id="projects"], section[id="gallery"], section[id="contact"]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.2, rootMargin: "-100px 0px -40% 0px" });

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [showQuotePage, selectedProject]);

  // Hardcoded Data
  const projects = [
    {
      id: 1,
      title: "Modern Villa - Chennai",
      category: "VILLAS",
      location: "Chennai, Tamil Nadu",
      area: "6,500 sq.ft",
      year: "2023",
      status: "Completed",
      image: heroVillaImg,
      thumbnails: [
        heroVillaImg,
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
      ],
      description: "This modern villa is a perfect blend of luxury and functionality. Open spaces, natural light, and premium materials create a timeless elegance. Positioned strategically to optimize natural ventilation and solar patterns.",
      features: ["Spacious Living Area", "Modular Kitchen", "Landscaped Garden", "Premium Interiors", "Smart Home Automation"]
    },
    {
      id: 2,
      title: "Luxury Residence - Coimbatore",
      category: "RESIDENTIAL",
      location: "Coimbatore, Tamil Nadu",
      area: "8,200 sq.ft",
      year: "2024",
      status: "Completed",
      image: aboutVillaImg,
      thumbnails: [
        aboutVillaImg,
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Designed for a multigenerational family, this sprawling residence in Coimbatore merges traditional vaastu principles with a sharp, contemporary layout. It boasts tall ceiling structures and floating slabs.",
      features: ["Grand Foyer", "Infinity Lap Pool", "Home Theatre", "Private Terraces", "Italian Marble Flooring"]
    },
    {
      id: 3,
      title: "Commercial Building - Madurai",
      category: "COMMERCIAL",
      location: "Madurai, Tamil Nadu",
      area: "25,000 sq.ft",
      year: "2024",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
      ],
      description: "An architectural landmark in Madurai, this commercial office complex features double-glazed facades for thermal insulation, central atriums, and premium retail sections on the ground floor.",
      features: ["LEED Certified Design", "High Speed Elevators", "Multi-Level Car Parking", "VRV Air Conditioning", "Rooftop Event Lounge"]
    },
    {
      id: 4,
      title: "Contemporary Home - ECR",
      category: "RESIDENTIAL",
      location: "ECR, Chennai",
      area: "5,400 sq.ft",
      year: "2023",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Located right on the scenic East Coast Road, this beachside luxury villa features sprawling glazing that offers uninterrupted ocean vistas, marine-grade external finishes, and open-plan hosting decks.",
      features: ["Ocean Front View", "Wooden Decking", "Outdoor Barbecue", "Floor-to-Ceiling Windows", "Minimalist Interior Concept"]
    },
    {
      id: 5,
      title: "Premium Villa - Bangalore",
      category: "VILLAS",
      location: "Whitefield, Bangalore",
      area: "7,000 sq.ft",
      year: "2022",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Embodying modern brickwork and exposed concrete facades, this Bangalore villa incorporates private internal courtyards with koi ponds that integrate nature inside the living quarters.",
      features: ["Koi Pond Courtyard", "Solar Panels Grid", "Exposed Concrete Finishing", "Automated Louvers", "Basement Recreational Den"]
    },
    {
      id: 6,
      title: "Office Interior - Chennai",
      category: "INTERIOR",
      location: "Nungambakkam, Chennai",
      area: "6,800 sq.ft",
      year: "2023",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
      ],
      description: "An elegant corporate workspace featuring high-end wood veneer detailing, ergonomic meeting areas, custom acoustic glass walls, and a premium double-height reception lounge.",
      features: ["Acoustic Glass Walls", "Veneer Cladding", "Bespoke Lighting Installations", "Ergonomic Desk Systems", "VIP Executive Boardroom"]
    },
    {
      id: 7,
      title: "Luxury Villa - Hyderabad",
      category: "VILLAS",
      location: "Jubilee Hills, Hyderabad",
      area: "9,000 sq.ft",
      year: "2024",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
      ],
      description: "A monolithic villa structure featuring premium imported Travertine stone facades, cascading levels, and double-height custom glass window structures offering vistas of Jubilee Hills.",
      features: ["Travertine Facades", "Cascading Water Walls", "Professional Prep Kitchen", "Gym & Sauna Suite", "Double Height Lounge"]
    },
    {
      id: 8,
      title: "Residence Interior - Trichy",
      category: "INTERIOR",
      location: "Trichy, Tamil Nadu",
      area: "4,200 sq.ft",
      year: "2023",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      thumbnails: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Elegant residential revamp focusing on modular panelings, hidden storage solutions, custom cove LED illuminations, and premium custom upholstered furniture layouts.",
      features: ["Custom Veneered Paneling", "Smart Hidden storage", "Italian Light Fixtures", "Bespoke Bed Frames", "Premium Brass Accents"]
    }
  ];

  const galleryItems = [
    { id: 1, type: 'ARCHITECTURE', image: heroVillaImg },
    { id: 2, type: 'CONSTRUCTION', image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
    { id: 3, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
    { id: 4, type: 'ARCHITECTURE', image: aboutVillaImg },
    { id: 5, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { id: 6, type: 'CONSTRUCTION', image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
    { id: 7, type: 'ARCHITECTURE', image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { id: 8, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSuccess(true);
    setTimeout(() => {
      setContactSuccess(false);
      setContactForm({ fullName: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail('');
    }, 4000);
  };

  // Click Project Card
  const openProjectDetails = (proj) => {
    setSelectedProject(proj);
    setActiveProjectThumbIndex(0);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  // Navigations helper
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    setSelectedProject(null); // Close project details if open
    setShowQuotePage(false); // Close quote page if open
    
    // Allow React state to update before scrolling
    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80; // 80px is navbar height
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }, 100);
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className={`navbar ${navbarScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="logo-area" onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>
            <div className="logo-icon">
              <div className="logo-icon-inner"></div>
            </div>
            <div className="logo-text">
              <h1 style={{ color: 'var(--primary-gold)' }}>EVA ATELIER GROUP</h1>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>CRAFTING THE FUTURE, ONE SPACE AT A TIME.</span>
            </div>
          </div>

          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <li><span className={`nav-link ${activeSection === 'home' && !showQuotePage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>Home</span></li>
            <li><span className={`nav-link ${activeSection === 'about' && !showQuotePage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>About Us</span></li>
            <li><span className={`nav-link ${activeSection === 'services' && !showQuotePage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('services')} style={{cursor: 'pointer'}}>Services</span></li>
            <li><span className={`nav-link ${activeSection === 'projects' && !showQuotePage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('projects')} style={{cursor: 'pointer'}}>Projects</span></li>
            <li><span className={`nav-link ${activeSection === 'gallery' && !showQuotePage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('gallery')} style={{cursor: 'pointer'}}>Gallery</span></li>
            <li><span className={`nav-link ${activeSection === 'contact' && !showQuotePage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('contact')} style={{cursor: 'pointer'}}>Contact</span></li>
            <li><button className="btn-primary" onClick={() => { setMobileMenuOpen(false); setSelectedProject(null); setShowQuotePage(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Get a Quote</button></li>
          </ul>
        </div>
      </nav>

      {/* Main Pages Wrapper */}
      <div className="page-wrapper">
        {showQuotePage ? (
          <div className="quote-overlay-wrapper">
            <GetQuote setShowQuotePage={setShowQuotePage} />
          </div>
        ) : selectedProject ? (
          <div className="project-detail-overlay-wrapper" style={{ paddingTop: '5rem' }}>

            <ProjectDetail 
              selectedProject={selectedProject} 
              setSelectedProject={setSelectedProject} 
              closeProjectDetails={closeProjectDetails}
              activeProjectThumbIndex={activeProjectThumbIndex} 
              setActiveProjectThumbIndex={setActiveProjectThumbIndex} 
            />
          </div>
        ) : (
          <>
            <Home 
              scrollToSection={scrollToSection} 
              projects={projects} 
              openProjectDetails={openProjectDetails} 
              heroVillaImg={heroVillaImg} 
            />
            <About aboutVillaImg={aboutVillaImg} />
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
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-logo-desc">
              <div className="logo-area" onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>
                <div className="logo-icon">
                  <div className="logo-icon-inner"></div>
                </div>
                <div className="logo-text">
                  <h1 style={{fontSize: '1rem', color: 'var(--primary-gold)'}}>EVA ATELIER GROUP</h1>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>CRAFTING THE FUTURE, ONE SPACE AT A TIME.</span>
                </div>
              </div>
              <p>
                We design, build, and transform exceptional residential and commercial spaces with cutting-edge architecture and interior methodologies.
              </p>
              <div className="footer-socials">
                <a href="#facebook" className="footer-social-icon"><Compass size={18} /></a>
                <a href="#instagram" className="footer-social-icon"><Sparkles size={18} /></a>
                <a href="#linkedin" className="footer-social-icon"><Building2 size={18} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><span style={{cursor: 'pointer'}} onClick={() => scrollToSection('home')}>Home</span></li>
                <li><span style={{cursor: 'pointer'}} onClick={() => scrollToSection('about')}>About Us</span></li>
                <li><span style={{cursor: 'pointer'}} onClick={() => scrollToSection('services')}>Services</span></li>
                <li><span style={{cursor: 'pointer'}} onClick={() => scrollToSection('projects')}>Projects</span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><span style={{cursor: 'pointer'}} onClick={() => scrollToSection('gallery')}>Gallery</span></li>
                <li><span style={{cursor: 'pointer'}} onClick={() => scrollToSection('contact')}>Contact</span></li>
              </ul>
            </div>

            <div className="footer-col footer-newsletter">
              <h3>Newsletter</h3>
              <p>Subscribe to receive architectural updates, trending designs, and resources.</p>
              {newsletterSuccess ? (
                <p style={{color: 'var(--primary-gold)', fontWeight: 600}}>Thank you for subscribing!</p>
              ) : (
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email address" 
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button type="submit"><ArrowRight size={18} /></button>
                </form>
              )}
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Eva Atelier Group. All Rights Reserved. Designed for premium luxury layouts.</p>
          </div>
        </div>
      </footer>

      {/* GALLERY LIGHTBOX MODAL */}
      {selectedGalleryImg && (
        <div className="modal-overlay" onClick={() => setSelectedGalleryImg(null)} style={{background: 'rgba(0,0,0,0.95)'}}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{background: 'transparent', border: 'none', maxWidth: '900px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0'}}>
            <button className="modal-close" onClick={() => setSelectedGalleryImg(null)} style={{color: '#fff', fontSize: '2rem'}}><X size={30} /></button>
            <img src={selectedGalleryImg} alt="Lightbox View" style={{maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', border: '1px solid var(--border-gold)'}} />
          </div>
        </div>
      )}
    </div>
  );
}
