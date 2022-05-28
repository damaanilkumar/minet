import { render, screen } from '@testing-library/react';
import Countables from './Countables';

 
test('renders the text which is useful', () => {

  render( < Countables  />) 
  const coins = screen.getByText("Bitcoin");
  expect(coins).toBeInTheDocument();
});

test('renders text which is useful', () => {

    render( < Countables  />) 
    const coins = screen.getByText("Ethereum");
    expect(coins).toBeInTheDocument();
  });

  test('renders the text  is useful', () => {

    render( < Countables  />) 
    const coins = screen.getByText("Ethereum 2");
    expect(coins).toBeInTheDocument();
  });

  test('renders which coin is useful', () => {

    render( < Countables  />) 
    const coins = screen.getByText("Tether");
    expect(coins).toBeInTheDocument();
  });

  test('renders the value is useful', () => {

    render( < Countables  />) 
    const coinValue = screen.getByText("$3,00,439.93");
    expect(coinValue).toBeInTheDocument();
  });