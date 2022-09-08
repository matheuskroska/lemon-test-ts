import styled from "styled-components";

export const Container = styled.main`
  margin-top: 30px;
  padding: 0 30px;
`;
export const Wrapper = styled.section`
  width: 100%;
`;


export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.outerLogo};
    max-width: fit-content;
    margin: 0 auto;
    height: 96px;
    min-width: 96px;
    border: 1px solid ${props => props.theme.outerLogo};
    margin-top: 65px;
    path,rect {
        fill: ${props => props.theme.outerLogo};
      }
      background: linear-gradient(225deg, transparent, transparent);
  box-shadow: -14px 14px 0px ${props => props.theme.boxDetailLeft}, 14px -14px 0px ${props => props.theme.boxDetailRight};

`
