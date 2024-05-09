import { render, screen } from "@testing-library/react";
import Async from "../Async";
import axios from "axios";
import * as Cal from "../../utils/cal";

describe("Async Component", () => {
  const fakeUser = {
    name: "Sarah Corner",
    age: "65",
    address: "456 Texas",
  };

  const axiosMock = jest.spyOn(axios, "get");
  const calMock = jest.spyOn(Cal, "add");

  afterEach(() => {
    axiosMock.mockClear();
    calMock.mockClear();
  });

  it("displays user data and calculation result", async () => {
    axiosMock.mockResolvedValue({ data: fakeUser });
    calMock.mockReturnValue(65);

    const id = "123";
    render(<Async id={id} />);

    expect(await screen.findByText("Sarah Corner")).toBeInTheDocument();
    expect(await screen.findByText("Add: 65")).toBeInTheDocument();

    expect(axiosMock).toHaveBeenCalledWith(`http://localhost:8081/api`);
    expect(calMock).toHaveBeenCalledWith(6, 6);
  });
});
