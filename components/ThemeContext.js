import React, { useState } from "react";
export const ThemeContext = React.createContext();
export const ThemProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);
  //false IS Light
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
