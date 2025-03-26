import { Check } from "lucide-react";
import CoreValuesTab from "../components/FeautresUi/Home/CoreValuesTab";
import FaqAccordion from "../components/FeautresUi/Home/FaqAccordion";

// import Json
import { cablePlan } from "../components/Json/HomeJson/CablePlan";
import { showCase } from "../components/Json/HomeJson/ShowCase";

// for plan in cablePlan
import { NavLink } from "react-router-dom";
import sateliteImg from "../assets/images/satellite-dish.png";
import routerImg from "../assets/images/wifi-router.png";
import OurPartnerLogoSlide from "../components/FeautresUi/OurPartner/OurPartnerLogoSlide";

function Home() {
  return (
    <>
      <section id="showcase">
        <div className="wrap">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-10 md:py-12 xl:gap-36 lg:py-16">
            {showCase.map((item, i) => (
              <div key={i} className="showcase-item flex flex-col items-center">
                <div className="showcase-icon mb-3 md:mb-6 hover:scale-90 transition-all duration-300 ease-in-out ">
                  {item.img}
                </div>
                <p className="font-secondary text-base md:text-lg lg:text-xl font-medium text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="choose-plan"
        className="bg-[var(--dark-color)] text-white shadow-xl"
      >
        <div className="wrap">
          <div className="py-20">
            <div className="text-center">
              <h2 className="ornament-top bgY text-3xl font-semibold text-center mb-6">
                Choose Your Plan
              </h2>
            </div>
            <p className="text-center text-[var(--off-white)] w-full xl:w-[50%] mx-auto leading-8 text-sm tracking-wide">
              Choose the plan that best suits your needs. Enjoy a variety of
              channels and ultra-speed connections tailored just for you.
              Experience top-notch support and entertainment like never before.
            </p>
            <div className="plan-wrap mt-12">
              <div className="flex flex-wrap justify-between gap-x-[10px] lg:gap-x-[20px] gap-y-[20px] lg:gap-y-[40px]">
                {cablePlan.map((plan, i) => (
                  <div
                    className="plan-item w-full sm:w-[calc(50%_-_10px)] lg:w-[calc(33.333%_-_20px)] xl:w-[calc(25%_-_30px)] border-4 border-white rounded-lg relative hover:border-[var(--secondary-color)]"
                    key={i}
                  >
                    <div className="plan-item-header bg-[var(--dark-color)] py-6 pt-10 pb-20">
                      <span className="text-center block font-semibold tracking-wider text-[var(--secondary-color)]">
                        {plan.main_title}
                      </span>
                      <h3 className="text-center">{plan.sub_title}</h3>
                    </div>
                    <div className="plan-icons absolute top-[140px] left-0 right-0 ">
                      <div className="icons flex justify-center gap-8">
                        <div className="bg-[var(--off-white)] rounded-full border-[6px] p-2 border-[var(--secondary-color)] shadow-xl">
                          <img
                            className="scale-75"
                            src={routerImg}
                            alt="router"
                          />
                        </div>
                        <div className="bg-[var(--off-white)] rounded-full border-[6px] p-2 border-[var(--secondary-color)] shadow-xl">
                          <img
                            className="scale-75"
                            src={sateliteImg}
                            alt="satelite"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="plan-item-body bg-[var(--off-white)] pt-14 pb-6 px-2">
                      <ul className=" table m-auto">
                        {plan.includes.map((include, i) => (
                          <li
                            key={i}
                            className="text-[var(--dark-color)] mt-3 flex gap-4 font-medium tracking-wide"
                          >
                            <Check
                              size={20}
                              color={"#d6111e"}
                              strokeWidth={4}
                            />{" "}
                            {include}
                          </li>
                        ))}
                      </ul>
                      <div className="plan-pirce text-center mt-12 flex justify-center items-center">
                        <span className="text-[var(--primary-color)] text-xl font-oswald font-medium tracking-wide pr-2">
                          {plan.price}
                        </span>
                        <span className="text-[var(--dark-color)] text-sm font-poppins font-semibold tracking-wide opacity-65">
                          | Monthly
                        </span>
                      </div>
                      <div className="text-center">
                        <NavLink
                          to="/inquiry"
                          className="inquire-btn inline-block text-white uppercase font-semibold bg-[var(--primary-color)] py-4 px-8 rounded-md mt-10 text-md tracking-wider transition-colors ease-in-out duration-300 hover:bg-[var(--secondary-color)] hover:text-[var(--dark-color)] shadow-lg"
                        >
                          Inquire Now
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="core-values" className="py-16 shadow-lg">
        <div className="wrap">
          <div className="text-center">
            <h2 className="ornament-top bgR">Our Core Values</h2>
          </div>
          <CoreValuesTab />
        </div>
      </section>
      <section
        id="our-partners"
        className="bg-[var(--primary-color)] shadow-lg"
      >
        <OurPartnerLogoSlide />
      </section>
      <section id="faq" className=" py-20">
        <FaqAccordion />
      </section>
    </>
  );
}

export default Home;
