import { render, screen } from '@testing-library/react';
import MyWallet from './myWallet';

 
test('renders the text', () => {
render( <MyWallet /> );
  const typoElement = screen.getByText("My wallets");
  expect(typoElement).toBeInTheDocument();
});
test('renders the value', () => {
  render( <MyWallet /> );
    const val = screen.getByText("USD Coin");
    expect(val).toBeInTheDocument();
  });
  test('renders the properties given', () => {
    render( <MyWallet content='hii' /> );
      const prop = screen.getByText("hii");
      expect(prop).toBeInTheDocument();
    });
    