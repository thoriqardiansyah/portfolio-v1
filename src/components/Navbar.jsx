import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="fixed z-50 top-0 left-0 right-0 px-[50px] lg:px-[100px] w-full backdrop-blur-[10px]">
      <nav className="flex flex-col-reverse justify-between py-2 pt-4 md:py-[30px] md:items-center md:flex-row">
        <div
          className={`flex flex-col items-center my-[20px] md:my-0 md:flex md:flex-row ${
            nav ? "" : "hidden"
          }`}
        >
          <Link
            to={"/"}
            onClick={() => setNav(!nav)}
            className="relative text-base md:text-sm lg:text-base font-medium mb-[20px] md:mr-[15px] lg:mr-[30px] md:mb-0 focus:bg-slate-900 focus:text-white rounded-md px-4 py-2 hover:outline hover:outline-slate-900"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            onClick={() => setNav(!nav)}
            className="text-base md:text-sm lg:text-base font-medium mb-[20px] md:mr-[15px] lg:mr-[30px] md:mb-0 focus:bg-slate-900 focus:text-white rounded-md px-4 py-2 hover:outline hover:outline-slate-900 "
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            onClick={() => setNav(!nav)}
            className="text-base md:text-sm lg:text-base font-medium mb-[20px] md:mr-[15px] lg:mr-[30px] md:mb-0 focus:bg-slate-900 focus:text-white rounded-md px-4 py-2 hover:outline hover:outline-slate-900 "
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            onClick={() => setNav(!nav)}
            className="text-base md:text-sm lg:text-base font-medium py-2 px-4 bg-slate-900 text-white rounded-[5px]  md:hidden hover:bg-white"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-between mb-2">
          <h2 className="font-bold text-xl lg:text-4xl md:-ml-32 lg:-ml-56">
            Thoriq Ardiansyah
          </h2>
          <button
            className={`md:hidden ${nav ? "hidden" : ""}`}
            onClick={() => setNav(!nav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <button
            className={`md:hidden ${nav ? "" : "hidden"}`}
            onClick={() => setNav(!nav)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Link
          to={"/contact"}
          className="text-base font-semibold py-2 px-4 bg-slate-900 text-white rounded-[5px] hidden md:block hover:bg-white hover:border hover:border-black hover:text-black transition-all duration-300 ease-in-out"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
