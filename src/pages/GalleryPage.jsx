import React, { useState } from 'react';
import { useEffect } from 'react'; // ensure this is at the top
import './GalleryPage.css';
import HeroSection from '../components/HeroSection';


const galleryImages = [
  { id: 1, src: '../img/temple-image/pexels-byrahul-2121549.jpg', alt: 'Gallery Image 1' },
  { id: 2, src: '../img/temple-image/pexels-kabita-darlami-2613403-5756687.jpg', alt: 'Gallery Image 2' },
  { id: 3, src: '../img/temple-image/pexels-navneet-shanu-202773-672630.jpg', alt: 'Gallery Image 3' },
  { id: 4, src: '../img/temple-image/pexels-prabhala-raghuvir-11235-57901.jpg', alt: 'Gallery Image 4' },
  { id: 5, src: '../img/temple-image/pexels-rohit-sharma-1230131-20717199.jpg', alt: 'Gallery Image 5' },
  { id: 6, src: '../img/temple-image/varun-pyasi-AZ4y6Bc3qeI-unsplash.jpg', alt: 'Gallery Image 6' },
  { id: 7, src: '../img/temple-image/pexels-pixabay-161293.jpg', alt: 'Gallery Image 7' },
  { id: 8, src: '../img/temple-image/varun-pyasi-AZ4y6Bc3qeI-unsplash.jpg', alt: 'Gallery Image 8' },
];

const GalleryPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };
  

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === 'Escape') handleClose();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <div>
      <HeroSection
        title="Gallery"
        description="Our Prayer Gallery"
        backgroundImage="../img/temple-image/pexels-byrahul-2121549.jpg"
      />

      <div className="gallery-main">
        <h2 className="gallery-title">📸 Temple Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={img.id} className="gallery-item" onClick={() => setSelectedIndex(index)}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
  <div className="lightbox-overlay">
    <button className="close-btn" onClick={handleClose}>✖</button> {/* Top-right corner button */}

    <div className="lightbox-content">
      <img src={galleryImages[selectedIndex].src} alt="Zoomed" />
      <p className="lightbox-caption">{galleryImages[selectedIndex].alt}</p>

      <div className="lightbox-controls">
        <button className="nav-btn prev-btn" onClick={handlePrev}>⟨</button>
        <button className="nav-btn next-btn" onClick={handleNext}>⟩</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default GalleryPage;
