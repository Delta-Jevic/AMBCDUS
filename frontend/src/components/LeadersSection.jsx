import React from "react";
import { useTranslation } from "react-i18next";
import "./LeadersSection.css";

import presImg from "../assets/Presisents 0.jpg";
import primeMinImg from "../assets/premiere-ministre.jpg";
import foreignMinImg from "../assets/Min-Therese.jpg";
import ambImg from "../assets/Ambassader 4.jpg";


export default function LeadersSection({ ambassadorLink }) {
  const { t } = useTranslation();
  // Static URLs for the president, prime minister and foreign affairs minister
  const presidentLink = "https://presidence.cd/president/le-president";
  const primeMinLink =
    "https://www.primature.gouv.cd/biographie-de-la-premiere-ministre/";
  const foreignMinLink = "https://diplomatie.gouv.cd/le-cabinet-du-ministre/";
  // Use the provided ambassadorLink, or null if not provided
  const ambassadorUrl = ambassadorLink || null;
  return (
    <section className="leaders-section">
      {/* President card */}
      <a
        href={presidentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="leader-box leader-box--single"
      >
        <img src={presImg} alt="Portrait" className="leader-box__img" />
        <div className="leader-box__content">
          <h3 className="leader-box__title">
            S.E.M. Félix Antoine TSHISEKEDI TSHILOMBO
          </h3>
          <p className="leader-box__subtitle">
            {t("leaders.presidentSubtitle")}
          </p>
        </div>
      </a>
      {/* Middle row: Prime Minister and Foreign Affairs Minister */}
      <div className="leaders-row">
        <a
          href={primeMinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="leader-box leader-box--double"
        >
          <img src={primeMinImg} alt="Portrait" className="leader-box__img" />
          <div className="leader-box__content">
            <h3 className="leader-box__title">S.E. Judith SUMINWA TULUKA</h3>
            <p className="leader-box__subtitle">
              {t("leaders.primeSubtitle")}
            </p>
          </div>
        </a>
        <a
          href={foreignMinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="leader-box leader-box--double"
        >
          <img src={foreignMinImg} alt="Portrait" className="leader-box__img" />
          <div className="leader-box__content">
            <h3 className="leader-box__title">S.E. Thérèse KAYIKWAMBA WAGNER</h3>
            <p className="leader-box__subtitle">
              {t("leaders.foreignSubtitle")}
            </p>
          </div>
        </a>
      </div>
      {/* Ambassador card */}
      {ambassadorUrl ? (
        <a
          href={ambassadorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="leader-box leader-box--single"
        >
          <img src={ambImg} alt="Portrait" className="leader-box__img" />
          <div className="leader-box__content">
            <h3 className="leader-box__title">S.E. Yvette Kapinga Ngandu</h3>
            <p className="leader-box__subtitle">
              {t("leaders.ambassadorSubtitle")}
            </p>
          </div>
        </a>
      ) : (
        <div className="leader-box leader-box--single leader-box--disabled">
          <img src={ambImg} alt="Portrait" className="leader-box__img" />
          <div className="leader-box__content">
            <h3 className="leader-box__title">S.E. Yvette Kapinga Ngandu</h3>
            <p className="leader-box__subtitle">
              {t("leaders.ambassadorSubtitle")}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}