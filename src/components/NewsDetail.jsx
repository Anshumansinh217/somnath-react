import React from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetail.css';

const newsData = [
  {
    id: 1,
    title: 'Somnath Mahadev Yatra Begins',
    date: 'May 1, 2025',
    content: `Thousands of devotees have joined the sacred yatra to Somnath Mahadev. This year, the temple has made special arrangements for pilgrims including extended darshan hours, water stations, medical camps, and more. 
    The spiritual environment is captivating as chants echo through the temple complex.`,
    image: '../img/temple-image/pexels-pixabay-161293.jpg',
  },
  {
    id: 2,
    title: 'Flag Hoisting Ceremony Update',
    date: 'April 25, 2025',
    content: `The flag hoisting ceremony will be held on May 5th. Devotees can now register online to offer the sacred dhwaja. This ancient tradition symbolizes victory and devotion. The ceremony will be streamed live for devotees unable to attend.`,
    image: '../img/temple-image/pexels-prabhala-raghuvir-11235-57901.jpg',
  },
  {
    id: 3,
    title: 'Temple Renovation Phase 2 Started',
    date: 'April 15, 2025',
    content: `Phase 2 of the Somnath Temple’s renovation has officially begun. This includes new flooring, upgraded lighting, and garden expansion around the temple grounds. Completion is expected by June end, ensuring a grander darshan experience.`,
    image: '../img/temple-image/eugenia-clara-_QTeGT478_8-unsplash.jpg',
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const newsItem = newsData.find(news => news.id === parseInt(id));

  if (!newsItem) return <div>News not found</div>;

  return (
    <div className="news-detail-container">
      <div className="news-header">
        <h1>{newsItem.title}</h1>
        <p className="news-date">🗓️ {newsItem.date}</p>
      </div>

      <img src={newsItem.image} alt={newsItem.title} className="news-image" />

      <div className="news-content">
        <p>{newsItem.content}</p>
      </div>
    </div>
  );
}
