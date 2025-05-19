import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Pooja from './pages/Pooja';
import Darshan from './pages/Darshan';
import GalleryPage from './pages/GalleryPage';
import ContactUs from './pages/ContactUs';
import Shop from './pages/shop';
import Event from './pages/event';
import EventDetail from './components/EventDetail';
import ProductDetail from './pages/ProductDetail';
import NewsPage from './pages/NewsPage';
import NewsList from './pages/NewsList';
import NewsDetail from './components/NewsDetail';
import BookingPage from './pages/BookingPage';


import RoomDetails from './pages/RoomDetails';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Pooja" element={<Pooja />} />
        <Route path="/Darshan" element={<Darshan />} />
        <Route path="/GalleryPage" element={<GalleryPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/NewsPage" element={<NewsPage />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="BookingPage" element={<BookingPage />} />
        <Route path="/room/:roomId" element={<RoomDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
