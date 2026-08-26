import React from 'react';
import { Compass, Hammer, Clock, Shield } from 'lucide-react';

export default function Home({ navigateTo, projects, openProjectDetails, heroVillaImg }) {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="hero-tagline">EVA ATELIER GROUP</span>
              <h2 className="hero-title-main">Crafting the Future,<br />One Space at a Time.</h2>
              <p className="hero-desc">
                We design, build, and transform exceptional residential and commercial spaces with innovative architecture, quality construction, and refined interior design.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary" onClick={() => navigateTo('CONTACT')}>Get a Free Consultation</button>
                <button className="btn-outline" onClick={() => navigateTo('PROJECTS')}>View Our Projects</button>
              </div>
              
              <div className="hero-badges-row">
                <div className="hero-badge-item">
                  <Compass size={20} />
                  <span>Innovative Design</span>
                </div>
                <div className="hero-badge-item">
                  <Hammer size={20} />
                  <span>Quality Construction</span>
                </div>
                <div className="hero-badge-item">
                  <Clock size={20} />
                  <span>On-Time Delivery</span>
                </div>
                <div className="hero-badge-item">
                  <Shield size={20} />
                  <span>Transparent Process</span>
                </div>
              </div>
            </div>

            <div className="hero-image-wrap">
              <img src={heroVillaImg} alt="Luxury Modern Villa" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid & Stats Column */}
      <section className="projects-section" style={{ background: '#09090a', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div className="container">
          <div className="section-header-left">
            <h2>Featured Projects</h2>
          </div>

          <div className="featured-section-grid">
            <div className="featured-projects-grid">
              {projects.slice(0, 4).map((proj) => (
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

            <div className="home-stats-panel">
              <div className="home-stat-box">
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="home-stat-box">
                <h3>150+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="home-stat-box">
                <h3>100+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="home-stat-box">
                <h3>50+</h3>
                <p>Professionals</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn-outline" onClick={() => navigateTo('PROJECTS')}>View All Projects</button>
          </div>
        </div>
      </section>
    </>
  );
}
