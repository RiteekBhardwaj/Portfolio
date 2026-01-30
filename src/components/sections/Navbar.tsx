"use client";

import { Separator } from "@/components/ui/separator";
import { IconMenu2, IconMenuOrder } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background px-6 py-4">
      <div className="items-end md:hidden">
        <span className="text-lg font-medium text-secondary text-end" onClick={() => setOpen(!open)}>
          {open ? <IconMenu2 /> : <IconMenuOrder/> }
        </span>
      </div>

      {/* Menu */}
      <ul
        className={`
          text-secondary text-2xl md:text-sm font-light flex flex-col md:flex-row gap-8 md:gap-5 px-10 transition-all duration-300 ease-in-out justify-end
          ${open ? "h-screen pb-25" : "h-0 overflow-hidden"}
          md:h-fit md:overflow-visible md:pb-0
        `}
      >
        <li className="md:hidden">
          <Separator className="border-ring" />
        </li>

        {[
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Services", href: "#services" },
          { label: "Resume", href: "#resume" },
        ].map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:opacity-80 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
