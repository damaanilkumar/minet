
import { render, screen } from '@testing-library/react';
import DropDown from './DropDown';

 
test('renders the text', () => {

  render( <DropDown />)
  const typoElement = screen.getByText("Select Speed Delivery");
  expect(typoElement).toBeInTheDocument();
});
  