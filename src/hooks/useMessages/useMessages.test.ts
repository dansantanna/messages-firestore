import {
  addDoc,
  collection,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import useMessages from ".";
import getFirestoreDb from "services/firestore";
import { act } from "react";
import { renderHook } from "@testing-library/react";

jest.mock("firebase/firestore", () => ({
  addDoc: jest.fn(),
  collection: jest.fn(),
  onSnapshot: jest.fn(),
  serverTimestamp: jest.fn(),
}));

jest.mock("services/firestore", () => jest.fn());

describe("useMessages", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should initialize with an empty list of messages", () => {
    (onSnapshot as jest.Mock).mockImplementation(() => jest.fn());
    const { result } = renderHook(() => useMessages());
    expect(result.current.messages).toEqual([]);
  });

  it("should update messages when Firestore snapshot changes", () => {
    const mockDocs = [
      { id: "1", data: () => ({ text: "Hello", createdAt: new Date() }) },
      { id: "2", data: () => ({ text: "World", createdAt: new Date() }) },
    ];

    (onSnapshot as jest.Mock).mockImplementation((_, callback) => {
      callback({ docs: mockDocs });
      return jest.fn();
    });

    const { result } = renderHook(() => useMessages());

    expect(result.current.messages).toEqual([
      { id: "1", text: "Hello", createdAt: expect.any(Date) },
      { id: "2", text: "World", createdAt: expect.any(Date) },
    ]);
  });

  it("should add a new message to Firestore", async () => {
    const mockDb = {};
    (getFirestoreDb as jest.Mock).mockReturnValue(mockDb);
    const mockCollection = {};
    (collection as jest.Mock).mockReturnValue(mockCollection);
    (serverTimestamp as jest.Mock).mockReturnValue(new Date());

    const { result } = renderHook(() => useMessages());

    await act(async () => {
      await result.current.addMessage("Test message");
    });

    expect(addDoc).toHaveBeenCalledWith(mockCollection, {
      text: "Test message",
      createdAt: expect.any(Date),
    });
  });

  it("should handle errors when adding a new message", async () => {
    const mockError = new Error("Firestore error");
    (addDoc as jest.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useMessages());

    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

    await act(async () => {
      await result.current.addMessage("Test message");
    });

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Error adding document: ",
      mockError
    );

    consoleErrorSpy.mockRestore();
  });
});
