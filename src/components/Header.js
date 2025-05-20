import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from "../contexts/LanguageContext";
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPrayingHands,
  faVideo,
  faImage,
  faCalendarAlt,
  faNewspaper,
  faShoppingCart,
  faBed,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
 const { t, changeLanguage, language } = useLanguage();
 // ✅ Now includes changeLanguage + language

  return (
    <header className="custom-header sticky-top shadow-sm">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark px-3 py-2">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src="../img/somnath-logo-light.png" alt="Somnath Logo" height="40" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} className="me-1" /> {t('nav.home')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Pooja">
                  <FontAwesomeIcon icon={faPrayingHands} className="me-1" /> {t('nav.pooja_vidhi')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Darshan">
                  <FontAwesomeIcon icon={faVideo} className="me-1" /> {t('nav.live_darshan')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/GalleryPage">
                  <FontAwesomeIcon icon={faImage} className="me-1" /> {t('nav.gallery')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/event">
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-1" /> {t('nav.events')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/NewsPage">
                  <FontAwesomeIcon icon={faNewspaper} className="me-1" /> {t('nav.news')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  <FontAwesomeIcon icon={faShoppingCart} className="me-1" /> {t('nav.shop')}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BookingPage">
                  <FontAwesomeIcon icon={faBed} className="me-1" /> {t('nav.Room')}
                </Link>
              </li>
            </ul>

            {/* ✅ Language Switcher - Updated */}
            <div className="language-switcher text-end p-3">
              <button
                className="btn btn-sm btn-outline-danger mx-1"
                onClick={() => changeLanguage('en')}
                disabled={language === 'en'}
              >
                EN
              </button>
              <button
                className="btn btn-sm btn-outline-light mx-1"
                onClick={() => changeLanguage('hi')}
                disabled={language === 'hi'}
              >
                HI
              </button>
              <button
                className="btn btn-sm btn-outline-success mx-1"
                onClick={() => changeLanguage('gu')}
                disabled={language === 'gu'}
              >
                GU
              </button>
            </div>

            <div className="d-flex">
              <Link to="/ContactUs" className="btn custom-btn">
                <FontAwesomeIcon icon={faEnvelope} className="me-1" /> {t('nav.contact_us')}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
