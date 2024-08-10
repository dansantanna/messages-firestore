import { render, screen } from "@testing-library/react";
import Page from ".";
import Logo from "components/Logo";
import Form from "components/Form";
import Messages from "components/Messages";

// Mocking the child components
jest.mock("components/Logo");
jest.mock("components/Form");
jest.mock("components/Messages");

describe("Page Component", () => {
  beforeEach(() => {
    // Mock implementations for the child components
    (Logo as jest.Mock).mockImplementation(() => <div>Mocked Logo</div>);
    (Form as jest.Mock).mockImplementation(() => <div>Mocked Form</div>);
    (Messages as jest.Mock).mockImplementation(() => (
      <div>Mocked Messages</div>
    ));
  });

  it("renders the Logo component", () => {
    render(<Page />);
    expect(screen.getByText("Mocked Logo")).toBeInTheDocument();
  });

  it("renders the Form component", () => {
    render(<Page />);
    expect(screen.getByText("Mocked Form")).toBeInTheDocument();
  });

  it("renders the Messages component", () => {
    render(<Page />);
    expect(screen.getByText("Mocked Messages")).toBeInTheDocument();
  });

  it("renders all components inside the Container", () => {
    const { container } = render(<Page />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
