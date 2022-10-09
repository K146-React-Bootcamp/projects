import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

const getInitialCart = () => {
  const value = window.localStorage.getItem("cart");
  if (value) {
    return JSON.parse(value);
  }
  return {}
}
root.render(
	<CartProvider initialState={getInitialCart()}>
		<App />
	</CartProvider>
);
