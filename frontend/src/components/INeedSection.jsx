import React from "react";
import { useTranslation } from "react-i18next";
import "./INeedSection.css";


export default function INeedSection() {
  const { t } = useTranslation();
  return (
    <section className="i-need-wrapper">
      <div className="i-need-container">
        <h2>{t("need.title")}</h2>
        <div className="i-need-underline" />
        <div className="i-need-grid">
          <div className="i-need-col">
            <a href="#">{t("need.visa")}</a>
            <a href="#">{t("need.emergency")}</a>
            <a href="#">{t("need.visit")}</a>
          </div>
          <div className="i-need-col">
            <a href="#">{t("need.passport")}</a>
            <a href="#">{t("need.alerts")}</a>
            <a href="#">{t("need.invest")}</a>
          </div>
          <div className="i-need-col">
            <a href="#">{t("need.citizenAlerts")}</a>
            <a href="#">{t("need.notarize")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}