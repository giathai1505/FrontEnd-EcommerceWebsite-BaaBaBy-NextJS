import { Fragment } from "react";
import { NextPage } from "next";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { SSGContext } from "@typings";
import { PATH } from "@routes";
import { getAllBaseAPIForPage } from "@layouts/Main/helper";
import Main from "@layouts/Main";
import Home from "@containers/Home";

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Meta currentRoute={PATH.HOME} title="Baababy" />
      <Main>
        <Home />
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

export default HomePage;
