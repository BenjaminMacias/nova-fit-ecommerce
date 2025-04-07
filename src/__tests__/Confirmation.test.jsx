import React from "react";
import { render, screen } from "@testing-library/react";
import Confirmation from "../pages/Confirmation";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { store } from "../store"; // ✅ Importación con nombre
import theme from "../styles/theme";

describe("Confirmation", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Confirmation />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  });

  test("muestra mensaje de confirmación", () => {
    expect(screen.getByText(/¡Gracias por tu compra!/i)).toBeInTheDocument();
  });

  test("muestra botón para regresar al inicio", () => {
    expect(screen.getByRole("link", { name: /Volver al inicio/i })).toBeInTheDocument();
  });
});
