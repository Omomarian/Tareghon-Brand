import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </CartContext.Provider>
  );
};
