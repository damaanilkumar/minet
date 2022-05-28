import { render, screen } from '@testing-library/react';
import ActiveTransaction from './ActiveTransaction';

 
test('renders the content', () => {
  render( <ActiveTransaction />)
  const contentElement = screen.getByText("My portfolio");
  expect(contentElement).toBeInTheDocument();
});
test('renders the text', () => {
    render( <ActiveTransaction />)
    const textElement = screen.getByText("Total Balance");
    expect(textElement).toBeInTheDocument();
  });
  test('renders the title', () => {
    render( <ActiveTransaction />)
    const titleElement = screen.getByText("Recent transactions");
    expect(titleElement).toBeInTheDocument();
  });
   
  