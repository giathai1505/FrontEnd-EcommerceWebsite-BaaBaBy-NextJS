import { IMenuItem } from "@constants/header";
import DownIcon from "@icons/arrow/DownArrow";
import Link from "next/link";
import { Fragment, useState } from "react";
import SubMenu from "../SubMenu";
import { MenuItemContainer } from "./styles";

interface IMenuItemProps {
  item: IMenuItem;
}

const MenuItem: React.FC<IMenuItemProps> = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const hasSubMenu = !!item.subMenu;

  const handleHover = () => {
    setIsHover(true);
  };

  const handleLeave = () => {
    setIsHover(false);
  };

  return (
    <Link href={item.path}>
      <MenuItemContainer onMouseOver={handleHover} onMouseLeave={handleLeave}>
        <span>{item.name}</span>
        {hasSubMenu && (
          <Fragment>
            <DownIcon color="#818181" />
            <SubMenu isHover={isHover} subMenuList={item.subMenu} />
          </Fragment>
        )}
      </MenuItemContainer>
    </Link>
  );
};

export default MenuItem;
