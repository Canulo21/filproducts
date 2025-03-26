import { NavLink } from "react-router-dom";
import logo from "../../assets/images/nav-logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="footer-wrap bg-[var(--dark-color)] border-t-8 border-[#d6111e] py-[80px]">
        <div className="wrap">
          <div className="text-center">
            <NavLink to={"/"} className="inline-block">
              <div className="flex justify-center">
                <img
                  src={logo}
                  alt="footer logo"
                  className="w-[120px] bg-white rounded-full mb-4"
                />
              </div>

              <p className="uppercase text-[var(--primary-color)] font-medium text-lg tracking-wide">
                Fil Products Service
              </p>
              <p className="uppercase text-[var(--secondary-color)] font-medium text-sm">
                Televesion of Ozamis, Inc.
              </p>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-[var(--dark-color)] w-full py-4 px-2">
        <div className="wrap">
          <div className="flex items-center gap-3 text-center lg:text-left lg:gap-0 lg:justify-between text-white text-sm flex-col lg:flex-row ">
            <p>
              Copyright © {currentYear} | FIL PRODUCTS SERVICE TELEVISION OF
              Ozamis City, INC.
            </p>
            <p className="text-[var(--secondary-color)]">Developed By: JC</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
