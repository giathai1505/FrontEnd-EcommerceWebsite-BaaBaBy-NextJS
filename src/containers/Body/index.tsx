import React, { useEffect, useState } from "react";

import ProductDesc from "./Description";
import Detail from "./Detail";
import Rating from "./Rating";
import SimilarProduct from "./Similar";
import { BodyContainer } from "./styles";
import apiService from "@common/utils/apiService";

const Body = () => {
  return (
    <BodyContainer>
      <Detail />
      <SimilarProduct />
      <ProductDesc />
      <Rating />
    </BodyContainer>
  );
};

export default Body;
