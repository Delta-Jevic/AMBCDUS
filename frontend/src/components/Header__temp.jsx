import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

import flagImg from "../assets/flag.jpg";
import logoImg from "../assets/logo.png";
import emergencyImg from "../assets/Emergency.jpg";


export default function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <header className="hdr">
      {/* Main header content */}
      <div className="hdr__container">
        {/* LEFT: Flag + Logo + Title */}
        <div className="hdr__left">
          <img src={flagImg} alt="Flag" className="hdr__flag" />
          <img src={logoImg} alt="Logo" className="hdr__logo" />
          <div className="hdr__titleWrap">
            <div className="hdr__title">{t("title1")}</div>
            <div className="hdr__subtitle">{t("title2")}</div>
          </div>
        </div>
        {/* RIGHT: Nav + Search + Language */}
        <div className="hdr__right">
          <nav className="hdr__nav">
            <a href="/" className="hdr__link">
              {t("home")}
            </a>
            <a href="/services" className="hdr__link">
              {t("services")}
            </a>
            <a href="/news" className="hdr__link">
              {t("news")}
            </a>
          </nav>
          <div className="hdr__search">
            <input
              type="text"
              placeholder={t("search")}
              className="hdr__searchInput"
            />
          </div>
          <div className="hdr__langSwitch">
            <button
              className={`hdr__langBtn ${currentLang === "fr" ? "active" : ""}`}
              onClick={() => i18n.changeLanguage("fr")}
            >
              FR
            </button>
            <span className="hdr__divider">|</span>
            <button
              className={`hdr__langBtn ${currentLang === "en" ? "active" : ""}`}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>
      {/* Alert bar beneath the header */}
      <div className="hdr__alertBar">
        <a
          href={emergencyImg}
          target="_blank"
          rel="noopener noreferrer"
          className="hdr__alertLink"
        >
          {t("securityAlert")}
        </a>
      </div>
    </header>
  );
}