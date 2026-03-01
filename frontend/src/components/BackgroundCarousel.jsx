
import "./BackgroundCarousel.css";

import bg1 from "../assets/view.jpg";
import bg2 from "../assets/view2.jpg";
import bg3 from "../assets/view3.jpg";
import bg4 from "../assets/view4.jpg";

export default function BackgroundCarousel() {
  const slides = [bg1, bg2, bg3, bg4, bg1]; // duplicate first for seamless loop

  return (
    <section className="bg-carousel" aria-hidden="true">
      <div className="bg-carousel__viewport">
        <div className="bg-carousel__track">
          {slides.map((src, i) => (
            <div className="bg-carousel__slide" key={i}>
              <div
                className="bg-carousel__image"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}