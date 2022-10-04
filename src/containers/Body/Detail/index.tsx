import { getToken } from "@common/utils/auth";
import React from "react";
import DetailImage from "./DetailImage";
import DetailInfo from "./DetailInfo";
import { SectionWrap } from "./styles";

const Detail = () => {
  console.log(getToken());
  return (
    <SectionWrap>
      <DetailImage />
      <DetailInfo />
    </SectionWrap>
  );
};

export default Detail;
