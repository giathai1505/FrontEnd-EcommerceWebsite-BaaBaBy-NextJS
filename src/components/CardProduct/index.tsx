import { renderPrice } from "@common/functions";
import CartIcon from "@icons/Cart";
import Link from "next/link";
import { ReactNode } from "react";
import {
  ButtonStyled,
  CardContainer,
  CardContent,
  ImageStyled,
  Price,
  PriceContainer,
  TitleProduct,
} from "./styles";

interface ICardProductProps {
  image: string;
  name: string;
  price: number;
  href: string;
  className?: string;
  children?: ReactNode;
}

const CardProduct: React.FC<ICardProductProps> = ({
  image,
  name,
  price,
  href,
  className,
}) => {
  const displayPrice = renderPrice(price);

  return (
    <Link href={href}>
      <CardContainer className={className}>
        <CardContent>
          <ImageStyled src={image} alt="product" />
          <TitleProduct>{name}</TitleProduct>
          <PriceContainer>
            <Price>{displayPrice}</Price>
            <ButtonStyled>
              <CartIcon className="text-inherit" />
            </ButtonStyled>
          </PriceContainer>
        </CardContent>
      </CardContainer>
    </Link>
  );
};

export default CardProduct;
