import { Link } from "react-router-dom";
import  { useEffect } from 'react';
import { darkMode } from "../zustand/store";

//styles
import "@styles/NavBar.scss";

const NavBar = () => {

  const { darkTheme, setDarkTheme}= darkMode();

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkTheme]);

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
      </div>
    </header>
  );
};

export default NavBar;
