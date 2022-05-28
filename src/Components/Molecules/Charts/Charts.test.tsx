import React from "react";
import { render, screen } from "@testing-library/react";
import Charts from "./Charts";

test("Check the values in the card", () => {
 render( < Charts selectedCoinName='BITCOIN'/>)
        const typoElement = screen.getByText("My portfolio value");
        expect(typoElement).toBeInTheDocument();
      }); 
