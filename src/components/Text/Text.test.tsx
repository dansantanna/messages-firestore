import { render, screen } from "@testing-library/react";
import Text from ".";

describe("<Text />", () => {
  it("Should render without error", () => {
    render(<Text>Default Text</Text>);

    expect(screen.getByText("Default Text")).toBeInTheDocument();
  });
});
