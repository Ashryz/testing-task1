import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckboxWithLabel from "./CheckboxWithLabel";

describe("Test CheckboxWithLabel Component", () => {
  beforeEach(() => {
    render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
  });
  //Test initial Rendering with lableoff value
  test("Test initial Rendering with lableoff value", () => {
    // container=>div
    // render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
    // screen
    // screen.queryByLabelText(/off/)
    // expect(value).matchers(expected value)
    // pass,fail
    expect(screen.queryByLabelText(/off/i)).toBeInTheDocument();
  });
  // Test Render after click lable
  test("Test Render after click lable", () => {
    // render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);
    // fire event using code
    userEvent.click(screen.queryByLabelText(/off/i));
    expect(screen.queryByLabelText(/on/i)).toBeInTheDocument();
  });
});
// suite
