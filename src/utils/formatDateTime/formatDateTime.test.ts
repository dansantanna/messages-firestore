import formatDateTime from ".";

describe("formatDateTime", () => {
  it("should format a date correctly with single digit day and month", () => {
    const date = new Date(2024, 1, 3, 7, 9);
    const formattedDateTime = formatDateTime(date);
    expect(formattedDateTime).toBe("03/02/2024 - 07h09");
  });

  it("should format a date correctly with double digit day and month", () => {
    const date = new Date(2024, 10, 23, 14, 30);
    const formattedDateTime = formatDateTime(date);
    expect(formattedDateTime).toBe("23/11/2024 - 14h30");
  });

  it("should format a date correctly with double digit hour and minute", () => {
    const date = new Date(2024, 5, 15, 16, 45);
    const formattedDateTime = formatDateTime(date);
    expect(formattedDateTime).toBe("15/06/2024 - 16h45");
  });

  it("should format a date correctly at midnight", () => {
    const date = new Date(2024, 0, 1, 0, 0);
    const formattedDateTime = formatDateTime(date);
    expect(formattedDateTime).toBe("01/01/2024 - 00h00");
  });

  it("should format a date correctly at noon", () => {
    const date = new Date(2024, 6, 10, 12, 0);
    const formattedDateTime = formatDateTime(date);
    expect(formattedDateTime).toBe("10/07/2024 - 12h00");
  });

  it("should handle single digit minutes correctly", () => {
    const date = new Date(2024, 3, 20, 8, 5);
    const formattedDateTime = formatDateTime(date);
    expect(formattedDateTime).toBe("20/04/2024 - 08h05");
  });
});
