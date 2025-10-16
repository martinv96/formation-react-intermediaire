import Header from "./Header";
import Footer from "./Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import { Home, About, NotFound, Futurama } from "../pages";
import {
  ThemeProvider,
  ThemeContext,
} from "@/contexts/ThemeContext/ThemeContext";
import { useContext } from "react";
import "./Root.css";
import { FuturamaProvider } from "@/contexts/FuturamaContext/FuturamaContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "futurama",
        element: <FuturamaProvider><Futurama /></FuturamaProvider>,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Layout = () => {
  return (
    <ThemeProvider>
      <LayoutContent />
    </ThemeProvider>
  );
};

const LayoutContent = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`app-layout ${darkMode ? "dark" : "light"}`}>
      <Header />
      <main className="main-content">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
