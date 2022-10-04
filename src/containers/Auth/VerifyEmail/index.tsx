import {
  ActionBox,
  ButtonStyled,
  Form,
  InnerForm,
  LinkStyled,
  RedirectWrapper,
  TopActionBox,
} from "./styles";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { isEmail } from "@common/functions";
import Input from "@designs/Input";
import { PATH } from "@routes";
import useLogin from "@hooks/useLogin";
import useAuth from "@hooks/useAuth";
import { useRedirect } from "@hooks/useRedirect";
import Checkbox from "@designs/Checkbox";
import AuthLayout from "../components/AuthLayout";
import apiService from "@services";
import { ConfirmMailArgs } from "src/apiCaller";
import { useRouter } from "next/router";
import { IDecodeToken } from "@typings";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const redirect = useRedirect();

  const router = useRouter();
  const { token } = router.query;

  const hanleVefiryEmail = async () => {
    const variale: ConfirmMailArgs = {
      token: token as string,
    };

    const res = await apiService
      .confirmMail()
      .$args(variale)
      .$fetch();

    redirect(PATH.SIGN_IN);
    toast.success("Xác nhận tại khoản thành công !");
  };

  return (
    <AuthLayout title="Verify your email">
      <ButtonStyled onClick={hanleVefiryEmail} size="lg">
        Verify
      </ButtonStyled>
    </AuthLayout>
  );
};

export default VerifyEmail;
