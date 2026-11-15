export function asset(file) {
  return `${import.meta.env.BASE_URL}images/${file}`;
}

export const business = {
  name: "Rozmarynkowa Pasieka",
  owners: "Olga i Dariusz Rozmarynowscy",
  phone: "726 029 284",
  phoneHref: "tel:+48726029284",
  street: "Pieniążkowo 41",
  postal: "83-135 Pieniążkowo",
  region: "województwo pomorskie",
  wni: "221439567",
  facebook: "https://www.facebook.com/profile.php?id=61591101501018",
  maps: "https://www.google.com/maps/search/?api=1&query=Pieniazkowo+41,+83-135",
};

export const nav = [
  ["pasieka", "Pasieka"],
  ["miody", "Miody"],
  ["upominki", "Upominki"],
  ["galeria", "Galeria"],
  ["kontakt", "Kontakt"],
];

export const ticker = [
  "Rzepakowy",
  "Faceliowy",
  "Wielokwiatowy",
  "Lipowy",
  "Gryczany",
  "Spadziowy",
  "Świece z wosku",
];

export const honeys = [
  {
    name: "Rzepakowy",
    season: "Wiosna",
    color: "#f3e2a8",
    text: "Łagodny, delikatnie kwiatowy. Szybko krystalizuje w gładką, jasną masę.",
  },
  {
    name: "Faceliowy",
    season: "Późna wiosna",
    color: "#f0c14a",
    text: "Świeży aromat facelii i jasna, złota barwa. Spokojny miód na co dzień.",
  },
  {
    name: "Wielokwiatowy",
    season: "Lato",
    color: "#e09a2b",
    text: "Smak łąki wokół pasieki. Każde miodobranie jest trochę inne, bo pszczoły zbierają to, co akurat kwitnie.",
  },
  {
    name: "Lipowy",
    season: "Lipiec",
    color: "#d4842a",
    text: "Ziołowy, lekko miętowy aromat lipy i długi finisz. Jeden z najbardziej rozpoznawalnych miodów sezonu.",
  },
  {
    name: "Gryczany",
    season: "Lato",
    color: "#6b3418",
    text: "Ciemny i wyrazisty. Nuty słodu, kakao i mocnej herbaty.",
  },
  {
    name: "Spadziowy",
    season: "Późne lato",
    color: "#3e2418",
    text: "Ze spadzi, nie z nektaru kwiatów. Leśny, gęsty, mniej słodki. Zostaje na języku na dłużej.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Pożytek",
    text: "Pszczoły pracują na tym, co kwitnie wokół Pieniążkowa: rzepak, facelia, łąki, lipa, gryka i spadź.",
  },
  {
    n: "02",
    title: "Miodobranie",
    text: "Plaster zdejmujemy, kiedy miód jest dojrzały. Dlatego słoik z czerwca smakuje inaczej niż słoik z sierpnia.",
  },
  {
    n: "03",
    title: "Słoik",
    text: "Miód rozlewamy do słoików 500 g i 1200 g. Na etykiecie jest pasieka i weterynaryjny numer WNI.",
  },
];

export const photos = [
  {
    src: asset("honeycomb.jpg"),
    alt: "Ramka z zasklepionym plastrem miodu trzymana nad ulem, w tle kwitnąca łąka",
    w: 768,
    h: 1024,
  },
  {
    src: asset("gift-box.jpg"),
    alt: "Zamknięte pudełko prezentowe ze wstążką, gałązką i okienkiem, przez które widać słoje miodu",
    w: 768,
    h: 1024,
  },
  {
    src: asset("jars-lavender.jpg"),
    alt: "Dwa słoje miodu stojące w trawie, na wieku bukiet lawendy",
    w: 768,
    h: 1024,
  },
  {
    src: asset("candle-gift.jpg"),
    alt: "Żółta świeca z wosku z reliefem dzwonków i zimowego krajobrazu, obok prezentu przewiązanego wstążką",
    w: 768,
    h: 1024,
  },
  {
    src: asset("jars-flowers.jpg"),
    alt: "Dwa słoje miodu wśród wrzosów i rudbekii, jeden ciemny, drugi w połowie skrystalizowany",
    w: 768,
    h: 1024,
  },
  {
    src: asset("gift-open.jpg"),
    alt: "Otwarte pudełko z trzema słoikami miodu i woskowym aniołkiem na wełnie drzewnej",
    w: 817,
    h: 1024,
  },
  {
    src: asset("jar-cream.jpg"),
    alt: "Słoik jasnego, skrystalizowanego miodu Rozmarynkowej Pasieki",
    w: 768,
    h: 1024,
  },
  {
    src: asset("gift-heart.jpg"),
    alt: "Zestaw kilku miodów i mała świeca z wosku w kształcie serca",
    w: 768,
    h: 1024,
  },
  {
    src: asset("jars-linden.jpg"),
    alt: "Słoje złotego miodu przy lipowych liściach, w oddali kolorowe ule",
    w: 768,
    h: 1024,
  },
  {
    src: asset("jars-stack.jpg"),
    alt: "Słoje miodu ustawione na blacie, jasne i ciemne, gotowe do wydania",
    w: 473,
    h: 1024,
  },
];
