import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { darkMode } from "../zustand/store";

//styles
import "@styles/NavBar.scss";

const NavBar = () => {
  const { darkTheme, setDarkTheme } = darkMode();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkTheme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="navbar-container">
        <h1>
          <Link to="/">Hollywood smile</Link>
        </h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Početna</Link>
            </li>
            <li>
              <Link to="/about">O nama</Link>
            </li>
            <li>
              <Link to="/team">Naš tim</Link>
            </li>
            <li>
              <Link to="/services">Usluge</Link>
            </li>
            <li>
              <Link to="/pricing">Cenovnik</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
              <button className="booking-button" onClick={setDarkTheme}>
                Dark Mode
              </button>
            </li>
          </ul>
          <Link className="booking-button" to="/booking">
            Zakazivanje pregleda
          </Link>
        </nav>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Početna
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                O nama
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={toggleMobileMenu}>
                Naš tim
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMobileMenu}>
                Usluge
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={toggleMobileMenu}>
                Cenovnik
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu}>
                Kontakt
              </Link>
            </li>
            <li>
              <button
                className="booking-button"
                onClick={() => {
                  setDarkTheme();
                  toggleMobileMenu();
                }}
              >
                Dark Mode
              </button>
            </li>
            <li>
              <Link
                to="/booking"
                className="booking-button"
                onClick={toggleMobileMenu}
              >
                Zakazivanje pregleda
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
