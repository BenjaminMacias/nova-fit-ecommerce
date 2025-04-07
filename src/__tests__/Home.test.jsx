import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { store } from "../store";
import theme from "../styles/theme";

describe("Home", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Home />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  });

  test("renderiza productos", () => {
    expect(screen.getByText(/Leggings ProFlex/i)).toBeInTheDocument();
    expect(screen.getByText(/Playera DryFit Nova/i)).toBeInTheDocument();
    expect(screen.getByText(/Sudadera NovaFit Max/i)).toBeInTheDocument();
  });

  test("muestra precio de los productos", () => {
    expect(screen.getByText("$799")).toBeInTheDocument();
    expect(screen.getByText("$599")).toBeInTheDocument();
    expect(screen.getByText("$999")).toBeInTheDocument();
  });

  test("muestra botón 'Agregar al carrito'", () => {
    const buttons = screen.getAllByText(/Agregar al carrito/i);
    expect(buttons.length).toBeGreaterThan(0);
  });
});
