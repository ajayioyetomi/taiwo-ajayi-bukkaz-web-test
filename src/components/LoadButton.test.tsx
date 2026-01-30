import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LoadButton from "./LoadButton";

// Mock the LoadingIcon SVG to avoid rendering issues
vi.mock("../assets/loading-icon.svg?react", () => ({
  default: (props: any) => <svg data-testid="loading-icon" {...props}></svg>,
}));

describe("LoadButton component", () => {
  it("renders children when not loading", () => {
    render(<LoadButton>Click Me</LoadButton>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
    expect(screen.queryByText("Loading")).not.toBeInTheDocument();
    expect(screen.queryByTestId("loading-icon")).not.toBeInTheDocument();
  });

  it("renders 'Loading' and the loading icon when isLoading is true", () => {
    render(<LoadButton isLoading>Click Me</LoadButton>);
    expect(screen.getByText("Loading")).toBeInTheDocument();
    expect(screen.queryByText("Click Me")).not.toBeInTheDocument();
    expect(screen.getByTestId("loading-icon")).toBeInTheDocument();
  });
  
  it("fires onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<LoadButton onClick={handleClick}>Click</LoadButton>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("can be disabled", () => {
    render(
      <LoadButton disabled>Disabled</LoadButton>
    );
    const button = screen.getByText("Disabled") as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  // Negative: Loading icon not rendered when not loading
  it("does not render loading icon when not loading", () => {
    render(<LoadButton>Click</LoadButton>);
    expect(screen.queryByTestId("loading-icon")).not.toBeInTheDocument();
  });
});
