import "./components/index";
import { GlobalStyle } from "./components/index";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import React from "react";
import { ThemeContext } from "./context/context";

import {ThemeProviderStyled} from './config/ThemeProviderStyled'
import {Dark} from './config/themes/dark'
import {Light} from './config/themes/light'

function App() {
  const { toggleColor} = React.useContext(ThemeContext);
 
  return (
    <ThemeProviderStyled theme={toggleColor ? Light : Dark}>
        <GlobalStyle />
        <Header />
        <Home />
    </ThemeProviderStyled>
  );
}

export default App;
