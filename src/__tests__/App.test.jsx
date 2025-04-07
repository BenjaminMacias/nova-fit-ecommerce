// src/__tests__/App.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

const renderAtRoute = (route = "/") => {
  window.history.pushState({}, "Test page", route);
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  );
};

describe("App", () => {
  test("renderiza Home en ruta /", () => {
    renderAtRoute("/");
    expect(screen.getByText(/leggings proflex/i)).toBeInTheDocument(); // ✅ Esto sí aparece
  });

  test("renderiza Login en /login", () => {
    renderAtRoute("/login");
    expect(screen.getByPlaceholderText(/correo electrónico/i)).toBeInTheDocument();
  });

  test("renderiza Cart en /cart", () => {
    renderAtRoute("/cart");
    expect(screen.getByText(/carrito de compras/i)).toBeInTheDocument();
  });
});
