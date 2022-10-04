import { useCart } from "@hooks/useCart";
import React from "react";
import CartAddress from "./CartAddress";
import CartCoupon from "./CartCoupon";
import CartProduct from "./CartProduct";
import EmptyCart from "./EmptyCart";
import { CartContainer, CartSubWrap, CartWrap } from "./styles";

const Cart = () => {
  const { cartItems } = useCart();
  if (cartItems && cartItems.length <= 0) return <EmptyCart />;

  return (
    <CartWrap>
      <CartContainer>
        <CartProduct />
        <CartSubWrap>
          <CartAddress />
          <CartCoupon />
        </CartSubWrap>
      </CartContainer>
    </CartWrap>
  );
};

export default Cart;
