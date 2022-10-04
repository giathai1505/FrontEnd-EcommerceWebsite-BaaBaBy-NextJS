import RightArrowIcon from "@icons/arrow/RightArrow";
import Button from "@designs/Button";
import React from "react";
import { EmptyCarImg, EmptyCarText, EmptyCartWrap } from "./styles";
import { useRouter } from "next/router";

const EmptyCart = () => {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.replace("/");
  };
  return (
    <EmptyCartWrap>
      <EmptyCarImg src="/ingredient/images/empty_cart.png" />
      <EmptyCarText>Không có sản phẩm nào trong giỏ hàng của bạn</EmptyCarText>
      <Button rightIcon={<RightArrowIcon />} onClick={handleContinueShopping}>
        <span className="px-0.5">Tiếp tục mua sắm</span>
      </Button>
    </EmptyCartWrap>
  );
};

export default EmptyCart;
