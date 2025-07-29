"use client";

import classNames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";

import { Box, Text } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();

  const { status, data: session } = useSession();

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
          <li key={link.href}>
            <Link
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
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Sign Out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">Sign In</Link>
        )}
      </Box>
    </nav>
  );
};

export default NavBar;
