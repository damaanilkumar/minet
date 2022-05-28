import { render, screen } from '@testing-library/react';
import PaymentMethod from './PaymentMethod';

 
test('renders the text', () => {

  render( < PaymentMethod />)
  const typoElement = screen.getByText("Payment Method");
  expect(typoElement).toBeInTheDocument();
});
