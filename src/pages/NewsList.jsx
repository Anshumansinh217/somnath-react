import React from 'react';
import { Link } from 'react-router-dom';
import newsList from './newsData';
// import './NewsList.css';

export default function NewsList() {
  return (
    <div className="news-container">
      <h1>Latest News & Announcements</h1>
      {newsList.map(news => (
        <div key={news.id} className="news-card">
          <h3>{news.title}</h3>
          <p>{news.summary}</p>
          <Link to={`/news/${news.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
}
