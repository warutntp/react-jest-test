import { render, screen } from "@testing-library/react";
import Valid from "../Valid";

it("Test Valid", () => {
  render(<Valid />);
  expect(screen.getByTestId("no-aria-invalid")).toBeValid();
  expect(screen.getByTestId("aria-invalid")).not.toBeValid();
  expect(screen.getByTestId("aria-invalid-value")).not.toBeValid();
  expect(screen.getByTestId("aria-invalid-false")).toBeValid();

  expect(screen.getByTestId("valid-form")).toBeValid();
  expect(screen.getByTestId("invalid-form")).not.toBeValid();
});
