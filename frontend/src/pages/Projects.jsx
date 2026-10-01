import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Projects({ 
  projects, 
  openProjectDetails, 
  projectFilter, 
  setProjectFilter, 
  isHomePage = false, 
  scrollToSection 
}) {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(isHomePage ? 8 : 12);

  useEffect(() => {
    setVisibleCount(isHomePage ? 8 : 12);
  }, [projectFilter, isHomePage]);

  const filteredProjects = projects.filter(
    (p) => projectFilter === 'ALL' || p.category.toUpperCase() === projectFilter
  );

  const displayedProjects = isHomePage 
    ? filteredProjects.slice(0, 8) 
    : filteredProjects.slice(0, visibleCount);

  const handleNavigateToProjects = () => {
    if (scrollToSection) {
      scrollToSection('projects');
    } else {
      navigate('/projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="projects-section" style={{ background: '#050506', paddingTop: isHomePage ? '3.5rem' : '4.5rem', paddingBottom: '4rem' }}>
      <div className="container" style={{ maxWidth: '1400px', paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
        
        {/* Page Header for standalone /projects page */}
        {!isHomePage && (
          <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 1rem', background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-gold)', borderRadius: '20px', marginBottom: '1rem' }}>
              <Sparkles size={16} style={{ color: 'var(--primary-gold)' }} />
              <span style={{ color: 'var(--primary-gold)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>PORTFOLIO & LANDMARKS</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>
              ALL PROJECTS
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
              Explore our complete architectural, villa, residential, interior, and commercial portfolio executed across South India.
            </p>
          </div>
        )}

        {/* Header and Filters in one row */}
        <div className="projects-header-container" style={{ marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: isHomePage ? '2.5rem' : '1.8rem', fontWeight: 400, color: '#fff', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              {isHomePage ? 'OUR PROJECTS' : 'FILTER BY CATEGORY'}
            </h2>
          </div>
          
          <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
            {['ALL', 'RESIDENTIAL', 'VILLAS', 'COMMERCIAL', 'INTERIOR'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setProjectFilter(tab)}
                style={{ 
                  background: projectFilter === tab ? 'var(--primary-gold)' : 'transparent',
                  color: projectFilter === tab ? '#000' : 'var(--text-secondary)',
                  border: projectFilter === tab ? '1px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.15)',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Column Grid */}
        <div className="projects-grid" style={{ marginBottom: isHomePage ? '2.5rem' : '3.5rem' }}>
          {displayedProjects.map((proj) => (
            <div 
              key={proj.id} 
              onClick={() => openProjectDetails(proj)} 
              className="project-card-interactive"
              style={{ 
                border: '1px solid var(--border-gold)', 
                padding: '0.25rem', 
                background: 'rgba(197, 168, 128, 0.05)', 
                cursor: 'pointer', 
                display: 'flex', 
                flexDirection: 'column', 
                transition: 'all 0.3s ease', 
                borderRadius: '12px', 
                overflow: 'hidden' 
              }}
            >
              <div style={{ overflow: 'hidden', height: '220px', borderRadius: '8px', position: 'relative' }}>
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'rgba(5, 5, 6, 0.85)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--primary-gold)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  {proj.category}
                </div>
              </div>
              <div style={{ padding: '1rem 0.75rem', background: '#050506', marginTop: '0.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0.5rem' }}>
                <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>{proj.title}</span>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.78rem' }}>{proj.location}</span>
                  <span style={{ color: 'var(--primary-gold)', fontSize: '0.78rem', fontWeight: 600 }}>View Details &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* HOME PAGE: More Projects Button -> Navigates to full Projects page */}
        {isHomePage ? (
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <button 
              onClick={handleNavigateToProjects}
              style={{ 
                background: 'var(--primary-gold)', 
                color: '#000', 
                border: 'none', 
                padding: '0.95rem 2.8rem', 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                cursor: 'pointer',
                letterSpacing: '0.08em',
                borderRadius: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.25)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 25px rgba(212, 175, 55, 0.4)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.25)'; }}
            >
              <span>MORE PROJECTS ({projects.length})</span>
              <ArrowRight size={18} />
            </button>
          </div>
        ) : (
          /* DEDICATED PROJECTS PAGE: Load More Pagination */
          filteredProjects.length > 12 && (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              {visibleCount < filteredProjects.length ? (
                <button 
                  style={{ 
                    background: 'transparent', 
                    color: 'var(--primary-gold)', 
                    border: '1px solid var(--primary-gold)', 
                    padding: '0.8rem 2.5rem', 
                    fontSize: '0.85rem', 
                    fontWeight: 600, 
                    textTransform: 'uppercase', 
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    borderRadius: '4px',
                    transition: 'all 0.3s ease'
                  }} 
                  onClick={() => setVisibleCount(prev => prev + 4)}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary-gold)'; e.currentTarget.style.color = '#000'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary-gold)'; }}
                >
                  LOAD MORE PROJECTS ({filteredProjects.length - visibleCount} MORE)
                </button>
              ) : (
                <button 
                  style={{ 
                    background: 'transparent', 
                    color: 'var(--text-secondary)', 
                    border: '1px solid rgba(255,255,255,0.2)', 
                    padding: '0.6rem 2rem', 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    textTransform: 'uppercase', 
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    borderRadius: '4px'
                  }} 
                  onClick={() => setVisibleCount(12)}
                >
                  SHOW LESS
                </button>
              )}
            </div>
          )
        )}

      </div>
    </section>
  );
}
