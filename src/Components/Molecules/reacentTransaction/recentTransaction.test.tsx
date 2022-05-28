import { render, screen } from '@testing-library/react';
import RecentTransaction from './recentTransaction';

 
test('renders the text', () => {
  render( <RecentTransaction />)
  const typoElement = screen.getByText("June 23");
  expect(typoElement).toBeInTheDocument();
});

test('renders the given text', () => {
    render( <RecentTransaction />)
    const typoElement = screen.getAllByText("Bitcoin BTC");
    expect(typoElement[0]).toBeInTheDocument();
  });
  
  test('renders the texts', () => {
    render( <RecentTransaction />)
    const typo = screen.getByText("-0.0234510BTC");
    expect(typo).toBeInTheDocument();
  });
  
  
      