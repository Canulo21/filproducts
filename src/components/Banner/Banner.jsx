import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./Banner.css";

import { NavLink } from "react-router-dom";
import bannerImg1 from "./images/banner.jpg";
import bannerImg2 from "./images/banner2.jpeg";
import bannerImg3 from "./images/banner3.png";
import bannerImg4 from "./images/banner4.jpg";

function Banner() {
  const bannerSLider = [
    {
      bannerImg: bannerImg1,
      bannerTitle: (
        <div>
          <span className="title-top capitalize">Experience the</span> <br />
          <span className="title-btm capitalize">Thrill of the NBA</span>
        </div>
      ),
      bannerText: (
        <p>
          Feel the excitement and energy of every game. Join us and be part of
          the action!
        </p>
      ),
    },
    {
      bannerImg: bannerImg2,
      bannerTitle: (
        <div>
          <span className="title-top capitalize">Dive into</span> <br />
          <span className="title-btm capitalize">Action and Fiction</span>
        </div>
      ),
      bannerText: (
        <p>
          Explore the world of thrilling action and captivating fiction. Get
          ready for an adventure!
        </p>
      ),
    },
    {
      bannerImg: bannerImg3,
      bannerTitle: (
        <div>
          <span className="title-top capitalize">Watch Your</span> <br />
          <span className="title-btm capitalize">Favorite Anime</span>
        </div>
      ),
      bannerText: (
        <p>
          Dive into a world of excitement and adventure. Stream the best anime
          anytime, anywhere!
        </p>
      ),
    },
    {
      bannerImg: bannerImg4,
      bannerTitle: (
        <div>
          <span className="title-top capitalize">Blazing Fast </span> <br />
          <span className="title-btm capitalize">Fiber Optic Internet</span>
        </div>
      ),
      bannerText: (
        <p>
          Experience ultra-fast speeds and seamless connectivity with
          cutting-edge fiber optic technology. Stream, game, and work without
          limits—speed you can trust, performance you can feel!
        </p>
      ),
    },
  ];

  const splideOptions = {
    type: "fade", // Enables fade transition
    rewind: true, // Ensures infinite loop for fade effect
    autoplay: true,
    arrows: true,
    interval: 8000,
    speed: 1200,
    easing: "ease-in-out",
    perPage: 1,
    perMove: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <>
      <div className="banner-holder h-full">
        <Splide options={splideOptions} className="sliderDiv h-full bg-black">
          {bannerSLider.map((banner, i) => (
            <SplideSlide key={i} className="relative">
              <img
                src={banner.bannerImg}
                alt={banner.bannerTitle}
                className="w-full h-full"
              />
              <div className="bannertext-wrap">
                <div>{banner.bannerTitle}</div>
                <div className="sub-text">{banner.bannerText}</div>
                <div className="inquire-now">
                  <NavLink
                    to="/inquiry"
                    className="inquire-btn inline-block text-white uppercase font-semibold bg-[var(--primary-color)] py-4 px-8 rounded-md mt-8 text-md tracking-wider transition-colors ease-in-out duration-300 hover:bg-[var(--secondary-color)] hover:text-[var(--dark-color)]"
                  >
                    Inquire Now
                  </NavLink>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default Banner;
