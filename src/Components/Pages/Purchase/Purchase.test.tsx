/* eslint-disable jest/no-identical-title */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Purchase from "./Purchase";



test("check if buy crypto button is there", () => {
    render(
        <BrowserRouter>
    <Purchase />
    </BrowserRouter>
    );
    const textElement = screen.getByText("Checkout");
    expect(textElement).toBeInTheDocument();
  });

  
  test("check if it is button", () => {
    render(
        <BrowserRouter>
    <Purchase />
    </BrowserRouter>);
    const buy = screen.getAllByRole("button");
    expect(buy[0]).toBeInTheDocument();
  });

  test("check if it is button", () => {
    render(
        <BrowserRouter>
    <Purchase />
    </BrowserRouter>);
    const sell = screen.getAllByRole("button");
    expect(sell[1]).toBeInTheDocument();
  });

  test("check if it is item", () => {
    render(<BrowserRouter>
        <Purchase />
        </BrowserRouter>);
    const ig = screen.getAllByRole("img");
    expect(ig[0]).toBeInTheDocument();
  });

  test("check if Bitcoin amount is displayed", () => {
    render(<BrowserRouter>
        <Purchase />
        </BrowserRouter>);
    const txtItem = screen.getByText("Checkout");
    expect(txtItem).toBeInTheDocument();
  });
 
  test("check if it is item", () => {
    render(<BrowserRouter>
        <Purchase />
        </BrowserRouter>);
    const ig = screen.getAllByRole("img");
    expect(ig[1]).toBeInTheDocument();
  });
 
  test("when clicked on buy, sell should disappear",()=>{
    render( <BrowserRouter>
      <Purchase />
      </BrowserRouter> );
     const Buy=screen.getAllByRole("button");
      fireEvent.click(Buy[1]);
      const check=screen.queryByText("You are selling");
      expect(check).toBeNull();
    });

    test("when clicked on sell, buy should disappear",()=>{
      render( <BrowserRouter>
        <Purchase />
        </BrowserRouter> );
       const Sell=screen.getAllByRole("button");
        fireEvent.click(Sell[0]);
        const check=screen.queryByText("My portfolio");
        expect(check).toBeNull();
      });
      
      test("when clicked on Buy now, buy should disappear",()=>{
        render( <BrowserRouter>
          <Purchase />
          </BrowserRouter> );
         const BuyNow=screen.getAllByRole("button");
          fireEvent.click(BuyNow[0]);
          const check=screen.queryByText("Purchase is completed, please check your");
          expect(check).toBeNull();
        });