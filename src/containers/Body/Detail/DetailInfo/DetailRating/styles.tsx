import styled from "styled-components";
import tw from "twin.macro";

export const RatingContent = {
  StarRating: styled.div`
    ${tw`flex`}
  `,
  NumRating: styled.p`
    ${tw`text-md phone:text-lg`}
  `,
  SelledNum: styled.p`
    ${tw``}
  `,
};

export const RatingInfoWrap = styled.div`
  ${tw`flex gap-[8px] laptop:gap-[32px] my-2 phone:my-2 items-center text-[#818181]`}
`;
