import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

it("renders the avatar", () => {
  render(<Avatar width='15px' height='15px' />);
  const ReactElement = screen.getByRole('img');
  expect(ReactElement).toBeInTheDocument();
});