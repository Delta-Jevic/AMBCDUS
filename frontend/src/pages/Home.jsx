import React from "react";
import Header from "../components/Header__temp";
import HeroSlider from "../components/HeroSlider";
import INeedOverlay from "../components/INeedSection";
import BackgroundCarousel from "../components/BackgroundCarousel";
import NewsSection from "../components/NewsSection";
import LeadersSection from "../components/LeadersSection";
import HistorySection from "../components/HistorySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <INeedOverlay />
      <BackgroundCarousel />
      <NewsSection />
      <LeadersSection ambassadorLink="/the-ambassador" />
      <HistorySection />
      <Footer />
    </>
  );
}