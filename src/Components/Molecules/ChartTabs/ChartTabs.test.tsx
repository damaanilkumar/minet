import { render, screen } from '@testing-library/react';
import ChartTabs from './ChartTabs';

test('renders the mentioned title', () => {
render( < ChartTabs />)
  const typoElement = screen.getByText("1H");
  expect(typoElement).toBeInTheDocument();
});  

test('renders the mentioned tabs', () => {
    render( < ChartTabs />)
      const typoElement = screen.getByText("24H");
      expect(typoElement).toBeInTheDocument();
    });  

    test('renders the items in tabs', () => {
        render( < ChartTabs />)
          const typoElement = screen.getByText("1W");
          expect(typoElement).toBeInTheDocument();
        });  

test('renders the details', () => {
render( < ChartTabs />)
const typoElement = screen.getByText("1M");
expect(typoElement).toBeInTheDocument();
 });  

 test('renders the years', () => {
    render( < ChartTabs />)
    const typoElement = screen.getByText("1Y");
    expect(typoElement).toBeInTheDocument();
     });  

     test('renders the items', () => {
        render( < ChartTabs />)
        const typoElement = screen.getByText("ALL");
        expect(typoElement).toBeInTheDocument();
         });  