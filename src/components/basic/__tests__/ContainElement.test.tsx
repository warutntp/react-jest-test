import React from "react";
import { render, screen } from "@testing-library/react";
import ContainElement from "../ContainElement";

it("Test ContainElement", () => {
  render(<ContainElement />);
  //check an element contains another element as a descendant or not.
  const ancestor = screen.getByTestId("ancestor");
  const descendant = screen.getByTestId("descendant");
  const nonExistantElement = screen.getByTestId("does-not-exist");

  expect(ancestor).toContainElement(descendant);
  expect(descendant).not.toContainElement(ancestor);
  expect(ancestor).not.toContainElement(nonExistantElement);
});
