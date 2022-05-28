import { fireEvent, render, screen } from '@testing-library/react';
import Template from './Template';
import { MemoryRouter } from "react-router-dom";

const MockTemplate = (
  <MemoryRouter>
    <Template />
  </MemoryRouter>
);
test("should Display Navbar", () => {
  render(MockTemplate );
  
  const buy = screen.getAllByRole("button");
  expect(buy[0]).toBeInTheDocument();
});

test("should Display at header", () => {
  render(MockTemplate);
  const sell = screen.getAllByRole("button");
  expect(sell[1]).toBeInTheDocument();
});

test('it renders Images', () => {
    render(MockTemplate);
    const Element = screen.getByText("Checkout");
    expect(Element).toBeInTheDocument();
  });
  test("when clicked on buy, sell should disappear",()=>{
    render( MockTemplate);
     const Buy=screen.getAllByRole("button");
      fireEvent.click(Buy[1]);
      const check=screen.queryByText("You are selling");
      expect(check).toBeNull();
    });
    
    test("when clicked on sell, buy should disappear",()=>{
      render( MockTemplate );
       const Sell=screen.getAllByRole("button");
        fireEvent.click(Sell[0]);
        const check=screen.queryByText("My portfolio");
        expect(check).toBeNull();
      });
      test('it renders stock Icons in template', () => {
        render(MockTemplate);
        const stock = screen.getByTestId("navbar");
        expect(stock).toBeInTheDocument();
      });
      test('it renders portfolio Icons in template', () => {
        render(MockTemplate);
        const portfolio = screen.getByTestId("navbar");
        expect(portfolio).toBeInTheDocument();
      });
      test('it renders trade Icons in template', () => {
        render(MockTemplate);
        const trade = screen.getByTestId("navbar");
        expect(trade).toBeInTheDocument();
      });