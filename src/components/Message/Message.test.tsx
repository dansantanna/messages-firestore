import { render, screen } from "@testing-library/react";
import Message from ".";
import formatDateTime from "utils/formatDateTime";
import { IMessage } from "hooks/useMessages/types";

jest.mock("utils/formatDateTime", () => jest.fn());

describe("<Message />", () => {
  test("Should render Message component with text and formatted date", () => {
    const mockDate = new Date();
    const formattedDate = "2024-08-09 10:00";
    (formatDateTime as jest.Mock).mockReturnValue(formattedDate);

    const mockTimestamp = {
      seconds: Math.floor(mockDate.getTime() / 1000),
      nanoseconds: 0,
      toDate: () => mockDate,
      isEqual: (other: { seconds: number; nanoseconds: number }) => {
        return (
          other.seconds === mockTimestamp.seconds &&
          other.nanoseconds === mockTimestamp.nanoseconds
        );
      },
      toMillis: () => mockDate.getTime(),
      toJSON: () => mockDate.toISOString(),
    };

    const messageProps: IMessage = {
      id: "id_test",
      text: "Hello, world!",
      createdAt: mockTimestamp as any,
    };

    render(<Message {...messageProps} />);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    expect(screen.getByText(formattedDate)).toBeInTheDocument();
  });

  test("Should render Message component with placeholder text when createdAt is null", () => {
    const messageProps: IMessage = {
      id: "id_test",
      text: "Hello, world!",
      createdAt: undefined,
    };

    render(<Message {...messageProps} />);

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    expect(screen.getByText("Salvando...")).toBeInTheDocument();
  });
});
