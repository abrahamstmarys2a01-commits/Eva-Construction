import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';

export default function ProjectDetail({ selectedProject, setSelectedProject, closeProjectDetails, activeProjectThumbIndex, setActiveProjectThumbIndex }) {
  return (
    <section className="project-detail-section" style={{ background: '#000000', minHeight: '100vh', paddingTop: '3rem', paddingBottom: '5rem', position: 'relative' }}>
      
      {/* Back Arrow Button */}
      <button 
        onClick={closeProjectDetails} 
        style={{ 
          position: 'absolute', 
          top: '2rem', 
          left: '2rem', 
          background: 'transparent', 
          border: '1px solid var(--border-gold)', 
          color: 'var(--primary-gold)', 
          padding: '0.75rem', 
          borderRadius: '50%', 
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary-gold)'; e.currentTarget.style.color = '#000'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary-gold)'; }}
        title="Back to Projects"
      >
        <ArrowLeft size={24} />
      </button>

      <div className="container" style={{ maxWidth: '1100px' }}>
        
        
        {/* 2 Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          
          {/* Left Column: Images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ border: '1px solid rgba(197, 168, 128, 0.5)', height: '550px', borderRadius: '12px', overflow: 'hidden' }}>
              <img src={selectedProject.thumbnails[activeProjectThumbIndex]} alt={selectedProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {selectedProject.thumbnails.map((thumb, index) => (
                <div 
                  key={index} 
                  onClick={() => setActiveProjectThumbIndex(index)}
                  style={{ 
                    border: '1px solid rgba(197, 168, 128, 0.5)', 
                    height: '100px',
                    cursor: 'pointer',
                    opacity: activeProjectThumbIndex === index ? 1 : 0.5,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '8px',
                    overflow: 'hidden'
                  }}
                >
                  <img src={thumb} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: '#fff', marginBottom: '2rem' }}>{selectedProject.title}</h2>
            
            {/* Meta Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '120px 20px 1fr', rowGap: '1rem', marginBottom: '2rem' }}>
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
