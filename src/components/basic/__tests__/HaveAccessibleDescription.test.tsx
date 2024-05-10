import React from "react";
import { render, screen } from "@testing-library/react";
import HaveAccessibleDescription from "../HaveAccessibleDescription";

it("Test HaveAccessibleDescription", () => {
  render(<HaveAccessibleDescription />);
  expect(screen.getByTestId("link")).toHaveAccessibleDescription();
  expect(screen.getByTestId("link")).toHaveAccessibleDescription(
    "A link to start over"
  );
  expect(screen.getByTestId("link")).not.toHaveAccessibleDescription(
    "Home page"
  );
  expect(screen.getByTestId("extra-link")).not.toHaveAccessibleDescription();
  expect(screen.getByTestId("avatar")).not.toHaveAccessibleDescription();
  expect(screen.getByTestId("logo")).not.toHaveAccessibleDescription(
    "Company logo"
  );
  expect(screen.getByTestId("logo")).toHaveAccessibleDescription(
    "The logo of Our Company"
  );
});
