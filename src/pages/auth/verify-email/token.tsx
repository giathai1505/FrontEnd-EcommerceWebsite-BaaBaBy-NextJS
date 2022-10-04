import { Fragment } from "react";
import { NextPage } from "next";
import { SSGContext } from "@typings";
import { wrapper } from "@redux/store";
import Meta from "@components/Meta";
import { PATH } from "@routes";
import AuthLayout from "@layouts/Auth";
import SignUp from "@containers/Auth/SignUp";
import VerifyEmail from "@containers/Auth/VerifyEmail";

const VerifyEmailPage: NextPage = props => {
  return (
    <Fragment>
      <Meta title="Verify email" currentRoute={PATH.VERIFY_EMAIL} />
      <AuthLayout>
        <VerifyEmail />
      </AuthLayout>
    </Fragment>
  );
};

export default VerifyEmailPage;
