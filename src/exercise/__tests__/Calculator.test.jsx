import { describe, it, expect } from "vitest";
import calculator from "../Calculator";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });
  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("Addition", () => {
  it("addition of positive number", () => {
    expect(calculator(2, 2)).toBe(4);
  });
  it("addition of negative number", () => {
    expect(calculator(0, 1)).toBe(1);
  });
  it("addition of negative and positive number", () => {
    expect(calculator(2, -2)).toBe(0);
  });
});
