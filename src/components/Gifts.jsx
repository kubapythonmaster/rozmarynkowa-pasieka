import { asset, business } from "../data.js";

export default function Gifts() {
  return (
    <section className="section tone-white" id="upominki" aria-labelledby="upominki-title">
      <div className="wrap split gifts">
        <figure className="shot">
          <img
            src={asset("gift-box.jpg")}
            alt="Świąteczne pudełko z miodem, przewiązane sznurkiem, z gałązką i czerwoną jarzębiną"
            width="768"
            height="1024"
            loading="lazy"
          />
        </figure>
        <div className="prose">
          <h2 id="upominki-title">Zestawy na prezent</h2>
          <p>
            Na święta składamy pudełka z miodów, które zostały po sezonie,
            i ze świecy z wosku pszczelego. Wiążemy je sznurkiem, dokładamy
            gałązkę i wstążkę.
          </p>
          <p>W środku jest kilka słoików o różnych smakach i świeca odlewana z wosku.</p>
          <a className="btn" href={business.phoneHref}>
            Zapytaj o zestaw
          </a>
        </div>
      </div>

      <div className="wrap pair">
        <figure>
          <img
            src={asset("candle-gift.jpg")}
            alt="Zbliżenie świecy z wosku z dzwonkami i zimową sceną"
            width="768"
            height="1024"
            loading="lazy"
          />
          <figcaption>Świeca z wosku pszczelego</figcaption>
        </figure>
        <figure>
          <img
            src={asset("gift-open.jpg")}
            alt="Wnętrze zestawu: słoje miodu, woskowy aniołek i wełna drzewna"
            width="817"
            height="1024"
            loading="lazy"
          />
          <figcaption>Środek pudełka</figcaption>
        </figure>
      </div>
    </section>
  );
}
