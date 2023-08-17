import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar al carrito
  const addToCart = (product) => {};
  // Limpiar el carrito
  const clearToCart = () => {
    setCart([]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id != product.id));
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        clearToCart,
        cart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
