import { css } from "styled-components";
import tw from "twin.macro";

export const formControlCommon = (
  isError: boolean | undefined,
  disabled: boolean | undefined,
) =>
  css`
    ${tw`
      w-full 
      rounded-sm
      border-solid
      border-sematic-2
      bg-white-color
      pl-1
      h-3
      focus-within:border-sematic-2
      text-md
      text-grey-1
      placeholder-grey-1
      font-normal
      focus:shadow-[none]
    `}
    ${
      !isError
        ? tw`border-neutral-4 focus:border-sematic-2 group-focus:border-sematic-2`
        : tw`border-sematic-1 focus:border-sematic-1 group-focus:border-sematic-1 `
    }
    ${disabled && tw`pointer-events-none opacity-60 bg-neutral-4`}
  `;
