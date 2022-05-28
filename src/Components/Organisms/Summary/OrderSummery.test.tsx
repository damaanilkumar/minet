

import React from "react";
import { render, screen } from "@testing-library/react";
import Summery from "./OrderSummery";


test("check if it is present", () => {
    render(<Summery buttonText={"hi"} buttonColor={"secondary"} captionText={"You are buying"} />);
    const typo = screen.getByText("You are buying");
  expect(typo).toBeInTheDocument();
  });

  test("check if it is button", () => {
    render(<Summery buttonText={"hello"} buttonColor={"secondary"} captionText={"click me"} />);
    const btn = screen.getAllByRole("button");
    expect(btn[0]).toBeInTheDocument();
  });

  test("check if it is not present", () => {
    render(<Summery buttonText={"hi"} buttonColor={"secondary"} captionText={"You are selling"} />);
    const typo = screen.getByText("You are selling");
  expect(typo).toBeInTheDocument();
  });

  
    