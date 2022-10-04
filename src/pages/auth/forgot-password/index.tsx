import { Fragment } from "react";
import { NextPage } from "next";

import { SSGContext } from "@typings";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { PATH } from "@routes";
import AuthLayout from "@layouts/Auth";
import ForgotPassword from "@containers/Auth/ForgotPassword";
const ForgotPasswordPage: NextPage = props => {
  return (
    <Fragment>
      <Meta title="Quên mật khẩu" currentRoute={PATH.FORGOT_PASSWORD} />
      <AuthLayout>
        <ForgotPassword />
      </AuthLayout>
    </Fragment>
  );
};

export default ForgotPasswordPage;

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
