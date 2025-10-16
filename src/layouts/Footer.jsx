import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={`main-foot ${darkMode ? "dark" : "light"}`}>
      <p className="copyright">© 2025 FuturamaFolio</p>
    </footer>
  );
};

export default Footer;
