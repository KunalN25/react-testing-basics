import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DomTesting from "../components/MyTest/DomTesting";

import * as services from "../utils/Services";

jest.mock("axios");

const mockData = [
  {
    username: "krishu",
    age: 22,
    hobbies: ["coding", "reading-books"],
  },
  {
    username: "lalit",
    age: 22,
    hobbies: ["coding", "badminton"],
  },
];

// axios.get.mockResolvedValue({data:mockData})
//get:jest.fn().mockResolveValue({data:mockData});

test("show heading after changing state", async () => {
  render(<DomTesting />);
  const stateButton = screen.getByRole("button");

  await userEvent.click(stateButton);

  //   expect(screen.getByText("Clicked Successfully"));
});

test("testing api call", async () => {
  const mockFetchUsers = jest
    .spyOn(services, "FetchUsers")
    .mockImplementation(async () => {
      return mockData;
    });
  //   jest.get.mockResolvedValue({ data: mockData });
  render(<DomTesting />);

  expect(mockFetchUsers).toHaveBeenCalled();

  await waitFor(() => {
    expect(screen.getByText(/lalit/i)).toBeInTheDocument();
  });
});
