

import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";


test("check if it is present", () => {
    render(<Footer />);
    const name = screen.getByTestId("footer")
    expect(name).toBeInTheDocument();
  });

  test("check if it is button", () => {
    render(<Footer />);
    const btn = screen.getAllByRole("button");
    expect(btn[0]).toBeInTheDocument();
  });

  test("check if it is text", () => {
    render(<Footer />);
    const bttn = screen.getByText("© 2021 Minet");
    expect(bttn).toBeInTheDocument();
  });