import { render, screen, waitFor, cleanup } from "@testing-library/react";
import UserList from "../UserList";
import "@testing-library/jest-dom";

// Mocking fetch
global.fetch = jest.fn();

const mockUsers = {
  users: [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      company: { name: "TDooley, Kozey and Cronin" },
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Williams",
      company: { name: "Spinka - Dickinson" },
      email: "jmichael.williams@x.dummyjson.com",
      phone: "+49 258-627-6644",
    },
  ],
};
afterEach(() => {
  cleanup();
  fetch.mockClear();
});

describe("UserList Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("displays loading initially", async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockUsers),
    });

    render(<UserList />);
    await waitFor(() => {
      expect(screen.getByText(/loading users.../i)).toBeInTheDocument();
    });
  });

  test("renders users after fetch", async () => {
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockUsers),
    });

    render(<UserList />);

    await waitFor(() => {
      const emilyElements = screen.getAllByText(/Emily/i);
      expect(emilyElements.length).toBeGreaterThan(1);
      const michaelElements = screen.getAllByText(/Michael/i);
      expect(michaelElements.length).toBeGreaterThan(1);
    });
  });

  test("shows error message on fetch failure", async () => {
    fetch.mockRejectedValueOnce(new Error("API failure"));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/Error: API failure/i)).toBeInTheDocument();
    });
  });
});
