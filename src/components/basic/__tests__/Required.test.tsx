import { render, screen } from "@testing-library/react";
import Required from "../Required";

it("Test Required", () => {
  render(<Required />);
  expect(screen.getByTestId("required-input")).toBeRequired();
  expect(screen.getByTestId("aria-required-input")).toBeRequired();
  expect(screen.getByTestId("conflicted-input")).toBeRequired();
  expect(screen.getByTestId("aria-not-required-input")).not.toBeRequired();
  expect(screen.getByTestId("optional-input")).not.toBeRequired();
  expect(screen.getByTestId("unsupported-type")).not.toBeRequired();
  expect(screen.getByTestId("select")).toBeRequired();
  expect(screen.getByTestId("textarea")).toBeRequired();
  expect(screen.getByTestId("supported-role")).not.toBeRequired();
  expect(screen.getByTestId("supported-role-aria")).toBeRequired();
});
