import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/nav-logo.png";
import HamburgerButton from "../HamburgerMenu/HamburgerButton";
import HeadMenu from "../Menus/HeadMenu";

function Header({ isOpen, setOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`header-holder fixed w-full  top-0  z-50 masthead h-20 sm:h-28 ${
          scrolled
            ? "bg-[var(--dark-color)] shadow-[0px_3px_6px_rgba(0,0,0,0.25)]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between wrap h-full">
          <div className="for-logo ">
            <NavLink to={"/"} className="flex items-center gap-3">
              <img src={logo} alt="logo" className="bg-white rounded-full" />
              <div className="text-logo ">
                <p className="uppercase text-[var(--primary-color)] font-medium text-sm sm:text-lg tracking-wide">
                  Fil Products Service
                </p>
                <p className="uppercase text-[var(--secondary-color)] font-medium  text-xs sm:text-sm">
                  Televesion of Ozamis, Inc.
                </p>
              </div>
            </NavLink>
          </div>
          <div className="for-nav">
            <HeadMenu />
          </div>
          <div className="hamburger-wrap ">
            <HamburgerButton isOpen={isOpen} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
