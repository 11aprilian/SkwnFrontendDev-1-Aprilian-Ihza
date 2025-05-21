import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sm:px-2 lg:px-16 sm:py-2 lg:py-6">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <img src="/img/logo/logo.png" alt="" className="w-32" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-medium">
          <li>
            <a>About Us</a>
          </li>
          <li>
            <details>
              <summary>Furniture</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Partnerships</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="flex justify-between gap-2">
          <a className="btn hidden lg:flex bg-[#E5F0B6] text-[#553B33]">
            Sign Up
          </a>
          <a className="btn hidden lg:flex bg-[#553B33] text-[#E5F0B6]">
            <RiShoppingBagLine />
          </a>
        </div>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow right-0 left-auto max-w-[calc(100vw-1rem)] overflow-x-hidden"
          >
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Furniture</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Partnerships</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
