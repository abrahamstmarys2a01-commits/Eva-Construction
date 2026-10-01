import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';

export default function ProjectDetail({ selectedProject, setSelectedProject, closeProjectDetails, activeProjectThumbIndex, setActiveProjectThumbIndex }) {
  return (
    <section className="project-detail-section" style={{ background: '#000000', minHeight: '100vh', paddingTop: '2rem', paddingBottom: '5rem', position: 'relative' }}>
      
      <div className="container" style={{ maxWidth: '1100px', paddingLeft: 'clamp(1rem, 4vw, 2.5rem)', paddingRight: 'clamp(1rem, 4vw, 2.5rem)' }}>
        
        {/* Back Button Above the Image */}
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={closeProjectDetails} 
            style={{ 
              background: 'rgba(212, 175, 55, 0.12)', 
              border: '1px solid var(--border-gold)', 
              color: 'var(--primary-gold)', 
              padding: '0.6rem 1.25rem', 
              borderRadius: '30px', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary-gold)'; e.currentTarget.style.color = '#000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(212, 175, 55, 0.12)'; e.currentTarget.style.color = 'var(--primary-gold)'; }}
            title="Back to Projects"
          >
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </button>
        </div>

        {/* 2 Column Layout */}
        <div className="project-detail-grid">
          
          {/* Left Column: Images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ 
              border: '1px solid rgba(197, 168, 128, 0.5)', 
              height: 'clamp(280px, 45vw, 550px)', 
              borderRadius: '12px', 
              overflow: 'hidden',
              position: 'relative',
              background: '#090b0e'
            }}>
              <img 
                src={
                  activeProjectThumbIndex !== null && selectedProject.thumbnails && selectedProject.thumbnails[activeProjectThumbIndex]
                    ? selectedProject.thumbnails[activeProjectThumbIndex]
                    : selectedProject.image
                } 
                alt={selectedProject.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease' }} 
              />
              
              {/* Badge indicating Exterior / Interior */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(5, 5, 6, 0.75)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-gold)',
                color: 'var(--primary-gold)',
                padding: '0.35rem 0.85rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {activeProjectThumbIndex === null ? 'Exterior View' : `Interior View 0${activeProjectThumbIndex + 1}`}
              </div>
            </div>
            
            {/* 4 Small Interior Images */}
            {selectedProject.thumbnails && selectedProject.thumbnails.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                {selectedProject.thumbnails.slice(0, 4).map((thumb, index) => (
                  <div 
                    key={index} 
                    onClick={() => {
                      if (activeProjectThumbIndex === index) {
                        setActiveProjectThumbIndex(null); // Click active thumbnail again to return to exterior view
                      } else {
                        setActiveProjectThumbIndex(index);
                      }
                    }}
                    style={{ 
                      border: activeProjectThumbIndex === index ? '2px solid var(--primary-gold)' : '1px solid rgba(197, 168, 128, 0.4)', 
                      height: 'clamp(70px, 12vw, 100px)',
                      cursor: 'pointer',
                      opacity: activeProjectThumbIndex === index ? 1 : 0.6,
                      transform: activeProjectThumbIndex === index ? 'scale(1.02)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: activeProjectThumbIndex === index ? '0 0 12px rgba(212, 175, 55, 0.35)' : 'none'
                    }}
                    title={`Click to view Interior ${index + 1}`}
                  >
                    <img src={thumb} alt={`interior-view-${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#fff', marginBottom: '2rem' }}>{selectedProject.title}</h2>
            
            {/* Meta Info Grid */}
            <div className="project-specs-grid" style={{ marginBottom: '2rem' }}>
              <div style={{ color: 'var(--primary-gold)', fontWeight: 600 }}>Category</div>
              <div style={{ color: '#fff' }}>:</div>
              <div style={{ color: '#fff' }}>{selectedProject.category === 'VILLAS' ? 'Residential Villa' : selectedProject.category}</div>

              <div style={{ color: 'var(--primary-gold)', fontWeight: 600 }}>Location</div>
              <div style={{ color: '#fff' }}>:</div>
              <div style={{ color: '#fff' }}>{selectedProject.location}</div>

              <div style={{ color: 'var(--primary-gold)', fontWeight: 600 }}>Area</div>
              <div style={{ color: '#fff' }}>:</div>
              <div style={{ color: '#fff' }}>{selectedProject.area}</div>

              <div style={{ color: 'var(--primary-gold)', fontWeight: 600 }}>Year</div>
              <div style={{ color: '#fff' }}>:</div>
              <div style={{ color: '#fff' }}>{selectedProject.year}</div>

              <div style={{ color: 'var(--primary-gold)', fontWeight: 600 }}>Status</div>
              <div style={{ color: '#fff' }}>:</div>
              <div style={{ color: '#fff' }}>{selectedProject.status}</div>
            </div>

            <p style={{ color: '#fff', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              {selectedProject.description}
            </p>

            <h3 style={{ color: 'var(--primary-gold)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Key Features</h3>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedProject.features.map((feature, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#fff', fontSize: '0.95rem' }}>
                  <Check size={18} style={{ color: 'var(--primary-gold)' }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
