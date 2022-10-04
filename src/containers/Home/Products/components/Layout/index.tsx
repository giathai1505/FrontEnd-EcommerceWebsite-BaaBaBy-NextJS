import CardProduct from "@components/CardProduct";
import { IProduct } from "../../MilkSection";
import Title from "../Title";
import { LayoutContainer, ProductBox } from "./styles";

interface IProductsLayout {
  title: string;
  description: string;
  productList: IProduct[];
}

const ProductsLayout: React.FC<IProductsLayout> = ({
  title,
  description,
  productList,
}) => {
  return (
    <LayoutContainer>
      <Title description={description}>{title}</Title>
      <ProductBox>
        {productList.map((product, index) => {
          return (
            <CardProduct
              href={`/detail/`}
              image={product.image}
              name={product.title}
              price={product.price}
            />
          );
        })}
      </ProductBox>
    </LayoutContainer>
  );
};

export default ProductsLayout;
