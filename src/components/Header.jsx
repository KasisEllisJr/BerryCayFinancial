
import { useState } from "react";
import "../styles/header.css";

const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-container">

        {/* Company Branding */}
        <a
          href="#home"
          className="site-brand"
          onClick={closeMenu}
          aria-label="Berry Cay Financial home"
        >
        <img
            src="/images/logo.png"
            alt="Berry Cay Financial Logo"
            className="brand-logo"
        />
          <div className="brand-text">
            <span className="brand-name">
              Berry Cay Financial
            </span>
            <span className="brand-tagline">
              PERSONAL SERVICE. PROFESSIONAL STANDARDS.
            </span>
          </div>
        </a>

        {/* Desktop and Mobile Navigation */}
        <nav
          id="primary-navigation"
          className={`site-nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`nav-link ${
                index === 0 ? "nav-link-active" : ""
              }`}
              onClick={closeMenu}
              aria-current={index === 0 ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="header-cta"
            onClick={closeMenu}
          >
            Book a Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}
