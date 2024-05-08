import React from "react";
import { render, screen } from "@testing-library/react";
import Demo1 from "../InTheDocument";

it("Test InTheDocument", () => {
  render(<Demo1 />);
  expect(screen.getByText(/ball/)).toBeInTheDocument();
  expect(screen.getByText("My name is ball")).toBeInTheDocument();
});
