import * as React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./Cards";
import { fireEvent } from "highcharts";

test("Check the values in the card", () => {
  render(
    <Card
    id= '1' 
    title="Bitcoin"
    price="$3,406,069.54"
    onClick={() => null}
    imagePath="/assets/bitcoin,jpg"
    />
  );
  const title = screen.getByTestId("card");
  expect(title).toBeInTheDocument();
  
  const price = screen.getByTestId("card");
  expect(price).toBeInTheDocument();
  
  const id = screen.getByTestId("card");
  expect(id).toBeInTheDocument();
  
  const image = screen.getByTestId("card");
  expect(image).toBeInTheDocument();

  const btn=screen.getByTestId("card");
  expect(btn).toBeInTheDocument();

});
