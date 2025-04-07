import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import Checkout from "../pages/Checkout";
import { store } from "../store";
import theme from "../styles/theme";

const renderCheckout = () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={["/checkout"]}>
          <Checkout />
        </MemoryRouter>
      </ThemeProvider>
    </Provider>
  );
};

describe("Checkout Page", () => {
  beforeEach(() => {
    renderCheckout();
  });

  test("renderiza el título 'Finalizar Compra'", () => {
    expect(
      screen.getByRole("heading", { name: /finalizar compra/i })
    ).toBeInTheDocument();
  });

  test("renderiza el botón 'Confirmar Compra'", () => {
    expect(
      screen.getByRole("button", { name: /confirmar compra/i })
    ).toBeInTheDocument();
  });

  test("renderiza campo con placeholder de dirección", () => {
    expect(
      screen.getByPlaceholderText(/calle, número, ciudad/i)
    ).toBeInTheDocument();
  });
});
