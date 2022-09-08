import { ReactNode, useEffect } from "react";
import * as D from "./Dialog.styled";
import * as B from "../Button/index";

/**
 * DialogProps is an object with optional title and children properties, a required isOpen property, a
 * required closeOnOverlayClick property, a required swapAnimation property, and a required onClose
 * property.
 * @property {string} title - The title of the dialog.
 * @property {boolean} isOpen - boolean - Whether the dialog is open or not.
 * @property {boolean} closeOnOverlayClick - boolean
 * @property {ReactNode} children - The content of the dialog.
 * @property {boolean} swapAnimation - boolean
 * @property onClose - This is a function that will be called when the user clicks on the overlay or
 * the close button.
 */
interface DialogProps {
  title?: string;
  isOpen: boolean;
  closeOnOverlayClick: boolean;
  children?: ReactNode;
  onClose: () => void;
}

export const Dialog = ({ title = "Dialog", closeOnOverlayClick, onClose, children, isOpen, ...props }: DialogProps) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  });

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  return (
    <>
      <D.Overlay data-testid='overlay-modal' onClick={handleClose} />
      <D.Dialog {...props}>
        <D.Wrapper>
          <D.Title>{title}</D.Title>
          <B.Button variant="close-button" onClick={onClose}>
          </B.Button>
        </D.Wrapper>
        <D.Wrapper>
          <D.Paragraph>{children}</D.Paragraph>
        </D.Wrapper>
      </D.Dialog>
    </>
  );
};
