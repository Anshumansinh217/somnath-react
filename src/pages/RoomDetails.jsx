import { useParams, Link } from 'react-router-dom';
import roomData from '../data/roomData';
import './BookingPage.css';
import './RoomDetails.css'; // You'll create this for extra styles
import { useState } from 'react';

const RoomDetails = () => {
  const { roomId } = useParams();
  const room = roomData.find(r => r.id === roomId);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!room) return <div className="booking-page"><h2>Room Not Found</h2></div>;

  return (
    <div className="booking-page">
      <div className="booking-wrapper">
        <h2>{room.title}</h2>

        {/* Image Gallery */}
        <div className="image-gallery">
          {room.images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Room ${idx + 1}`}
              className="gallery-image"
              onClick={() => setSelectedImage(src)}
            />
          ))}
        </div>

        {/* Full View Modal */}
        {selectedImage && (
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage} alt="Full View" />
              <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
            </div>
          </div>
        )}

        <p className="room-description">{room.description}</p>

        <ul className="room-features">
          {room.features.map((feature, i) => (
            <li key={i}>• {feature}</li>
          ))}
        </ul>

        <Link to="/BookingPage" className="book-now-btn back-btn">
          ← Back to Booking
        </Link>
      </div>
    </div>
  );
};

export default RoomDetails;
