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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(()=>{
    const newCount = cartItems.reduce((prev,item)=>prev + item.quantity, 0)
    setCartCount(newCount)
  }, [cartItems])

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    setCartItems(newCartItems);
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
