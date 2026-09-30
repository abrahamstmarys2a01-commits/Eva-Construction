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
import interiorLivingRoom from './assets/interior_living_room.jpg';
import interiorMasterBedroom from './assets/interior_master_bedroom.jpg';
import heritageLivingCourtyard from './assets/heritage_living_courtyard.jpg';
import heritageMuralLiving from './assets/heritage_mural_living.jpg';
import heritageDiningBar from './assets/heritage_dining_bar.jpg';
import heritageWardrobeCloset from './assets/heritage_wardrobe_closet.jpg';

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
      title: "Bespoke Residence Interior - Trichy",
      category: "INTERIOR",
      location: "Trichy, Tamil Nadu",
      area: "4,500 sq.ft",
      year: "2024",
      status: "Completed",
      image: interiorLivingRoom,
      thumbnails: [
        interiorLivingRoom,
        interiorKitchen1,
        interiorKitchen2,
        interiorMasterBedroom
      ],
      description: "A breathtaking turnkey interior transformation featuring an open double-height luxury living hall with a sculptural curved staircase and ring chandelier, an olive/sage modular kitchen with custom backsplash tiling, and an opulent master bedroom suite with warm wood accents.",
      features: ["Double-Height Living Lounge", "Sculptural Curved Staircase", "Modern Modular Kitchen", "Master Bedroom Suite", "Cove LED & Designer Chandelier"]
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
    },
    {
      id: 13,
      title: "Modern Modular Kitchen & Master Suite",
      category: "INTERIOR",
      location: "Chennai, Tamil Nadu",
      area: "3,800 sq.ft",
      year: "2024",
      status: "Completed",
      image: interiorKitchen1,
      thumbnails: [
        interiorKitchen1,
        interiorKitchen2,
        interiorLivingRoom,
        interiorMasterBedroom
      ],
      description: "State-of-the-art modular kitchen and bedroom execution with sleek integrated appliances, floral patterned backsplash, glossy sage green cabinetry, and bespoke wardrobe units.",
      features: ["Sage Green Modular Cabinets", "Quartz Countertops", "Integrated Smart Appliances", "Bespoke Wardrobe Units", "Designer Ambient Lighting"]
    },
    {
      id: 14,
      title: "Chettinad Heritage Fusion Villa - Madurai",
      category: "INTERIOR",
      location: "Madurai, Tamil Nadu",
      area: "5,400 sq.ft",
      year: "2024",
      status: "Completed",
      image: heritageLivingCourtyard,
      thumbnails: [
        heritageLivingCourtyard,
        heritageMuralLiving,
        heritageDiningBar,
        heritageWardrobeCloset
      ],
      description: "A masterful fusion of traditional South Indian Chettinad architecture and modern luxury living. Showcasing a central skylit courtyard with brass-chain teak oonjal (swing), hand-painted Radha-Krishna devotional mural wall, terracotta jali lattice dividers, breakfast bar nook, and floor-to-ceiling teak sliding wardrobe suites.",
      features: ["Central Courtyard with Teak Oonjal", "Radha-Krishna Devotional Wall Mural", "Terracotta Jali Lattice Screens", "Breakfast Bar & Crockery Cabinet", "Floor-to-Ceiling Teak Wardrobes"]
    }
  ];

  const galleryItems = [
    { id: 1, type: 'INTERIORS', image: heritageLivingCourtyard },
    { id: 2, type: 'INTERIORS', image: heritageMuralLiving },
    { id: 3, type: 'INTERIORS', image: heritageDiningBar },
    { id: 4, type: 'INTERIORS', image: heritageWardrobeCloset },
    { id: 5, type: 'INTERIORS', image: interiorLivingRoom },
    { id: 6, type: 'INTERIORS', image: interiorKitchen1 },
    { id: 7, type: 'INTERIORS', image: interiorKitchen2 },
    { id: 8, type: 'INTERIORS', image: interiorMasterBedroom },
    { id: 9, type: 'COMPLETED', image: heritageLivingCourtyard },
    { id: 10, type: 'COMPLETED', image: heritageMuralLiving },
    { id: 11, type: 'ARCHITECTURE', image: galleryVilla1 },
    { id: 12, type: 'ARCHITECTURE', image: galleryVilla2 },
    { id: 13, type: 'ARCHITECTURE', image: galleryVilla3 },
    { id: 14, type: 'ARCHITECTURE', image: galleryVilla4 },
    { id: 15, type: 'ARCHITECTURE', image: galleryVilla5 },
    { id: 16, type: 'ARCHITECTURE', image: galleryVilla6 },
    { id: 17, type: 'ARCHITECTURE', image: galleryVilla7 },
    { id: 18, type: 'ARCHITECTURE', image: galleryVilla8 },
    { id: 19, type: 'ARCHITECTURE', image: galleryVilla9 },
    { id: 20, type: 'COMPLETED', image: interiorLivingRoom },
    { id: 21, type: 'COMPLETED', image: interiorMasterBedroom },
    { id: 22, type: 'COMPLETED', image: interiorKitchen1 },
    { id: 23, type: 'COMPLETED', image: galleryVilla1 },
    { id: 24, type: 'COMPLETED', image: galleryVilla6 },
    { id: 25, type: 'COMPLETED', image: galleryVilla7 },
    { id: 26, type: 'COMPLETED', image: galleryVilla8 },
    { id: 27, type: 'COMPLETED', image: galleryVilla9 },
    { id: 28, type: 'ARCHITECTURE', image: heroVillaImg },
    { id: 29, type: 'CONSTRUCTION', image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80" },
    { id: 30, type: 'ARCHITECTURE', image: aboutVillaImg },
    { id: 31, type: 'CONSTRUCTION', image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" },
    { id: 32, type: 'ARCHITECTURE', image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
    { id: 33, type: 'COMPLETED', image: galleryVilla3 },
    { id: 34, type: 'COMPLETED', image: galleryVilla4 },
    { id: 35, type: 'CONSTRUCTION', image: galleryVilla5 }
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
            {/* Column 1: Brand & Bio */}
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
            <p>&copy; {new Date().getFullYear()} EVA ATELIER GROUP. All Rights Reserved.</p>
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
