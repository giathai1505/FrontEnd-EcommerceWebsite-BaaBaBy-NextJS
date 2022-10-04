import styled from "styled-components";
import tw from "twin.macro";
import { Form as _Form } from "formik";
import Button from "@designs/Button";
export const SignUpContainer = styled.div`
  ${tw`  `}
`;
export const Title = styled.p`
  ${tw`text-3xl text-neutral-1 font-bold`}
`;
export const Form = styled(_Form)`
  ${tw`flex flex-col gap-1`}
`;

export const InnerForm = styled.div`
  ${tw`flex flex-col gap-[12px]`}
`;

export const ButtonStyled = styled(Button)`
  ${tw`w-full mt-4`}
`;

export const RedirectWrapper = styled.p`
  ${tw`text-center`}
`;

export const LinkStyled = styled.a`
  ${tw`cursor-pointer hover:underline text-primary-1 text-md font-semibold`}
`;
