import styled from "styled-components";


export const Header = styled.header`
  height: 85px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-top: 5px solid ${props => props.theme.detailsHeader};
  border-bottom: 1px solid ${props => props.theme.details};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0;

  svg:first-child {
    height: 20px;
    path,rect {
        fill: ${props => props.theme.outerLogo};
      }
  }
  
  svg:last-child {
    path,rect {
        fill: ${props => props.theme.textColor};
      }
  }

   &:hover {
    svg {
      path,rect {
        fill: ${props => props.theme.hover};
      }
      
    }
  }
`;
