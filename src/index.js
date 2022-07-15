import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ShopSucculentsProvider } from "./contexts/shop-succulents.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopSucculentsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ShopSucculentsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
