import { useField, useFormikContext } from "formik";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import en from "date-fns/locale/en-US";
import { DatePicker as NiceDatePicker } from "react-nice-dates";
import { Container, InputField, DateInputContainer } from "./styles";
import FormControlLabel from "@common/styles/FormControlLabel";
import FormControlErrorHelper from "@common/styles/FormControlErrorHelper";
import { IIconSVGProps } from "@typings";

interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  className?: string;
  label: string;
  disabled?: boolean;
  placeholder?: string;
  maximumDate?: Date;
  minimumDate?: Date;
  onDateChange?: (newDate: Date) => void;
  autoComplete?: "on" | "off";
  required?: boolean;
}

const DatePicker: React.FC<IInput> = props => {
  const {
    name,
    className,
    label,
    minimumDate,
    maximumDate,
    required = false,
    onDateChange,
    ...rest
  } = props;
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [date, setDate] = useState<Date | undefined | null>(null);
  const isError: boolean = !!meta.touched && !!meta.error;

  useEffect(() => {
    if (field?.value) {
      setDate(new Date(field.value));
    }
  }, [field?.value]);

  const handleChange = (newDate: Date | null) => {
    setDate(newDate);
    if (newDate) setFieldValue(name, String(newDate));
    else setFieldValue(name, "");
  };

  return (
    <Container className={`datePicker ${className}`}>
      <FormControlLabel isError={isError} required={required}>
        {label}
      </FormControlLabel>
      <NiceDatePicker
        date={date as Date}
        onDateChange={handleChange}
        locale={en}
        format="dd/MM/yyyy"
        maximumDate={maximumDate}
        minimumDate={minimumDate}
      >
        {({ inputProps }) => (
          <DateInputContainer isError={isError}>
            <InputField
              autoComplete="off"
              {...(rest as any)}
              {...field}
              {...inputProps}
            />
            <DatePickerIcon />
          </DateInputContainer>
        )}
      </NiceDatePicker>
      {isError && (
        <FormControlErrorHelper>{meta?.error}</FormControlErrorHelper>
      )}
    </Container>
  );
};

export default DatePicker;

const DatePickerIcon: React.FC<IIconSVGProps> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 13H13C12.45 13 12 13.45 12 14V17C12 17.55 12.45 18 13 18H16C16.55 18 17 17.55 17 17V14C17 13.45 16.55 13 16 13ZM16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3ZM18 20H6C5.45 20 5 19.55 5 19V9H19V19C19 19.55 18.55 20 18 20Z"
        fill="currentColor"
      />
    </svg>
  );
};
