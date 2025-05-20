import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();

  const usefulLinks = [
    { label: t("footer.links.home"), href: "/" },
    { label: t("footer.links.tender"), href: "/tender" },
    { label: t("footer.links.events"), href: "/event" },
    { label: t("footer.links.contact"), href: "/ContactUs" },
    { label: t("footer.links.privacy"), href: "/privacy-policy" },
    { label: t("footer.links.pooja"), href: "/pooja" },
    { label: t("footer.links.rooms"), href: "/room-booking" },
    { label: t("footer.links.darshan"), href: "/Darshan" },
    { label: t("footer.links.prasad"), href: "/online-prasad" },
  ];

  return (
    <footer className="footer-section text-white">
      <div className="footer-overlay">
        <div className="container py-5">
          <div className="row">
            {/* About Section */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">{t("footer.about_title")}</h5>
              <p className="footer-text">{t("footer.about_text")}</p>
            </div>

            {/* Useful Links */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">{t("footer.useful_links")}</h5>
              <ul className="footer-links">
                {usefulLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-md-4 mb-4">
              <h5 className="footer-title">{t("footer.contact")}</h5>
              <p className="footer-text">{t("footer.address")}</p>
              <p className="footer-text">{t("footer.email")}</p>
              <p className="footer-text">{t("footer.phone")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
