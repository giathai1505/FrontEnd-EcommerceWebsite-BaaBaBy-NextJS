import Link from "next/link";
import { CSSProperties, ReactNode } from "react";
import { CardContainer, CardContent, ImageStyled } from "./styles";

interface ICartItemProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  image: string;
  href: string;
}

const CardItem: React.FC<ICartItemProps> = ({
  image,
  className,
  children,
  style,
  href,
}) => {
  return (
    <Link href={href}>
      <CardContainer style={style} className={className}>
        <CardContent>
          <ImageStyled src={image} alt="product" />
          {children}
        </CardContent>
      </CardContainer>
    </Link>
  );
};

export default CardItem;
