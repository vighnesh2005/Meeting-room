"use client";

import React, { useState } from "react";
import {
  Home,
  CalendarArrowDown,
  CalendarArrowUp,
  Video,
  Menu,
  X,
  
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/upcoming", label: "Upcoming", icon: CalendarArrowDown },
    { href: "/previous", label: "Previous", icon: CalendarArrowUp },
    { href: "/recordings", label: "Recordings", icon: Video },
  ];

  return (
    <>
      {/* Toggle Button (Mobile) */}
      <button
        className={`md:hidden fixed top-13 left-4 z-[100]  p-2 rounded ${
            isOpen ? "" : "bg-[#8B5CF6]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="text-white " /> : <Menu className="text-white " />}
      </button>

      {/* Overlay on Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`bg-black text-white top-0 left-0 h-full w-60 z-40 p-6 pt-10 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "hidden"} 
        md:translate-x-0 md:relative md:block sticky`}
      >
        <nav className="flex flex-col gap-4 h-screen">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-2 rounded-sm transition-all duration-150 ${
                  isActive
                    ? "bg-[#8B5CF6] text-black"
                    : "text-[#8B5CF6] hover:bg-[#1f1f1f]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span className="text-md">{label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
