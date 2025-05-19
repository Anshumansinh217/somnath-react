import React from "react";
import "./Home.css";
import HeroCarousel from "../components/HeroCarousel";
// import templeImage from '../img/temple-image/Somnath-Temple-1.jpg';
import two from "../img/temple-image/2.png";
import three from "../img/temple-image/Somnath_301023.jpg";
import four from "../img/temple-image/somnath_temple_bg.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPrayingHands, FaHotel, FaVideo, FaGift } from 'react-icons/fa';
// import i18n from '../i18n';

const Home = () => {
  const { t } = useTranslation();
  
  return (
    <main className="home-container">
      {/* Language Switcher */}
      {/* <div className="language-switcher text-end p-3">
        <button className="btn btn-sm btn-outline-dark mx-1" onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button className="btn btn-sm btn-outline-dark mx-1" onClick={() => i18n.changeLanguage('hi')}>HI</button>
        <button className="btn btn-sm btn-outline-dark mx-1" onClick={() => i18n.changeLanguage('gu')}>GU</button>
      </div> */}

      <section className="hero">
        <HeroCarousel />
      </section>

      {/* ----------------- */}

      <div>
  {/* Top Menu */}
  <div className="somnath-top-menu-cards">
    <Link to="/Pooja" className="somnath-card">
      <FaPrayingHands className="somnath-icon" /> <br />
      {t("onlinePooja")} 
    </Link>
    <Link to="/BookingPage" className="somnath-card">
      <FaHotel className="somnath-icon" /> <br />
      {t("roomBooking")} <br /> {t("Booking")}
    </Link>
    <Link to="/Darshan" className="somnath-card">
      <FaVideo className="somnath-icon" /> <br />
      {t("live")} <br /> {t("Darshan")}
    </Link>
    <Link to="/shop" className="somnath-card">
      <FaGift className="somnath-icon" /> <br />
      {t("online")} <br /> {t("Prashad")}
    </Link>
  </div>

  {/* News Banner */}
  <div className="news-banner-wrapper d-flex align-items-center">
    <span className="news-label text-danger fw-bold me-2">{t("news_label")}</span>
    <div className="scrolling-container">
      <div className="scrolling-text fw-bold">
        {t("news_text")}
      </div>
    </div>
  </div>

  {/* Main Content */}
  <div className="container below-news-banner mt-4">
    <div className="row">
      {/* Left Column */}
      <div className="col-md-8">
        <div className="jay-somnath d-flex align-items-center mb-3">
          <div className="om-icon me-3">ॐ</div>
          <h2 className="section-title">{t("titles_jaySomnath")}</h2>
        </div>

        {/* Welcome Section */}
        <div className="welcome-card d-flex mb-4">
          <img
            src={two}
            alt="Somnath Temple"
            className="img-style me-3"
          />
          <div>
            <h5 className="card-title">{t("welcome_title")}</h5>
            <p className="card-text">
              {t("welcome_text")}
            </p>
            <a href="/" className="text-link">
              {t("readMore")}
            </a>
          </div>
        </div>

        {/* Temple Info Section */}
        <div className="welcome-card d-flex">
          <img
            src={three}
            alt="Temple Inside"
            className="img-style me-3"
          />
          <div>
            <h5 className="card-title">{t("temple_title")}</h5>
            <p className="card-text">
              {t("temple_text")}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="col-md-4">
        <div className="nav-card">
          <h5 className="text-center nav-title">{t("quickNav_title")}</h5>
          <ul className="custom-nav-list mt-3">
            <li>ॐ {t("quickNav_jaySomnath")}</li>
            <li>ॐ {t("quickNav_somnathDarshan")}</li>
            <li>ॐ {t("quickNav_liveDarshan")}</li>
            <li>ॐ {t("quickNav_nearestPlaces")}</li>
            <li>ॐ {t("quickNav_pilgrimFacilities")}</li>
            <li>ॐ {t("quickNav_festivals")}</li>
            <li>ॐ {t("quickNav_socialActivity")}</li>
            <li>ॐ {t("quickNav_heritageWalk")}</li>
            <li>ॐ {t("quickNav_templeWalk")}</li>
            <li>ॐ {t("quickNav_trustee")}</li>
            <li>ॐ {t("quickNav_ramMandir")}</li>
            <li>ॐ {t("quickNav_faqs")}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


      {/* ------------ */}

      <section className="services-enhanced py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark display-6">
            {t("our_services")}
          </h2>
          <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {[
              {
                img: "pooja.png",
                title: t("pooja_booking"),
                desc: t("pooja_booking_desc"),
              },
              {
                img: "agni-pooja.png",
                title: t("live_darshan"),
                desc: t("live_darshan_desc"),
              },
              {
                img: "kalasha.png",
                title: t("temple_events"),
                desc: t("temple_events_desc"),
              },
              {
                img: "laddu.png",
                title: t("prasad"),
                desc: t("prasad_desc"),
              },
              {
                img: "pray.png",
                title: t("astrology"),
                desc: t("astrology_desc"),
              },
              {
                img: "temple (1).png",
                title: t("volunteer"),
                desc: t("volunteer_desc"),
              },
            ].map((service, index) => (
              <div className="col" key={index}>
                <div className="service-card-enhanced h-100 text-center">
                  <div className="icon-wrapper mb-3">
                    <img
                      src={`../img/icon/${service.img}`}
                      alt={service.title}
                      className="service-icon"
                    />
                  </div>
                  <h3 className="fs-5 fw-bold mb-2">{service.title}</h3>
                  <p className="text-muted small mb-3">{service.desc}</p>
                  <a href="/" className="read-more-link">
                    {t("read_more")} <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prayer-section text-center py-5 position-relative">
        <div className="container">
          <h2 className="fw-bold display-5 mb-3">{t("we_are_prayer")}</h2>
          <p className="lead fw-semibold text-danger">{t("we_are_hindu")}</p>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            {t("prayer_section_desc")}
          </p>
          <button className="btn btn-warning px-4 mt-4 fw-bold text-dark shadow">
            {t("read_more")}
          </button>
        </div>

        <div className="floating-images d-flex justify-content-center gap-4 mt-5">
          <img src={four} className="floating-img" alt="img1" />
          <img src={three} className="floating-img" alt="img2" />
          <img src={two} className="floating-img" alt="img3" />
        </div>
      </section>

      <section className="text-center py-5 mission-section">
        <div className="container">
          <h2 className="fw-bold display-5 mb-2 title-text">
            {t("mission_title")}
          </h2>
          <h4 className="fw-bold mb-3 highlight-text">
            {t("celebrate_with_us")}
          </h4>
          <p className="text-muted mx-auto description-text">
            {t("mission_desc")}
          </p>
          <button className="btn read-more-btn mt-4 mb-5 px-5 py-2 fw-bold">
            {t("read_more")}
          </button>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {[
              {
                title: t("sermon"),
                desc: t("sermon_desc"),
                img: "../img/temple-image/pexels-rohit-sharma-1230131-20717199.jpg",
              },
              {
                title: t("festival"),
                desc: t("festival_desc"),
                img: "../img/temple-image/yan2.jpg",
              },
              {
                title: t("volunteer_card"),
                desc: t("volunteer_card_desc"),
                img: "../img/temple-image/yand1.jpg",
              },
              {
                title: t("daily_prayers"),
                desc: t("daily_prayers_desc"),
                img: "../img/temple-image/yand2.jpg",
              },
            ].map((card, index) => (
              <div className="col" key={index}>
                <div
                  className="card card-cover custom-card text-white rounded-4 shadow-lg card-hover"
                  style={{
                    backgroundImage: `url(${card.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="d-flex flex-column h-100 p-4 pb-3 text-shadow-1 card-overlay">
                    <h4 className="mt-auto fw-bold">{card.title}</h4>
                    <p className="small">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



            {/* ------------- */}

            <div className="home-wrapper-gradient">
      <div className="home-content-wrapper">

        {/* 📅 Events & Darshan Block */}
        <section className="event-darshan-section mb-5 p-4 rounded shadow">
          <h2 className="section-title mb-4">{t("eventsAndDarshan")}</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className="event-box">
                <div className="event-date">
                  <div className="event-day">12</div>
                  <div className="event-month">May</div>
                </div>
                <div className="event-info">
                  <h5 className="event-title">{t("specialPoojaEvent")}</h5>
                  <p className="event-desc">{t("specialPoojaDesc")}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <h5 className="live-darshan-title">{t("liveDarshan")}</h5>
              <img
                src="../img/temple-image/somnath-temple-last-day-of-shravan-1210x642-1.jpg"
                alt={t("liveDarshan")}
                className="img-fluid rounded darshan-image"
              />
            </div>
          </div>
        </section>

        {/* 📸 Gallery Promotion Section */}
        <section className="gallery-promo text-center p-5 rounded shadow mb-5">
          <h2 className="mb-3">{t("galleryHeading")}</h2>
          <Link to="/GalleryPage" className="btn gallery-btn">
            {t("goToGallery")}
          </Link>
        </section>

        {/* 🗺️ Visiting Places */}
        <section className="nearby-places p-4 rounded shadow">
          <h2 className="section-title text-center mb-4">{t("nearbyHeading")}</h2>
          <div className="row">
            {[ 
              { name: t("bhalkaTirth"), image: "../img/temple-image/pexels-byrahul-2121549.jpg" },
              { name: t("dehotsargTirth"), image: "../img/temple-image/pexels-byrahul-2121549.jpg" },
              { name: t("prachiTirth"), image: "../img/temple-image/pexels-navneet-shanu-202773-672630.jpg" },
            ].map((place, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card place-card h-100">
                  <img src={place.image} className="card-img-top" alt={place.name} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{place.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>


        {/* ---------------------- */}



      <section className="temple-hero-section">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <div className="hero-image-wrapper">
              <img
                src="../img/temple-image/somnath-mahadev-temple.jpg"
                className="d-block mx-lg-auto img-fluid rounded-4 hero-image"
                alt="Divine Temple"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>

          <div className="col-lg-6 text-white">
            <h1 className="display-5 fw-bold lh-1 mb-3 fade-in">
              {t("experience_serenity")}
            </h1>
            <p className="lead fade-in delay-1">{t("temple_intro")}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start fade-in delay-2">
              <button
                type="button"
                className="btn btn-warning btn-lg px-4 fw-semibold text-white shadow rounded-pill"
              >
                {t("contact_us")}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
