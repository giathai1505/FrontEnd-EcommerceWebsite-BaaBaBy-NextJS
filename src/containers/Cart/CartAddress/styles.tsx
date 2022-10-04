import styled from "styled-components";
import tw from "twin.macro";

export const CartAddressWrap = styled.div`
  border: 1px solid #eeeeee;
  ${tw`bg-white-color p-2 rounded-lg mb-[16px] mt-2`}
`;

export const AddressInputWrap = styled.div`
  border: 1px solid #eeeeee;
  ${tw`mb-[12px] px-2 py-[8px] rounded-lg flex items-center gap-[8px]`}
`;

export const AddressInput = styled.input`
  ${tw`text-md font-normal outline-none`}
`;
