import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar md:w-11/12 md:mx-auto bg-base-100 ">
        <div className="flex-1">
          <a className=" text-2xl md:text-4xl text-[#244D3F]">
            <span className="font-bold ">Keen</span>Keeper
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal md:px-1">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white" : ""
                }
              >
                <div className="flex justify-center items-center gap-1 md:gap-2 text-sm md:text-xl">
                  <IoHomeOutline />
                  Dashboard
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/timeline"}
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white" : ""
                }
              >
                <div className="flex justify-center items-center gap-1 md:gap-2 text-sm md:text-xl">
                  <IoMdTime />
                  Timeline
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/status"}
                className={({ isActive }) =>
                  isActive ? "bg-[#244D3F] text-white" : ""
                }
              >
                <div className="flex justify-center items-center gap-1 md:gap-2 text-sm md:text-xl">
                  <FaChartLine />
                  Status
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
