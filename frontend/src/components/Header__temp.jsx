import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

import flagImg from "../assets/flag.jpg";
import logoImg from "../assets/logo.png";
import emergencyImg from "../assets/Emergency.jpg";

export default function Header() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="hdr">
      <div className="hdr__container">
        {/* LEFT */}
        <div className="hdr__left">
          <img src={flagImg} alt="Flag" className="hdr__flag" />
          <img src={logoImg} alt="Logo" className="hdr__logo" />

          {/* Hide this block on mobile via CSS */}
          <div className="hdr__titleWrap">
            <div className="hdr__title">{t("title1")}</div>
            <div className="hdr__subtitle">{t("title2")}</div>
          </div>
        </div>

        {/* RIGHT (Desktop) */}
        <div className="hdr__right hdr__right--desktop">
          <nav className="hdr__nav">
            <a href="/" className="hdr__link">{t("home")}</a>
            <a href="/services" className="hdr__link">{t("services")}</a>
            <a href="/news" className="hdr__link">{t("news")}</a>
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

        {/* RIGHT (Mobile Icons) */}
        <div className="hdr__right hdr__right--mobile">
          {/* Dropdown icon */}
          <button className="hdr__iconBtn" type="button" aria-label="Open options">
            ▾
          </button>

          {/* Search icon */}
          <button
            className="hdr__iconBtn"
            type="button"
            aria-label="Search"
            onClick={() => setMenuOpen(true)} // optional: open menu that contains search
          >
            🔍
          </button>

          {/* Language icon */}
          <button
            className="hdr__iconBtn hdr__langIcon"
            type="button"
            aria-label="Change language"
            onClick={() => i18n.changeLanguage(currentLang === "fr" ? "en" : "fr")}
          >
            A 文
          </button>

          {/* Hamburger */}
          <button
            className="hdr__iconBtn hdr__burger"
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      <div className={`hdr__mobilePanel ${menuOpen ? "open" : ""}`}>
        <div className="hdr__mobileInner">
          <div className="hdr__mobileSearch">
            <input
              type="text"
              placeholder={t("search")}
              className="hdr__searchInput hdr__searchInput--mobile"
            />
          </div>

          <nav className="hdr__mobileNav">
            <a href="/" className="hdr__mobileLink" onClick={() => setMenuOpen(false)}>{t("home")}</a>
            <a href="/services" className="hdr__mobileLink" onClick={() => setMenuOpen(false)}>{t("services")}</a>
            <a href="/news" className="hdr__mobileLink" onClick={() => setMenuOpen(false)}>{t("news")}</a>
          </nav>

          <div className="hdr__mobileLang">
            <button
              className={`hdr__langBtn ${currentLang === "fr" ? "active" : ""}`}
              onClick={() => i18n.changeLanguage("fr")}
            >
              FR
            </button>
            <button
              className={`hdr__langBtn ${currentLang === "en" ? "active" : ""}`}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </div>

      {/* Red alert bar */}
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