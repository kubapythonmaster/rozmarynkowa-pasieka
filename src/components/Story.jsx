import { asset, business } from "../data.js";

export default function Story() {
  return (
    <section className="section tone-white" id="pasieka" aria-labelledby="pasieka-title">
      <div className="wrap split">
        <div className="prose">
          <h2 id="pasieka-title">Pasieka w Pieniążkowie</h2>
          <p>
            Witajcie. Od pięciu lat opiekujemy się pszczołami i pozyskujemy
            naturalny miód. Początkowo zbieraliśmy go dla siebie i bliskich.
            Dziś dzielimy się nim również z Wami.
          </p>
          <p>
            Dziękujemy, że jesteście z nami i wspieracie lokalną pasiekę.
          </p>
          <p className="fine">
            {business.owners}
            <br />
            {business.street}, {business.postal}
            <br />
            Weterynaryjny numer pasieki WNI {business.wni}
          </p>
        </div>
        <figure className="shot">
          <img
            src={asset("jars-lavender.jpg")}
            alt="Dwa słoje miodu w wysokiej trawie, udekorowane lawendą"
            width="768"
            height="1024"
            loading="lazy"
          />
          <figcaption>Słoje z letniego miodu.</figcaption>
        </figure>
      </div>
    </section>
  );
}
