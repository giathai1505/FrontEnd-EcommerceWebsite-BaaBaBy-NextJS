import React from "react";
import { ArrowRightIcon } from "./images";
import { Title, TitleIcon, TitleWrap } from "./styles";

const SectionTitle = ({ name }) => {
  return (
    <TitleWrap>
      <Title>{name}</Title>
      <ArrowRightIcon />
    </TitleWrap>
  );
};

export default SectionTitle;
