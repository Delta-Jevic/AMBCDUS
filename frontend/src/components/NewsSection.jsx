import React from "react";
import { useTranslation } from "react-i18next";
import "./NewsSection.css";

import news1 from "../assets/Presidents 4.jpg";
import news2 from "../assets/Presidents 1.jpg";
import news3 from "../assets/Presidents 5.jpg";


export default function NewsSection() {
  const { t } = useTranslation();
  return (
    <section className="news-section">
      <div className="news-header">
        <h2>Latest news</h2>
        <button className="news-button">All news →</button>
      </div>
      <div className="news-divider" />
      <div className="news-grid">
        {/* Card 1 */}
        <a
          href="https://cd.usembassy.gov/signing-of-the-washington-accords-for-peace-and-prosperity-between-the-democratic-republic-of-the-congo-and-rwanda/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-card"
        >
          <img src={news1} alt="Washington Peace Accords" />
          <div className="news-content">
            <h3>
              PEACE IN DRC : Washington Accords for Peace and Prosperity in the
              Democratic Republic of the Congo
            </h3>
            <p></p>
          </div>
        </a>
        {/* Card 2 */}
        <a
          href="https://www.state.gov/strategic-partnership-agreement-between-the-government-of-the-united-states-of-america-and-the-government-of-the-democratic-republic-of-the-congo"
          target="_blank"
          rel="noopener noreferrer"
          className="news-card"
        >
          <img src={news2} alt="DRC US Partnership" />
          <div className="news-content">
            <h3>
              Partnership DRC - US: Strategic Partnership Agreement Between
              the Government of the United States of America and the
              Government of the Democratic Republic of the Congo
            </h3>
            <p></p>
          </div>
        </a>
        {/* Card 3 */}
        <a
          href="https://2021-2025.state.gov/briefings-foreign-press-centers/unga79/lobito-corridor-trans-africa-connectivity/"
          target="_blank"
          rel="noopener noreferrer"
          className="news-card"
        >
          <img src={news3} alt="Lobito Corridor" />
          <div className="news-content">
            <h3>
              Lobito Corridor: The project links the mineral rich regions of
              DRC and Zambia to the Port of Lobito in Angola, providing a
              strategic export route to international markets.
            </h3>
            <p></p>
          </div>
        </a>
      </div>
    </section>
  );
}