import styled, { css } from "styled-components";

interface ContainerProps {
  animate?: boolean;
  variant?: "bottomUp" | "leftToRight";
}

export const Container = styled.div<ContainerProps>`

    > div, > main, > section {
    opacity: ${(props) => (props.animate ? "1" : "0")};
    transition: 0.5s all ease-in-out;
    ${(props) =>
      props.variant === "bottomUp" &&
      css<ContainerProps>`
        transform: ${(props) => (props.animate ? "translateY(0)" : "translateY(100vh);")};
      `};

    ${(props) =>
      props.variant === "leftToRight" &&
      css<ContainerProps>`
        transform: ${(props) => (props.animate ? "translateY(0)" : "translateX(-50vh);")};
      `};
  }
`;


export const Item = styled.div`
  height: 96px;
  width: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #026C00;
  text-align: center;
`

