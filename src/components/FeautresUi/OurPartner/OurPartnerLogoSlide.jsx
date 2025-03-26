import "./style.css";

import aImg from "./images/a-logo.jpg";
import cctnImg from "./images/cctn-logo.png";
import cebuImg from "./images/cebu-logo.png";
import ciscoImg from "./images/cisco-logo.png";
import edcIm from "./images/edc-cebu.png";
import filImg from "./images/fp-logo.png";
import gImg from "./images/g-logo.jpg";
import getImg from "./images/getafix-logo.jpg";
import globeImg from "./images/globe-logo.png";
import ipsImg from "./images/ips-logo.png";
import mImg from "./images/m-logo.png";
import mikroImg from "./images/mikrotik-logo.png";
import nImg from "./images/n-logo.jpg";
import natImg from "./images/nat-logo.png";
import pldtImg from "./images/pldt-logo.png";
import tImg from "./images/t-logo.png";
import uImg from "./images/u-logo.png";

function OurPartnerLogoSlide() {
  const logoSlides = [
    {
      logo: cctnImg,
      alt: "CCTN",
    },
    {
      logo: filImg,
      alt: "Fil Products",
    },
    {
      logo: cebuImg,
      alt: "Official Seal City of Cebu",
    },
    {
      logo: edcIm,
      alt: "Department of Education Division of Cebu Provnce",
    },
    {
      logo: natImg,
      alt: "National Telecommunications Commission",
    },
    {
      logo: pldtImg,
      alt: "PLDT",
    },
    {
      logo: ipsImg,
      alt: "IPS",
    },
    {
      logo: getImg,
      alt: "GetaFix",
    },
    {
      logo: globeImg,
      alt: "Globe",
    },
    {
      logo: ciscoImg,
      alt: "CISCO",
    },
    {
      logo: mikroImg,
      alt: "MikroTik",
    },
    {
      logo: uImg,
      alt: "Ubiquiti",
    },
    {
      logo: tImg,
      alt: "Teleste",
    },
    {
      logo: mImg,
      alt: "Magnaquest",
    },
    {
      logo: gImg,
      alt: "Globetek Infoway",
    },
    {
      logo: aImg,
      alt: "AB",
    },
    {
      logo: nImg,
      alt: "National Privacy Commision",
    },
  ];

  // Duplicate the array to simulate cloning
  const duplicatedSlides = [...logoSlides, ...logoSlides];

  return (
    <>
      {" "}
      <div className="bg-[var(--dark-color)] w-full text-center pt-8 pb-4">
        <h3 className="ornament-top bgY text-white"> Our Partners</h3>
      </div>
      <div className="logos">
        <div className="logos-slide">
          {duplicatedSlides.map((slide, i) => (
            <img key={i} src={slide.logo} alt={slide.alt} />
          ))}
        </div>
      </div>
    </>
  );
}

export default OurPartnerLogoSlide;
