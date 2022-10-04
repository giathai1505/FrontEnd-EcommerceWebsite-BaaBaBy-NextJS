import { Fragment } from "react";
import { GetStaticPaths, NextPage } from "next";
import { SSGContext } from "@typings";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { PATH } from "@routes";
import AuthLayout from "@layouts/Auth";
import Product from "@containers/Product";
import { listMenuHeaders } from "@constants/header";
// import { IMenuHeader } from "@constants/header";
import Main from "@layouts/Main";
import Products from "@containers/Products";

interface IProduct {
  image: string;
  name: string;
  price: number;
}

const ProductPage: NextPage<IProduct[]> = props => {
  return (
    <Fragment>
      <Meta title="Chi tiết sản phẩm" currentRoute={PATH.DETAIL} />
      <Main>
        <Products listProducts={props} />
      </Main>
    </Fragment>
  );
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listMenuHeaders
    .filter(menu => menu.path.startsWith("/product"))
    .map(productMenu => {
      return {
        params: { id: productMenu.path.split("/")[2] },
      };
    });
  return { paths, fallback: "blocking" };
};

export const getStaticProps = wrapper.getStaticProps(
  async (context: SSGContext) => {
    const {
      locale,
      store: { dispatch },
    } = context;

    return {
      props: { listProduct: [{ id: 1, name: "sửa" }] },
    };
  },
);
