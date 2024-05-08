import { fireEvent, render, screen } from "@testing-library/react";
import EventClickAndCheckRoleAndCount from "../EventClickAndCheckRoleAndCount";

it("Test ContainElement", () => {
  render(<EventClickAndCheckRoleAndCount />);

  const fetchDataButton = screen.getByRole("button", { name: "fetch data" });
  const clearDataButton = screen.getByRole("button", { name: "clear data" });

  // Test fetchDataButton is present
  expect(fetchDataButton).toBeInTheDocument();
  // Test clearDataButton is present
  expect(clearDataButton).toBeInTheDocument();

  //Simulate fetch data multiple times
  fireEvent.click(fetchDataButton);
  expect(screen.getAllByRole("item").length).toBe(4);
  fireEvent.click(fetchDataButton);
  expect(screen.getAllByRole("item").length).toBe(8);
  fireEvent.click(fetchDataButton);
  expect(screen.getAllByRole("item").length).toBe(12);

  // Clear data and check list items are removed
  fireEvent.click(clearDataButton);
  expect(screen.queryByRole("item")).not.toBeInTheDocument();
});
