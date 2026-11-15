import { useEffect, useRef, useState } from "react";
import { asset, business } from "../data.js";

const slides = [
  {
    src: asset("honeycomb.jpg"),
    alt: "Ramka z plastrem miodu nad ulem, w tle kwitnąca łąka",
    position: "62% 48%",
  },
  {
    src: asset("jars-lavender.jpg"),
    alt: "Dwa słoje miodu w trawie, przy bukiecie lawendy",
    position: "center 36%",
  },
  {
    src: asset("jars-flowers.jpg"),
    alt: "Słoje miodu wśród kwiatów",
    position: "center 58%",
  },
  {
    src: asset("jars-linden.jpg"),
    alt: "Słoje miodu przy lipie, w oddali ule",
    position: "center 42%",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragX = useRef(null);
  const count = slides.length;

  useEffect(() => {
    if (paused) return undefined;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, count]);

  function go(step) {
    setIndex((current) => (current + step + count) % count);
  }

  return (
    <section
      className="hero"
      id="gora"
      aria-roledescription="pokaz zdjęć"
      aria-labelledby="hero-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") go(1);
        if (event.key === "ArrowLeft") go(-1);
      }}
      onPointerDown={(event) => {
        if (event.target.closest("a, button")) return;
        dragX.current = event.clientX;
      }}
      onPointerUp={(event) => {
        if (dragX.current == null) return;
        const delta = event.clientX - dragX.current;
        dragX.current = null;
        if (delta > 48) go(-1);
        if (delta < -48) go(1);
      }}
    >
      <div className="slides">
        {slides.map((item, itemIndex) => (
          <figure key={item.src} className={itemIndex === index ? "is-on" : ""}>
            <img
              src={item.src}
              alt={itemIndex === index ? item.alt : ""}
              width="768"
              height="1024"
              style={{ objectPosition: item.position }}
              fetchPriority={itemIndex === 0 ? "high" : "auto"}
            />
          </figure>
        ))}
      </div>
      <div className="hero-shade" />

      <div className="hero-copy">
        <p className="hero-kicker">Pieniążkowo · rodzinna pasieka</p>
        <h1 id="hero-title">
          Naturalny miód
          <br />
          z własnego ula
        </h1>
        <p className="hero-lead">
          {business.owners}. Od pięciu lat, prosto z pasieki.
        </p>
        <div className="hero-actions">
          <a className="btn hero-btn" href="#miody">
            Zobacz miody
          </a>
          <a className="hero-call" href={business.phoneHref}>
            {business.phone}
          </a>
        </div>
      </div>

      <div className="hero-controls">
        <button type="button" className="arrow" onClick={() => go(-1)} aria-label="Poprzednie zdjęcie">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <div className="dots" role="tablist" aria-label="Zdjęcia">
          {slides.map((item, itemIndex) => (
            <button
              key={item.src}
              type="button"
              role="tab"
              className={itemIndex === index ? "dot on" : "dot"}
              aria-label={`Zdjęcie ${itemIndex + 1}`}
              aria-selected={itemIndex === index}
              onClick={() => setIndex(itemIndex)}
            />
          ))}
        </div>
        <button type="button" className="arrow" onClick={() => go(1)} aria-label="Następne zdjęcie">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
