import React from "react";
import { render, screen } from "@testing-library/react";
import EmptyDOMElement from "../EmptyDOMElement";

it("Test EmptyDOMElement", () => {
  render(<EmptyDOMElement />);
  //eslint-disable-next-line
  screen.debug();
  //check element has no visible content for the user.
  expect(screen.getByTestId("empty")).toBeEmptyDOMElement();
  expect(screen.getByTestId("not-empty")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("with-whitespace")).not.toBeEmptyDOMElement();
  expect(screen.getByTestId("with-comment")).not.toBeEmptyDOMElement();
});
