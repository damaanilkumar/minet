import { render, screen } from '@testing-library/react';
import CryptoList from './CryptoList';

test('renders the mentioned bitcoin', () => {
render( < CryptoList />)
  const list = screen.getAllByRole("list");
  expect(list[0]).toBeInTheDocument();
});  

test('renders the mentioned Ethereum', () => {
    render( < CryptoList />)
      const list = screen.getByRole("list");
      expect(list).toBeInTheDocument();
    });  

test('renders the mentioned XRP', () => {
    render( < CryptoList />)
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
        });  
test('renders the mentioned Ethereum2', () => {
    render( < CryptoList />)
    const list = screen.getByRole("list");
     expect(list).toBeInTheDocument();
        });  
test('renders the mentioned tether', () => {
    render( < CryptoList />)
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
         }); 
test('renders the mentioned polkadot', () => {
    render( < CryptoList />)
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
        });  
        test('renders the mentioned dogecoin', () => {
            render( < CryptoList />)
            const list = screen.getByRole("list");
            expect(list).toBeInTheDocument();
                });  
                        