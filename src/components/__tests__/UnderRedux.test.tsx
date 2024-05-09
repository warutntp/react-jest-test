import { fireEvent, render, screen } from "@testing-library/react";
import UnderRedux from "../UnderRedux";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("UnderRedux Component Tests", () => {
  it("displays initial state correctly", () => {
    render(
      <Provider store={store}>
        <UnderRedux />
      </Provider>
    );
    expect(screen.getByText("App: 0")).toBeInTheDocument();
  });

  it("increments state on 'add' button click", () => {
    render(
      <Provider store={store}>
        <UnderRedux />
      </Provider>
    );
    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(screen.getByText("App: 1")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    expect(screen.getByText("App: 2")).toBeInTheDocument();
  });

  it("resets state on 'reset' button click", () => {
    render(
      <Provider store={store}>
        <UnderRedux />
      </Provider>
    );
    fireEvent.click(screen.getByRole("button", { name: /add/i }));
    fireEvent.click(screen.getByRole("button", { name: /reset/i }));
    expect(screen.getByText("App: 10")).toBeInTheDocument(); // Assuming reset should set the state to 0
  });
});
