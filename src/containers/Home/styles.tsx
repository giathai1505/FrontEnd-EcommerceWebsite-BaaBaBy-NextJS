import styled from "styled-components";
import tw from "twin.macro";

export const HomeContainer = styled.div`
  ${tw`flex w-full min-h-screen flex-col items-center`}
`;

export const BannerSection = styled.div`
  ${tw`w-full bg-white-color`}
`;

export const BannerContainer = styled.section`
  ${tw`w-full max-w-[1120px] mx-auto`}
`;

export const ProductsSection = styled.div`
  ${tw`w-full bg-grey-2`}
`;

export const Main = styled.main`
  ${tw`w-full px-2 large-desktop:px-0 max-w-[1120px] large-desktop:mx-auto`}
`;
