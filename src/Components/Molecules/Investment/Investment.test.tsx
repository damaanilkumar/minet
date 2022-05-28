import React from "react";
import { render, screen } from "@testing-library/react";
import Investment from "./Investment";

test('renders the mentioned title', () => {
    render( < Investment />)
    const typeElement = screen.getByText("My portfolio value");
    expect(typeElement).toBeInTheDocument();
    });  
    test('renders the mentioned text', () => {
        render( < Investment />)
        const textElement = screen.getByText("Total Investment");
        expect(textElement).toBeInTheDocument();
        });  
        test('renders the mentioned value', () => {
            render( < Investment />)
            const Value = screen.getByText("+0.00%");
            expect(Value).toBeInTheDocument();
            });  
            