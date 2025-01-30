import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Tur from "./components/Tur/Tur";
import Hotel from "./components/Hotel/Hotel";
import Ticket from "./components/Ticket/Ticket";
import City from "./components/City/City";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import 'aos/dist/aos.css';
import Aos from "aos";

function App() {
  useEffect(() => {
    // Sahifa yuklanishi bilan yuqoriga qaytarish
    window.scrollTo(0, 0);

    // AOS animatsiyasini ishga tushirish
    Aos.init({
      duration: 1000,  // Animatsiya davomiyligi
      once: true,  // Faqat bir marta animatsiya bo'lishi (scroll noto‘g‘ri tushmasligi uchun)
      offset: 200,  // Animatsiya qachon boshlanishi
    });

    Aos.refresh(); // Aos'ni yangilash
  }, []);
  return (
    <>
      <div className="bg-[#F26522] mb-8 !important">
        <Header />
        <Hero />
      </div>
      <About />
      <Team />
      <Tur />
      <Hotel />
      <div className="bg-gray-100">
        <Ticket />
        <City />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
