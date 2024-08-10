import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  coverageDirectory: "./coverage",
  moduleNameMapper: {
    "\\.(css|svg|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/config/mocks/fileMock.ts",
    "@/(.*)": "<rootDir>/src/$1",
  },
};

export default config;
