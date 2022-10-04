import styled from "styled-components";
import tw from "twin.macro";

export const AuthLayoutContainer = styled.div`


  ${tw`grid desktop:grid-cols-2 h-screen`}
`;

export const InnerAuthLayout = styled.div`
  ${tw`w-full flex flex-col gap-1 items-center justify-center bg-white-color`}
`;

export const ContentWrapper = styled.div`
  ${tw`w-3/4 desktop:w-2/3`}
`;

export const BackgroundContainer = styled.div`
  background: url("/ingredient/images/auth-background.png") no-repeat 80% 100%,
    url("/ingredient/images/decorate-icon.png") no-repeat 100% 0%;
  background-size: 80%, 40%;
  ${tw`hidden desktop:block bg-secondary items-center justify-center relative`}
`;

export const Title = styled.p`
  ${tw`font-bold text-white-color text-xxl`}
`;
