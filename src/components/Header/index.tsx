import * as H from "./Header.styled";
import * as B from "../Button";
import { ReactComponent as Logo } from "../../assets/images/layout/logo.svg";
import { ReactComponent as LogoLemon } from "../../assets/images/layout/logo-lemon.svg";
import { ThemeContext } from "../../context/context";
import React from "react";

export const Header = () => {
  const { toggle, toggleColor, toggleFunction, toggleColorFunction } = React.useContext(ThemeContext);

  return (
    <H.Header>
      <H.Wrapper>
        <B.Button onClick={toggleFunction} variant={toggle ? "back-button" : "next-button"}></B.Button>
        <H.Logo>
          <LogoLemon/>
          <Logo />
        </H.Logo>
        <B.Button onClick={toggleColorFunction} variant={toggleColor ? "light-mode" : "dark-mode"}></B.Button>
      </H.Wrapper>
    </H.Header>
  );
};
