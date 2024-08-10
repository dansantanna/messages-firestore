import { render, screen } from "@testing-library/react";
import Messages from ".";
import useMessages from "hooks/useMessages";

jest.mock("hooks/useMessages");

describe("<Messages />", () => {
  it("Should render the Heading with correct text", () => {
    (useMessages as jest.Mock).mockReturnValue({ messages: [] });

    render(<Messages />);
    expect(screen.getByText("Mensagens enviadas")).toBeInTheDocument();
  });

  it("Should render the correct number of messages", () => {
    const mockMessages = [
      { id: "1", text: "First message" },
      { id: "2", text: "Second message" },
    ];

    (useMessages as jest.Mock).mockReturnValue({ messages: mockMessages });

    const { container } = render(<Messages />);

    expect(container.querySelectorAll(".message-container")).toHaveLength(
      mockMessages.length
    );
  });

  it("Should render a message with correct props", () => {
    const mockMessages = [{ id: "1", text: "First message" }];

    (useMessages as jest.Mock).mockReturnValue({ messages: mockMessages });

    render(<Messages />);

    expect(screen.getByText("First message")).toBeInTheDocument();
  });

  it("Should render no messages when the messages array is empty", () => {
    (useMessages as jest.Mock).mockReturnValue({ messages: [] });

    render(<Messages />);

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });
});
