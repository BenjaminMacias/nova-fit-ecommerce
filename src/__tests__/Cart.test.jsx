import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice";
import theme from "../styles/theme";

const customStore = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: {
    cart: {
      items: [
        { id: 1, name: "Leggings", quantity: 2, price: 500, image: "/fake.jpg" }
      ],
    },
  },
});

describe("Cart", () => {
  beforeEach(() => {
    render(
      <Provider store={customStore}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Cart />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  });

  test("renderiza el título", () => {
    expect(screen.getByText(/Carrito de Compras/i)).toBeInTheDocument();
  });

  test("muestra nombre del producto", () => {
    expect(screen.getByText(/Leggings/i)).toBeInTheDocument();
  });

  test("muestra cantidad del producto", () => {
    expect(screen.getByText(/Cantidad: 2/i)).toBeInTheDocument();
  });
});
