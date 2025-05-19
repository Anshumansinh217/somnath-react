import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HeroCarousel.css";

import slide1 from "../img/temple-image/somnath_ghibli.png";
import slide2 from "../img/temple-image/pg/somnath-temple-last-day-of-shravan-1210x642-1.jpg";
import slide3 from "../img/temple-image/pexels-kabita-darlami-2613403-5756687.jpg";
import somnathVideo from "../img/vid/somnath_vid.mp4";

import { useTranslation } from "react-i18next"; // 👈 import i18n hook

const HeroCarousel = () => {
  const { t } = useTranslation(); // 👈 initialize translation

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
      <div className="slide">
          <video autoPlay muted loop className="carousel-video">
            <source src={somnathVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-text">
            <h1>{t("carousel.visual_title")}</h1>
            <p>{t("carousel.visual_desc")}</p>
          </div>
        </div>

        <div className="slide">
          <img src={slide1} alt="Spiritual Slide 1" />
          <div className="overlay-text">
            <h1>{t("carousel.welcome_title")}</h1>
            <p>{t("carousel.welcome_desc")}</p>
          </div>
        </div>
        <div className="slide">
          <img src={slide2} alt="Spiritual Slide 2" />
          <div className="overlay-text">
            <h1>{t("carousel.jyotirlinga_title")}</h1>
            <p>{t("carousel.jyotirlinga_desc")}</p>
          </div>
        </div>
        <div className="slide">
          <img src={slide3} alt="Spiritual Slide 3" />
          <div className="overlay-text">
            <h1>{t("carousel.serenity_title")}</h1>
            <p>{t("carousel.serenity_desc")}</p>
          </div>
        </div>
        
      </Slider>
    </div>
  );
};

export default HeroCarousel;
