import Meta from "@components/Meta";
import Search from "@containers/Search";
import Main from "@layouts/Main";
import { wrapper } from "@redux/store";
import { PATH } from "@routes";
import { SSGContext } from "@typings";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";

const SearchPage: NextPage = props => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <Fragment>
      <Meta title="Tìm kiếm" currentRoute={PATH.SEARCH} />
      <Main>
        <Search />
      </Main>
    </Fragment>
  );
};

export const getStaticProps = wrapper.getStaticProps(
  async (context: SSGContext) => {
    const {
      locale,
      store: { dispatch },
    } = context;

    return {
      props: {},
    };
  },
);

export default SearchPage;
