import { render, screen } from "@testing-library/react";
import Logo from ".";
import logo from "assets/logo.svg";

describe("Logo component", () => {
  test("renders Logo component with correct image source", () => {
    render(<Logo />);

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();

    expect(image).toHaveAttribute("src", logo);
  });
});
