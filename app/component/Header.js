"use client";

import { useState } from "react";
import Link from "next/link";
import s from "./header.module.css";

const links = [
  ["Services", "/services"],
  //   ["Pricing", "/pricing"],
  ["Our work", "/work"],
  ["Approach", "/approach"],
  ["About", "/about"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className={s.header}>
      <Link
        className={s.brand}
        href="/"
        aria-label="Careform home"
        onClick={closeMenu}
      >
        <span className={s.mark} aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </span>
        <span>
          careform<span className={s.dot}>.</span>
        </span>
      </Link>

      <nav className={s.nav} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>

      <div className={s.actions}>
        <Link className={s.cta} href="/contact" onClick={closeMenu}>
          Let’s talk <Arrow />
        </Link>
        <button
          className={s.menuButton}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? s.menuOpen : ""} />
          <span className={menuOpen ? s.menuOpen : ""} />
        </button>
      </div>

      <nav
        className={`${s.mobileNav} ${menuOpen ? s.mobileNavOpen : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {links.map(([label, href], index) => (
          <Link
            href={href}
            key={href}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span className={s.mobileIndex}>0{index + 1}</span>
            {label}
            <Arrow />
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Arrow() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
