import { asset, honeys } from "../data.js";

export default function Honeys() {
  return (
    <section className="section tone-yellow" id="miody" aria-labelledby="miody-title">
      <div className="wrap honey-board">
        <figure className="honey-photo">
          <img
            src={asset("jars-flowers.jpg")}
            alt="Dwa słoje miodu wśród kwiatów, jeden ciemny i jeden w połowie skrystalizowany"
            width="768"
            height="1024"
            loading="lazy"
          />
        </figure>

        <div>
          <h2 id="miody-title">Co jest w słoiku</h2>
          <p className="honey-intro">
            Na etykiecie zaznaczamy gatunek. Nie każdy jest dostępny przez cały
            rok — zależy od tego, co akurat kwitnie wokół pasieki.
          </p>

          <ul className="varieties">
            {honeys.map((honey) => (
              <li key={honey.name}>
                <h3>{honey.name}</h3>
                <p>
                  <em>{honey.season}.</em> {honey.text}
                </p>
              </li>
            ))}
          </ul>

          <p className="spec">Słoje 500 g i 1200 g. Produkt polski, numer partii na etykiecie.</p>
        </div>
      </div>

      <div className="wrap honey-note">
        <img
          src={asset("jar-cream.jpg")}
          alt="Jasny, gęsty miód w słoiku Rozmarynkowej Pasieki"
          width="768"
          height="1024"
          loading="lazy"
        />
        <div>
          <h3>Gęsty miód to dobry znak</h3>
          <p>
            Naturalny miód z czasem jaśnieje i twardnieje. To krystalizacja.
            Żeby znów był płynny, wstaw słoik do wody o temperaturze około 40°C
            i trzymaj go w suchym miejscu, z dala od słońca.
          </p>
        </div>
      </div>
    </section>
  );
}
