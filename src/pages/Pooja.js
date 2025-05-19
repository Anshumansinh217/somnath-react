import React from 'react';
import HeroSection from '../components/HeroSection';
import './Pooja.css';
import { FaRegHandPaper, FaGift, FaPray } from 'react-icons/fa';  // Add some icons for visual enhancement

const poojaList = [
  { id: 1, name: 'General Puja', amount: 100, icon: <FaRegHandPaper /> },
  { id: 2, name: 'Shiv Mahim Path', amount: 200, icon: <FaPray /> },
  { id: 3, name: 'Rudrabhishek Vaidik Puja', amount: 300, icon: <FaGift /> },
  { id: 4, name: 'Shiv Mahim Strot', amount: 500, icon: <FaPray /> },
  { id: 5, name: 'Rudrabhishek (11 Avartan) Rudra Patha', amount: 1000, icon: <FaRegHandPaper /> },
  { id: 6, name: 'Laghu Rudrabhishek (121 Paath) by 11 Brahmin', amount: 3000, icon: <FaGift /> },
  { id: 7, name: 'Maha Rudrabhishek', amount: 15000, icon: <FaPray /> },
  { id: 8, name: 'Mahamrutyunjay Jaap (1.25 Lakh jaap)', amount: 15000, icon: <FaRegHandPaper /> },
  { id: 9, name: 'Bhanga Shringar', amount: 1100, icon: <FaGift /> },
];

export default function Pooja() {
  const handleDonateClick = (pooja) => {
    alert(`Proceeding to donate for: ${pooja.name} (Rs. ${pooja.amount})`);
    // Redirect or open donation modal here
  };

  return (
    <div className="pooja-page">
      <HeroSection
        title="POOJA VIDHI"
        description={`The following poojavidhis are performed at Somnath Temple. Kindly contact poojavidhi counter at the temple.<br /><i>General or specific donation or Ornament/Vastra bhet is also accepted.</i>`}
        backgroundImage="../img/temple-image/pexels-byrahul-2121549.jpg"
      />

      <div className="pooja-container">
        <div className="pooja-cards">
          {poojaList.map((pooja, index) => (
            <div
              key={pooja.id}
              className={`pooja-card ${index % 2 === 0 ? 'even' : 'odd'}`}
              onClick={() => handleDonateClick(pooja)}
            >
              <div className="pooja-card-icon">
                {pooja.icon}
              </div>
              <div className="pooja-card-content">
                <h3>{pooja.name}</h3>
                <p>₹{pooja.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
