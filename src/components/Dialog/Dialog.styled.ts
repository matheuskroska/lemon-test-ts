import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0 32px;
  max-height: 70vh;
  overflow: auto;
`;
export const Dialog = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundDialog};
  left: 0;
  bottom: 0;
  max-height: 100vh;
  z-index: 100;

  ${Wrapper} + ${Wrapper} {
    padding-top: 24px;
  }

  ${Wrapper}:first-child {
    padding-top: 32px;
    padding-bottom: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ${Wrapper}:last-child {
    margin-bottom: 24px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000000cc;
  z-index: 99;
  transform: translateY(0) !important;
`;

export const Paragraph = styled.p`
  font-size: 1.8em;
  line-height: 24px;
  color: ${(props) => props.theme.textColor};
`;

export const Title = styled.h2`
  font-size: 2.2em;
  color: ${(props) => props.theme.textColor};
`;

export const Button = styled.button`
  
`;
