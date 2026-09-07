import React, { useState, useEffect, useRef } from 'react';
import { Maximize2 } from 'lucide-react';

export default function Gallery({ galleryItems, galleryFilter, setGalleryFilter, setSelectedGalleryImg }) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="gallery-section" style={{ background: '#050506', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ borderTop: '1px solid var(--border-gold)', paddingTop: '1rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 400, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left' }}>GALLERY</h2>
        </div>

        {/* Gallery Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          {['ALL', 'ARCHITECTURE', 'CONSTRUCTION', 'INTERIORS', 'COMPLETED'].map((tab) => (
            <button 
              key={tab} 
              onClick={() => setGalleryFilter(tab)}
              style={{
                background: galleryFilter === tab ? 'var(--primary-gold)' : 'transparent',
                color: galleryFilter === tab ? '#000' : '#fff',
                border: '1px solid var(--primary-gold)',
                padding: '0.6rem 1.5rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'all 0.3s ease',
                letterSpacing: '0.05em'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 4 Column Image Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {galleryItems
            .filter(item => {
              if (galleryFilter === 'ALL') return true;
              if (galleryFilter === 'COMPLETED') return true;
              return item.type === galleryFilter;
            })
            .map((item, index) => (
              <div 
                key={`${galleryFilter}-${item.id}-${inView}`} 
                className="gallery-item-wrapper"
                onClick={() => setSelectedGalleryImg(item.image)}
                style={{ 
                  border: '1px solid var(--border-gold)', 
                  borderRadius: '6px', 
                  overflow: 'hidden', 
                  aspectRatio: '4/3',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '2px', // tiny inner gap before the image
                  background: 'rgba(197, 168, 128, 0.1)',
                  animation: inView ? 'slideInLeftGallery 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <div style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                  <img src={item.image} alt={`Gallery ${item.type}`} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                  <div className="gallery-item-hover" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0, transition: 'opacity 0.3s ease' }}>
                    <Maximize2 size={30} style={{ color: 'var(--primary-gold)' }} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
