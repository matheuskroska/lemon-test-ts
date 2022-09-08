import React, { createContext } from "react";

const ThemeContext = createContext<ThemeContextType>({
  toggle: false,
  toggleColor: false,
  toggleFunction: () => {},
  toggleColorFunction: () => {}
});

interface ThemeContextType {
  toggle: boolean;
  toggleColor: boolean;
  toggleFunction: () => void;
  toggleColorFunction: () => void;
}

const ThemeProvider = ({ children }: any) => {
  const [toggle, setToggle] = React.useState(true);
  const [toggleColor, setToggleColor] = React.useState(true);

  const toggleFunction = () => {
    setToggle(!toggle);
  };

  const toggleColorFunction = () => {
    setToggleColor(!toggleColor)
  }


  return <ThemeContext.Provider value={{ toggle, toggleColor, toggleFunction, toggleColorFunction }}>{children}</ThemeContext.Provider>;
};

export { ThemeContext, ThemeProvider };
