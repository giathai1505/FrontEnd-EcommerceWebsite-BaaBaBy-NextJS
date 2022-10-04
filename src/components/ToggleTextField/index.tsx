import { useDebounced } from "@hooks/useDebounced";
import { IIconSVGProps } from "@typings";
import { useEffect, useState } from "react";
import cn from "classnames";

interface IToggleTextFieldProps {
  className?: string;
  inputClassName?: string;
  defaultValue: string;
  type?: "text" | "number";
  validateChecker?: (text: string) => string | false | undefined | null;
  maxLength?: number;
  disabled?: boolean;
  onSave: (val: string) => void;
}

const ToggleTextField: React.FC<IToggleTextFieldProps> = ({
  className = "",
  inputClassName = "",
  defaultValue,
  maxLength,
  disabled,
  onSave,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const { inputText: value, setInputText: setValue } = useDebounced(text => {
    onSave(text);
  });

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={className}>
      {isEdit && !disabled ? (
        <form onSubmit={() => setIsEdit(false)}>
          <input
            autoFocus
            onFocus={e => {
              e.target.setSelectionRange(0, e.target.value.length);
            }}
            className={cn("w-full", inputClassName)}
            value={value}
            maxLength={maxLength}
            onChange={e => {
              const val = e.target.value;
              setValue(val);
            }}
            onBlur={() => setIsEdit(false)}
          />
        </form>
      ) : (
        <a onClick={() => setIsEdit(true)} className="cursor-pointer ">
          {value}
          {!disabled && <PenIcon />}
        </a>
      )}
    </div>
  );
};

export default ToggleTextField;

const PenIcon: React.FC<IIconSVGProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block w-2 h-2 ml-0.5 text-neutral-3"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>
  );
};
