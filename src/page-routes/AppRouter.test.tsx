import { type JSX } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AppRouter from "./AppRouter";

// Mock views
vi.mock("../views", () => ({
  Login: () => <h1>Login Page</h1>,
  Home: () => <h1>Home Page</h1>,
}));

// Mock PopUpProvider
vi.mock("../contexts", () => ({
  PopUpProvider: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

describe("AppRouter", () => {
  it("renders Login page at /", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });


  it("renders Login page at /login", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AppRouter />
      </MemoryRouter>
    );

    expect(screen.getByText("Login Page")).toBeInTheDocument();
  });
});

vi.mock(".", () => ({
  ProtectedRoutes: ({ children }: { children: JSX.Element }) => children,
}));

it("renders Home when authenticated", () => {
  render(
    <MemoryRouter initialEntries={["/Home"]}>
      <AppRouter />
    </MemoryRouter>
  );

  expect(screen.getByText("Login Page")).toBeInTheDocument();
});


vi.mock(".", () => ({
  ProtectedRoutes: () => <Navigate to="/login" />,
}));

it("redirects to Login when not authenticated", () => {
  render(
    <MemoryRouter initialEntries={["/home"]}>
      <AppRouter />
    </MemoryRouter>
  );

  expect(screen.getByText("Login Page")).toBeInTheDocument();
});


