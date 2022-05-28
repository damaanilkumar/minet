
import { render, screen } from '@testing-library/react';
import Deposit from './deposit';

test('renders the mentioned title', () => {
render( < Deposit />)
  const typoElement = screen.getByText("Deposit to");
  expect(typoElement).toBeInTheDocument();
});  

test('renders the mentioned text', () => {
  render( < Deposit />)
    const text = screen.getAllByText("USD Coin (Cash)");
    expect(text[0]).toBeInTheDocument();
  });  
  
  test('renders the text', () => {
    render( < Deposit />)
      const text = screen.getByText("Default");
      expect(text).toBeInTheDocument();
    });  
    
    test('renders the image', () => {
      render( < Deposit />)
        const image = screen.getByTestId("deposit");
        expect(image).toBeInTheDocument();
      });  