import Link from 'next/link';
import type { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{ href: string }>;

export const NavBarItem = ({ href, children }: Props) => (
  <li className="md:border-none ">
    <Link href={href} aria-current="page" rel="page">
      {children}
    </Link>
  </li>
);
