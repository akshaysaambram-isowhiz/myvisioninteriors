import React from "react";

import { metadata } from "../store/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const pages = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  function toggleMenu() {
    const mobileMenu = document.querySelector("#mobile-menu");
    mobileMenu.classList.toggle("translate-x-full");
  }

  useGSAP(() => {
    gsap.from("#desktop-menu", {
      opacity: 0,
      y: -100,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        id="desktop-menu"
        className="p-4 bg-gradient-to-b from-black to-transparent"
      >
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">My Vision Interiors</span>
              <img
                className="h-8 w-auto"
                src="../assets/logo2.jpg"
                alt="My Vision Interiors Logo"
              />
            </a>
          </div>

          {/* Desktop Navigation  */}
          <div className="hidden lg:flex lg:gap-x-12">
            {pages.map(page => (
              <a
                key={page.name}
                href={page.href}
                className="text-base/7 font-semibold text-orange-100 hover:text-orange-700"
              >
                {page.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle  */}
          <div className="flex lg:hidden">
            <button className="text-orange-900" onClick={toggleMenu}>
              <span className="sr-only" aria-label="Open main menu">
                Open main menu
              </span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Contact  */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={`tel:${metadata.phone}`}
              className="text-base/7 font-semibold text-orange-100 hover:text-orange-700"
            >
              {metadata.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu  */}
      <div
        id="mobile-menu"
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-orange-50 px-6 py-6 sm:max-w-sm transform translate-x-full transition-transform duration-300 ease-in-out"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">My Vision Interiors</span>
            <img
              className="h-8 w-auto"
              src="./assets/logo.png"
              alt="My Vision Interiors Logo"
            />
          </a>
          <button className="text-orange-900" onClick={toggleMenu}>
            <span className="sr-only">Close menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-orange-200">
            <div className="space-y-2 py-6">
              {pages.map(page => (
                <a
                  key={page.name}
                  href={page.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-orange-900 hover:bg-orange-100"
                >
                  {page.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href={`tel:${metadata.phone}`}
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-orange-900 hover:bg-orange-100"
              >
                {metadata.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
