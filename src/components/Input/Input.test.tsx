import { render, screen, fireEvent } from "@testing-library/react";
import Input from ".";

const mockOnChange = jest.fn();

describe("<Input />", () => {
  test("Should renders Input component with correct placeholder and id", () => {
    render(
      <Input
        id="test-id"
        placeholder="Test Placeholder"
        value=""
        onChange={mockOnChange}
      />
    );

    const input = screen.getByPlaceholderText("Test Placeholder");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "test-id");
  });

  test("Should shows label with placeholder text", () => {
    render(
      <Input
        id="test-id"
        placeholder="Test Placeholder"
        value=""
        onChange={mockOnChange}
      />
    );

    const label = screen.getByText("Test Placeholder");
    expect(label).toBeInTheDocument();
  });

  it("Should handle input value changes", () => {
    render(
      <Input
        id="test-id"
        placeholder="Test Placeholder"
        value=""
        onChange={mockOnChange}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Test Placeholder"), {
      target: { value: "New Value" },
    });
    expect(mockOnChange).toHaveBeenCalled();
  });

  it("focus and blur events should change label className", () => {
    const { container } = render(
      <Input
        id="test-id"
        placeholder="Test Placeholder"
        value=""
        onChange={mockOnChange}
      />
    );

    const label = container.querySelector("label");
    const input = container.querySelector("input");

    if (label && input) {
      fireEvent.focus(input);
      expect(label).toHaveClass("focused");

      fireEvent.blur(input);
      expect(label).not.toHaveClass("focused");
    } else {
      throw new Error("Label or input not found in the document");
    }
  });
});
