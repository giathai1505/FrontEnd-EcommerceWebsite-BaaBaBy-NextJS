import styled from "styled-components";
import tw from "twin.macro";
import { Form as _Form } from "formik";
import Button from "@designs/Button";

export const Form = styled(_Form)`
  ${tw`flex flex-col gap-1`}
`;

export const InnerForm = styled.div`
  ${tw`flex flex-col gap-[12px]`}
`;

export const ActionBox = styled.div`
  ${tw`mt-4`}
`;

export const TopActionBox = styled.div`
  ${tw`flex justify-between mb-4`}
`;

export const ButtonStyled = styled(Button)`
  ${tw`w-full mt-1`}
`;

export const RedirectWrapper = styled.div`
  ${tw`mt-8 text-md font-medium text-center`}
`;

export const LinkStyled = styled.a`
  ${tw`cursor-pointer hover:underline text-primary-1 text-md font-semibold`}
`;
