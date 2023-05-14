"use client";
import Image from "next/image";
import { NavBarItem } from "./NavBarItem";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="mx-8">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 max-w-screen-xl">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              width="156"
              height="59"
              // className="mr-3"
              alt="J4J Logo"
            />
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <BurgerBtn />
          </button>
          {/* <div className="w-full md:block md:w-auto" id="navbar-default"> */}
          <div
            className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700"
              style={{ direction: "rtl" }}
            >
              <NavBarItem href="#">עלינו</NavBarItem>
              <NavBarItem href="#">פנאי</NavBarItem>
              <NavBarItem href="#">דרושים</NavBarItem>
              <NavBarItem href="#">העשרות</NavBarItem>
              <NavBarItem href="#">קורסים</NavBarItem>
              <NavBarItem href="#">פרויקטים</NavBarItem>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const BurgerBtn = () => (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    ></path>
  </svg>
);
