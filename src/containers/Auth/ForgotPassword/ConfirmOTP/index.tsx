import { ConfirmOTPContainer, Title, SubTitle } from "./styles";
import { Formik, Form } from "formik";
import { isEmail } from "@common/functions";
import * as yup from "yup";
import Button from "@designs/Button";
import { useEffect, useRef, useState } from "react";
import { PATH } from "@routes";
import { useDispatch, useSelector } from "react-redux";
import { setStep, setPhoneNumber } from "@redux/slides/forgotPassword";
import { IRootState } from "@typings";
import OTPInput from "@designs/OTPInput";

interface IConfirmEmailProps {}
interface IFormValue {
  otp: string;
}

const validationSchema = yup
  .object()
  .shape<{ [key in keyof IFormValue]: any }>({
    otp: yup.string().required("Vui lòng nhập OTP!"),
  });
const ConfirmOTP: React.FC<IConfirmEmailProps> = props => {
  const [loading, setLoading] = useState(false);
  const [second, setSecond] = useState(60);

  const clockRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { phoneNumber } = useSelector(
    (state: IRootState) => state.forgotPassword,
  );
  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState<IFormValue>({
    otp: "",
  });

  useEffect(() => {
    if (second > 0) {
      clockRef.current = setTimeout(() => {
        setSecond(state => state - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(clockRef.current);
    };
  }, [second]);
  const onHandleSubmit = (values: IFormValue) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(setStep(3));
    }, 300);
  };
  return (
    <ConfirmOTPContainer className="flex flex-col gap-2">
      <Title className="text-center">Làm ơn hãy xác minh mã của bạn</Title>
      <SubTitle>
        Mã xác minh đã được chúng tôi gửi về số điện thoại : {phoneNumber}
      </SubTitle>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onHandleSubmit}
      >
        {formik => {
          const { onBlur, ...restField } = formik.getFieldProps("phoneNumber");
          return (
            <Form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-2"
            >
              <OTPInput
                value={formik.values.otp}
                onChange={value => formik.setFieldValue("otp", value)}
                error={formik.errors.otp}
                touched={formik.touched.otp}
              />
              {second === 0 ? (
                <p className="font-medium text-neutral-2 text-lg text-center">
                  Bạn không lấy được OTP?{" "}
                  <span
                    className="text-primary-1 text-center cursor-pointer hover:underline"
                    onClick={() => {
                      setSecond(60);
                    }}
                  >
                    Gửi lại{" "}
                  </span>
                </p>
              ) : (
                <p className="font-medium text-neutral-2 text-lg text-center">
                  Làm ơn gửi lại chúng tôi trước{" "}
                  <span className="text-primary-1 text-center">{second}s </span>
                </p>
              )}

              <Button type="submit" loading={loading}>
                Tiếp tục
              </Button>
            </Form>
          );
        }}
      </Formik>
    </ConfirmOTPContainer>
  );
};

export default ConfirmOTP;
