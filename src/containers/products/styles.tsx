import styled from "styled-components";
import tw from "twin.macro";

export const ProductContainer = styled.div`
  ${tw`max-w-[1120px] pb-[16px] mx-1.5  pt-4 laptop:mx-auto min-h-[1000px]`}
`;

export const SectionSubTitle = styled.p`
  ${tw`text-md font-normal text-[#300F19] mt-[16px] mb-3`}
`;

export const ListProductWrap = styled.div`
  ${tw`col-span-9 grid grid-cols-3`}
`;

export const ProductPageBody = styled.div`
  ${tw`grid grid-cols-12 gap-2 `}
`;

export const ListCategoryWrap = styled.div`
  ${tw`flex`}
`;

export const CategoryItem = styled.img`
  ${tw`w-[52px] h-[52px] rounded-[50%] relative left-1 ml-[-10px]`}

  &::before {
    content: "";
    position: absolute;
    background-color: red;
    inset: 0;
    left: 10px;
  }
`;
