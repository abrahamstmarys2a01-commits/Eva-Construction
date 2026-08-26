import React from 'react';

export default function ProjectDetail({ selectedProject, setSelectedProject, activeProjectThumbIndex, setActiveProjectThumbIndex }) {
  return (
    <section className="project-detail-section">
      <div className="container">
        <span className="breadcrumbs">Home &gt; Projects &gt; {selectedProject.title}</span>
        <div className="section-header-left">
          <h2>{selectedProject.title}</h2>
        </div>
        
        <button className="btn-outline" onClick={() => setSelectedProject(null)} style={{marginBottom: '3rem'}}>
          &larr; Back to Projects
        </button>

        <div className="project-detail-grid">
          <div className="project-detail-gallery">
            <div className="project-main-image">
              <img src={selectedProject.thumbnails[activeProjectThumbIndex]} alt={selectedProject.title} />
            </div>
            <div className="project-thumbnails">
              {selectedProject.thumbnails.map((thumb, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${activeProjectThumbIndex === index ? 'active' : ''}`}
                  onClick={() => setActiveProjectThumbIndex(index)}
                >
                  <img src={thumb} alt="thumbnail" />
                </div>
              ))}
            </div>
          </div>

          <div className="project-info">
            <ul className="project-meta-list" style={{marginTop: '0'}}>
              <li className="project-meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-value" style={{textTransform: 'capitalize'}}>{selectedProject.category.toLowerCase()}</span>
              </li>
              <li className="project-meta-item">
                <span className="meta-label">Location</span>
                <span className="meta-value">{selectedProject.location}</span>
              </li>
              <li className="project-meta-item">
                <span className="meta-label">Area</span>
                <span className="meta-value">{selectedProject.area}</span>
              </li>
              <li className="project-meta-item">
                <span className="meta-label">Year</span>
                <span className="meta-value">{selectedProject.year}</span>
              </li>
              <li className="project-meta-item">
                <span className="meta-label">Status</span>
                <span className="meta-value" style={{color: '#c5a880'}}>{selectedProject.status}</span>
              </li>
            </ul>

            <p className="project-info-desc" style={{lineHeight: '1.8'}}>{selectedProject.description}</p>

            <div className="project-features" style={{marginTop: '2rem'}}>
              <h3 style={{fontSize: '1rem', color: '#fff', textTransform: 'uppercase', marginBottom: '1rem'}}>Key Features</h3>
              <ul className="project-features-list">
                {selectedProject.features.map((feature, index) => (
                  <li key={index} className="feature-item">
                    <span className="feature-dot"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
