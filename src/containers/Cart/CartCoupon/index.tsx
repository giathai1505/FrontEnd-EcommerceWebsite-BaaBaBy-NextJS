import React from "react";
import {
  CartCouponWrap,
  ContinuteButton,
  CouponButton,
  CouponHeader,
  SumaryContent,
  SumaryItem,
  SumaryTitle,
} from "./styles";

const CartCoupon = () => {
  return (
    <CartCouponWrap>
      <CouponHeader>Mã giảm giá</CouponHeader>
      <CouponButton>Chọn hoặc nhập mã</CouponButton>
      <SumaryItem>
        <SumaryTitle>Tiền hàng (2)</SumaryTitle>
        <SumaryContent>đ 640,000</SumaryContent>
      </SumaryItem>
      <SumaryItem>
        <SumaryTitle>TIền tích lũy đơn hàng</SumaryTitle>
        <SumaryContent>+đ 100,000</SumaryContent>
      </SumaryItem>
      <SumaryItem>
        <SumaryTitle>Thành tiền</SumaryTitle>
        <SumaryContent>đ 640,000</SumaryContent>
      </SumaryItem>
      <ContinuteButton>Tiếp tục</ContinuteButton>
    </CartCouponWrap>
  );
};

export default CartCoupon;
