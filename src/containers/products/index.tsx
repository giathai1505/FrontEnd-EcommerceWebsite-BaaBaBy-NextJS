import ProductItem from "@components/ProductItem";
import SectionTitle from "@components/SectionHeader";
import React from "react";
import Filter from "./Filters";
import {
  CategoryItem,
  ListCategoryWrap,
  ListProductWrap,
  ProductContainer,
  ProductPageBody,
  SectionSubTitle,
} from "./styles";
interface IProduct {
  image: string;
  name: string;
  price: number;
}

interface IProductsProps {
  listProducts: IProduct[];
}

const Products: React.FC<IProductsProps> = props => {
  return (
    <ProductContainer>
      <SectionTitle name="Đồ chơi trẻ em" />
      <SectionSubTitle>135 khuyến mãi</SectionSubTitle>
      {/* <ListCategoryWrap>
        <CategoryItem alt="hello" src="/ingredient/images/detail0.png" />
        <CategoryItem alt="" src="/ingredient/images/detail0.png" />
        <CategoryItem alt="" src="/ingredient/images/detail0.png" />
        <CategoryItem alt="" src="/ingredient/images/detail0.png" />
        <CategoryItem alt="" src="/ingredient/images/detail0.png" />
        <CategoryItem alt="" src="/ingredient/images/detail0.png" />
        <CategoryItem alt="" src="/ingredient/images/detail0.png" />
      </ListCategoryWrap> */}
      <ProductPageBody>
        <Filter />
        <ListProductWrap>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ListProductWrap>
      </ProductPageBody>
    </ProductContainer>
  );
};

export default Products;
