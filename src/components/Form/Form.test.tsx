import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from ".";
import useMessages from "hooks/useMessages";

jest.mock("hooks/useMessages");

describe("<Form />", () => {
  const mockAddMessage = jest.fn();
  (useMessages as jest.Mock).mockReturnValue({
    messages: [],
    addMessage: mockAddMessage,
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should render correctly", () => {
    render(<Form />);

    expect(screen.getByText("Digite um texto abaixo")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Insira sua mensagem*")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Enviar/i })).toBeInTheDocument();
  });

  it("Should disable button when input is empty", () => {
    render(<Form />);

    const button = screen.getByRole("button", { name: /Enviar/i });
    expect(button).toBeDisabled();
  });

  it("Should enable button when input is not empty", () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Insira sua mensagem*");
    fireEvent.change(input, { target: { value: "Test message" } });

    const button = screen.getByRole("button", { name: /Enviar/i });
    expect(button).toBeEnabled();
  });

  it("Should call addMessage with the correct value on button click", async () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Insira sua mensagem*");
    fireEvent.change(input, { target: { value: "Test message" } });

    const button = screen.getByRole("button", { name: /Enviar/i });
    fireEvent.click(button);

    await waitFor(() =>
      expect(mockAddMessage).toHaveBeenCalledWith("Test message")
    );
  });

  it("Should clear input after button click", () => {
    render(<Form />);

    const input = screen.getByPlaceholderText("Insira sua mensagem*");
    fireEvent.change(input, { target: { value: "Test message" } });

    const button = screen.getByRole("button", { name: /Enviar/i });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
