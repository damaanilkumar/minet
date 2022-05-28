import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Buy from "./Buy";


test("check if it is button", () => {
    render(
        <BrowserRouter>
        <Buy />
        </BrowserRouter>);
    const btn = screen.getAllByRole("button");
    expect(btn.length).toBe(6);
  });
  test("check if buy crypto button is there", () => {
    render(
        <BrowserRouter>
    <Buy />
    </BrowserRouter>
    );
    const btn = screen.queryByRole("button",{name:'BUY CRYPTO'});
    expect(btn).toBeInTheDocument();
  });

  test("check if go to usd coin button is there", () => {
    render(
        <BrowserRouter>
    <Buy />
    </BrowserRouter>
    );
    const btn = screen.queryByRole("button",{name:'GO TO USD COIN'});
    expect(btn).toBeInTheDocument();
  });

  test("check if Success text is displayed", () => {
    render(<BrowserRouter>
        <Buy />
        </BrowserRouter>);
    const success = screen.getByText("Purchase is completed, please check your");
    expect(success).toBeInTheDocument();
  });

  test("check if Success image is rendered", () => {
    render(<BrowserRouter>
        <Buy />
        </BrowserRouter>);
    const ig = screen.getAllByRole("img");
    expect(ig[0]).toBeInTheDocument();
  });

  test("check if Bitcoin amount is displayed", () => {
    render(<BrowserRouter>
        <Buy />
        </BrowserRouter>);
    const txtItem = screen.getByText("0.0234510 BTC");
    expect(txtItem).toBeInTheDocument();
  });
