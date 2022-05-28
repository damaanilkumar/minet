
import { fireEvent, render, screen } from '@testing-library/react';

import Nav from './NavBarLoad';

test('it renders Images', () => {
  render(<Nav width={'44px'} height={'22px'} size={'large'} />);
  const Element = screen.getByTestId("navbar");
  expect(Element).toBeInTheDocument();
});

test('it renders Icons', () => {
  render(<Nav width={'44px'} height={'22px'} size={'large'} />);
  const logoElement = screen.getByTestId("navbar");
  expect(logoElement).toBeInTheDocument();
});

test('it renders dashboard Icons', () => {
  render(<Nav width={'44px'} height={'22px'} size={'large'} />);
  const dashboard = screen.getByTestId("navbar");
  expect(dashboard).toBeInTheDocument();
});

test('it renders notification Icons', () => {
  render(<Nav width={'44px'} height={'22px'} size={'large'} />);
  const notification = screen.getByTestId("navbar");
  expect(notification).toBeInTheDocument();
});

test('it renders logout Icons', () => {
  render(<Nav width={'44px'} height={'22px'} size={'large'} />);
  const logout = screen.getByTestId("navbar");
  expect(logout).toBeInTheDocument();
});

test('it renders stock Icons', () => {
  render(<Nav width={'44px'} height={'22px'} size={'large'} />);
  const stock = screen.getByTestId("navbar");
  expect(stock).toBeInTheDocument();
});
test('it renders portfolio Icons', () => {
  render(<Nav width={'44px'} height={'22px'} size={'large'} />);
  const portfolio = screen.getByTestId("navbar");
  expect(portfolio).toBeInTheDocument();
});
test('it renders trade Icons', () => {
  render(<Nav width={'44px'} height={'22px'} size={'large'} />);
  const trade = screen.getByTestId("navbar");
  expect(trade).toBeInTheDocument();
});