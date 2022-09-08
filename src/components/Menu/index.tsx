import { ReactNode } from "react";
import * as O from "./Menu.styled";

interface MenuProps {
  children: ReactNode;
}

export const Menu = ({ children, ...props }: MenuProps) => {
  return (
    <>
      <O.Container {...props}>
        <O.Wrapper>{children}</O.Wrapper>
      </O.Container>
    </>
  );
};
