import styled from "styled-components";
import tw from "twin.macro";

export const ProductsContainer = styled.section`
  ${tw`w-full`}
`;

export const PriceContainer = styled.div`
  ${tw`flex justify-between items-center`}
`;

export const Price = styled.p`
  ${tw`text-primary-1 font-bold`}
`;

export const ButtonStyled = styled.button`
  ${tw`rounded-full p-1 hover:bg-primary-1 hover:text-white-color`}
`;
