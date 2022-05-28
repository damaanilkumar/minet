import { render, screen } from "@testing-library/react";
import Editor from "./Editor";

it("renders the icons", () => {
  render(<Editor />);
  const ReactElement = screen.getByTestId("editor");
  expect(ReactElement).toBeInTheDocument();
});