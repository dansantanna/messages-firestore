import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import getFirestoreDb from ".";

jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(),
}));

jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
}));

describe("getFirestoreDb", () => {
  const mockEnv = {
    VITE_APIKEY: "mockApiKey",
    VITE_AUTHDOMAIN: "mockAuthDomain",
    VITE_PROJECTID: "mockProjectId",
    VITE_STORAGEBUCKET: "mockStorageBucket",
    VITE_MESSAGINGSENDERID: "mockMessagingSenderId",
    VITE_APPID: "mockAppId",
    VITE_MEASUREMENTID: "mockMeasurementId",
  };

  beforeAll(() => {
    Object.defineProperty(process, "env", { value: mockEnv });
  });

  it("should initialize Firebase with the correct config and return Firestore instance", () => {
    const mockApp = jest.fn();
    const mockFirestore = jest.fn();

    (initializeApp as jest.Mock).mockReturnValue(mockApp);
    (getFirestore as jest.Mock).mockReturnValue(mockFirestore);

    const firestore = getFirestoreDb();

    expect(initializeApp).toHaveBeenCalledWith({
      apiKey: mockEnv.VITE_APIKEY,
      authDomain: mockEnv.VITE_AUTHDOMAIN,
      projectId: mockEnv.VITE_PROJECTID,
      storageBucket: mockEnv.VITE_STORAGEBUCKET,
      messagingSenderId: mockEnv.VITE_MESSAGINGSENDERID,
      appId: mockEnv.VITE_APPID,
      measurementId: mockEnv.VITE_MEASUREMENTID,
    });
    expect(getFirestore).toHaveBeenCalledWith(mockApp);
    expect(firestore).toBe(mockFirestore);
  });
});
