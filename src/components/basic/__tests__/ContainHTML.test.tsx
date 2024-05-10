import { render, screen } from "@testing-library/react";
import ContainHTML from "../ContainHTML";

it("Test ContainHTML", () => {
  render(<ContainHTML />);
  // These are valid uses
  expect(screen.getByTestId("parent")).toContainHTML(
    '<span data-testid="child"></span>'
  );
  expect(screen.getByTestId("parent")).toContainHTML(
    '<span data-testid="child" />'
  );
  expect(screen.getByTestId("parent")).not.toContainHTML("<br />");

  // These won't work
  expect(screen.getByTestId("parent")).toContainHTML('data-testid="child"');
  expect(screen.getByTestId("parent")).toContainHTML("data-testid");
  expect(screen.getByTestId("parent")).toContainHTML("</span>");
});
