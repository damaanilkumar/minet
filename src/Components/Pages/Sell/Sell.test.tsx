import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Sell from "./Sell";



test("check if buy crypto button is there", () => {
    render(
        <BrowserRouter>
    <Sell />
    </BrowserRouter>
    );
    const textElement = screen.getByText("Checkout");
    expect(textElement).toBeInTheDocument();
  });

  
  test("check if it is button", () => {
    render(
        <BrowserRouter>
    <Sell />
    </BrowserRouter>);
    const buy = screen.getAllByRole("button");
    expect(buy[0]).toBeInTheDocument();
  });

  test("check which button is it", () => {
    render(
        <BrowserRouter>
    <Sell />
    </BrowserRouter>);
    const sell = screen.getAllByRole("button");
    expect(sell[1]).toBeInTheDocument();
  });

  test("check if it is item", () => {
    render(<BrowserRouter>
        <Sell />
        </BrowserRouter>);
    const ig = screen.getAllByRole("img");
    expect(ig[0]).toBeInTheDocument();
  });

  test("check if Bitcoin amount is displayed", () => {
    render(<BrowserRouter>
        <Sell />
        </BrowserRouter>);
    const txtItem = screen.getByText("Checkout");
    expect(txtItem).toBeInTheDocument();
  });
 
  test("check if it is an image", () => {
    render(<BrowserRouter>
        <Sell />
        </BrowserRouter>);
    const ig = screen.getAllByRole("img");
    expect(ig[1]).toBeInTheDocument();
  });
 
  test("when clicked on buy, sell should disappear",()=>{
    render( <BrowserRouter>
      <Sell />
      </BrowserRouter> );
     const Buy=screen.getAllByRole("button");
      fireEvent.click(Buy[1]);
      const check=screen.queryByText("Watchlist");
      expect(check).toBeNull();
    });
    
    test("check if crypto button is there", () => {
      render(
          <BrowserRouter>
      <Sell />
      </BrowserRouter>
      );
      const textElement = screen.getByText("You are selling");
      expect(textElement).toBeInTheDocument();
    });
    test("when clicked on Sell now, buy should disappear",()=>{
      render( <BrowserRouter>
        <Sell />
        </BrowserRouter> );
       const SellNow=screen.getAllByRole("button");
        fireEvent.click(SellNow[0]);
        const check=screen.queryByText("Sell is completed, please check your");
        expect(check).toBeNull();
      });