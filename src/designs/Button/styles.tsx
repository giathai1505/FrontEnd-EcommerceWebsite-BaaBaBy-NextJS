import styled from "styled-components";
import tw, { TwStyle } from "twin.macro";
import { IButtonVariant, IButtonSize } from "./index";
import _Spinner from "@icons/Spinner";
import BaseButton from "@designs/BaseButton";

export const Spinner = styled(_Spinner)`
  ${tw``}
`;

const sizes: {
  [key in IButtonSize]: TwStyle;
} = {
  sm: tw`px-[16px] py-[8px] text-md`,
  md: tw`px-[16px] py-[10px] text-md`,
  lg: tw`px-[24px] py-[14px] text-lg`,
};

const variants: {
  [key in IButtonVariant]: TwStyle;
} = {
  primary: tw`bg-primary-1 text-white-color hover:bg-white-color hover:text-primary-1 hover:border-primary-1`,
  secondary: tw`bg-transparent text-primary-1 border-primary-1
  hover:bg-primary-1 hover:text-white-color
  `,
  third: tw`bg-neutral-3 text-primary-2`,
  link: tw`bg-transparent text-primary-1`,
  "black-secondary": tw`bg-transparent text-neutral-1 border border-solid border-neutral-1`,
};

const disableVariants: {
  [key in IButtonVariant]: TwStyle;
} = {
  primary: tw`bg-neutral-4 text-primary-2`,
  secondary: tw`bg-transparent text-neutral-3 border border-solid border-neutral-4`,
  third: tw`bg-neutral-5 text-primary-2`,
  link: tw`bg-transparent text-neutral-3`,
  "black-secondary": tw`bg-transparent text-neutral-3 border border-solid border-neutral-4`,
};

export const ButtonContainer = styled(BaseButton)<{
  size: IButtonSize;
  variant: IButtonVariant;
  loading: boolean;
  className: string;
}>`
  ${tw`flex flex-row gap-[8px] items-center justify-center select-none rounded-md border border-solid 
      border-transparent font-semibold leading-none`}
  ${({ size }) => sizes[size]}
  ${({ variant, disabled }) =>
    !disabled ? variants[variant] : disableVariants[variant]}
  ${({ disabled, loading }) => (disabled || loading) && tw`pointer-events-none`}
  ${({ loading }) => loading && tw`bg-opacity-60 cursor-wait`}
`;
