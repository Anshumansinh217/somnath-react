import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import './Darshan.css';

const videos = [
  {
    id: 1,
    title: 'Somnath Temple',
    src: 'https://www.youtube.com/embed/tWysijO2OQA?autoplay=1',
    thumbnail: '../img/temple-image/somnath-mahadev-temple.jpg',
  },
  {
    id: 2,
    title: 'Bhalkha Mandir Live',
    src: 'https://www.youtube.com/embed/Tr1SJ3VM65s?si=-nYk9ESaR-i7hc0n',
    thumbnail: '../img/temple-image/pexels-thash-26920038.jpg',
  },
  {
    id: 3,
    title: 'Ram Mandir',
    src: 'https://www.youtube.com/embed/gIA-C7cX1-g?si=WnTGrZ90_ZKPluQn',
    thumbnail: '../img/temple-image/pexels-kabita-darlami-2613403-5756687.jpg',
  },
];

export default function Darshan() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div>
      <HeroSection
        title="Live Darshan"
        description="Shree Somnath Trust"
        backgroundImage="../img/temple-image/pexels-thash-26920038.jpg"
      />

      <div className="darshan-main">
        <div className="darshan-sidebar">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`darshan-button ${selectedVideo.id === video.id ? 'active' : ''}`}
              onClick={() => setSelectedVideo(video)}
            >
              <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </div>
          ))}
        </div>
        <div className="darshan-video">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo.src}
              title={selectedVideo.title}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
