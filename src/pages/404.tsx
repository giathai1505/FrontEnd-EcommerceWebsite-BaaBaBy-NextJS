import { Fragment } from "react";
import { NextPage } from "next";
import { SSGContext } from "@typings";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { PATH } from "@routes";
import NotFound from "@containers/NotFound";
const NotFoundPage: NextPage = props => {
  return (
    <Fragment>
      <Meta title="Không tìm thấy trang" currentRoute={PATH.NOTFOUND} />
      <NotFound />
    </Fragment>
  );
};

export default NotFoundPage;

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
