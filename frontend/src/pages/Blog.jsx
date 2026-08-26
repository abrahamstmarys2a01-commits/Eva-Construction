import React from 'react';

export default function Blog({ blogPosts, setSelectedBlog }) {
  return (
    <section className="blog-section">
      <div className="container">
        <span className="breadcrumbs">Home &gt; Blog</span>
        <div className="section-header" style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h2>Our Blog</h2>
          <span className="subtitle" style={{textTransform: 'none', letterSpacing: 'normal', color: 'var(--text-secondary)', marginTop: '1rem', display: 'block'}}>
            Insights, ideas, and inspiration for your dream space.
          </span>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card luxury-card" style={{padding: '0'}}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content" style={{padding: '2rem'}}>
                <span className="blog-date">{post.date}</span>
                <div className="blog-title">
                  <h3>{post.title}</h3>
                </div>
                <p className="blog-desc">{post.desc}</p>
                <span className="blog-read-more" onClick={() => setSelectedBlog(post)}>Read More &rarr;</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-outline" onClick={() => alert("All articles loaded.")}>View All Articles</button>
        </div>
      </div>
    </section>
  );
}
