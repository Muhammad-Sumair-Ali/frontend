import { useContext, useState, createContext } from "react";
import { themesData } from "../helpers/constants/theme.data";
import { message } from "antd";

const themeContext = createContext();

export const useTheme = () => useContext(themeContext);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme-ticket") || "cyan"
  );

  const themeChanger = (color) => {
    // console.log(color, "from theme changer");
    message.success("theme changed ....")
    localStorage.setItem("theme-ticket", color);
    setCurrentTheme(color);
  };

  const myobj = {
    themeChanger,
    theme: themesData[currentTheme],
  };

  return (
    <themeContext.Provider value={myobj}>{children}</themeContext.Provider>
  );
};

export default ThemeProvider;
