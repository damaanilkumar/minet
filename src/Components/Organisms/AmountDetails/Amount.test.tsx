import { render, screen } from '@testing-library/react';
import Amount from './Amount';

 
test('renders the text which is useful', () => {

  render( < Amount buttonText={'buy max'} buttonColor={'warning'} content={'Amount details'} price={'$123'} convertedPrice={'$321'} />) 
  const typoElement = screen.getByText("Amount details");
  expect(typoElement).toBeInTheDocument();
});

test('renders the text which is similar', () => {

    render( < Amount buttonText={'sell max'} buttonColor={'primary'} content={'Amount details'} price={'$123'} convertedPrice={'$321'} />) 
    const typoElement = screen.getByText("Amount details");
    expect(typoElement).toBeInTheDocument();
  });