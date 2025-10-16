import { Outlet } from "react-router-dom";
import MainNav from "@/navigation/MainNav";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext/ThemeContext";
import "./Root.css";

const Root = () => {
  const { darkMode } = useContext(ThemeContext);
  const mainContentClassNames = darkMode
    ? "main-content dark-mode"
    : "main-content";

  return (
    <>
      <MainNav />
      <main className={mainContentClassNames}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
