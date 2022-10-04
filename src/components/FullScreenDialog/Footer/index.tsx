import { ReactNode } from "react";
import {
  FooterContainer,
  LeftSideContainer,
  RightSideContainer,
} from "./styles";

interface IFooterProps {
  leftSide?: ReactNode;
  rightSide?: ReactNode;
}

const FSDFooter: React.FC<IFooterProps> = ({
  leftSide = null,
  rightSide = null,
}) => {
  return (
    <FooterContainer>
      <LeftSideContainer>{leftSide}</LeftSideContainer>
      <RightSideContainer>{rightSide}</RightSideContainer>
    </FooterContainer>
  );
};

export default FSDFooter;
