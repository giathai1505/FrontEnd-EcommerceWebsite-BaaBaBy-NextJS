import React, { useRef, useLayoutEffect, useState } from "react";
import Auth from "./Auth";
import Logo from "./Logo";
import { HeaderContainer, InnerHeader, TopHeader } from "./styles";
import Menu from "./Menu";
import Search from "./Search";
import { HEADER } from "@constants/header";

interface IHeader {}

const HeaderLaptop: React.FC<IHeader> = () => {
  if (typeof window === undefined) return;

  const topHeaderRef = useRef<HTMLElement>(null);
  const lateTopScroll = useRef(0);
  const [showFullHeader, setShowFullHeader] = useState(true);

  useLayoutEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScroll = window.screenY || document.documentElement.scrollTop;

    if (Math.abs(lateTopScroll.current - currentScroll) < HEADER.HEIGHT_FULL)
      return;

    if (lateTopScroll.current < currentScroll) {
      setShowFullHeader(false);
    } else {
      setShowFullHeader(true);
    }

    lateTopScroll.current = currentScroll;
  };

  return (
    <HeaderContainer
      style={{
        transform: showFullHeader
          ? ""
          : `translateY(-${topHeaderRef.current?.clientHeight}px)`,
      }}
    >
      <InnerHeader>
        <TopHeader ref={topHeaderRef}>
          <Logo />
          <Search />
          <Auth />
        </TopHeader>
        <Menu />
      </InnerHeader>
    </HeaderContainer>
  );
};

export default HeaderLaptop;
