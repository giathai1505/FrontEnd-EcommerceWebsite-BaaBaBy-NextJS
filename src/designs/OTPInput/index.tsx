import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";

import { OTPInputContainer, Error } from "./styles";

interface IOTPInputProps {
  value?: string;
  onChange?: (value: string) => void;
  quantity?: number;
  error?: any;
  touched?: any;
}

const OTPInput: React.FC<IOTPInputProps> = props => {
  const { value, onChange, quantity = 6, error, touched, ...rest } = props;

  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (touched && error) {
      !isError && setIsError(true);
    } else {
      isError && setIsError(false);
    }
  }, [touched, error]);

  const handleChange = (value: string) => {
    onChange && onChange(value);
  };

  return (
    <>
      <OTPInputContainer>
        <OtpInput
          isInputNum={true}
          value={value}
          containerStyle="otp-container"
          inputStyle="otp-input"
          focusStyle="otp-focus"
          numInputs={quantity}
          onChange={handleChange}
          hasErrored={isError}
          errorStyle="otp-error"
          {...(rest as any)}
        />
      </OTPInputContainer>
      {error && <Error>{error}</Error>}
    </>
  );
};

export default OTPInput;
