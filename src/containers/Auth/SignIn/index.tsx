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

interface IFormValue {
  email: string;
  password: string;
}

const validationSchema = yup
  .object()
  .shape<{ [key in keyof IFormValue]: any }>({
    email: yup
      .string()
      .required("Địa chỉ email không được bỏ trống!")
      .test("email", "Địa chỉ email không hợp lệ!", value =>
        isEmail(value || ""),
      ),
    password: yup
      .string()
      .required("Mật khẩu không được bỏ trống!")
      .min(6, "Mật khẩu không hợp lệ!"),
  });
interface ISignInProps {}

const SignIn: React.FC<ISignInProps> = props => {
  const [initialValues, setInitialValues] = useState<IFormValue>({
    email: "thangnd293@gmail.com",
    password: "Thang12345678#",
  });

  const redirect = useRedirect();
  const { isAuth } = useAuth();
  const { loading, login } = useLogin();
  const onHandleSubmit = (values: any) => {
    login({
      input: {
        email: values.email,
        password: values.password,
      },
    });
  };

  useEffect(() => {
    if (isAuth) {
      redirect(PATH.HOME);
    }
  }, [isAuth]);

  return (
    <AuthLayout title="Đăng nhập">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onHandleSubmit}
      >
        <Form>
          <InnerForm>
            <Input
              label="Email"
              name="email"
              placeholder="Nhập địa chỉ email của bạn"
              required
            />
            <Input
              required
              label="Mật khẩu"
              name="password"
              placeholder="Nhập mật khẩu của bạn"
              type="password"
            />
          </InnerForm>

          <ActionBox>
            <TopActionBox>
              <Checkbox
                label="Ghi nhớ tôi?"
                primary
                initialCheck={false}
                name="remember"
              />
              <LinkStyled href={PATH.FORGOT_PASSWORD}>
                Quên mật khẩu?
              </LinkStyled>
            </TopActionBox>

            <ButtonStyled type="submit" size="lg" loading={loading}>
              Đăng nhập
            </ButtonStyled>
          </ActionBox>

          <RedirectWrapper>
            Bạn chưa có tài khoản?
            <LinkStyled href={PATH.SIGN_UP}>Đăng ký ngay</LinkStyled>
          </RedirectWrapper>
        </Form>
      </Formik>
    </AuthLayout>
  );
};

export default SignIn;
