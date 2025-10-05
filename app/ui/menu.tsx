"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Menu() {
  const items = [
    { title: "Overview", href: "#overview" },
    { title: "Organizers", href: "#organizers" },
    { title: "Speakers", href: "#speakers" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="lg:hidden fixed top-1 right-1 z-100 flex justify-center items-center">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="cursor-pointer p-2 rounded-sm"
        >
          <Bars3Icon className="w-8 text-gold" />
        </button>
      </div>
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="lg:hidden fixed top-0 left-0 z-100 min-h-dvh w-full bg-black/50"
        >
          <nav
            onClick={stopPropagation}
            className="fixed top-0 left-0 z-100 w-full p-5 flex flex-col gap-5 text-gray-200 bg-navy"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer self-end"
            >
              <XMarkIcon className="w-6" />
            </button>
            {items.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        </div>
      )}
      <nav className="hidden lg:flex items-center justify-center gap-10 fixed top-0 z-100 w-full p-4 text-gray-200 bg-navy shadow-xl/20">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="flex items-center justify-center gap-10 font-medium"
          >
            <a href={item.href}>
              {item.title}
            </a>
            {index !== items.length - 1 && (
              <div className="w-1 h-1 rounded-full bg-gray-200"></div>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
