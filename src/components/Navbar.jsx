import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/923110779966?text=Hello%20Coffee%20Junction%2C%20I%20would%20like%20to%20visit%20or%20place%20an%20order.",
      "_blank"
    );

    closeMenu();
  };

  // Scroll to a section on Home page
  const scrollToSection = (id) => {
    closeMenu();

    // If already on Home page
    if (window.location.pathname === "/") {
      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 50);

      return;
    }

    // If on another page, go Home first
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        <img
          src="/logo.jpeg"
          alt="Coffee Junction"
        />

        <h2>Coffee Junction</h2>
      </Link>


      {/* Desktop Menu */}
      <ul className="desktop-menu">

        <li>
          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>

        <li>
          <button
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
        </li>

        <li>
          <Link
            to="/menu"
            onClick={closeMenu}
          >
            Menu
          </Link>
        </li>

        <li>
          <button
            type="button"
            onClick={() => scrollToSection("gallery")}
          >
            Gallery
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={openWhatsApp}
          >
            Contact
          </button>
        </li>

      </ul>


      {/* Desktop Visit Button */}
      <button
        className="visit-btn"
        onClick={openWhatsApp}
      >
        Visit Us
      </button>


      {/* Mobile Toggle */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen
            ? "Close menu"
            : "Open menu"
        }
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <ul>

          <li>
            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>

          <li>
            <Link
              to="/menu"
              onClick={closeMenu}
            >
              Menu
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={() => scrollToSection("menu")}
            >
              Gallery
            </button>
          </li>

          <li>
            <button
              type="button"
              onClick={openWhatsApp}
            >
              Contact
            </button>
          </li>

        </ul>


        {/* Mobile Visit Button */}
        <button
          className="mobile-visit-btn"
          onClick={openWhatsApp}
        >
          Visit Us
        </button>

      </div>

    </nav>
  );
}

export default Navbar;