import styled from "styled-components";
import tw from "twin.macro";

export const AuthContainer = styled.div`
  ${tw`flex flex-col gap-4`}
`;

export const TitleBox = styled.div`
  ${tw`flex flex-col items-center`}
`;

export const LogoWrapper = styled.a`
  ${tw`mb-2`}

  & img {
    ${tw`block w-full`}
  }
`;

export const Title = styled.h1`
  ${tw`text-primary-1 font-bold text-2xl leading-[1.2]`}
`;

export const Description = styled.p`
  ${tw`mt-[16px]`}
`;
