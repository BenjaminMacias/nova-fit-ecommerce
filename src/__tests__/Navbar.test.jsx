import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "../components/Navbar";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import userReducer from "../store/userSlice";
import theme from "../styles/theme";

import '@testing-library/jest-dom';

const renderWithProviders = (cartItems = [], user = null) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
    },
    preloadedState: {
      cart: { items: cartItems },
      user: { user },
    },
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

describe("Navbar", () => {
  test("muestra enlaces básicos", () => {
    renderWithProviders();
    expect(screen.getByText("NovaFit")).toBeInTheDocument();
    expect(screen.getByText("Inicio")).toBeInTheDocument();
    expect(screen.getByText("Carrito")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Registro")).toBeInTheDocument();
  });

  test("muestra cantidad de productos en el carrito", () => {
    renderWithProviders([{ id: 1, quantity: 2 }]);
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("muestra el email del usuario si está logueado", () => {
    renderWithProviders([], { email: "benny@example.com" });
    expect(screen.getByText(/Hola, benny@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/Cerrar sesión/i)).toBeInTheDocument();
  });
});
