import { ReactNode } from "react";
import { RightIcon } from "./icons";
import { Description, Heading, TitleContainer } from "./styles";

interface ITitleProps {
  children: ReactNode;
  description: string;
}

const Title: React.FC<ITitleProps> = ({ children, description }) => {
  return (
    <TitleContainer>
      <Heading>
        {children} <RightIcon />{" "}
      </Heading>
      <Description>{description}</Description>
    </TitleContainer>
  );
};

export default Title;
