import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = product => {};
  const clearToCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearToCart,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
