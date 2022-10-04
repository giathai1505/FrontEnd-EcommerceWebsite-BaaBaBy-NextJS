import { Fragment } from "react";
import { NextPage } from "next";
import { SSGContext } from "@typings";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { PATH } from "@routes";
import AuthLayout from "@layouts/Auth";
import SignIn from "@containers/Auth/SignIn";

const SignInPage: NextPage = props => {
  return (
    <Fragment>
      <Meta title="Đăng nhập" currentRoute={PATH.SIGN_IN} />
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    </Fragment>
  );
};

export default SignInPage;

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
