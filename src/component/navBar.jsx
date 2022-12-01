import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../icons/shared/logo.svg";
import hamburger from "../icons/shared/icon-hamburger.svg";
import closed from "../icons/shared/icon-close.svg";

export function NavBar() {
  let [open, setOpen] = useState(false);
  return (
    <div
      className={`w-full fixed top-0 left-0 mt-12 tablet:mt-0 ${
        open
          ? "tablet:bg-white"
          : "mobile:bg-[#ffffff0a] mobile:backdrop-blur-3xl"
      }`}
    >
      <div
        className={`flex items-center justify-between  h-24 pl-16 tablet:pl-4  `}
      >
        <div
          className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
          <div className="text-3xl   flex  items-center justify-center w-full  h-24">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-0  cursor-pointer hidden mobile:flex  items-center justify-center pr-4"
        >
          <img src={open ? closed : hamburger} alt="icon" />
        </div>

        <div className=" mobile:w-full w-[90%] flex items-center  tablet:w-[540px] ">
          <div className="w-[140rem] h-[.5px] bg-gray-200 translate-x-8 tablet:hidden"></div>
          <ul
            className={`mainText   flex mobile:flex-col  items-center tablet:justify-center mobile:items-start  gap-x-10 gap-y-5 tablet:gap-x-8  mobile:absolute 
          bg-[#ffffff0a] backdrop-blur-3xl mobile:bg-white h-24 mobile:h-auto z-[99999999999]  mobile:z-[-1] left-0 w-[185rem]  pr-16 tablet:p-2  pl-32 mobile:p-4
            transition-all duration-500 ease-in ${
              open ? "top-24 " : "top-[-490px]"
            }`}
          >
            <li
              className="text-xl  relative before:absolute before:w-full  before:h-[2px]
           before:bg-gray-50 before:-bottom-8 before:translate-x-[-100%] before:hidden 
            hover:before:block hover:before:translate-x-0  transition-all duration-500 ease-in-out active:before:bg-gray-200  "
            >
              <NavLink
                to="/"
                className="text-gray-200 mobile:text-gray-800 mobile:uppercase mobile:text-2xl text-[1.4rem]   hover:text-gray-300 font-normal duration-500 flex gap-2"
              >
                <span className="text-white mobile:text-gray-800 mobile:uppercase mobile:text-2xl  tablet:hidden mobile:inline font-bold ">
                  00{" "}
                </span>
                Home
              </NavLink>
            </li>

            <li
              className="text-xl  relative before:absolute before:w-full  before:h-[2px]
           before:bg-gray-50 before:-bottom-8 before:translate-x-[-100%] before:hidden 
            hover:before:block hover:before:translate-x-0  transition-all duration-500 ease-in-out active:before:bg-gray-200 "
            >
              <NavLink
                to="/destination"
                className="text-gray-200 mobile:text-gray-800 mobile:uppercase mobile:text-2xl text-[1.4rem]  hover:text-gray-300 font-normal duration-500 flex gap-2"
              >
                <span className="text-white mobile:text-gray-800 mobile:uppercase mobile:text-2xl tablet:hidden mobile:inline font-bold ">
                  01{" "}
                </span>
                Destination
              </NavLink>
            </li>

            <li
              className="text-xl  relative before:absolute before:w-full  before:h-[2px]
           before:bg-gray-50 before:-bottom-8 before:translate-x-[-100%] before:hidden 
            hover:before:block hover:before:translate-x-0  transition-all duration-500 ease-in-out active:before:bg-gray-200  "
            >
              <NavLink
                to="/crew"
                className="text-gray-200 text-[1.4rem] mobile:text-gray-800 mobile:uppercase mobile:text-2xl  hover:text-gray-300 font-normalduration-500 flex gap-2"
              >
                <span className="text-white mobile:text-gray-800 mobile:uppercase mobile:text-2xl tablet:hidden mobile:inline font-bold ">
                  02{" "}
                </span>
                Crew
              </NavLink>
            </li>

            <li
              className="text-xl  relative before:absolute before:w-full  before:h-[2px]
           before:bg-gray-50 before:-bottom-8 before:translate-x-[-100%] before:hidden 
            hover:before:block hover:before:translate-x-0  transition-all duration-700 ease-in-out active:before:bg-gray-200 "
            >
              <NavLink
                to="/technology"
                className="text-gray-200 mobile:text-gray-800 mobile:uppercase mobile:text-2xl text-[1.4rem]  hover:text-gray-300 font-normal duration-500"
              >
                <span className="text-white mobile:text-gray-800 mobile:uppercase mobile:text-2xl tablet:hidden mobile:inline font-bold ">
                  03{" "}
                </span>
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
