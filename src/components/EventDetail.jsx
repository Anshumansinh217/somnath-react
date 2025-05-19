import React from 'react';
import { useParams } from 'react-router-dom';
import './EventDetail.css';

const eventData = {
  sermon: {
    title: 'Watch Our Sermon',
    img: '../img/temple-image/pexels-byrahul-2121549.jpg',
    description: 'Join us in experiencing powerful and blissful sermons led by spiritual leaders. These sermons guide us toward inner peace, mindfulness, and devotion.',
    date: 'April 15, 2025',
    location: 'Main Temple Hall, Somnath',
  },
  talk: {
    title: 'Listen to our Talk',
    img: '../img/temple-image/pexels-byrahul-2121549.jpg',
    description: 'Engage with insightful discussions on spirituality, rituals, and life teachings from guest speakers and monks.',
    date: 'April 20, 2025',
    location: 'Conference Auditorium',
  },
  worship: {
    title: 'Engage in Worship',
    img: '../img/temple-image/pexels-byrahul-2121549.jpg',
    description: 'Participate in live chanting, prayer sessions, and community worship to strengthen your faith and soul.',
    date: 'April 25, 2025',
    location: 'Sacred Worship Grounds',
  },
  'special-events': {
    title: 'Special Events',
    img: '../img/temple-image/pexels-byrahul-2121549.jpg',
    description: 'Celebrate festive events, cultural programs, and temple fairs with us — bringing joy and unity among devotees.',
    date: 'April 30, 2025',
    location: 'Open Grounds, Somnath Complex',
  },
};

export default function EventDetail() {
  const { id } = useParams();   
  const event = eventData[id];

  if (!event) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">Event Not Found</h3>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4">
          <img src={event.img} alt={event.title} className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold mb-3">{event.title}</h2>
          <p className="text-muted">{event.description}</p>
          <div className="event-meta mt-4">
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

