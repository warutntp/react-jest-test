import React from "react";
import { render, screen } from "@testing-library/react";
import HaveValue from "../HaveValue";

it("Test HaveValue", () => {
  render(<HaveValue />);
  const textInput = screen.getByTestId("input-text");
  const numberInput = screen.getByTestId("input-number");
  const emptyInput = screen.getByTestId("input-empty");
  const selectInput = screen.getByTestId("select-number");

  //check whether the given form element has the specified value.
  expect(textInput).toHaveValue("text");
  expect(numberInput).toHaveValue(5);
  expect(emptyInput).not.toHaveValue();
  expect(selectInput).toHaveValue(["second", "third"]);
});
