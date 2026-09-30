import React, { useState, useEffect } from 'react';

export default function Projects({ projects, openProjectDetails, projectFilter, setProjectFilter }) {
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setVisibleCount(8);
  }, [projectFilter]);

  const filteredProjects = projects.filter(
    (p) => projectFilter === 'ALL' || p.category.toUpperCase() === projectFilter
  );

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <section id="projects" className="projects-section" style={{ background: '#050506', paddingTop: '3.5rem', paddingBottom: '3rem' }}>
      <div className="container" style={{ maxWidth: '1400px', paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
        
        {/* Header and Filters in one row */}
        <div className="projects-header-container">
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 400, color: '#fff', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>OUR PROJECTS</h2>
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
        <div className="projects-grid" style={{ marginBottom: '3rem' }}>
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

        {/* Load More Button */}
        {filteredProjects.length > 8 && (
          <div style={{ textAlign: 'center' }}>
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
                onClick={() => setVisibleCount(8)}
              >
                SHOW LESS
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
