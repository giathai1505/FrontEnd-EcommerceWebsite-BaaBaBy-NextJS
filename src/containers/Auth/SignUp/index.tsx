import {
  Form,
  InnerForm,
  ButtonStyled,
  RedirectWrapper,
  LinkStyled,
} from "./styles";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { isEmail } from "@common/functions";
import Input from "@designs/Input";
import { PATH } from "@routes";
import { setUserCookies } from "@common/utils/auth";
import { signUpAPI } from "@services/auth";
import { useRedirect } from "@hooks/useRedirect";
import { toast } from "react-toastify";
import AuthLayout from "../components/AuthLayout";
import apiService from "@services";
import { RegisterArgs, RegisterInput } from "src/apiCaller";

interface ISignUpProps {}
interface IFormValue {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup
  .object()
  .shape<{ [key in keyof IFormValue]: any }>({
    fullName: yup.string().required("Họ và tên không được bỏ trống!"),
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
    confirmPassword: yup
      .string()
      .required("Xác nhận lại mật khẩu không được bỏ trống!")
      .when("password", {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("password")], "Mật khẩu không giống nhau!"),
      }),
  });

const SignUp: React.FC<ISignUpProps> = props => {
  const redirect = useRedirect();
  const [initialValues, setInitialValues] = useState<IFormValue>({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const [loading, setLoading] = useState(false);
  const onHandleSubmit = async (values: IFormValue) => {
    const variable: RegisterArgs = {
      input: {
        confirmpassword: values.confirmPassword,
        password: values.password,
        email: values.email,
        username: values.fullName,
      },
    };
    try {
      setLoading(true);
      const data = await apiService
        .register()
        .$args(variable)
        .$fetch();

      redirect(PATH.SIGN_IN);
      toast.success(
        "Đăng kí thành công! Vui lòng kiểm tra mail của bạn để xác nhận tài khoản.",
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Đăng ký">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onHandleSubmit}
      >
        <Form>
          <InnerForm>
            <Input
              required
              label="Họ và tên"
              name="fullName"
              placeholder="Nhập họ và tên của bạn"
            />
            <Input
              required
              label="Email"
              name="email"
              placeholder="Nhập địa chỉ email của bạn"
            />
            <Input
              required
              label="Mật khẩu"
              name="password"
              placeholder="Nhập mật khẩu của bạn"
              type="password"
            />
            <Input
              required
              label="Xác nhận lại mật khẩu"
              name="confirmPassword"
              placeholder="Xác nhận lại mật khẩu"
              type="password"
            />
          </InnerForm>

          <ButtonStyled
            variant="primary"
            type="submit"
            size="lg"
            loading={loading}
          >
            Đăng ký
          </ButtonStyled>
          <RedirectWrapper>
            Bạn đã có tài khoản?{" "}
            <LinkStyled href={PATH.SIGN_IN}>Đăng nhập</LinkStyled>
          </RedirectWrapper>
        </Form>
      </Formik>
    </AuthLayout>
  );
};

export default SignUp;
