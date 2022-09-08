import styled from "styled-components";
import * as T from "../ToggleButton/ToggleButton.styled";

export const Container = styled.div`
  ${T.Container} + ${T.Container} {
    border-top: 1px solid rgb(237 237 237);
  }
  
  max-width: 450px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid rgb(237 237 237);
  border-radius: 0px;
  margin-top: 65px;
  background: linear-gradient(225deg, #ffffff, #ffffff);
  box-shadow: -14px 14px 0px ${props => props.theme.boxDetailLeft}, 14px -14px 0px ${props => props.theme.boxDetailRight};
`;
export const Wrapper = styled.div``;
