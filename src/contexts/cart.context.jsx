import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.id !== itemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce((prev, item) => prev + item.quantity, 0);
    setCartCount(newCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );
    setCartTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    setCartItems(newCartItems);
  };
  const removeItemFromCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    setCartItems(newCartItems);
  };
  const clearItemFromCart = (itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    setCartItems(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
