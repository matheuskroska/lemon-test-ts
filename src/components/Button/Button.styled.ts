import styled, { css } from "styled-components";

interface ButtonProps {
  variant: "close-button" | "primary" | "back-button" | "next-button" | "dark-mode" | "light-mode";
}

const baseButton = css`
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
  user-select: none;
  padding: 16px;
  display: flex;
  max-height: 48px;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: center;
  font-size: 1.6em;
  letter-spacing: -0.032em;
  font-weight: 400;
  font-family: Inter;

  &:hover {
    svg {
      path,
      rect {
        transition: 0.3s all ease-in-out;
        stroke: #000;
      }
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  ${baseButton}
  ${(props) =>
    props.variant === "close-button" &&
    css<ButtonProps>`
      padding: 0;
      background-color: initial;
      svg {
        path {
          fill: ${(props) => props.theme.textColor};
        }
      }

      &:hover {
        svg {
          path {
            fill: ${(props) => props.theme.textColor};
          }
        }
      }
    `};
  ${(props) =>
    props.variant === "primary" &&
    css<ButtonProps>`
      background-color: ${(props) => props.theme.backgroundBtn};
      color: ${(props) => props.theme.textBtn};
      width: 100%;
      &:hover {
        background-color: ${(props) => props.theme.backgroundBtnHover};
        color: ${(props) => props.theme.textBtnHover};
      }
    `};
  ${(props) =>
    props.variant === "back-button" &&
    css<ButtonProps>`
      padding: 0;
      background-color: initial;
      svg {
        path,
        rect {
          stroke: ${(props) => props.theme.iconColor};
        }
      }
    `};
  ${(props) =>
    props.variant === "next-button" &&
    css<ButtonProps>`
      padding: 0;
      background-color: initial;
      transition: 0.3s all ease-in-out;
      transform: rotate(-180deg);

      svg {
        path,
        rect {
          stroke: ${(props) => props.theme.iconColor};
        }
      }
    `};
  ${(props) =>
    props.variant === "dark-mode" &&
    css<ButtonProps>`
      padding: 0;
      background-color: initial;
      transition: 0.3s all ease-in-out;

      svg {
        stroke: ${(props) => props.theme.iconColor};
      }
    `};
  ${(props) =>
    props.variant === "light-mode" &&
    css<ButtonProps>`
      padding: 0;
      background-color: initial;
      transition: 0.3s all ease-in-out;
    `};
`;
