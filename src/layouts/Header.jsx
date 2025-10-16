import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";

const Header = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <header className={`main-head ${darkMode ? "dark" : "light"}`}>
      <h1>FuturamaFolio</h1>
    </header>
  );
};

export default Header;
