import React from "react";
import { useMediaQuery } from "react-responsive";
import RESPONSIVE from "@constants/responsive";
import HeaderLaptop from "./HeaderLaptop";
import HeaderPhone from "./HeaderPhone";
const Header: React.FC = () => {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${RESPONSIVE.desktop})`,
  });
  if (isDesktop) return <HeaderLaptop />;
  return <HeaderPhone />;
};

export default Header;
