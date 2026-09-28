"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navigation } from "@/lib/site";
import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href) => {
    return (
      pathname === href ||
      (href !== "/" && pathname.startsWith(`${href}/`))
    );
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-codxr-light dark:bg-codxr-dark">
      <div className="container-codxr">
        {/* Desktop / Mobile Header */}
        <div className="flex h-[76px] items-center justify-between gap-4 sm:h-[84px] lg:h-[88px]">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex shrink-0 items-center"
            aria-label="CODXR home"
            onClick={closeMenu}
          >
            {/* Light Mode Logo */}
            <Image
              src="/images/codxr-b-logo.png"
              alt="CODXR"
              width={180}
              height={56}
              priority
              className="h-auto w-[145px] object-contain sm:w-[165px] lg:w-[200px] dark:hidden"
            />

            {/* Dark Mode Logo */}
            <Image
              src="/images/codxr-w-logo.png"
              alt="CODXR"
              width={180}
              height={56}
              priority
              className="hidden h-auto w-[145px] object-contain sm:w-[165px] lg:w-[200px] dark:block"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex xl:gap-10"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`group relative whitespace-nowrap text-[14px] font-medium tracking-[-0.01em] transition-colors xl:text-[15px] ${
                    active
                      ? "text-[#94c900] dark:text-codxr-green"
                      : "text-codxr-lightText hover:text-[#94c900] dark:text-codxr-darkText dark:hover:text-codxr-green"
                  }`}
                >
                  {item.label}

                  {/* Active underline */}
                  <span
                    className={`absolute -bottom-[9px] left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-codxr-green transition-all duration-300 ${
                      active
                        ? "w-7 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Link
              href="/contact"
              className="group codxr-gradient inline-flex items-center rounded-full px-5 py-3 text-[13px] font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(184,255,0,0.25)] xl:px-6 xl:py-3.5 xl:text-[14px]"
            >
              <span>Start Your Project</span>

              <ArrowUpRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={18}
              />
            </Link>
          </div>

          {/* Mobile / Tablet Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className="grid h-10 w-10 place-items-center rounded-full border border-codxr-lightBorder text-codxr-lightText transition hover:border-codxr-green dark:border-codxr-darkBorder dark:text-codxr-darkText"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            isMenuOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className="border-t border-codxr-lightBorder py-5 dark:border-codxr-darkBorder"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-codxr-lightBorder/70 py-4 text-base font-medium transition-colors last:border-b-0 dark:border-codxr-darkBorder/70 ${
                      active
                        ? "text-[#94c900] dark:text-codxr-green"
                        : "text-codxr-lightText dark:text-codxr-darkText"
                    }`}
                  >
                    <span>{item.label}</span>

                    {active && (
                      <span className="h-2 w-2 mr-6 rounded-full bg-codxr-green" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="group codxr-gradient mt-5 flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_8px_30px_rgba(184,255,0,0.25)]"
            >
              <span>Start Your Project</span>

              <ArrowUpRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={18}
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}