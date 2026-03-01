import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "./HeroSlider.css";


import slide1 from "../assets/Presidents 2.jpg";
import slide2 from "../assets/min.jpg";
import slide3 from "../assets/Ambassader 2.jpg";


export default function HeroSlider() {
  const { t, i18n } = useTranslation();
 
  const slides = useMemo(
    () => [
      {
        image: slide1,
        title: t("hero.slide1.title"),
        meta: t("hero.slide1.meta"),
        text: t("hero.slide1.text"),
        link: "/opportunites",
        cta: t("hero.slide1.cta"),
      },
      {
        image: slide2,
        title: t("hero.slide2.title"),
        meta: t("hero.slide2.meta"),
        text: t("hero.slide2.text"),
        // Fully qualified URL so the page opens correctly
        link:
          "https://diplomatie.gouv.cd/2025/12/29/est-de-la-rdc-kinshasa-presse-lunion-africaine-de-sortir-de-la-retenue-face-a-lescalade/",
        cta: t("hero.slide2.cta"),
      },
      {
        image: slide3,
        title: t("hero.slide3.title"),
        meta: t("hero.slide3.meta"),
        text: t("hero.slide3.text"),
        link: "/the-ambassador",
        cta: t("hero.slide3.cta"),
      },
    ],
    [i18n.language]
  );

  const AUTOPLAY_MS = 9000; // total time per slide
  const FADE_OUT_MS = 700; // fade out duration
  const BLANK_MS = 250; // blank pause between fades
  const FADE_IN_MS = 900; // fade in duration

  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("in"); // "in" | "out" | "blank"

  // Cycle through phases with timeouts. When the language changes the
  // `slides` array re-computes and this effect is re-applied.
  useEffect(() => {
    const t1 = setTimeout(
      () => setPhase("out"),
      AUTOPLAY_MS - (FADE_OUT_MS + BLANK_MS + FADE_IN_MS)
    );
    const t2 = setTimeout(
      () => setPhase("blank"),
      AUTOPLAY_MS - (BLANK_MS + FADE_IN_MS)
    );
    const t3 = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setPhase("in");
    }, AUTOPLAY_MS - FADE_IN_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [index, slides.length]);

  const goTo = (i) => {
    setPhase("in");
    setIndex(i);
  };

  const slide = slides[index];
  const showContent = phase !== "blank";

  return (
    <section className="rdcHero">
      <div className="rdcHero__container">
        <div className={`rdcHero__gridWrap phase-${phase}`}>
          {showContent && (
            <div className="rdcHero__grid">
              {/* LEFT (text animates bottom → up) */}
              <div className="rdcHero__left">
                <h1 className="rdcHero__title">{slide.title}</h1>
                <div className="rdcHero__meta">{slide.meta}</div>
                <p className="rdcHero__text">{slide.text}</p>
                <a className="rdcHero__btn" href={slide.link}>
                  {slide.cta}
                </a>
              </div>
              {/* RIGHT (image slides left → right) */}
              <div className="rdcHero__right">
                <div className="rdcHero__imgCard">
                  <img
                    className="rdcHero__img"
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Dots navigation */}
        <div className="rdcHero__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`rdcHero__dot ${i === index ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                goTo(i);
              }}
              aria-label={`${t("hero.goToSlide")} ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}