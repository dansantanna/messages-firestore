import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import useMessages from "./hooks/useMessages";
import formatDateTime from "utils/formatDateTime";

jest.mock("./hooks/useMessages");

describe("<App />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar o componente corretamente", () => {
    (useMessages as jest.Mock).mockReturnValue({
      messages: [],
      addMessage: jest.fn(),
    });

    render(<App />);

    expect(screen.getByRole("img")).toBeInTheDocument();

    expect(screen.getByText("Digite um texto abaixo")).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Insira sua mensagem*")
    ).toBeInTheDocument();

    expect(screen.getByText("Enviar")).toBeDisabled();

    expect(screen.getByText("Mensagens enviadas")).toBeInTheDocument();
  });

  it("deve permitir digitar e enviar uma mensagem", () => {
    const mockAddMessage = jest.fn();

    (useMessages as jest.Mock).mockReturnValue({
      messages: [],
      addMessage: mockAddMessage,
    });

    render(<App />);

    const inputElement = screen.getByPlaceholderText("Insira sua mensagem*");
    const buttonElement = screen.getByText("Enviar");

    fireEvent.change(inputElement, { target: { value: "Nova mensagem" } });

    expect(buttonElement).not.toBeDisabled();

    fireEvent.click(buttonElement);

    expect(mockAddMessage).toHaveBeenCalledWith("Nova mensagem");

    expect(inputElement).toHaveValue("");
  });

  it("deve exibir as mensagens enviadas", () => {
    const mockMessages = [
      {
        id: "1",
        text: "Primeira mensagem",
        createdAt: { toDate: () => new Date("2023-08-09T10:00:00Z") },
      },
      {
        id: "2",
        text: "Segunda mensagem",
        createdAt: { toDate: () => new Date("2023-08-09T11:00:00Z") },
      },
    ];

    (useMessages as jest.Mock).mockReturnValue({
      messages: mockMessages,
      addMessage: jest.fn(),
    });

    render(<App />);

    mockMessages.forEach((message) => {
      expect(screen.getByText(message.text)).toBeInTheDocument();
      expect(
        screen.getByText(formatDateTime(message.createdAt.toDate()))
      ).toBeInTheDocument();
    });
  });
});
