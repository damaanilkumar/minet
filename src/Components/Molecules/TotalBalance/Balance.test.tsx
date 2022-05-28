import { render, screen } from '@testing-library/react';
import Balance from './Balance';

 
test('renders the text', () => {

  render( < Balance />)
  const typoElement = screen.getByText("Total Balance");
  expect(typoElement).toBeInTheDocument();
});
  