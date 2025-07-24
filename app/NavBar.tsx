"use client";

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex items-center gap-x-4 border-b px-5 mb-5 h-14">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex gap-x-4">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classNames(
              {
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
              },
              "text-zinc-800 transition-colors"
            )}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
