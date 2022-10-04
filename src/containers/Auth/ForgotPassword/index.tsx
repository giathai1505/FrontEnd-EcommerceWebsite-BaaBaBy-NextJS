import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { ForgotPasswordContainer } from "./styles";
import { BackIcon } from "./icons";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@typings";
import { useRedirect } from "@hooks/useRedirect";
import { PATH } from "@routes";
import { setStep } from "@redux/slides/forgotPassword";
const ConfirmEmail = dynamic(
  () => {
    return import("./ConfirmEmail");
  },
  { ssr: false },
);

const ConfirmOTP = dynamic(
  () => {
    return import("./ConfirmOTP");
  },
  { ssr: false },
);
const ConfirmPassword = dynamic(
  () => {
    return import("./ConfirmPassword");
  },
  { ssr: false },
);
interface IForgotPasswordProps {}

export type IStepForgotPassword = {
  [k: number]: {
    name: string;
    Components: ReactNode;
  };
};
const steps: IStepForgotPassword = {
  1: {
    Components: <ConfirmEmail />,
    name: "Confirm email",
  },
  2: {
    Components: <ConfirmOTP />,
    name: "Confirm OTP",
  },
  3: {
    Components: <ConfirmPassword />,
    name: "Confirm password",
  },
};

const ForgotPassword: React.FC<IForgotPasswordProps> = props => {
  const { step } = useSelector((state: IRootState) => state.forgotPassword);
  const redirect = useRedirect();
  const dispatch = useDispatch();
  const onHandleClick = () => {
    if (step === 1) {
      redirect(PATH.SIGN_IN);
    } else {
      dispatch(setStep(step - 1));
    }
  };
  return (
    <ForgotPasswordContainer>
      <BackIcon
        onClick={onHandleClick}
        className="w-3 h-3 fixed top-12 cursor-pointer "
        style={{
          left: "55%",
        }}
      />
      {steps[step].Components}
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
