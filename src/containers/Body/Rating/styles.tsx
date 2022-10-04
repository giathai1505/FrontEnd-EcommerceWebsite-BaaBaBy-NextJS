import styled from "styled-components";
import tw from "twin.macro";

export const RatingContainer = styled.div`
  ${tw`max-w-[1120px] mx-auto py-[16px] phone:py-4 px-[16px] laptop:px-4 desktop:px-0`}
`;

export const ListRating = styled.div`
  ${tw``}
`;

export const RatingItem = styled.div`
  ${tw`flex gap-[16px] phone:py-[18px] py-[16px]`}
`;

export const RatingItemAvatar = styled.div`
  ${tw``}
`;

export const RatingItemBody = styled.div`
  ${tw``}
`;

export const RatingItemName = styled.p`
  ${tw`text-lg font-semibold text-[#300F19]`}
`;
export const RatingItemStar = styled.div`
  ${tw`flex phone:my-[12px] my-[4px]`}
`;

export const RatingItemDesc = styled.p`
  ${tw`text-[#818181] flex flex-col phone:flex-row items-start phone:items-center text-xs gap-[4px] phone:gap-[12px]`}
`;

export const RatingItemDescTime = styled.p`
  ${tw``}
`;

export const RatingItemDescType = styled.p`
  ${tw``}
`;

export const RatingItemContent = styled.div`
  ${tw`text-md font-normal phone:my-2 my-[8px]`}
`;

export const RatingItemListImg = styled.div`
  ${tw`flex gap-1`}
`;

export const RatingItemImg = styled.div`
  ${tw`w-[60px] h-[60px] object-cover rounded-lg truncate`}
`;
