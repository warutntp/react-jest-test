import React from "react";
import { render, screen } from "@testing-library/react";
import Disabled from "../Disabled";

it("Test Disabled", () => {
  render(<Disabled />);
  //check disabled on element
  expect(screen.getByTestId("button")).toBeDisabled();
  expect(screen.getByTestId("input")).toBeDisabled();
  expect(screen.getByText("button2")).not.toBeDisabled();
});
