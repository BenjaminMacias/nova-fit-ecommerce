/*import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { store } from "../store";
import Register from "../pages/Register";

describe("Register", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Register />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  });

  test("renderiza inputs de registro", () => {
    expect(screen.getByPlaceholderText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Contraseña/i)).toBeInTheDocument();
  });

  test("muestra botón de registrarse", () => {
    expect(screen.getByRole("button", { name: /registrarse/i })).toBeInTheDocument();
  });

  test("permite escribir en el formulario", async () => {
    const user = userEvent.setup();
    const emailInput = screen.getByPlaceholderText(/Correo electrónico/i);
    const passwordInput = screen.getByPlaceholderText(/Contraseña/i);

    await user.type(emailInput, "benjamin@nova.com");
    await user.type(passwordInput, "123456");

    expect(emailInput).toHaveValue("benjamin@nova.com");
    expect(passwordInput).toHaveValue("123456");
  });
});
*/
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/userSlice";
import Register from "../pages/Register";
import theme from "../styles/theme";

// Crear un store de prueba solo con el slice necesario
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const renderRegister = () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/register"]}>
          <Register />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe("Register Page", () => {
  test("permite escribir email y contraseña", async () => {
    renderRegister();

    const emailInput = screen.getByPlaceholderText(/correo/i);
    const passwordInput = screen.getByPlaceholderText(/contraseña/i);

    await userEvent.type(emailInput, "benny@example.com");
    await userEvent.type(passwordInput, "12345678");

    expect(emailInput).toHaveValue("benny@example.com");
    expect(passwordInput).toHaveValue("12345678");
  });

  test("renderiza el botón de registro", () => {
    renderRegister();
    expect(screen.getByRole("button", { name: /registrarse/i })).toBeInTheDocument();
  });
});
