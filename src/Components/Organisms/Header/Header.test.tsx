import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";


const MockNavBar = (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
);
test("should Display Navbar", () => {
  render(MockNavBar);
  const buy = screen.getAllByRole("button");
  expect(buy[1]).toBeInTheDocument();
});

test("should not Display Navbar", () => {
  render(MockNavBar);
  const nav = screen.getAllByRole("button");
  expect(nav[0]).toBeInTheDocument();
});

test("when clicked on buy, sell should disappear",()=>{
render( MockNavBar );
 const Buy=screen.getAllByRole("button");
  fireEvent.click(Buy[1]);
  const check=screen.queryByText("You are selling");
  expect(check).toBeNull();
});

test("when clicked on sell, buy should disappear",()=>{
  render( MockNavBar );
   const Sell=screen.getAllByRole("button");
    fireEvent.click(Sell[0]);
    const check=screen.queryByText("My portfolio");
    expect(check).toBeNull();
  });
  