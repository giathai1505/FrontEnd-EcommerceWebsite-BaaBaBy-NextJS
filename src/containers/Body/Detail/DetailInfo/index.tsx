import CartIcon from "@icons/Cart";
import { useAppSelector } from "@redux/store";
import React from "react";
import { AddItemToCartArgs } from "src/apiCaller";
import DetailOption from "./DetailOption";
import PriceInfo from "./DetailPrice";
import RatingInfo from "./DetailRating";
import {
  ButtonContent,
  ButtonWrap,
  DetailButton,
  DetailHeader,
  DetailInfoWrap,
} from "./styles";

const DetailInfo = () => {
  const { products } = useAppSelector(state => state.product);

  const handleAddToCart = async () => {
    const variable: AddItemToCartArgs = {
      input: {
        productId: products._id,
        quantity: 1,
      },
    };

    cart.addCartByAPI(variable);
    cart.getCartItems();
  };

  return (
    <DetailInfoWrap>
      <DetailHeader>{products?.name}</DetailHeader>
      <RatingInfo />
      <PriceInfo />
      <DetailOption onAddToCart={handleAddToCart} />
      <DetailButton>
        <ButtonWrap
          type="0"
          onClick={handleAddToCart}
          className="text-primary-1"
        >
          <CartIcon className="text-inherit" />
          <ButtonContent>Thêm vào giỏ hàng</ButtonContent>
        </ButtonWrap>
        <ButtonWrap type="1">
          <ButtonContent>Mua ngay</ButtonContent>
        </ButtonWrap>
      </DetailButton>
    </DetailInfoWrap>
  );
};

export default DetailInfo;
