import { ConfirmPasswordContainer, Title } from "./styles";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Input from "@designs/Input";
import Button from "@designs/Button";
import { useState } from "react";
import { PATH } from "@routes";
import { useDispatch } from "react-redux";
import { setStep, setPhoneNumber } from "@redux/slides/forgotPassword";
import { useRedirect } from "@hooks/useRedirect";
interface IConfirmEmailProps {}
interface IFormValue {
  newPassword: string;
  confirmPassword: string;
}

const validationSchema = yup
  .object()
  .shape<{ [key in keyof IFormValue]: any }>({
    newPassword: yup
      .string()
      .required("Mật khẩu không được bỏ trống!")
      .min(6, "Mật khẩu không hợp lệ!"),
    confirmPassword: yup
      .string()
      .required("Xác nhận lại mật khẩu không được bỏ trống!")
      .when("newPassword", {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref("newPassword")], "Mật khẩu không giống nhau!"),
      }),
  });
const ConfirmPassword: React.FC<IConfirmEmailProps> = props => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const redirect = useRedirect();
  const [initialValues, setInitialValues] = useState<IFormValue>({
    newPassword: "",
    confirmPassword: "",
  });

  const onHandleSubmit = (values: IFormValue) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      dispatch(setPhoneNumber(""));
      redirect(PATH.SIGN_IN);
      dispatch(setStep(1));
    }, 300);
  };
  return (
    <ConfirmPasswordContainer className="flex flex-col gap-2">
      <Title>Quên mật khẩu</Title>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onHandleSubmit}
      >
        <Form className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <Input
              required
              label="Mật khẩu mới"
              name="newPassword"
              placeholder="Nhập mật khẩu mới của bạn"
              type="password"
            />
            <Input
              required
              label="Xác nhận lại mật khẩu"
              name="confirmPassword"
              placeholder="Xác nhận lại mật khẩu"
              type="password"
            />
          </div>
          <Button type="submit" size="md" className="mt-1" loading={loading}>
            Xác nhận
          </Button>
          <span className="text-primary-1 cursor-pointer text-md font-medium">
            Bạn chưa có tài khoản?{" "}
            <a
              href={PATH.SIGN_UP}
              className="cursor-pointer hover:underline font-bold"
            >
              Hãy đăng kí tại đây
            </a>
          </span>
        </Form>
      </Formik>
    </ConfirmPasswordContainer>
  );
};

export default ConfirmPassword;
