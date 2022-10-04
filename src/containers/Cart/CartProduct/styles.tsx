import styled from "styled-components";
import tw from "twin.macro";
import { Field as _field } from "formik";

export const CartProductWrap = styled.div`
  ${tw`laptop:col-span-9 col-span-12`}
`;

export const Table = styled.table`
  ${tw`w-full border-spacing[0 20px] border-separate`}
`;

export const Field = styled(_field)`
  ${tw`accent-color[#EE4C7E] w-[16px] h-[16px]`}
`;

export const TableRow = styled.tr`
  outline: 1px solid #eeeeee;
  ${tw` p-2 mb-[12px]  w-full rounded-lg border-[1px] border-solid border-[#eeeeee]`}
  & td:last-child {
    ${tw`rounded-br-lg rounded-tr-lg text-center`}
  }

  & td:first-child,
  th:first-child {
    ${tw`rounded-bl-lg rounded-br-lg pr-0`}
  }
`;

export const TableCell = styled.td`
  ${tw`p-2 bg-white-color`}
`;

export const TableHeader = styled.th`
  ${tw`p-2 text-md text-[#300F19] bg-white-color font-semibold text-left`}
`;

export const ProductWrap = styled.div`
  ${tw`flex items-center`}
`;

export const ProductImg = styled.img`
  ${tw`rounded-lg h-10 w-10 flex-none object-cover`}
`;

export const ProductPrice = styled.p`
  ${tw`text-md font-bold w-7 text-black-color`}
`;

export const ProductSum = styled.p`
  ${tw`text-lg font-semibold text-primary-1 flex `}
`;

export const ProductName = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  ${tw`max-w-[200px] text-md text-[#300F19] ml-2 `}
`;

export const MinusQuantity = styled.button`
  ${tw` px-1 py-0.5 leading-6  border-right[1px] border-right-color[#F6A5BE] border-right-style[solid] hover:bg-primary-1 hover:text-white-color`} /* &:hover {
    border-left: 1px solid #ee4c7e;
  } */
`;

export const PlusQuantity = styled.button`
  ${tw` px-1 py-0.5 leading-6  border-left[1px] border-left-color[#F6A5BE] border-left-style[solid] hover:bg-primary-1 hover:text-white-color`}
`;
export const NumQuantity = styled.p`
  ${tw`min-w-[40px] px-1 py-0.5 leading-6 text-center text-[12px]`}
`;

export const ChangeQuantityWrap = styled.div`
  box-shadow: 0 0 0 0.5px #ee4c7e;
  ${tw`text-primary-1 my-2 overflow-hidden laptop:my-0 flex font-semibold  rounded-[6px] w-fit`}
`;

export const RowWrap = styled.div`
  ${tw`w-full`}
`;

export const CartItem = styled.div`
  ${tw`grid grid-cols-12 gap-1 mb-2`}
`;

export const CartImage = styled.div`
  ${tw`col-span-4`}
`;

export const CartCheckbox = styled.div`
  ${tw`col-span-1 flex items-center`}
`;

export const CartInput = styled.input`
  ${tw`text-primary-1 shadow-[none]`}
`;

export const CartBody = {
  CartBodyContainer: styled.div`
    ${tw`col-span-7`}
  `,
  ProductName: styled.p`
    ${tw`text-md h-2 leading-[10px]`}
  `,
  ProductQuantity: styled.div`
    ${tw`text-lg font-semibold text-primary-1 `}
  `,
  ProductMoney: styled.p`
    ${tw`text-md font-bold text-primary-1 `}
  `,
};
