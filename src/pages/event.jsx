import React from 'react';
import './Event.css'; // custom styling
import { Link } from 'react-router-dom';

const eventData = [
    {
      id: 'sermon',
      title: 'Watch Our Sermon',
      desc: 'Dive in to listen to the blissful sermons.',
      img: '../img/temple-image/pexels-thash-26920038.jpg',
    },
    {
      id: 'talk',
      title: 'Listen to our Talk',
      desc: 'Hear insightful discussions and talks.',
      img: '../img/temple-image/pexels-thash-26920038.jpg',
    },
    {
      id: 'worship',
      title: 'Engage in Worship',
      desc: 'Participate in live spirituality events.',
      img: '../img/temple-image/pexels-thash-26920038.jpg',
    },
    {
      id: 'special-events',
      title: 'Special Events',
      desc: 'Don’t miss special community spiritual events.',
      img: '../img/temple-image/pexels-thash-26920038.jpg',
    },
    {
        id: 'sermon',
        title: 'Watch Our Sermon',
        desc: 'Dive in to listen to the blissful sermons.',
        img: '../img/temple-image/pexels-thash-26920038.jpg',
      },
      {
        id: 'talk',
        title: 'Listen to our Talk',
        desc: 'Hear insightful discussions and talks.',
        img: '../img/temple-image/pexels-thash-26920038.jpg',
      },
      {
        id: 'worship',
        title: 'Engage in Worship',
        desc: 'Participate in live spirituality events.',
        img: '../img/temple-image/pexels-thash-26920038.jpg',
      },
      {
        id: 'special-events',
        title: 'Special Events',
        desc: 'Don’t miss special community spiritual events.',
        img: '../img/temple-image/pexels-thash-26920038.jpg',
      },
  ];
  

export default function Event() {
  return (
    <div className="event-cont">
    <div className="container py-5 ">
    <div className="text-center mb-5">
      <h6 className="text-muted">Watch and Listen</h6>
      <h2 className="fw-bold">The benefits of joining our Recent Event</h2>
    </div>
    <div className="row g-4">
      {eventData.map((event, index) => (
        <div className="col-md-6 col-lg-3" key={index}>
          <Link to={`/event/${event.id}`} className="text-decoration-none text-dark">
            <div className="card h-100 shadow-sm event-card">
              <img src={event.img} className="card-img-top" alt={event.title} />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="card-text text-muted">{event.desc}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  </div>
  );
}
