import React from 'react';
import { Link } from 'react-router-dom';
import './NewsPage.css';

const newsData = [
  {
    id: 1,
    title: 'Somnath Mahadev Yatra Begins',
    date: 'May 1, 2025',
    summary: 'Thousands of devotees join the spiritual journey to Somnath. The temple committee has announced special arrangements for darshan.',
    image: '../img/temple-image/pexels-pixabay-161293.jpg',
  },
  {
    id: 2,
    title: 'Flag Hoisting Ceremony Update',
    date: 'April 25, 2025',
    summary: 'The next flag hoisting will take place on May 5th. Devotees can register online to offer the dhwaja.',
    image: '../img/temple-image/pexels-prabhala-raghuvir-11235-57901.jpg',
  },
  {
    id: 3,
    title: 'Temple Renovation Phase 2 Started',
    date: 'April 15, 2025',
    summary: 'Phase 2 of the Somnath temple beautification project has begun. Completion is expected by the end of June.',
    image: '../img/temple-image/eugenia-clara-_QTeGT478_8-unsplash.jpg',
  },
];

export default function NewsPage() {
  return (
    <div className="news-container">
      <h2 className="news-title">📰 News & Updates</h2>
      <div className="news-grid">
        {newsData.map(news => (
          <div className="news-card" key={news.id}>
            <img src={news.image} className="news-image" alt={news.title} />
            <div className="news-body">
              <h5 className="news-card-title">{news.title}</h5>
              <small className="news-date">{news.date}</small>
              <p className="news-summary">{news.summary}</p>
              <Link to={`/news/${news.id}`} className="news-readmore-btn">Read More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
