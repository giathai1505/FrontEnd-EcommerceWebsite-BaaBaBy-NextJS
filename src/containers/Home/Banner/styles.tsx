import styled from "styled-components";
import tw from "twin.macro";

export const BannerContainer = styled.section`
  @media screen and (min-width: 800px) {
    & {
      background-image: url("/ingredient/images/banner.png");
    }
  }
  ${tw`mx-2 large-desktop:mx-0 bg-secondary bg-no-repeat bg-right-bottom 
  background-size[50%] rounded-lg`};
`;

export const BannerContent = styled.div`
  ${tw`w-full laptop:w-1/2  my-4 px-4 laptop:px-[32px] pb-[53px] pt-[48px] 
  laptop:pb-[91px] laptop:pt-[76px]`}
`;

export const Heading = styled.h1`
  ${tw`text-3xl laptop:text-4xl leading-[1.3] font-bold text-black-color`}
`;

export const Paragraph = styled.p`
  ${tw`text-md text-justify laptop:text-align[start] laptop:text-lg text-black-color opacity-60 my-[24px]`}
`;
