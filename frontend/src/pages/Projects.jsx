import React from 'react';

export default function Projects({ projects, openProjectDetails, projectFilter, setProjectFilter }) {
  return (
    <section className="projects-section">
      <div className="container">
        <span className="breadcrumbs">Home &gt; Projects</span>
        <div className="section-header-left">
          <h2>Our Projects</h2>
        </div>

        {/* Project Filter Tabs */}
        <div className="filter-tabs" style={{justifyContent: 'flex-start', marginBottom: '3rem'}}>
          {['ALL', 'RESIDENTIAL', 'VILLAS', 'COMMERCIAL', 'INTERIOR'].map((tab) => (
            <button 
              key={tab} 
              className={`filter-tab ${projectFilter === tab ? 'active' : ''}`}
              onClick={() => setProjectFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects
            .filter(p => projectFilter === 'ALL' || p.category === projectFilter)
            .map((proj) => (
              <div key={proj.id} className="project-card" onClick={() => openProjectDetails(proj)}>
                <img src={proj.image} alt={proj.title} />
                <div className="project-overlay">
                  <span className="project-category">{proj.category}</span>
                  <h3 className="project-title">{proj.title}</h3>
                  <span className="project-location">{proj.location}</span>
                </div>
              </div>
            ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-outline" onClick={() => alert("All projects loaded.")}>Load More Projects</button>
        </div>
      </div>
    </section>
  );
}
