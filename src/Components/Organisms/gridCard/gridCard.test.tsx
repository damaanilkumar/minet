import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';
import GridCard from "./gridCard";
import "@testing-library/jest-dom";

test("check if it is present", () => {
    render( <BrowserRouter>
        <GridCard />
        </BrowserRouter> );
    const name = screen.getByText("Choose crypto")
    expect(name).toBeInTheDocument();
  });
 
 
 