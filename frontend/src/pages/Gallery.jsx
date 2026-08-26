import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function Gallery({ galleryItems, galleryFilter, setGalleryFilter, setSelectedGalleryImg }) {
  return (
    <section className="gallery-section">
      <div className="container">
        <span className="breadcrumbs">Home &gt; Gallery</span>
        <div className="section-header-left">
          <h2>Gallery</h2>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="filter-tabs" style={{justifyContent: 'flex-start', marginBottom: '3rem'}}>
          {['ALL', 'ARCHITECTURE', 'CONSTRUCTION', 'INTERIORS', 'COMPLETED'].map((tab) => (
            <button 
              key={tab} 
              className={`filter-tab ${galleryFilter === tab ? 'active' : ''}`}
              onClick={() => setGalleryFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {galleryItems
            .filter(item => {
              if (galleryFilter === 'ALL') return true;
              if (galleryFilter === 'COMPLETED') return true;
              return item.type === galleryFilter;
            })
            .map((item) => (
              <div key={item.id} className="gallery-item" onClick={() => setSelectedGalleryImg(item.image)}>
                <img src={item.image} alt={`Gallery ${item.type}`} />
                <div className="gallery-item-hover">
                  <Maximize2 className="gallery-item-hover-icon" size={30} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
