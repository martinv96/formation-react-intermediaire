import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import "./MainNav.css";

const MainNav = () => {
  const { darkMode, switchDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`main-nav ${darkMode ? "dark" : "light"}`}>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
        <li>
          <Link to="/futurama">Futurama</Link>
        </li>
        <li>
          <Link to="/inscription">S'inscrire</Link>
        </li>
        <li className="account">
          <Link to="/compte">Mon compte</Link>
        </li>
        <li>
          <button className="theme-toggle" onClick={switchDarkMode}>
            {darkMode ? "☀" : "🌙"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;