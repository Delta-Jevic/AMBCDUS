import React from "react";
import { useTranslation } from "react-i18next";
import Header from "../components/Header__temp";
import Footer from "../components/Footer";
import "./TheAmbassador.css";

import ambassadorImg from "../assets/Ambassade_1.jpg";


export default function TheAmbassador() {
  const { t } = useTranslation();
  // Extract lists from translations; if undefined fall back to empty arrays
  const institutions = t("ambassador.institutions", { returnObjects: true }) || [];
  const mediationList = t("ambassador.mediationList", { returnObjects: true }) || [];
  const reportsList = t("ambassador.reportsList", { returnObjects: true }) || [];
  return (
    <>
      <Header />
      {/* HERO / BANNER */}
      <section className="amb-hero">
        <div className="amb-hero-overlay">
          <div className="amb-hero-container"></div>
        </div>
      </section>
      {/* MAIN CONTENT */}
      <main className="amb-main">
        <div className="amb-card">
          {/* LEFT: IMAGE */}
          <div className="amb-photo">
            <img src={ambassadorImg} alt={t("ambassador.photoAlt")} />
          </div>
          {/* RIGHT: INFO */}
          <div className="amb-info">
            <h2>{t("ambassador.title")}</h2>
            <div className="amb-name">
              <div className="amb-first">{t("ambassador.nameFirst")}</div>
              <div className="amb-last">{t("ambassador.nameLast")}</div>
            </div>
            <div className="amb-divider" />
            <p className="amb-role">{t("ambassador.role")}</p>
            <div className="amb-social">
              <a
                className="amb-social-btn x"
                href="https://x.com/yngandu?lang=fr"
                aria-label="X"
              >
                X
              </a>
            </div>
          </div>
        </div>
        {/* BIO TEXT */}
        <section className="amb-bio">
          <h3 className="amb-bio-title">{t("ambassador.bioTitle")}</h3>
          {/* Biography paragraphs */}
          <p>{t("ambassador.paragraphs.p1")}</p>
          <p>{t("ambassador.paragraphs.p2")}</p>
          <p>{t("ambassador.paragraphs.p3")}</p>
          <h4 className="amb-bio-subtitle">{t("ambassador.experienceTitle")}</h4>
          <p>{t("ambassador.paragraphs.p4")}</p>
          <h4 className="amb-bio-subtitle">{t("ambassador.institutionsTitle")}</h4>
          <ul className="amb-list">
            {institutions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h4 className="amb-bio-subtitle">{t("ambassador.contributionsTitle")}</h4>
          <p>{t("ambassador.contributionsParagraph")}</p>
          <h4 className="amb-bio-subtitle">{t("ambassador.mediationTitle")}</h4>
          <p>{t("ambassador.mediationParagraph")}</p>
          <ul className="amb-list">
            {mediationList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h4 className="amb-bio-subtitle">{t("ambassador.reportsTitle")}</h4>
          <p>{t("ambassador.reportsParagraph")}</p>
          <ul className="amb-list">
            {reportsList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h4 className="amb-bio-subtitle">{t("ambassador.trainingTitle")}</h4>
          <p>{t("ambassador.trainingParagraph")}</p>
          <p>{t("ambassador.trainingParagraph2")}</p>
          <h4 className="amb-bio-subtitle">{t("ambassador.languagesTitle")}</h4>
          <p>{t("ambassador.languagesParagraph")}</p>
          <h4 className="amb-bio-subtitle">{t("ambassador.responsibilitiesTitle")}</h4>
          <p>{t("ambassador.responsibilitiesParagraph")}</p>
        </section>
      </main>
      <Footer />
    </>
  );
}