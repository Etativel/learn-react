import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import Ppp from "../Ppp";

describe("App", () => {
  it("renders headline", () => {
    render(<Ppp />);

    screen.debug();

    expect(screen.getByRole("heading").textContent).toBe("react");
  });

  it("Ppp componenet", () => {
    const { container } = render(<Ppp />);

    expect(container).toMatchSnapshot();
  });

  it("user click", async () => {
    render(<Ppp />);

    // const button = screen.getByRole("button", { name: "Click me" });
    const button = screen.getByText("click me", { exact: false });

    await userEvent.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/yellow/i);
  });
});
