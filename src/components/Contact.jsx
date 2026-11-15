import { business } from "../data.js";

export default function Contact() {
  return (
    <section className="section contact tone-yellow" id="kontakt" aria-labelledby="kontakt-title">
      <div className="wrap contact-grid">
        <div>
          <h2 id="kontakt-title">Zadzwoń do nas</h2>
          <p>
            Odbieramy osobiście. Powiemy, jaki miód jest teraz w słoiku
            i czy złożymy zestaw na prezent.
          </p>
          <a className="phone" href={business.phoneHref}>
            {business.phone}
          </a>
        </div>
        <div className="stamp">
          <p className="who">{business.owners}</p>
          <address>
            {business.street}
            <br />
            {business.postal}
            <br />
            {business.region}
          </address>
          <p className="wni">WNI {business.wni}</p>
          <p className="stamp-links">
            <a href={business.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={business.maps} target="_blank" rel="noreferrer">
              Mapa dojazdu
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
