import FaqAccordion from "../components/FeautresUi/Home/FaqAccordion";
import OurPartnerLogoSlide from "../components/FeautresUi/OurPartner/OurPartnerLogoSlide";

import phImg from "../assets/images/ph.png";
import OurTeam from "../components/OurTeam/OurTeam";

function AboutUs() {
  return (
    <>
      <section id="about-us" className="py-20 shadow-lg">
        <div className="wrap text-center ">
          <h1 className="ornament-top bgR">About Us</h1>
        </div>
        <div className="wrap">
          <div className="flex flex-wrap items-center justify-between mt-12 flex-col lg:flex-row">
            <div className="about-left text-center lg:text-left w-full lg:w-3/5">
              <p className="text-base md:text-lg leading-8 tracking-wide">
                Experience seamless connectivity and premium entertainment with
                Fil Products Ozamis City, your trusted provider of high-speed
                internet and top-quality cable TV services. Whether you’re
                streaming, working, or enjoying your favorite shows, we bring
                you the best in digital convenience and entertainment. Enjoy the
                power of pure fiber internet, delivering ultra-fast speeds for
                smooth browsing, gaming, and streaming. Stay entertained with a
                diverse selection of standard definition (SD) and high
                definition (HD) cable channels, carefully curated to cater to
                every household’s viewing needs in Ozamis City and beyond.
                Located in the heart of Ozamis City, Fil Products is dedicated
                to elevating your digital lifestyle with reliable services and
                cutting-edge technology. As part of the esteemed Fil Products
                Group of Companies, we are committed to providing you with an
                exceptional digital experience. Join us as we redefine the way
                you connect, work, and entertain!
              </p>
            </div>
            <div className="about-right mt-20 lg:mt-0 w-3/4 lg:w-1/3 justify-center flex">
              <img className="map-img" src={phImg} alt="map" />
            </div>
          </div>
        </div>
      </section>
      <section id="our-team" className="py-20">
        <OurTeam />
      </section>
      <section id="our-partners" className="bg-[var(--primary-color)]">
        <OurPartnerLogoSlide />
      </section>
      <section id="faq" className=" py-20">
        <FaqAccordion />
      </section>
    </>
  );
}

export default AboutUs;
