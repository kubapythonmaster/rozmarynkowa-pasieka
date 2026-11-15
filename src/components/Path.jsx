import { asset } from "../data.js";

export default function Path() {
  return (
    <section className="section tone-yellow" id="droga" aria-labelledby="droga-title">
      <div className="wrap split path">
        <div className="prose">
          <h2 id="droga-title">Z ula do słoika</h2>
          <p>
            Pszczoły pracują na tym, co kwitnie wokół Pieniążkowa: rzepak,
            facelia, łąki, lipa, gryka i spadź.
          </p>
          <p>
            Plaster zdejmujemy, kiedy miód jest dojrzały. Dlatego słoik z
            czerwca smakuje inaczej niż słoik z sierpnia.
          </p>
          <p>
            Rozlewamy go do słoików 500 g i 1200 g. Na etykiecie jest pasieka
            i weterynaryjny numer WNI.
          </p>
        </div>
        <figure className="shot">
          <img
            src={asset("jars-linden.jpg")}
            alt="Słoje złotego miodu przy lipowych liściach, w oddali kolorowe ule"
            width="768"
            height="1024"
            loading="lazy"
          />
          <figcaption>Przy ulach, w sezonie.</figcaption>
        </figure>
      </div>
    </section>
  );
}
