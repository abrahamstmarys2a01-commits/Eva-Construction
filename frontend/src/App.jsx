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
import interiorKitchen1 from './assets/interior_kitchen_1.jpg';
import interiorKitchen2 from './assets/interior_kitchen_2.jpg';
import interiorKitchenSage1 from './assets/interior_kitchen_sage_1.jpg';
import interiorKitchenSage2 from './assets/interior_kitchen_sage_2.jpg';
import interiorKitchenIsland from './assets/interior_kitchen_island.jpg';
import interiorLivingRoom from './assets/interior_living_room.jpg';
import interiorLivingClassic from './assets/interior_living_classic.jpg';
import interiorModernLounge1 from './assets/interior_modern_lounge_1.jpg';
import interiorModernLounge2 from './assets/interior_modern_lounge_2.jpg';
import interiorModernLounge3 from './assets/interior_modern_lounge_3.jpg';
import interiorMasterBedroom from './assets/interior_master_bedroom.jpg';
import interiorBedroomDesigner from './assets/interior_bedroom_designer.jpg';
import interiorBedroomTeak from './assets/interior_bedroom_teak.jpg';
import interiorBedroomMauve from './assets/interior_bedroom_mauve.jpg';
import interiorWardrobeGreenArch from './assets/interior_wardrobe_green_arch.png';
import interiorWardrobeBayWindow from './assets/interior_wardrobe_bay_window.jpg';
import interiorDressingHallway from './assets/interior_dressing_hallway.jpg';
import interiorBathroomLuxury1 from './assets/interior_bathroom_luxury_1.jpg';
import interiorBathroomLuxury2 from './assets/interior_bathroom_luxury_2.jpg';
import interiorBathroomModern from './assets/interior_bathroom_modern.jpg';
import heritageLivingCourtyard from './assets/heritage_living_courtyard.jpg';
import heritageMuralLiving from './assets/heritage_mural_living.jpg';
import heritageDiningBar from './assets/heritage_dining_bar.jpg';
import heritageWardrobeCloset from './assets/heritage_wardrobe_closet.jpg';
import modernVillaChennai from './assets/modern_villa_chennai.jpg';
import luxuryMansionPoolVilla from './assets/luxury_mansion_pool_villa.jpg';
import traditionalHeritageClayVilla from './assets/traditional_heritage_clay_villa.jpg';
import corporateStudioTrichy from './assets/corporate_studio_trichy.jpg';
import interiorLuxuryLiving from './assets/interior_luxury_living.jpg';

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

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.484-8.414z" />
  </svg>
);

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
  const [activeProjectThumbIndex, setActiveProjectThumbIndex] = useState(null);
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

  // 16 Unique Projects with customized 4 interior thumbnails per project
  const projects = [
    {
      id: 1,
      title: "Modern Villa - Chennai",
      category: "VILLAS",
      location: "Chennai, Tamil Nadu",
      area: "6,500 sq.ft",
      year: "2024",
      status: "Completed",
      image: modernVillaChennai,
      thumbnails: [interiorLivingRoom, interiorKitchenIsland, interiorBathroomLuxury1, interiorBedroomMauve],
      description: "This modern luxury villa is a perfect blend of tropical contemporary architecture and functional elegance. Features covered dual-car portico with stone pillars, private cantilevered balconies, lush perimeter landscape lighting, and refined interior spatial flow.",
      features: ["Grand Car Portico with Stone Pillars", "Balcony Planters & Pergola", "Architectural Landscape Lighting", "Premium Imported Finishes", "Smart Home Automation"]
    },
    {
      id: 2,
      title: "Contemporary Glass Residence - ECR",
      category: "RESIDENTIAL",
      location: "ECR, Chennai",
      area: "5,400 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla1,
      thumbnails: [interiorModernLounge1, interiorKitchenSage2, interiorBathroomLuxury2, interiorBedroomDesigner],
      description: "A stunning seaside modern residence boasting minimalist cantilevered geometry, full-height floor-to-ceiling performance glass walls, and open-plan hosting decks that bathe the interior in natural ambient light.",
      features: ["Full-Height Glass Facade", "Cantilevered Shading Slabs", "Open-Plan Living Lounge", "Italian Marble Flooring", "Smart Lighting Controls"]
    },
    {
      id: 3,
      title: "Grand Contemporary Pool Mansion - Coimbatore",
      category: "VILLAS",
      location: "Coimbatore, Tamil Nadu",
      area: "10,500 sq.ft",
      year: "2024",
      status: "Completed",
      image: luxuryMansionPoolVilla,
      thumbnails: [interiorLuxuryLiving, interiorLivingRoom, interiorKitchenIsland, interiorBathroomModern],
      description: "An ultra-luxurious multi-level architectural masterpiece boasting an infinity pool, Japanese-style zen koi pond fountain, floor-to-ceiling panoramic glass facade, and illuminated grand driveway entrance.",
      features: ["Infinity Lap Pool", "Zen Koi Pond & Waterfalls", "Multi-Level Cantilever Terraces", "Double-Height Glass Atrium", "Smart Landscape Illuminations"]
    },
    {
      id: 5,
      title: "Traditional Heritage Clay Villa - Thanjavur",
      category: "VILLAS",
      location: "Thanjavur, Tamil Nadu",
      area: "7,200 sq.ft",
      year: "2024",
      status: "Completed",
      image: traditionalHeritageClayVilla,
      thumbnails: [heritageLivingCourtyard, heritageMuralLiving, heritageDiningBar, interiorBedroomTeak],
      description: "A breathtaking tribute to Dravidian and coastal vernacular architecture, featuring natural clay tile sloping roofs, exposed terracotta detailing, teakwood pillared porches, and tranquil central water features.",
      features: ["Clay Tile Sloping Roofs", "Pillared Verandah & Courtyard", "Natural Terracotta Craftsmanship", "Brass Landscape Elements", "High-Thermal Insulation"]
    },
    {
      id: 6,
      title: "Eva Atelier Corporate Studio - Trichy",
      category: "COMMERCIAL",
      location: "Trichy, Tamil Nadu",
      area: "12,000 sq.ft",
      year: "2024",
      status: "Completed",
      image: corporateStudioTrichy,
      thumbnails: [interiorModernLounge1, interiorModernLounge3, interiorLuxuryLiving, heritageDiningBar],
      description: "A signature commercial architectural design studio showcasing monumental cantilevered stone volumes, illuminated glass conference pods, and sustainable energy-efficient ventilation systems.",
      features: ["Monumental Stone Facade", "Glass Conference Pods", "Solar Passive Architecture", "High-Speed EV Chargers", "Rooftop Executive Lounge"]
    },
    {
      id: 7,
      title: "Minimalist Modern Haven - Trichy",
      category: "RESIDENTIAL",
      location: "Trichy, Tamil Nadu",
      area: "4,800 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla2,
      thumbnails: [interiorLivingClassic, interiorWardrobeGreenArch, interiorKitchenSage1, interiorBathroomLuxury2],
      description: "An elegant contemporary residential design defined by clean horizontal planes, textured white limestone stucco, integrated balcony planter boxes, and warm concealed LED soffit lighting.",
      features: ["Clean Horizontal Lines", "Balcony Planter Boxes", "Concealed LED Soffits", "Multi-Vehicle Covered Parking", "Custom Metal Pergola"]
    },
    {
      id: 8,
      title: "Urban Courtyard Residence - Chennai",
      category: "RESIDENTIAL",
      location: "Chennai, Tamil Nadu",
      area: "6,000 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla4,
      thumbnails: [interiorModernLounge2, interiorWardrobeBayWindow, interiorMasterBedroom, interiorBathroomModern],
      description: "A refined urban home designed around an internal green courtyard, combining modern vertical wood louvers, expansive glass sliding systems, and private landscaped garden terraces.",
      features: ["Internal Green Courtyard", "Vertical Wooden Louvers", "Glass Sliding System", "Private Garden Terraces", "Acoustic Insulation"]
    },
    {
      id: 9,
      title: "Apex Horizon Commercial Studio - Salem",
      category: "COMMERCIAL",
      location: "Salem, Tamil Nadu",
      area: "9,500 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla5,
      thumbnails: [interiorModernLounge3, interiorLuxuryLiving, interiorModernLounge2, heritageDiningBar],
      description: "A contemporary multi-level commercial complex showcasing deep teal textured masonry, perimeter architectural illumination, and automated secure vehicle parking.",
      features: ["Multi-Level Commercial Facade", "Perimeter Architectural Lighting", "Textured Masonry Panels", "Secure Access Control", "Executive Conference Suites"]
    },
    {
      id: 10,
      title: "Grand Contemporary Villa - Salem",
      category: "VILLAS",
      location: "Salem, Tamil Nadu",
      area: "5,800 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla6,
      thumbnails: [interiorLivingClassic, interiorBedroomMauve, interiorKitchenSage2, interiorBathroomLuxury1],
      description: "Striking 2-story contemporary villa featuring exposed brick patterns, cantilevered slabs, integrated balcony planter boxes, and warm architectural landscape lighting.",
      features: ["Exposed Brick Architecture", "Cantilevered Balconies", "Landscape Lighting", "Italian Marble Flooring", "Smart Home Automation"]
    },
    {
      id: 11,
      title: "Signature Residence - Vellore",
      category: "RESIDENTIAL",
      location: "Vellore, Tamil Nadu",
      area: "6,200 sq.ft",
      year: "2024",
      status: "Completed",
      image: galleryVilla7,
      thumbnails: [interiorModernLounge1, interiorWardrobeGreenArch, interiorKitchen1, interiorDressingHallway],
      description: "Modern 3-story vertical residence showcasing dynamic wooden wall louvers, exposed brick pillars, textured stone masonry, and a signature circular architectural cutout.",
      features: ["Geometric Cutout Feature", "Vertical Wooden Louvers", "Private Terrace Garden", "Double Glazed Windows", "High-End Security Gate"]
    },
    {
      id: 12,
      title: "Modernist Horizon Home - Pondicherry",
      category: "RESIDENTIAL",
      location: "Pondicherry",
      area: "4,600 sq.ft",
      year: "2023",
      status: "Completed",
      image: galleryVilla8,
      thumbnails: [interiorModernLounge3, interiorBedroomTeak, interiorWardrobeBayWindow, interiorBathroomLuxury1],
      description: "Sophisticated single-story minimalist villa blending earthy terracotta tones, dark wood accents, recessed soffit lighting, and welcoming symmetrical entryway architecture.",
      features: ["Minimalist Single Story", "Terracotta Facade Accent", "Lush Entryway Planters", "Integrated Soffit Lights", "Spacious Portico Deck"]
    },
    {
      id: 13,
      title: "Bespoke Residence Living Hall - Trichy",
      category: "INTERIOR",
      location: "Trichy, Tamil Nadu",
      area: "4,500 sq.ft",
      year: "2024",
      status: "Completed",
      image: interiorLivingRoom,
      thumbnails: [interiorLivingRoom, interiorLuxuryLiving, interiorModernLounge1, interiorBathroomLuxury2],
      description: "A breathtaking turnkey interior transformation featuring an open double-height luxury living hall with a sculptural curved staircase and ring chandelier, warm cove lighting, and Italian marble finishes.",
      features: ["Double-Height Living Lounge", "Sculptural Curved Staircase", "Italian Marble Flooring", "Designer Ambient Chandelier", "Bespoke Wall Panelling"]
    },
    {
      id: 14,
      title: "Modern Modular Kitchen Suite - Chennai",
      category: "INTERIOR",
      location: "Chennai, Tamil Nadu",
      area: "3,800 sq.ft",
      year: "2024",
      status: "Completed",
      image: interiorKitchen1,
      thumbnails: [interiorKitchenSage1, interiorKitchenSage2, interiorKitchenIsland, interiorKitchen1],
      description: "State-of-the-art modular kitchen execution with sleek integrated appliances, floral patterned backsplash, glossy sage green cabinetry, and quartz countertops.",
      features: ["Sage Green Modular Cabinets", "Quartz Countertops", "Integrated Smart Appliances", "Soft-Close Hardware", "Under-Cabinet LED Lighting"]
    },
    {
      id: 15,
      title: "Chettinad Heritage Courtyard & Oonjal - Madurai",
      category: "INTERIOR",
      location: "Madurai, Tamil Nadu",
      area: "5,400 sq.ft",
      year: "2024",
      status: "Completed",
      image: heritageLivingCourtyard,
      thumbnails: [heritageLivingCourtyard, heritageMuralLiving, heritageDiningBar, heritageWardrobeCloset],
      description: "A masterful fusion of traditional South Indian Chettinad architecture and modern luxury living. Showcasing a central skylit courtyard with brass-chain teak oonjal (swing), terracotta jali lattice dividers, and traditional craftsmanship.",
      features: ["Central Courtyard with Teak Oonjal", "Terracotta Jali Lattice Screens", "Brass Accent Hardware", "Natural Stone Inlays", "Skylit Ventilation Roof"]
    },
    {
      id: 16,
      title: "Heritage Mural Living Suite - Madurai",
      category: "INTERIOR",
      location: "Madurai, Tamil Nadu",
      area: "3,200 sq.ft",
      year: "2024",
      status: "Completed",
      image: heritageMuralLiving,
      thumbnails: [heritageMuralLiving, interiorBedroomTeak, interiorDressingHallway, interiorWardrobeBayWindow],
      description: "Exquisite interior suite showcasing hand-painted devotional heritage wall art, custom teak accents, recessed brass accent luminaires, and warm timber ceiling woodwork.",
      features: ["Hand-Painted Wall Art Mural", "Custom Teak Woodwork", "Brass Accent Fixtures", "Recessed Cove Lighting", "South Indian Heritage Details"]
    }
  ];

  // Gallery Items (Includes project photos categorized cleanly with no duplicate images)
  const galleryItems = [
    // ARCHITECTURE
    { id: 1, type: 'ARCHITECTURE', image: modernVillaChennai },
    { id: 2, type: 'ARCHITECTURE', image: luxuryMansionPoolVilla },
    { id: 3, type: 'ARCHITECTURE', image: galleryVilla1 },
    { id: 4, type: 'ARCHITECTURE', image: corporateStudioTrichy },
    { id: 5, type: 'ARCHITECTURE', image: galleryVilla5 },
    
    // CONSTRUCTION
    { id: 6, type: 'CONSTRUCTION', image: traditionalHeritageClayVilla },
    { id: 7, type: 'CONSTRUCTION', image: galleryVilla2 },
    { id: 8, type: 'CONSTRUCTION', image: galleryVilla4 },
    { id: 9, type: 'CONSTRUCTION', image: galleryVilla6 },
    { id: 10, type: 'CONSTRUCTION', image: galleryVilla7 },
    { id: 11, type: 'CONSTRUCTION', image: galleryVilla8 },

    // INTERIORS
    { id: 12, type: 'INTERIORS', image: interiorLivingRoom },
    { id: 13, type: 'INTERIORS', image: interiorLuxuryLiving },
    { id: 14, type: 'INTERIORS', image: interiorKitchen1 },
    { id: 15, type: 'INTERIORS', image: interiorKitchen2 },
    { id: 16, type: 'INTERIORS', image: interiorMasterBedroom },
    { id: 17, type: 'INTERIORS', image: heritageLivingCourtyard },

    // COMPLETED
    { id: 18, type: 'COMPLETED', image: heritageMuralLiving },
    { id: 19, type: 'COMPLETED', image: heritageDiningBar },
    { id: 20, type: 'COMPLETED', image: heritageWardrobeCloset }
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
    setActiveProjectThumbIndex(null);
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
              <h1 style={{ color: 'var(--primary-gold)' }}>EVA ATELIER</h1>
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
                isHomePage={false}
                scrollToSection={scrollToSection}
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
            {/* Column 1: Brand & Bio */}
            <div className="footer-logo-desc">
              <div className="logo-area" onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>
                <div className="logo-icon">
                  <div className="logo-icon-inner"></div>
                </div>
                <div className="logo-text">
                  <h1 style={{fontSize: '1rem', color: 'var(--primary-gold)'}}>EVA ATELIER</h1>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>CRAFTING THE FUTURE, ONE SPACE AT A TIME.</span>
                </div>
              </div>
              <p>
                We design, build, and transform exceptional residential and commercial spaces with cutting-edge architecture, interior craftsmanship, and turnkey excellence.
              </p>
              <div className="footer-socials">
                <a href="https://www.facebook.com/profile.php?id=61592784964504" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href="https://www.instagram.com/eva_atelier_group" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/ar-ramkumar-muruganandam-0a4486395/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a href="https://wa.me/917397101215" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="WhatsApp">
                  <WhatsAppIcon />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><span onClick={() => scrollToSection('home')}>Home</span></li>
                <li><span onClick={() => scrollToSection('about')}>About Us</span></li>
                <li><span onClick={() => scrollToSection('services')}>Services</span></li>
                <li><span onClick={() => scrollToSection('projects')}>Projects</span></li>
                <li><span onClick={() => scrollToSection('gallery')}>Gallery</span></li>
                <li><span onClick={() => { setSelectedProject(null); setShowQuotePage(false); setShowCareersPage(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Careers</span></li>
                <li><span onClick={() => scrollToSection('contact')}>Contact Us</span></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col">
              <h3>Our Services</h3>
              <ul className="footer-links">
                <li><span onClick={() => scrollToSection('services')}>Architectural Planning</span></li>
                <li><span onClick={() => scrollToSection('services')}>Luxury Villa Construction</span></li>
                <li><span onClick={() => scrollToSection('services')}>Turnkey Interior Design</span></li>
                <li><span onClick={() => scrollToSection('services')}>Commercial Architecture</span></li>
                <li><span onClick={() => scrollToSection('services')}>3D BIM & Elevation</span></li>
                <li><span onClick={() => scrollToSection('services')}>Structural Engineering</span></li>
              </ul>
            </div>

            {/* Column 4: Trichy Head Office / Contact Info */}
            <div className="footer-col">
              <h3>Trichy Office</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <MapPin size={18} className="footer-contact-icon" />
                  <span>
                    WD-54, Anandha Bhavan Complex, 2nd Floor, 17/52, Puthur High Rd, Tiruchirappalli, Tamil Nadu - 620017
                  </span>
                </li>
                <li className="footer-contact-item">
                  <Phone size={18} className="footer-contact-icon" />
                  <a href="tel:+917397101215">+91 7397101215</a>
                </li>
                <li className="footer-contact-item">
                  <Mail size={18} className="footer-contact-icon" />
                  <a href="mailto:the.evaateliers@gmail.com">the.evaateliers@gmail.com</a>
                </li>
                <li className="footer-contact-item">
                  <Clock size={18} className="footer-contact-icon" />
                  <span>Mon &ndash; Sat: 9:30 AM &ndash; 7:30 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} EVA ATELIER. All Rights Reserved.</p>
            <p style={{ color: 'var(--primary-gold)', opacity: 0.85 }}>Architecture &bull; Construction &bull; Interiors &bull; Trichy, Tamil Nadu</p>
          </div>
        </div>
      </footer>

      {/* GALLERY LIGHTBOX MODAL */}
      {selectedGalleryImg && (
        <div className="modal-overlay" onClick={() => setSelectedGalleryImg(null)} style={{background: 'rgba(0,0,0,0.95)', padding: '1.25rem'}}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{background: 'transparent', border: 'none', maxWidth: '900px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem', padding: '0'}}>
            <button 
              onClick={() => setSelectedGalleryImg(null)} 
              style={{
                background: 'rgba(212, 175, 55, 0.15)', 
                border: '1px solid var(--border-gold)', 
                color: 'var(--primary-gold)', 
                padding: '0.45rem 1rem', 
                borderRadius: '20px', 
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary-gold)'; e.currentTarget.style.color = '#000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212, 175, 55, 0.15)'; e.currentTarget.style.color = 'var(--primary-gold)'; }}
            >
              <X size={18} /> Close
            </button>
            <img src={selectedGalleryImg} alt="Lightbox View" style={{maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', border: '1px solid var(--border-gold)', borderRadius: '6px'}} />
          </div>
        </div>
      )}
    </div>
  );
}
