import { ConfirmEmailContainer, Title } from "./styles";
import { Formik, Form } from "formik";
import { isEmail } from "@common/functions";
import * as yup from "yup";
import Input from "@designs/Input";
import Button from "@designs/Button";
import { useState } from "react";
import { PATH } from "@routes";
import { useDispatch } from "react-redux";
import { setStep, setPhoneNumber } from "@redux/slides/forgotPassword";
interface IConfirmEmailProps {}
interface IFormValue {
  email: string;
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
  });
const ConfirmEmail: React.FC<IConfirmEmailProps> = props => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState<IFormValue>({
    email: "",
  });

  const onHandleSubmit = (values: IFormValue) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(setStep(2));
      dispatch(setPhoneNumber(values.email));
    }, 300);
  };
  return (
    <ConfirmEmailContainer className="flex flex-col gap-2">
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
              label="Email"
              name="email"
              placeholder="Nhập địa chỉ email của bạn"
            />
          </div>
          <Button type="submit" size="md" className="mt-1" loading={loading}>
            Next
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
    </ConfirmEmailContainer>
  );
};

export default ConfirmEmail;
