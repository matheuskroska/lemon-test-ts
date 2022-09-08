import React from "react";
import { ReactNode, useEffect, useState } from "react";
import * as S from "./SmoothRender.styled";

/**
 * SmoothRenderProps is an object with two properties: children and animateFrom.
 *
 * children is a ReactNode, which is a type that can be anything that can be rendered in React.
 *
 * animateFrom is a string that can be either "bottomUp" or "ltr".
 * @property {ReactNode} children - ReactNode - This is the content that will be animated.
 * @property {"bottomUp" | "ltr"} animateFrom - This is the direction from which the animation will
 * start.
 */

interface SmoothRenderProps {
  children: ReactNode;
  variant?: "bottomUp" | "leftToRight";
  isOpen: boolean;
  onClose: () => void;
}

export const SmoothRender = ({ children, variant, isOpen, onClose, ...props }: SmoothRenderProps) => {
  const [animateClass, setAnimateClass] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setAnimateClass(true);
    } else {
      onClose();
      setAnimateClass(false);
    }
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen &&(
        <S.Container variant={variant} animate={animateClass} {...props}>
          {children}
        </S.Container>
    )}
    </>
    
    
  );
};
