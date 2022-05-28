import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

it("renders the avatar", () => {
  render(<Profile />);
  const ReactElement = screen.getByTestId("profile");
  expect(ReactElement).toBeInTheDocument();
});