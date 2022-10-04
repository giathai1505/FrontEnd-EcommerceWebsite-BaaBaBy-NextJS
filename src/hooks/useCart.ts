import { useEffect } from "react";
import { useRerender } from "./useRerender";

export const useCart = () => {
  const rerender = useRerender();

  useEffect(() => {
    cart.onUpdate(rerender);
  }, []);

  return {
    cartItems: cart.getCartItems(),
    totalCartItem: cart.getTotal(),
  };
};
