import { NavLink } from "react-router-dom";
import logo from "../../assets/images/nav-logo.png";
import { listMenu } from "../Menus/CallMenu";

function HamburgerMenu() {
  return (
    <div className="res-bar fixed right-0 h-full bg-[#191a23] w-64 sm:w-80">
      <div className="logo-area pt-8 px-4 pb-14">
        <a
          className="flex flex-col items-center gap-3"
          href="#"
          aria-label="logo"
        >
          <img
            className="w-[50%] bg-white rounded-full"
            src={logo}
            alt="Fil Products"
          />
        </a>
      </div>
      <div className="menu">
        <ul className="flex flex-col gap-3 items-center">
          {listMenu.map((menu, i) => (
            <NavLink
              key={i}
              className={({ isActive }) =>
                `py-1 px-3 text-2xl hover:text-[var(--secondary-color)] capitalize ${
                  isActive ? "text-[var(--secondary-color)]" : "text-white"
                }`
              }
              to={menu.link}
            >
              {menu.menu}
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HamburgerMenu;
