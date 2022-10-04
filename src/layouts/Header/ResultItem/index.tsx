import { renderPrice } from "@common/functions";
import Link from "next/link";
import { Product } from "src/apiCaller";
import {
  ContentBox,
  DiscountPrice,
  ImageContainer,
  ImageStyled,
  ItemContainer,
  Name,
  Price,
} from "./styles";

interface IResultItemProps extends Product {}

const ResultItem: React.FC<IResultItemProps> = ({
  _id,
  imgUrl,
  name,
  originalPrice,
  price,
  slug,
}) => {
  const isDiscount = originalPrice !== price;

  return (
    <Link href={`/${slug}`}>
      <ItemContainer>
        <ImageStyled src={imgUrl[0]} alt={name} />

        <ContentBox>
          <Name>{name}</Name>
          <Price isDiscount={isDiscount}>{renderPrice(originalPrice)}</Price>

          {isDiscount && <DiscountPrice>{renderPrice(price)}</DiscountPrice>}
        </ContentBox>
      </ItemContainer>
    </Link>
  );
};

export default ResultItem;
