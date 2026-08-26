import React from 'react';

export default function About({ aboutVillaImg }) {
  return (
    <section className="about-section">
      <div className="container">
        <span className="breadcrumbs">Home &gt; About Us</span>
        <div className="section-header-left">
          <h2>About Us</h2>
        </div>

        <div className="about-grid">
          <div className="about-content-area">
            <h2 style={{fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem', textTransform: 'uppercase'}}>Building Tomorrow, Together.</h2>
            <p className="about-desc-text">
              EVA ATELIER GROUP is a multidisciplinary firm specializing in Architecture, Construction, and Interior Design. We blend creativity, functionality, and engineering expertise to deliver spaces that inspire and elevate everyday living.
            </p>

            <div className="about-pillars-vertical">
              <div className="about-pillar-card">
                <h3>Our Vision</h3>
                <p>To be a global leader in innovative design and construction.</p>
              </div>
              <div className="about-pillar-card">
                <h3>Our Mission</h3>
                <p>To deliver exceptional spaces through creativity, quality, and commitment.</p>
              </div>
              <div className="about-pillar-card">
                <h3>Our Values</h3>
                <p>Integrity, innovation, quality, transparency, and client satisfaction.</p>
              </div>
            </div>
          </div>

          <div className="about-image-wrap">
            <img src={aboutVillaImg} alt="About Studio" />
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="about-stats-bar-horizontal">
          <div className="home-stat-box" style={{borderBottom: 'none'}}>
            <h3>15+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="home-stat-box" style={{borderBottom: 'none'}}>
            <h3>150+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="home-stat-box" style={{borderBottom: 'none'}}>
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="home-stat-box" style={{borderBottom: 'none'}}>
            <h3>50+</h3>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
