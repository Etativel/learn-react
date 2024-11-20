import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Ppp from "../Ppp";

describe("App", () => {
  it("renders headline", () => {
    render(<Ppp title="React" />);

    screen.debug();

    expect(screen.getByRole("heading").textContent).toBe("React");
  });
});
