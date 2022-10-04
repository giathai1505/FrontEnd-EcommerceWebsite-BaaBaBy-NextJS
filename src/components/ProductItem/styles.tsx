import FullScreenDialog from "@components/FullScreenDialog";
import styled from "styled-components";
import tw from "twin.macro";

export const CardProductWrap = {
  Container: styled.div`
    ${tw`col-span-1  p-[16px]`}
  `,
  Img: styled.img`
    ${tw`w-full h-[175px] object-cover rounded-lg`}
  `,
  Name: styled.p`
    ${tw`font-semibold text-md mt-[24px] mb-[16px]`}
  `,
  PriceWrap: styled.div`
    ${tw`flex justify-between`}
  `,
  Price: styled.p`
    ${tw`text-primary-1 font-bold text-lg`}
  `,
};
