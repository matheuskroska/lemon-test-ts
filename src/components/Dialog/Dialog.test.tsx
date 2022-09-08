import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dialog } from "./index";

const handleClose = jest.fn();
const user = userEvent.setup();

it("dialog should close when escape key is pressed", async () => {
  render(<Dialog onClose={handleClose} isOpen={true} closeOnOverlayClick={false}/>);

  await user.keyboard("[Escape]");
  expect(handleClose).toHaveBeenCalledTimes(1);
});

it("dialog should close when close button is clicked", async () => {
  render(<Dialog onClose={handleClose} isOpen={true} closeOnOverlayClick={false}/>);

  await user.click(screen.getByRole("button"));
  expect(handleClose).toHaveBeenCalledTimes(1);
});

it("dialog should render title", async () => {
  render(<Dialog title={"Dialog Title"} closeOnOverlayClick={true} isOpen={true} onClose={handleClose}/>);

  expect(screen.getByText(/Dialog Title/)).toBeInTheDocument();
});

it("dialog should render children", async () => {
  render(
    <Dialog closeOnOverlayClick={true} isOpen={true} onClose={handleClose}>
      <p>content</p>
    </Dialog>
  );

  expect(screen.getByText(/content/)).toBeInTheDocument();
});

it("dialog should not render when isOpen false", async () => {
  const { container } = render(<Dialog onClose={handleClose} isOpen={false} closeOnOverlayClick={false}/>);

  expect(container).toBeEmptyDOMElement();
});

it("dialog should close when click overlay", async () => {
  render(<Dialog onClose={handleClose} isOpen={true} closeOnOverlayClick={true}/>);

  await user.click(screen.getByTestId("overlay-modal"));
  expect(handleClose).toHaveBeenCalledTimes(1);
});

it("dialog should not close when click overlay when closeOnOverClick is false", async () => {
  render(<Dialog onClose={handleClose} isOpen={true} closeOnOverlayClick={false}/>);

  await user.click(screen.getByTestId("overlay-modal"));
  expect(handleClose).not.toHaveBeenCalled();
});
