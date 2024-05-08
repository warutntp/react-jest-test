import React from "react";
import { render, screen } from "@testing-library/react";
import CountElement from "../CountElement";

it("Test CountElement", () => {
  render(<CountElement />);
  //check quantity of element
  expect(screen.getAllByTestId("li").length).toBe(4);
});
