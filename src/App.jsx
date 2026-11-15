import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Story from "./components/Story.jsx";
import Honeys from "./components/Honeys.jsx";
import Gifts from "./components/Gifts.jsx";
import Path from "./components/Path.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip" href="#tresc">
        Przejdź do treści
      </a>
      <Header />
      <main id="tresc">
        <Hero />
        <Story />
        <Honeys />
        <Gifts />
        <Path />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
