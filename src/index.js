import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import { ShopSucculentsProvider } from "./contexts/shop-succulents.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ShopSucculentsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ShopSucculentsProvider>
    </HashRouter>
  </React.StrictMode>
);
