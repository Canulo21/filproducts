import { ArrowBigUpDash } from "lucide-react";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";
import Header from "./components/Header/Header";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Inquiry from "./pages/Inquiry";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = (event) => {
    event.preventDefault(); // Prevents "#" from appearing in the URL
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Router>
        <div
          className={`site-holder bg-[#ffffff] z-10 float-right relative w-full transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "is-active right-64 sm:right-80" : "right-0"
          }`}
        >
          <header className="z-[999] relative">
            <Header isOpen={isOpen} setOpen={setOpen} />
          </header>
          <section
            id="site-banner"
            className="h-screen overflow-hidden shadow-xl"
          >
            <Banner />
          </section>
          <div id="site-holder">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="inquiry" element={<Inquiry />} />
            </Routes>
          </div>
          <footer>
            <Footer />
          </footer>

          <div className={`back-top fixed ${scrolled ? "show" : ""}`}>
            <a href="#" onClick={handleBackToTop}>
              <ArrowBigUpDash size={35} />
            </a>
          </div>
        </div>
        <div
          className={`resp-bar-holder float-left ${isOpen ? "is-active" : ""}`}
        >
          <HamburgerMenu />
        </div>
      </Router>
    </>
  );
}

export default App;
