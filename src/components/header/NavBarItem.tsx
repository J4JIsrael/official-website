import Link from "next/link";
import { ReactNode } from "react";

export const NavBarItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <li
    className="border-b-2 md:border-none
"
  >
    <Link
      href={href}
      className="block py-2 px-4 text-white rounded md:bg-transparent md:p-0 dark:text-white"
      aria-current="page"
      rel="page"
    >
      {children}
    </Link>
  </li>
);
