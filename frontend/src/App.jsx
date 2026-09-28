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
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Import local generated assets
import heroVillaImg from './assets/hero_villa.png';
import aboutVillaImg from './assets/about_villa.png';
import galleryVilla1 from './assets/gallery_villa_1.jpg';
import galleryVilla2 from './assets/gallery_villa_2.jpg';
import galleryVilla3 from './assets/gallery_villa_3.jpg';
import galleryVilla4 from './assets/gallery_villa_4.jpg';
import galleryVilla5 from './assets/gallery_villa_5.jpg';
import galleryVilla6 from './assets/gallery_villa_6.jpg';
import galleryVilla7 from './assets/gallery_villa_7.jpg';
import galleryVilla8 from './assets/gallery_villa_8.jpg';
import galleryVilla9 from './assets/gallery_villa_9.jpg';

// Import newly created page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import Careers from './pages/Careers';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [showCareersPage, setShowCareersPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activeSection = location.pathname === '/' ? 'home' : location.pathname.substring(1);
  
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
    },
    {
      id: 9,
      title: "Grand Contemporary Villa - Salem",
      category: "VILLAS",
      location: "Salem, Tamil Nadu",
      area: "5,800 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla6,
      thumbnails: [
        galleryVilla6,
        galleryVilla7,
        galleryVilla8,
        galleryVilla9
      ],
      description: "Striking 2-story contemporary villa featuring exposed brick patterns, cantilevered slabs, integrated balcony planter boxes, and warm architectural landscape lighting.",
      features: ["Exposed Brick Architecture", "Cantilevered Balconies", "Landscape Lighting", "Italian Marble Flooring", "Smart Home Automation"]
    },
    {
      id: 10,
      title: "Signature Residence - Vellore",
      category: "RESIDENTIAL",
      location: "Vellore, Tamil Nadu",
      area: "6,200 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla7,
      thumbnails: [
        galleryVilla7,
        galleryVilla6,
        galleryVilla4,
        galleryVilla1
      ],
      description: "Modern 3-story vertical residence showcasing dynamic wooden wall louvers, exposed brick pillars, textured stone masonry, and a signature circular architectural cutout.",
      features: ["Geometric Cutout Feature", "Vertical Wooden Louvers", "Private Terrace Garden", "Double Glazed Windows", "High-End Security Gate"]
    },
    {
      id: 11,
      title: "Modernist Horizon Home - Pondicherry",
      category: "RESIDENTIAL",
      location: "Pondicherry",
      area: "4,600 sq.ft",
      year: "2023",
      status: "Completed",
      image: galleryVilla8,
      thumbnails: [
        galleryVilla8,
        galleryVilla2,
        galleryVilla3,
        galleryVilla6
      ],
      description: "Sophisticated single-story minimalist villa blending earthy terracotta tones, dark wood accents, recessed soffit lighting, and welcoming symmetrical entryway architecture.",
      features: ["Minimalist Single Story", "Terracotta Facade Accent", "Lush Entryway Planters", "Integrated Soffit Lights", "Spacious Portico Deck"]
    },
    {
      id: 12,
      title: "Heritage Fusion Villa - Kochi",
      category: "VILLAS",
      location: "Kochi, Kerala",
      area: "7,500 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla9,
      thumbnails: [
        galleryVilla9,
        galleryVilla3,
        galleryVilla1,
        galleryVilla7
      ],
      description: "A breathtaking fusion of traditional Kerala sloping hip roof geometry and sleek contemporary white stucco walls, accompanied by a grand paved driveway and stone column portico.",
      features: ["Heritage Fusion Roof", "Grand Car Portico", "Stone Clad Columns", "Expansive Paved Driveway", "Lush Manicured Lawn"]
    }
  ];

  const galleryItems = [
    { id: 1, type: 'ARCHITECTURE', image: galleryVilla1 },
    { id: 2, type: 'ARCHITECTURE', image: galleryVilla2 },
    { id: 3, type: 'ARCHITECTURE', image: galleryVilla3 },
    { id: 4, type: 'ARCHITECTURE', image: galleryVilla4 },
    { id: 5, type: 'ARCHITECTURE', image: galleryVilla5 },
    { id: 6, type: 'ARCHITECTURE', image: galleryVilla6 },
    { id: 7, type: 'ARCHITECTURE', image: galleryVilla7 },
    { id: 8, type: 'ARCHITECTURE', image: galleryVilla8 },
    { id: 9, type: 'ARCHITECTURE', image: galleryVilla9 },
    { id: 10, type: 'COMPLETED', image: galleryVilla1 },
    { id: 11, type: 'COMPLETED', image: galleryVilla6 },
    { id: 12, type: 'COMPLETED', image: galleryVilla7 },
    { id: 13, type: 'COMPLETED', image: galleryVilla8 },
    { id: 14, type: 'COMPLETED', image: galleryVilla9 },
    { id: 15, type: 'ARCHITECTURE', image: heroVillaImg },
    { id: 16, type: 'CONSTRUCTION', image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
    { id: 17, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
    { id: 18, type: 'ARCHITECTURE', image: aboutVillaImg },
    { id: 19, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { id: 20, type: 'CONSTRUCTION', image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
    { id: 21, type: 'ARCHITECTURE', image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { id: 22, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" },
    { id: 23, type: 'COMPLETED', image: galleryVilla3 },
    { id: 24, type: 'COMPLETED', image: galleryVilla4 },
    { id: 25, type: 'CONSTRUCTION', image: galleryVilla5 },
    { id: 26, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" },
    { id: 27, type: 'ARCHITECTURE', image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" }
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
    setSelectedProject(null);
    setShowQuotePage(false);
    setShowCareersPage(false);
    
    if (['about', 'services', 'projects', 'gallery', 'contact'].includes(sectionId)) {
      navigate('/' + sectionId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          if (sectionId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            const el = document.getElementById(sectionId);
            if (el) {
              const y = el.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        }, 100);
      } else {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      }
    }
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
            <li><span className={`nav-link ${activeSection === 'home' && !showQuotePage && !showCareersPage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>Home</span></li>
            <li><span className={`nav-link ${activeSection === 'about' && !showQuotePage && !showCareersPage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>About Us</span></li>
            <li><span className={`nav-link ${activeSection === 'services' && !showQuotePage && !showCareersPage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('services')} style={{cursor: 'pointer'}}>Services</span></li>
            <li><span className={`nav-link ${activeSection === 'projects' && !showQuotePage && !showCareersPage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('projects')} style={{cursor: 'pointer'}}>Projects</span></li>
            <li><span className={`nav-link ${activeSection === 'gallery' && !showQuotePage && !showCareersPage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('gallery')} style={{cursor: 'pointer'}}>Gallery</span></li>
            <li><span className={`nav-link ${showCareersPage ? 'active' : ''}`} onClick={() => { setMobileMenuOpen(false); setSelectedProject(null); setShowQuotePage(false); setShowCareersPage(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{cursor: 'pointer'}}>Careers</span></li>
            <li><span className={`nav-link ${activeSection === 'contact' && !showQuotePage && !showCareersPage && !selectedProject ? 'active' : ''}`} onClick={() => scrollToSection('contact')} style={{cursor: 'pointer'}}>Contact</span></li>
            <li><button className="btn-primary" onClick={() => { setMobileMenuOpen(false); setSelectedProject(null); setShowCareersPage(false); setShowQuotePage(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Get a Quote</button></li>
          </ul>
        </div>
      </nav>

            {/* Main Pages Wrapper */}
      <div className="page-wrapper">
        {showQuotePage ? (
          <div className="quote-overlay-wrapper">
            <GetQuote setShowQuotePage={setShowQuotePage} />
          </div>
        ) : showCareersPage ? (
          <div className="careers-overlay-wrapper">
            <Careers setShowCareersPage={setShowCareersPage} scrollToSection={scrollToSection} />
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
          <Routes>
            <Route path="/" element={
              <Home 
                scrollToSection={scrollToSection} 
                projects={projects} 
                openProjectDetails={openProjectDetails} 
                heroVillaImg={heroVillaImg} 
                aboutVillaImg={aboutVillaImg}
                projectFilter={projectFilter}
                setProjectFilter={setProjectFilter}
                galleryItems={galleryItems}
                galleryFilter={galleryFilter}
                setGalleryFilter={setGalleryFilter}
                setSelectedGalleryImg={setSelectedGalleryImg}
                contactForm={contactForm}
                setContactForm={setContactForm}
                handleContactSubmit={handleContactSubmit}
                contactSuccess={contactSuccess}
                setShowQuotePage={setShowQuotePage}
              />
            } />
            <Route path="/about" element={
              <About aboutVillaImg={aboutVillaImg} />
            } />
            <Route path="/services" element={
              <Services scrollToSection={scrollToSection} />
            } />
            <Route path="/projects" element={
              <Projects 
                projects={projects} 
                openProjectDetails={openProjectDetails} 
                projectFilter={projectFilter} 
                setProjectFilter={setProjectFilter} 
              />
            } />
            <Route path="/gallery" element={
              <Gallery 
                galleryItems={galleryItems} 
                galleryFilter={galleryFilter} 
                setGalleryFilter={setGalleryFilter} 
                setSelectedGalleryImg={setSelectedGalleryImg} 
              />
            } />
            <Route path="/contact" element={
              <Contact 
                contactForm={contactForm} 
                setContactForm={setContactForm} 
                handleContactSubmit={handleContactSubmit} 
                contactSuccess={contactSuccess} 
              />
            } />
            <Route path="/careers" element={
              <Careers setShowCareersPage={setShowCareersPage} scrollToSection={scrollToSection} />
            } />
          </Routes>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
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
                <li><span style={{cursor: 'pointer'}} onClick={() => { setSelectedProject(null); setShowQuotePage(false); setShowCareersPage(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Careers</span></li>
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
