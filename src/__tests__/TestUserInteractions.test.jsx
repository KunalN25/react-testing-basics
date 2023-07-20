import { render, screen } from "@testing-library/react";
import TestUserInteractions from "../components/TestUserInteractions";
import userEvent from "@testing-library/user-event";

test("User interaction", () => {
  render(<TestUserInteractions />);

  // const inputElement = screen.getByRole('textbox')
  const nameInput = screen.getByPlaceholderText(/enter name/i);
  const descrInput = screen.getByPlaceholderText(/enter description/i);
  const passwordInput = screen.getByLabelText(/enter password/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  const applyButton = screen.getByRole("button", { name: /apply/i });

  expect(nameInput).toBeInTheDocument();
  expect(descrInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

  userEvent.click(submitButton);
  userEvent.click(applyButton);
});
