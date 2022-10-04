import { Fragment } from "react";
import { NextPage } from "next";
import { SSGContext } from "@typings";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { PATH } from "@routes";
import AuthLayout from "@layouts/Auth";
import SignUp from "@containers/Auth/SignUp";

const SignUpPage: NextPage = props => {
  return (
    <Fragment>
      <Meta title="Đăng kí" currentRoute={PATH.SIGN_UP} />
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    </Fragment>
  );
};

export default SignUpPage;

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
