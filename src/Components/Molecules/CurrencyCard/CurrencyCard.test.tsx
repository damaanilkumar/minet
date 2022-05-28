import React from "react";
import { render, screen } from "@testing-library/react";
import CurrencyCard from "./CurrencyCard";

test('renders the mentioned currency', () => {
    render( < CurrencyCard coinName="bitcoin" />)
    const Ele = screen.getByText("bitcoin");
    expect(Ele).toBeInTheDocument();
    });  
    
        