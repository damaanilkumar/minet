import { render, screen } from '@testing-library/react';
import Typography from './Typography';
test('renders Text passed from prop', () => {
render(
     <Typography variant="h5" content={'hello'} />
   );
  const typoElement = screen.getByText(/hello/i);
  expect(typoElement).toBeInTheDocument();
});