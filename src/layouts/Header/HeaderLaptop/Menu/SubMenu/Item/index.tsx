import Link from "next/link";

import { IMenuItem } from "@constants/header";
import {
  ItemContainer,
  LeftArrowIconStyled,
  RightArrowIconStyled,
} from "./styles";

interface IItem {
  isActive?: boolean;
  isOverflowX: boolean;
  item: IMenuItem;
  onHover: (item: IMenuItem) => void;
}

const Item: React.FC<IItem> = ({ item, isActive, isOverflowX, onHover }) => {
  const handleHover = () => {
    onHover(item);
  };

  const hasChildren = !!item.subMenu;

  return (
    <Link href={item.path}>
      <ItemContainer
        isOverflowX={isOverflowX}
        isActive={isActive}
        onMouseOver={handleHover}
      >
        <span>{item.name}</span>
        {hasChildren && !isOverflowX && (
          <RightArrowIconStyled className={isActive ? "translate-x-1" : ""} />
        )}

        {hasChildren && isOverflowX && (
          <LeftArrowIconStyled className={isActive ? "-translate-x-1" : ""} />
        )}
      </ItemContainer>
    </Link>
  );
};

export default Item;
