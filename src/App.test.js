import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const typeIntoInputsElements = ({ email, password, confirmPassword }) => {
  const emailInputElement = screen.getByLabelText("Email address");
  const passwordInputElement = screen.getByLabelText("Password");
  const confirmPasswordInputElement = screen.getByLabelText("Confirm Password");

  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword);
  }

  return {
    emailInputElement,
    passwordInputElement,
    confirmPasswordInputElement,
  };
};

describe("Test App Component", () => {
  // teardown &setup

  beforeEach(() => {
    render(<App />);
  });

  test("Test initial inputs values", () => {
    expect(screen.getByLabelText("Email address").value).toBe("");
    expect(screen.getByLabelText("Password").value).toBe("");
    expect(screen.getByLabelText("Confirm Password").value).toBe("");
  });

  test("Test inputs values after typing", () => {
    let { emailInputElement } = typeIntoInputsElements({
      email: "amira@gmail.com",
    });
    let { passwordInputElement } = typeIntoInputsElements({
      password: "abc123",
    });
    expect(emailInputElement.value).toBe("amira@gmail.com");
    expect(passwordInputElement.value).toBe("abc123");
  });

  test("Test Show Error if inputs with invalid data", () => {
    let { emailInputElement } = typeIntoInputsElements({
      email: "amira@gmail.com",
    });
    let { passwordInputElement } = typeIntoInputsElements({
      email: "abc",
    });

    let btn = screen.getByRole("button", { name: /Submit/i });
    // userEvent.click(btn);
    fireEvent.click(btn)
    expect(
      screen.queryByText(/The email you input is invalid./i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/The password you entered should contain 5 or more characters./i)
    ).toBeInTheDocument();
  });
});
