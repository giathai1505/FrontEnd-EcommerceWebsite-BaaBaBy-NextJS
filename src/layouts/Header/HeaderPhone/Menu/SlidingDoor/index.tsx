import { HEADER, IMenuItem, listMenuHeaders } from "@constants/header";
import { PATH } from "@routes";
import Link from "next/link";
import { useState } from "react";
import MenuItem from "../MenuItem";
import {
  ActionContainer,
  ArrowLeftIcon,
  ButtonBack,
  LineSeparate,
  MenuWrapper,
  SecondaryMenuContainer,
  SlidingDoorContainer,
  SlidingDoorHeader,
  SlidingDoorHeading,
  SlidingDoorInner,
  TertiaryMenuContainer,
  TopMenu,
} from "./styles";

interface ISlidingDoor {
  visible: boolean;
}

const SlidingDoor: React.FC<ISlidingDoor> = ({ visible }) => {
  const [secondaryMenu, setSecondaryMenu] = useState<IMenuItem[]>(null);
  const [tertiaryMenu, setTertiaryMenu] = useState<IMenuItem[]>(null);
  const [showSecondaryMenu, setShowSecondaryMenu] = useState(false);
  const [showTertiaryMenu, setShowTertiaryMenu] = useState(false);

  const [currentSecondaryMenu, setCurrentSecondaryMenu] = useState<IMenuItem>(
    null,
  );

  const isAuth = false;

  const list = listMenuHeaders;

  const handleShowSecondaryMenu = listMenu => {
    setSecondaryMenu(listMenu);
    setShowSecondaryMenu(true);
  };

  const handleHiddenSecondaryMenu = () => {
    setShowSecondaryMenu(false);
  };

  const handleShowTertiaryMenu = listMenu => {
    setTertiaryMenu(listMenu);
    setShowTertiaryMenu(true);
  };

  const handleHiddenTertiaryMenu = () => {
    setShowTertiaryMenu(false);
  };

  const handleChangeCurrentSecondaryMenu = menu => {
    setCurrentSecondaryMenu(menu);
  };

  const renderActionLogged = () => {
    return (
      <SlidingDoorHeader>
        <SlidingDoorHeading>TÀI KHOẢN</SlidingDoorHeading>
        <ActionContainer>
          <Link href={PATH.ACCOUNT}>
            <a className="hover:opacity-80">Chào Thắng</a>
          </Link>
          <LineSeparate />
          <button className="hover:opacity-80">Đăng xuất</button>
        </ActionContainer>
      </SlidingDoorHeader>
    );
  };

  const renderActionNotLogin = () => {
    return (
      <SlidingDoorHeader>
        <SlidingDoorHeading>WELCOME</SlidingDoorHeading>
        <ActionContainer>
          <button className="hover:opacity-80">Đăng nhập</button>
          <LineSeparate />
          <button className="hover:opacity-80">Đăng ký</button>
        </ActionContainer>
      </SlidingDoorHeader>
    );
  };

  return (
    <SlidingDoorContainer
      visible={visible}
      style={{
        marginTop: `${HEADER.HEIGHT_MOBILE}px`,
        height: `calc(100vh - ${HEADER.HEIGHT_MOBILE}px)`,
      }}
    >
      {!isAuth && renderActionNotLogin()}
      {isAuth && renderActionLogged()}

      <SlidingDoorInner className="overflow-x-hidden">
        <TopMenu
          style={{
            display: showSecondaryMenu ? "none" : "flex",
          }}
        >
          {list.map(item => (
            <MenuItem
              key={item.id}
              data={item}
              onShow={handleShowSecondaryMenu}
            />
          ))}
        </TopMenu>

        <SecondaryMenuContainer
          style={{
            transform: !!showSecondaryMenu
              ? "translateX(0)"
              : "translateX(-100%)",
          }}
        >
          <ButtonBack onClick={handleHiddenSecondaryMenu}>
            <ArrowLeftIcon /> <span>Trở về</span>
          </ButtonBack>
          <MenuWrapper>
            {secondaryMenu?.map(item => (
              <MenuItem
                key={item.id}
                data={item}
                onShow={handleShowTertiaryMenu}
                onChange={handleChangeCurrentSecondaryMenu}
              />
            ))}
          </MenuWrapper>
        </SecondaryMenuContainer>
        <TertiaryMenuContainer
          style={{
            transform: !!showTertiaryMenu
              ? "translateX(0)"
              : "translateX(100%)",
          }}
        >
          <ButtonBack onClick={handleHiddenTertiaryMenu}>
            <ArrowLeftIcon /> <span>Trở về {currentSecondaryMenu?.name}</span>
          </ButtonBack>
          <MenuWrapper className="">
            {tertiaryMenu?.map(item => (
              <MenuItem key={item.id} data={item} />
            ))}
          </MenuWrapper>
        </TertiaryMenuContainer>
      </SlidingDoorInner>
    </SlidingDoorContainer>
  );
};

export default SlidingDoor;
