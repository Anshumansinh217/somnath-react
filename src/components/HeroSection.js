import React from 'react';
import './HeroSection.css';

export default function HeroSection({ title, description, backgroundImage }) {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="scroll-down">↓</div>

      <div className="overlay" />
      <div className="hero-content">
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}
