import { Fragment, useEffect, useState } from "react";
import { NextPage } from "next";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { SSGContext } from "@typings";
import { PATH } from "@routes";
import { getAllBaseAPIForPage } from "@layouts/Main/helper";
import Main from "@layouts/Main";
import Home from "@containers/Home";
import Body from "@containers/Body";
import { Product } from "src/apiCaller";

import apiService from "@services";
import { setDetailProduct } from "@redux/slides/detailProduct";
import {
  fragmentGetAllProduct,
  fragmentGetProductBySlug,
} from "@services/product";

const HomePage: NextPage = props => {
  return (
    <Fragment>
      <Meta currentRoute={PATH.HOME} title="Baababy" />
      <Main>
        <Body />
      </Main>
    </Fragment>
  );
};

export async function getStaticPaths() {
  const dataProduct = await apiService
    .searchProduct(fragmentGetAllProduct)
    .$args({ search: { filter: {} } })
    .$fetch();

  let paths: any = dataProduct.results.filter(
    value =>
      value.slug && {
        params: { id: value.slug },
      },
  );

  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}

export const getStaticProps = wrapper.getStaticProps(
  async (context: SSGContext) => {
    const {
      params,
      store: { dispatch },
    } = context;

    console.log(params);

    const dataProduct = await apiService
      .getProductBySlug(fragmentGetProductBySlug)
      .$args({ slug: params.id.toString() })
      .$fetch();

    dispatch(setDetailProduct(dataProduct));

    return {
      props: { products: dataProduct },
      revalidate: 3600,
    };
  },
);

export default HomePage;
