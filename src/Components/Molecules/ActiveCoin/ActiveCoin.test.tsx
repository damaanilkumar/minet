import React from "react";
import { render, screen } from "@testing-library/react";
import ActiveCoin from "./ActiveCoin";

test('renders the mentioned title', () => {
    render( < ActiveCoin />)
      const typoElement = screen.getByText("10 coins (3 active)");
      expect(typoElement).toBeInTheDocument();
    });  
    test('renders the mentioned text', () => {
        render( < ActiveCoin />)
          const textElement = screen.getByText("Click on currency name below to display it on the graph");
          expect(textElement).toBeInTheDocument();
        });  
        test('renders the mentioned button', () => {
            render( < ActiveCoin />)
              const button = screen.getAllByRole("button");
              expect(button[0]).toBeInTheDocument();
            });  
            test('renders the mentioned bitcoin button', () => {
                render( < ActiveCoin />)
                  const bitcoin = screen.getAllByRole("button");
                  expect(bitcoin[1]).toBeInTheDocument();
                });  
            test('renders the mentioned XRP button', () => {
                render( < ActiveCoin />)
                const XRP = screen.getAllByRole("button");
                expect(XRP[2]).toBeInTheDocument();
                });  
            test('renders the mentioned dogecoin button', () => {
                render( < ActiveCoin />)
                const dogecoin = screen.getAllByRole("button");
                expect(dogecoin[3]).toBeInTheDocument();
                });  
            test('renders the mentioned tether button', () => {
                render( < ActiveCoin />)
                const tether = screen.getAllByRole("button");
                expect(tether[4]).toBeInTheDocument();
                            });  
            test('renders the mentioned Ethereum button', () => {
                render( < ActiveCoin />)
                 const Ethereum = screen.getAllByRole("button");
                expect(Ethereum[5]).toBeInTheDocument();
         });  
         test('renders the mentioned polkadot button', () => {
            render( < ActiveCoin />)
             const polkadot = screen.getAllByRole("button");
            expect(polkadot[6]).toBeInTheDocument();
     });  

     