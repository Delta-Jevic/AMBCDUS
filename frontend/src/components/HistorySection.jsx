import React from "react";
import { useTranslation } from "react-i18next";
import "./HistorySection.css";


import history1 from "../assets/History 1.jpg";
import history2 from "../assets/History 2.jpg";
import history3 from "../assets/History 3.jpg";


export default function HistorySection() {
  const { t } = useTranslation();
  const items = [
    {
      title: t("history.items.0.title"),
      dateText: t("history.items.0.date"),
      image: history1,
      excerpt: t("history.items.0.excerpt"),
      link: "https://edition.cnn.com/2024/10/30/sport/rumble-in-the-jungle-50-years-on-spt-intl",
    },
    {
      title: t("history.items.1.title"),
      dateText: t("history.items.1.date"),
      image: history2,
      excerpt: t("history.items.1.excerpt"),
      link: "https://64parishes.org/entry/congo-square",
    },
    {
      title: t("history.items.2.title"),
      dateText: t("history.items.2.date"),
      image: history3,
      excerpt: t("history.items.2.excerpt"),
      link: "https://history.state.gov/countries/congo-democratic-republic",
    },
  ];
  return (
    <section className="history-section">
      <div className="history-container">
        <div className="history-header">
          <h2 className="history-title">{t("history.title")}</h2>
          <a
            className="history-btn"
            href="https://cd.usembassy.gov/policy-history/"
            target="_blank"
            rel="noreferrer"
          >
            {t("history.fullHistoryButton")} →
          </a>
        </div>
        <div className="history-divider" />
        <div className="history-grid">
          {items.map((item, idx) => (
            <article className="history-card" key={idx}>
              <div className="history-media">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="history-content">
                <h3 className="history-card-title">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </h3>
                <div className="history-meta">{item.dateText}</div>
                <p className="history-excerpt">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}