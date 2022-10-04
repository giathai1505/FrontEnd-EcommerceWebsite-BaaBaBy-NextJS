import { Fragment } from "react";
import { NextPage } from "next";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { SSGContext } from "@typings";
import { PATH } from "@routes";
import { getAllBaseAPIForPage } from "@layouts/Main/helper";
import Main from "@layouts/Main";
import ProfilePage from "@containers/Profile";

const CartPage: NextPage = () => {
  return (
    <Fragment>
      <Meta currentRoute={PATH.PROFILE} title="" />
      <Main>
        <ProfilePage />
      </Main>
    </Fragment>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  async (context: SSGContext) => {
    const {
      store: { dispatch },
    } = context;

    await Promise.all([getAllBaseAPIForPage(dispatch)]);

    return {
      props: {},
      revalidate: 3600,
    };
  },
);

export default CartPage;
