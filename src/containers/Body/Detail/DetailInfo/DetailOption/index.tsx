import React, { useState } from "react";
import { TypeProduct } from "./data";
import { TruckIcon } from "./images";
import {
  DealItem,
  DealList,
  OptionWrap,
  DetailOptionWrap,
  OptionTitle,
  ShippingOption,
  ShippingLabel,
  ShippingAddress,
  QuantityOption,
  QuantityButton,
  QuantityLabel,
  QuantityButtonItem,
} from "./styles";

interface IDetailOptionProps {
  onAddToCart: () => void;
}

const DetailOption: React.FC<IDetailOptionProps> = ({ onAddToCart }) => {
  const [isActiveQuantity, setActiveQuantity] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecreaseQuantity = () => {
    setActiveQuantity(prev => {
      if (prev == true) {
        prev = false;
      }
      return prev;
    });
    setQuantity(prev => (prev > 1 ? prev - 1 : prev));
  };

  const handleIncreaseQuantity = () => {
    setActiveQuantity(prev => {
      if (prev == false) {
        prev = true;
      }
      return prev;
    });
    setQuantity(pre => pre + 1);
  };
  return (
    <DetailOptionWrap>
      <OptionWrap>
        <OptionTitle>Deal sốc</OptionTitle>
        <DealList>
          <DealItem type="1">Mua kèm deal sốc</DealItem>
        </DealList>
      </OptionWrap>
      <OptionWrap>
        <OptionTitle>Vận chuyển</OptionTitle>
        <ShippingOption>
          <TruckIcon />
          <ShippingLabel>Vận chuyển đến:</ShippingLabel>
          <ShippingAddress>Huyện Ba Vì</ShippingAddress>
        </ShippingOption>
      </OptionWrap>
      <OptionWrap>
        <OptionTitle>Kiểu sản phẩm</OptionTitle>
        <DealList>
          {TypeProduct.map((item, index) => {
            return (
              <DealItem type="2" key={index}>
                {item}
              </DealItem>
            );
          })}
        </DealList>
      </OptionWrap>
      <OptionWrap>
        <OptionTitle>Số lượng</OptionTitle>
        <QuantityOption>
          <QuantityButton>
            <QuantityButtonItem
              type={!isActiveQuantity}
              onClick={handleDecreaseQuantity}
            >
              -
            </QuantityButtonItem>
            <QuantityButtonItem type={false}>{quantity}</QuantityButtonItem>
            <QuantityButtonItem
              type={isActiveQuantity}
              onClick={handleIncreaseQuantity}
            >
              +
            </QuantityButtonItem>
          </QuantityButton>
          <QuantityLabel>1278 sản phẩm có sẵn</QuantityLabel>
        </QuantityOption>
      </OptionWrap>
    </DetailOptionWrap>
  );
};

export default DetailOption;
