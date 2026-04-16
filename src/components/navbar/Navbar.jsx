import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar w-11/12 mx-auto bg-base-100 ">
        <div className="flex-1">
          <a className=" text-2xl text-[#244D3F]">
            <span className="font-bold ">Keen</span>Keeper
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <button>
                <a className="flex justify-center items-center gap-2 text-sm md:text-xl">
                  <IoHomeOutline />
                  Dashboard
                </a>
              </button>
            </li>
            <li>
              <button>
                <a className="flex justify-center items-center gap-2 text-sm md:text-xl">
                  <IoMdTime />
                  Timeline
                </a>
              </button>
            </li>
            <li>
              <button>
                <a className="flex justify-center items-center gap-2 text-sm md:text-xl">
                  <FaChartLine />
                  Status
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
