import { render, screen } from "@testing-library/react";
import Heading from ".";

describe("<Heading />", () => {
  it("Should render Heading component with correct tag", () => {
    const { container } = render(<Heading>Test Heading</Heading>);

    expect(container.querySelector("h2")).toBeInTheDocument();
  });

  it("renders Heading component with correct text", () => {
    render(<Heading>Test Heading</Heading>);

    // Verifica se o texto correto está presente
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
  });
});
