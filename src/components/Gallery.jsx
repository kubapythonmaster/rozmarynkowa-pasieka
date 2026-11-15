import { useEffect, useRef, useState } from "react";
import { photos } from "../data.js";

const order = [
  "honeycomb.jpg",
  "candle-gift.jpg",
  "jars-flowers.jpg",
  "gift-heart.jpg",
  "jars-stack.jpg",
];

export default function Gallery() {
  const frames = order
    .map((name) => photos.find((photo) => photo.src.endsWith(name)))
    .filter(Boolean);
  const [index, setIndex] = useState(null);
  const closeRef = useRef(null);
  const dragX = useRef(null);
  const count = frames.length;

  function close() {
    setIndex(null);
  }

  function step(direction) {
    setIndex((current) => (current + direction + count) % count);
  }

  const open = index !== null;

  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("lock");
    closeRef.current?.focus();
    return () => document.body.classList.remove("lock");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % count);
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + count) % count);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, count]);

  const current = index === null ? null : frames[index];

  return (
    <section className="section tone-white" id="galeria" aria-labelledby="galeria-title">
      <div className="wrap">
        <div className="section-head">
          <h2 id="galeria-title">Zdjęcia z pasieki</h2>
          <p>Kliknij zdjęcie, żeby zobaczyć je na cały ekran.</p>
        </div>
        <div className="frames">
          {frames.map((photo, photoIndex) => (
            <button
              key={photo.src}
              type="button"
              className="frame"
              onClick={() => setIndex(photoIndex)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Zdjęcie z pasieki"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox-close"
            aria-label="Zamknij"
            onClick={close}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>

          <button
            type="button"
            className="lightbox-arrow prev"
            aria-label="Poprzednie zdjęcie"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>

          <figure
            className="lightbox-stage"
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => {
              dragX.current = event.clientX;
            }}
            onPointerUp={(event) => {
              if (dragX.current == null) return;
              const delta = event.clientX - dragX.current;
              dragX.current = null;
              if (delta > 48) step(-1);
              if (delta < -48) step(1);
            }}
          >
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <span>{current.alt}</span>
              <span>
                {index + 1} / {count}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox-arrow next"
            aria-label="Następne zdjęcie"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>

          <div className="lightbox-thumbs" onClick={(event) => event.stopPropagation()}>
            {frames.map((photo, photoIndex) => (
              <button
                key={photo.src}
                type="button"
                className={photoIndex === index ? "on" : ""}
                aria-label={`Zdjęcie ${photoIndex + 1}`}
                aria-current={photoIndex === index ? "true" : undefined}
                onClick={() => setIndex(photoIndex)}
              >
                <img src={photo.src} alt="" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
