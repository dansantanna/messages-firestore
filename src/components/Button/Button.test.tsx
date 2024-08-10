import { render, screen } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  test("Should render without errors", () => {
    render(<Button>Click Me</Button>);

    const button = screen.getByText("Click Me");
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });

  test("Should render correctly when disabled", () => {
    render(<Button disabled>Disabled</Button>);

    const button = screen.getByText("Disabled");
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });
});
