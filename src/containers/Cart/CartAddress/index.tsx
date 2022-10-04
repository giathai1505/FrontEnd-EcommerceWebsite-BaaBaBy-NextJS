import React from "react";
import { CouponHeader } from "../CartCoupon/styles";
import { LocationIcon } from "./images";
import { AddressInput, AddressInputWrap, CartAddressWrap } from "./styles";

const CartAddress = () => {
  return (
    <CartAddressWrap>
      <CouponHeader>Nhập địa chỉ</CouponHeader>
      <AddressInputWrap>
        <AddressInput placeholder="Nhập họ tên" />
      </AddressInputWrap>
      <AddressInputWrap>
        <AddressInput placeholder="Nhập số điện thoại" />
      </AddressInputWrap>
      <AddressInputWrap>
        <LocationIcon />
        <AddressInput placeholder="Nhập vị trí trên bản đồ" />
      </AddressInputWrap>
    </CartAddressWrap>
  );
};

export default CartAddress;
