import { Clock, Mail, MapPinHouseIcon, PhoneCall } from "lucide-react";
import FaqAccordion from "../components/FeautresUi/Home/FaqAccordion";
import OurPartnerLogoSlide from "../components/FeautresUi/OurPartner/OurPartnerLogoSlide";

function Inquiry() {
  return (
    <>
      <section id="inquiry" className="py-14 lg:py-20 shadow-lg relative">
        <div className="wrap text-center ">
          <h1 className="ornament-top bgR">Contact Details</h1>
        </div>

        <div className="details-wrap">
          <div className="wrap">
            <div className="info-container flex flex-wrap mt-10 md:mt-16">
              <div className="info-item">
                <div className="icon-holder">
                  <MapPinHouseIcon size={90} strokeWidth={1} />
                </div>
                <p className="title">Address</p>
                <p className="sub-text">
                  Maningcol Highway, <br /> Ozamis City
                </p>
              </div>
              <div className="info-item">
                <div className="icon-holder">
                  <PhoneCall size={90} strokeWidth={1} />
                </div>
                <p className="title">Phones</p>
                <a className="sub-text" href="tel:09123456789">
                  09123456789
                </a>
              </div>
              <div className="info-item">
                <div className="icon-holder">
                  <Mail size={90} strokeWidth={1} />
                </div>
                <p className="title">Email</p>
                <a className="sub-text" href="mailto:canulodev21@gmail.com">
                  canulodev21@gmail.com
                </a>
              </div>
              <div className="info-item">
                <div className="icon-holder">
                  <Clock size={90} strokeWidth={1} />
                </div>
                <p className="title">Working Hours</p>
                <p className="sub-text">
                  Monday - Saturday <br />
                  7:00 Am - 5:00 Pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="fp-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.4490933304423!2d123.85210157500892!3d8.157426191873164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ac68fbdff46b%3A0x60816c1ac6e3c06a!2sFil%20Products%20Cable%20TV!5e0!3m2!1sen!2sph!4v1742965158257!5m2!1sen!2sph"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
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

export default Inquiry;
