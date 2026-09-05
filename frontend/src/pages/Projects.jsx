import React from 'react';

export default function Projects({ projects, openProjectDetails, projectFilter, setProjectFilter }) {
  return (
    <section id="projects" className="projects-section" style={{ background: '#050506', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        
        {/* Header and Filters in one row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', borderBottom: '1px solid rgba(197, 168, 128, 0.1)', paddingBottom: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 400, color: '#fff', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>OUR PROJECTS</h2>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {['ALL', 'RESIDENTIAL', 'VILLAS', 'COMMERCIAL', 'INTERIOR'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setProjectFilter(tab)}
                style={{ 
                  background: projectFilter === tab ? 'transparent' : 'transparent',
                  color: projectFilter === tab ? 'var(--primary-gold)' : 'var(--text-secondary)',
                  border: projectFilter === tab ? '1px solid var(--primary-gold)' : '1px solid rgba(255,255,255,0.1)',
                  padding: '0.5rem 1.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
          {projects
            .filter(p => projectFilter === 'ALL' || p.category.toUpperCase() === projectFilter)
            .slice(0, 8)
            .map((proj) => (
              <div key={proj.id} onClick={() => openProjectDetails(proj)} style={{ border: '1px solid var(--border-gold)', padding: '0.25rem', background: 'rgba(197, 168, 128, 0.05)', cursor: 'pointer', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease', borderRadius: '12px', overflow: 'hidden' }}>
                <div style={{ overflow: 'hidden', height: '200px', borderRadius: '8px' }}>
                  <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                </div>
                <div style={{ padding: '1rem 0.5rem', background: '#050506', marginTop: '0.25rem', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>{proj.title} - {proj.location}</span>
                </div>
              </div>
            ))}
        </div>

        {/* Load More Button */}
        <div style={{ textAlign: 'center' }}>
          <button style={{ 
            background: 'transparent', 
            color: 'var(--primary-gold)', 
            border: '1px solid var(--primary-gold)', 
            padding: '0.8rem 2.5rem', 
            fontSize: '0.85rem', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            cursor: 'pointer',
            letterSpacing: '0.05em'
          }} onClick={() => alert("All projects loaded.")}>
            LOAD MORE PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
}
