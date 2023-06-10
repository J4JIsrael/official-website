'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HamburgerIcon } from '../icons';
import { NavBarItem } from './NavBarItem';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-color-aqua z-50 p-6 xs:z-50 sm:z-50 md:z-50">
      <div className="m-auto flex max-w-[1200px] flex-row-reverse flex-wrap items-center justify-between py-4">
        <div>
          <div className="cursor:pointer z-50 hidden lg:block ">
            <Link href="/">
              <Image
                src="/assets/logo.png"
                width="156"
                height="59"
                alt="J4J Logo"
              />
            </Link>
          </div>
          <div className="cursor:pointer z-50 xs:block sm:block md:block lg:hidden xl:hidden">
            <Link href="/">
              <Image
                src="/assets/square-icon.png"
                width="41"
                height="46"
                alt="J4J Logo"
              />
            </Link>
          </div>
        </div>
        {/* <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-50 ml-3 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerIcon className="z-50 h-6 w-6" />
        </button>
        <div
          className={`${open ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className="z-50 mt-4 flex flex-col rounded-lg border-2 border-[#babababa] p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:space-x-reverse md:border-0 md:p-0"
            style={{ direction: 'rtl' }}
          >
            <NavBarItem href="/">עלינו</NavBarItem>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

// TODO: Uncomment this when we have more pages
