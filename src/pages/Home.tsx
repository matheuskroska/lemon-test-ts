import { useState } from "react";
import { LemonIpsum } from "../helpers/LemonIpsum";
import { ThemeContext } from "../context/context";
import React from "react";
import { Dialog } from "../components/Dialog";
import { Menu } from "../components/Menu";
import { Portal } from "../components/Portal";

import * as B from "../components/Button";
import * as T from "../components/ToggleButton";
import * as S from "../components/SmoothRender";
import * as H from "./Home.styled";
import { ReactComponent as LogoLemon } from "../assets/images/layout/logo-lemon.svg";


export const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState<boolean>(false);
  const [animationStyle, setAnimationStyle] = useState<boolean>(false);
  // const [lemonIpsum] = LemonIpsum();
  const { toggle} = React.useContext(ThemeContext);
 
  return (
    <H.Container>
      <div className="background"></div>
      <H.Wrapper>
        <S.SmoothRender isOpen={!toggle} onClose={() => undefined} variant={"leftToRight"}>
          <Menu>
            <T.ToggleButton title="Fechar ao clicar no overlay" onChange={() => setCloseOnOverlayClick(!closeOnOverlayClick)}></T.ToggleButton>
            <T.ToggleButton title="Trocar animação de abertura" variant="animationDirection" onChange={() => setAnimationStyle(!animationStyle)}></T.ToggleButton>
            <B.Button
              variant="primary"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Abrir Dialog
            </B.Button>
          </Menu>
        </S.SmoothRender>
        <Portal>
          <S.SmoothRender isOpen={isOpen} onClose={() => setIsOpen(false)} variant={animationStyle ? "leftToRight" : "bottomUp"}>
            <Dialog title={"Dialog Title"} closeOnOverlayClick={closeOnOverlayClick} isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {LemonIpsum()}
            </Dialog>
          </S.SmoothRender>
        </Portal>
      </H.Wrapper>
      <H.Wrapper>
        <H.Item>
          <LogoLemon/>
        </H.Item>          
      </H.Wrapper>
    </H.Container>
  );
};
