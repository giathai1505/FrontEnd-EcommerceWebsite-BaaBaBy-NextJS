import ImageElement from "@designs/Image";
import styled from "styled-components";
import tw from "twin.macro";

export const CardContainer = styled.a`
  ${tw`block w-full rounded-lg bg-white-color cursor-pointer hover:shadow-xs`}
`;

export const CardContent = styled.div`
  ${tw`p-[16px]`}
`;

export const ImageStyled = styled(ImageElement)`
  ${tw`rounded-lg`}
  aspect-ratio: 4/3;
`;
