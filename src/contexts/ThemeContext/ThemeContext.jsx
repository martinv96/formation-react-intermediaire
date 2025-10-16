import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
    const [darkMode, setDarkMode] = useState(false);

    const switchDarkMode = () => {
        setDarkMode(() => !darkMode);
    };

  return (
    <ThemeContext.Provider value={{ 
        darkMode, switchDarkMode 
        }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;