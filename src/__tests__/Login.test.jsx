import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import { store } from "../store";

describe("Login", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Login />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  });

  test("renderiza el formulario", () => {
    expect(screen.getByPlaceholderText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
  });

  test("muestra botón para ingresar", () => {
    expect(screen.getByRole("button", { name: /Ingresar/i })).toBeInTheDocument();
  });

  test("permite ingresar texto en el formulario", () => {
    const emailInput = screen.getByPlaceholderText(/Correo electrónico/i);
    const passwordInput = screen.getByPlaceholderText(/Contraseña/i);

    fireEvent.change(emailInput, { target: { value: "benny@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput.value).toBe("benny@example.com");
    expect(passwordInput.value).toBe("123456");
  });
});
