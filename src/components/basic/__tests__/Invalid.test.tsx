import React from "react";
import { render, screen } from "@testing-library/react";
import Invalid from "../Invalid";

it("Test Invalid", () => {
  render(<Invalid />);
  expect(screen.getByTestId("no-aria-invalid")).not.toBeInvalid();
  expect(screen.getByTestId("aria-invalid")).toBeInvalid();
  expect(screen.getByTestId("aria-invalid-value")).toBeInvalid();
  expect(screen.getByTestId("aria-invalid-false")).not.toBeInvalid();

  expect(screen.getByTestId("valid-form")).not.toBeInvalid();
  expect(screen.getByTestId("invalid-form")).toBeInvalid();
});
