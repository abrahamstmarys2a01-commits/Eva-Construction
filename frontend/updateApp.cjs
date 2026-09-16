const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

code = code.replace(/import '\.\/App\.css';/, "import './App.css';\nimport { Routes, Route, useNavigate, useLocation } from 'react-router-dom';");

code = code.replace(/const \[activeSection, setActiveSection\] = useState\('home'\);/, "const location = useLocation();\n  const navigate = useNavigate();\n  const activeSection = location.pathname === '/' ? 'home' : location.pathname.substring(1);");

code = code.replace(/  \/\/ Intersection Observer for scrollspy[\s\S]*?  \}, \[showQuotePage, selectedProject\]\);/, "");

code = code.replace(/const scrollToSection = \(sectionId\) => \{[\s\S]*?\}, 100\);\n  \};/, `const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    setSelectedProject(null);
    setShowQuotePage(false);
    
    if (sectionId === 'home') {
      navigate('/');
    } else {
      navigate('/' + sectionId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };`);

const mainPagesWrapper = `      {/* Main Pages Wrapper */}
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
          <Routes>
            <Route path="/" element={
              <Home 
                scrollToSection={scrollToSection} 
                projects={projects} 
                openProjectDetails={openProjectDetails} 
                heroVillaImg={heroVillaImg} 
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
          </Routes>
        )}
      </div>`;

code = code.replace(/\{\/\* Main Pages Wrapper \*\/\}(.|\n)*?(?=\{\/\* Footer \*\/)/, mainPagesWrapper + '\n\n      ');

fs.writeFileSync('src/App.jsx', code);
console.log('App.jsx modified successfully');
