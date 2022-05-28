import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Wallet from "./Wallet";

test("check if it is button", () => {
    render(
        <BrowserRouter>
    <Wallet />
    </BrowserRouter>);
    const btn = screen.getAllByRole("button");
    expect(btn[0]).toBeInTheDocument();
  });
  

  test("check if buy crypto button is there", () => {
    render(
        <BrowserRouter>
    <Wallet />
    </BrowserRouter>
    );
    const btn = screen.queryByRole("button",{name:'BUY CRYPTO'});
    expect(btn).toBeInTheDocument();
  });

  test("check if go to usd coin button is there", () => {
    render(
        <BrowserRouter>
    <Wallet />
    </BrowserRouter>
    );
    const btn1 = screen.queryByRole("button",{name:'GO TO USD COIN'});
    expect(btn1).toBeInTheDocument();
  });
  test("check if it is item", () => {
    render(<BrowserRouter>
        <Wallet />
        </BrowserRouter>);
    const ig = screen.getAllByRole("img");
    expect(ig[0]).toBeInTheDocument();
  });


  test("check if it is text", () => {
    render(<BrowserRouter>
        <Wallet />
        </BrowserRouter>);
    const success = screen.getByText("Sell is completed, please check your");
    expect(success).toBeInTheDocument();
  });

  test("check if Bitcoin amount is displayed", () => {
    render(<BrowserRouter>
        <Wallet />
        </BrowserRouter>);
    const txtItem = screen.getByText("0.0234510 BTC");
    expect(txtItem).toBeInTheDocument();
  });

 