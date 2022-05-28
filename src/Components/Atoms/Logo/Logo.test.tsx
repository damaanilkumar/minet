import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

test('should render Logo', () => {
  render(<Logo  />);
  const linkElement = screen.getByAltText('minet')
  expect(linkElement).toBeInTheDocument();
})   