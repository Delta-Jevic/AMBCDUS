import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";


export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      {/* 🇨🇩 Flag Line */}
      <div className="footer-flag-line"></div>

      <footer className="footer-blue">
        <div className="footer-box">
          <div className="footer-content">
            {/* LEFT SIDE */}
            <div className="footer-info">
              <h3>{t("footer.embassy")}</h3>
              <p className="footer-location">{t("footer.location")}</p>

              <h4>{t("footer.embassyFull")}</h4>

              <div className="footer-section">
                <strong>{t("footer.addressLabel")}</strong>
                <p>
                  {t("footer.address").split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>

              <div className="footer-section">
                <strong>{t("footer.phoneLabel")}</strong>
                <p>{t("footer.phone")}</p>
              </div>

              <div className="footer-section">
                <strong>{t("footer.faxLabel")}</strong>
                <p>{t("footer.fax")}</p>
              </div>

              <div className="footer-social">
                <strong>{t("footer.follow")}</strong>
                <div className="social-icons">
                  <a
                    href="https://x.com/AmbaRdcongoUsa"  
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    𝕏
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="footer-map">
              <iframe
                title={t("footer.mapTitle")}
                src="https://www.google.com/maps?q=1100+Connecticut+Ave+NW+%23725,+Washington,+DC+20036&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}