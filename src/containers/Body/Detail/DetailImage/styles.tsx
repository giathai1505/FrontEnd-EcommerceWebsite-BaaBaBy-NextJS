import styled from "styled-components";
import tw from "twin.macro";

export const DetailImageWrap = styled.div`
  ${tw` phone:col-span-5 col-span-12 large-desktop:col-span-4`}
`;

export const MainImageWrap = styled.div`
  ${tw`phone:display[block] h-[350px]`}
`;
export const MainImage = styled.img`
  ${tw`h-full w-full object-cover`}
`;

export const SubImageWrap = styled.div`
  ${tw`grid grid-cols-4 my-2 phone:my-3`}
`;

export const SubImage = styled.img`
  ${tw`h-[100%] w-[100%] rounded-lg`}
`;

export const SubImageItem = styled.div<{ Active: boolean }>`
  ${tw`p-[8px] col-span-1 rounded-lg cursor-pointer w-[100%] h-[100%]`}
  ${({ Active }) => (Active ? "border: 1px solid #ee4c7e" : "")}
`;

export const SocialIconWrap = styled.div`
  ${tw` items-center gap-[32px] display[none] phone:flex`}
`;

export const ShareContent = styled.p`
  ${tw`text-md`}
`;

export const ShareIconWrap = styled.p`
  ${tw`flex items-center gap-1.5`}
`;
