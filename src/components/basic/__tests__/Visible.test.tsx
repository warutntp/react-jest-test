import { render, screen } from "@testing-library/react";
import Visible from "../Visible";

it("Test Visible", () => {
  render(<Visible />);
  expect(screen.getByText("Zero Opacity Example")).not.toBeVisible();
  expect(screen.getByText("Visibility Hidden Example")).not.toBeVisible();
  expect(screen.getByText("Display None Example")).not.toBeVisible();
  expect(screen.getByText("Hidden Parent Example")).not.toBeVisible();
  expect(screen.getByText("Visible Example")).toBeVisible();
  expect(screen.getByText("Hidden Attribute Example")).not.toBeVisible();
  expect(screen.getByText("Hidden Details Example")).not.toBeVisible();
  expect(screen.getByText("Visible Details Example")).toBeVisible();
});
