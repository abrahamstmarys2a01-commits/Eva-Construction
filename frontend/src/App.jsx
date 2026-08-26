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
import boqEstimationImg from './assets/boq_estimation.png';

// Import newly created page components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Gallery from './pages/Gallery';
import BOQ from './pages/BOQ';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState('HOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  
  // Filtering & Detail States
  const [projectFilter, setProjectFilter] = useState('ALL');
  const [galleryFilter, setGalleryFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);
  const [activeProjectThumbIndex, setActiveProjectThumbIndex] = useState(0);

  // Forms
  const [boqForm, setBoqForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    projectArea: '',
    finishLevel: 'Premium',
    message: ''
  });
  const [boqResult, setBoqResult] = useState(null);
  const [boqModalOpen, setBoqModalOpen] = useState(false);
  
  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setSelectedProject(null);
  }, [activePage]);

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
    }
  ];

  const galleryItems = [
    { id: 1, type: 'ARCHITECTURE', image: heroVillaImg },
    { id: 2, type: 'CONSTRUCTION', image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
    { id: 3, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
    { id: 4, type: 'ARCHITECTURE', image: aboutVillaImg },
    { id: 5, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { id: 6, type: 'CONSTRUCTION', image: boqEstimationImg },
    { id: 7, type: 'ARCHITECTURE', image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { id: 8, type: 'INTERIORS', image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" }
  ];

  const blogPosts = [
    {
      id: 1,
      date: "May 24, 2024",
      title: "Top 10 Modern Architecture Trends in 2024",
      desc: "Discover the latest architecture trends that are shaping the future of design.",
      image: heroVillaImg,
      fullContent: "The architectural landscape is shifting rapidly. In 2024, sustainability is no longer an afterthought—it's the core. 1. Biophilic design where green trees and light wells cut deep into modern high-rises. 2. Curved and organic facades manufactured using robotic 3D-printing technologies. 3. Smart energy micro-grids integrated into residential glass structures. Developers and architects are focusing on breathable materials that minimize carbon footprints, creating homes that feel connected to the soil while implementing peak tech comfort."
    },
    {
      id: 2,
      date: "Apr 18, 2024",
      title: "How to Plan Your Dream Home in 7 Steps",
      desc: "A complete guide to planning your dream home with ease.",
      image: aboutVillaImg,
      fullContent: "Planning a home can feel overwhelming. Here's our signature 7-step blueprint: 1. Establish your maximum budget and lock site variables. 2. Outline key space requirements based on lifestyle (do you host? do you need home offices?). 3. Hire an integrated architecture + construction firm to prevent designer-contractor misalignments. 4. Conceptualize initial spaces. 5. Detail BOQs (Bill of Quantities) to prevent surprises. 6. Source durable premium local items. 7. Execute, track timelines, and apply micro-audits."
    },
    {
      id: 3,
      date: "Mar 10, 2024",
      title: "Interior Design Tips for a Luxury Living Room",
      desc: "Easy tips to design a living room that reflects your style and comfort.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      fullContent: "Luxury living rooms share common design principles: symmetry, scales, textures, and bespoke lighting. Avoid matching sofa sets; instead, mix leather seating with velvet textures. Use large area rugs to anchor spaces. Accentuate with natural stones like marble panels or raw quartz consoles. Implement three-layered lighting: ambient ceiling troughs, decorative brass suspensions, and warm floor lanterns at 2700K color temperatures."
    }
  ];

  // BOQ Calculator Handler
  const handleCalculateBOQ = (e) => {
    e.preventDefault();
    const area = parseFloat(boqForm.projectArea);
    if (isNaN(area) || area <= 0) return alert("Please enter a valid positive area!");

    let type = boqForm.projectType || 'Villa';
    let ratePerSqFt = 0;
    if (type === 'Villa') {
      if (boqForm.finishLevel === 'Standard') ratePerSqFt = 2500;
      else if (boqForm.finishLevel === 'Premium') ratePerSqFt = 3500;
      else ratePerSqFt = 4800;
    } else if (type === 'Residential') {
      if (boqForm.finishLevel === 'Standard') ratePerSqFt = 2100;
      else if (boqForm.finishLevel === 'Premium') ratePerSqFt = 2900;
      else ratePerSqFt = 3800;
    } else if (type === 'Commercial') {
      if (boqForm.finishLevel === 'Standard') ratePerSqFt = 2000;
      else if (boqForm.finishLevel === 'Premium') ratePerSqFt = 2700;
      else ratePerSqFt = 3500;
    } else { // Interior
      if (boqForm.finishLevel === 'Standard') ratePerSqFt = 1000;
      else if (boqForm.finishLevel === 'Premium') ratePerSqFt = 1600;
      else ratePerSqFt = 2400;
    }

    const totalEstimate = ratePerSqFt * area;
    const materialCost = totalEstimate * 0.5;
    const laborCost = totalEstimate * 0.35;
    const consultingFee = totalEstimate * 0.15;

    const breakdown = [
      { name: 'Cement & Concrete Works', pct: 15, cost: materialCost * 0.3 },
      { name: 'Steel Reinforcement', pct: 12, cost: materialCost * 0.24 },
      { name: 'Bricks & Sand Masonry', pct: 8, cost: materialCost * 0.16 },
      { name: 'Wood, Windows & Glass', pct: 7, cost: materialCost * 0.14 },
      { name: 'Premium Finishes & Paints', pct: 8, cost: materialCost * 0.16 },
      { name: 'Contractor Labor Forces', pct: 35, cost: laborCost },
      { name: 'Architecture & Supervision', pct: 15, cost: consultingFee }
    ];

    let timelineWeeks = 16;
    if (type === 'Villa' || type === 'Residential') {
      timelineWeeks = Math.round(12 + (area / 300));
    } else if (type === 'Commercial') {
      timelineWeeks = Math.round(24 + (area / 1000));
    } else { // Interior
      timelineWeeks = Math.round(6 + (area / 800));
    }

    setBoqResult({
      total: totalEstimate,
      breakdown,
      timeline: `${timelineWeeks} Weeks`,
      area: `${area.toLocaleString()} sq.ft`,
      finish: boqForm.finishLevel,
      type: type
    });

    setBoqModalOpen(true);
  };

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
  const navigateTo = (page) => {
    setActivePage(page);
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className={`navbar ${navbarScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <div className="logo-area" onClick={() => navigateTo('HOME')} style={{cursor: 'pointer'}}>
            <div className="logo-icon">
              <div className="logo-icon-inner"></div>
            </div>
            <div className="logo-text">
              <h1>Eva Atelier Group</h1>
              <span>Crafting the future, one space at a time</span>
            </div>
          </div>

          <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <li><span className={`nav-link ${activePage === 'HOME' && !selectedProject ? 'active' : ''}`} onClick={() => navigateTo('HOME')}>Home</span></li>
            <li><span className={`nav-link ${activePage === 'ABOUT' ? 'active' : ''}`} onClick={() => navigateTo('ABOUT')}>About Us</span></li>
            <li><span className={`nav-link ${activePage === 'SERVICES' ? 'active' : ''}`} onClick={() => navigateTo('SERVICES')}>Services</span></li>
            <li><span className={`nav-link ${activePage === 'PROJECTS' || selectedProject ? 'active' : ''}`} onClick={() => navigateTo('PROJECTS')}>Projects</span></li>
            <li><span className={`nav-link ${activePage === 'GALLERY' ? 'active' : ''}`} onClick={() => navigateTo('GALLERY')}>Gallery</span></li>
            <li><span className={`nav-link ${activePage === 'CONTACT' ? 'active' : ''}`} onClick={() => navigateTo('CONTACT')}>Contact</span></li>
            <li><button className="btn-primary" onClick={() => navigateTo('BOQ')}>Get a Quote</button></li>
          </ul>
        </div>
      </nav>

      {/* Main Pages Wrapper */}
      <div className="page-wrapper">
        {selectedProject ? (
          <ProjectDetail 
            selectedProject={selectedProject} 
            setSelectedProject={setSelectedProject} 
            activeProjectThumbIndex={activeProjectThumbIndex} 
            setActiveProjectThumbIndex={setActiveProjectThumbIndex} 
          />
        ) : (
          <>
            {activePage === 'HOME' && (
              <Home 
                navigateTo={navigateTo} 
                projects={projects} 
                openProjectDetails={openProjectDetails} 
                heroVillaImg={heroVillaImg} 
              />
            )}
            {activePage === 'ABOUT' && (
              <About aboutVillaImg={aboutVillaImg} />
            )}
            {activePage === 'SERVICES' && (
              <Services navigateTo={navigateTo} />
            )}
            {activePage === 'PROJECTS' && (
              <Projects 
                projects={projects} 
                openProjectDetails={openProjectDetails} 
                projectFilter={projectFilter} 
                setProjectFilter={setProjectFilter} 
              />
            )}
            {activePage === 'GALLERY' && (
              <Gallery 
                galleryItems={galleryItems} 
                galleryFilter={galleryFilter} 
                setGalleryFilter={setGalleryFilter} 
                setSelectedGalleryImg={setSelectedGalleryImg} 
              />
            )}
            {activePage === 'BOQ' && (
              <BOQ 
                boqForm={boqForm} 
                setBoqForm={setBoqForm} 
                handleCalculateBOQ={handleCalculateBOQ} 
                boqEstimationImg={boqEstimationImg} 
              />
            )}
            {activePage === 'BLOG' && (
              <Blog blogPosts={blogPosts} setSelectedBlog={setSelectedBlog} />
            )}
            {activePage === 'CONTACT' && (
              <Contact 
                contactForm={contactForm} 
                setContactForm={setContactForm} 
                handleContactSubmit={handleContactSubmit} 
                contactSuccess={contactSuccess} 
              />
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-logo-desc">
              <div className="logo-area" onClick={() => navigateTo('HOME')} style={{cursor: 'pointer'}}>
                <div className="logo-icon">
                  <div className="logo-icon-inner"></div>
                </div>
                <div className="logo-text">
                  <h1 style={{fontSize: '1rem'}}>Eva Atelier Group</h1>
                  <span>Crafting the future, one space at a time</span>
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
                <li><span style={{cursor: 'pointer'}} onClick={() => navigateTo('HOME')}>Home</span></li>
                <li><span style={{cursor: 'pointer'}} onClick={() => navigateTo('ABOUT')}>About Us</span></li>
                <li><span style={{cursor: 'pointer'}} onClick={() => navigateTo('SERVICES')}>Services</span></li>
                <li><span style={{cursor: 'pointer'}} onClick={() => navigateTo('PROJECTS')}>Projects</span></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Company</h3>
              <ul className="footer-links">
                <li><span style={{cursor: 'pointer'}} onClick={() => navigateTo('GALLERY')}>Gallery</span></li>
                <li><span style={{cursor: 'pointer'}} onClick={() => navigateTo('CONTACT')}>Contact</span></li>
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

      {/* BOQ CALCULATOR MODAL REPORT */}
      {boqModalOpen && boqResult && (
        <div className="modal-overlay" onClick={() => setBoqModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setBoqModalOpen(false)}><X size={24} /></button>
            <h3 className="boq-report-title">Detailed BOQ Report</h3>
            
            <div className="boq-report-summary">
              <div className="boq-summary-card">
                <h4>Project Scope</h4>
                <p>{boqResult.type}</p>
              </div>
              <div className="boq-summary-card">
                <h4>Est. Cost Range</h4>
                <p>₹ {Math.round(boqResult.total * 0.95).toLocaleString()} - ₹ {Math.round(boqResult.total * 1.05).toLocaleString()}</p>
              </div>
              <div className="boq-summary-card">
                <h4>Est. Timeline</h4>
                <p>{boqResult.timeline}</p>
              </div>
            </div>

            <h4 style={{fontFamily: 'var(--font-serif)', color: '#fff', fontSize: '1rem', marginBottom: '1rem', textTransform: 'uppercase'}}>Cost Component Breakdown</h4>
            <table className="boq-breakdown-table">
              <thead>
                <tr>
                  <th>Cost Item Category</th>
                  <th style={{textAlign: 'center'}}>Percentage</th>
                  <th style={{textAlign: 'right'}}>Estimated Cost</th>
                </tr>
              </thead>
              <tbody>
                {boqResult.breakdown.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <div>{item.name}</div>
                      <div className="boq-progress-container">
                        <div className="boq-progress-bar" style={{width: `${item.pct}%`}}></div>
                      </div>
                    </td>
                    <td style={{textAlign: 'center', fontWeight: '600', color: 'var(--primary-gold)'}}>{item.pct}%</td>
                    <td style={{textAlign: 'right', fontFamily: 'monospace'}}>₹ {Math.round(item.cost).toLocaleString()}</td>
                  </tr>
                ))}
                <tr style={{borderTop: '2px solid var(--primary-gold)', fontWeight: 'bold'}}>
                  <td>Grand Total Estimate (Base Projection)</td>
                  <td>100%</td>
                  <td style={{textAlign: 'right', fontFamily: 'monospace', color: 'var(--primary-gold)', fontSize: '1rem'}}>₹ {Math.round(boqResult.total).toLocaleString()}</td>
                </tr>
              </tbody>
            </table>

            <div style={{textAlign: 'center', marginTop: '2rem'}}>
              <button className="btn-primary" onClick={() => { setBoqModalOpen(false); navigateTo('CONTACT'); }}>
                Schedule Architectural Discussion
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BLOG READ MORE MODAL */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedBlog(null)}><X size={24} /></button>
            <span className="blog-date" style={{display: 'block', marginBottom: '1rem'}}>{selectedBlog.date}</span>
            <h3 style={{fontSize: '1.75rem', textTransform: 'uppercase', marginBottom: '1.5rem', color: '#fff', lineHeight: 1.3}}>{selectedBlog.title}</h3>
            
            <div style={{border: '1px solid var(--border-gold)', padding: '0.5rem', marginBottom: '2rem'}}>
              <img src={selectedBlog.image} alt={selectedBlog.title} style={{width: '100%', maxHeight: '350px', objectFit: 'cover', display: 'block'}} />
            </div>

            <p style={{fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', whiteSpace: 'pre-wrap'}}>
              {selectedBlog.fullContent}
            </p>

            <div style={{textAlign: 'center', marginTop: '3rem'}}>
              <button className="btn-outline" onClick={() => setSelectedBlog(null)}>
                Close Journal
              </button>
            </div>
          </div>
        </div>
      )}

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
