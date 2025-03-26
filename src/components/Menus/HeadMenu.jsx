import React from "react";
import { NavLink } from "react-router-dom";
import { listMenu } from "./CallMenu";

function HeadMenu() {
  return (
    <>
      <div className="nav-holder">
        <ul className="flex gap-x-5">
          {listMenu.map((menu, i) => (
            <NavLink
              key={i}
              to={menu.link}
              className={({ isActive }) =>
                `uppercase font-semibold hover:text-[#ddc76d] text-md ${
                  isActive ? "text-[#ddc76d]" : "text-white"
                }`
              }
            >
              {menu.menu}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HeadMenu;
