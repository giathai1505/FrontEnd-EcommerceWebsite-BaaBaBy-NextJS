import { useEffect, useRef, useState } from "react";
import useElementSize from "use-resize-observer";
import Link from "next/link";

import { IMenuItem } from "@constants/header";
import Item from "./Item";
import {
  SecondaryMenuBox,
  SubMenuContainer,
  TertiaryMenu,
  TertiaryMenuBox,
} from "./styled";

interface ISubMenuProps {
  isHover: boolean;
  subMenuList: IMenuItem[];
}

const SubMenu: React.FC<ISubMenuProps> = ({ isHover, subMenuList }) => {
  const [children, setChildren] = useState<IMenuItem[]>(null);
  const [subMenuActive, setSubMenuActive] = useState<IMenuItem>(null);
  const [isOverflowX, setIsOverflowX] = useState(false);
  const subContainerRef = useRef<HTMLDivElement>();
  const { width } = useElementSize({ ref: subContainerRef });

  const handleHover = item => {
    if (!item) {
      setChildren(null);
      return;
    }

    setSubMenuActive(item);
    if (item.subMenu) {
      setChildren(item.subMenu);
    }
  };

  useEffect(() => {
    function isInViewportX(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.left >= 0 &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    const subContainerEl = subContainerRef.current;
    if (!subContainerEl) return;
    setIsOverflowX(!isInViewportX(subContainerEl));
  }, [width, isHover]);

  return (
    <SubMenuContainer
      isHover={isHover}
      isOverflowX={isOverflowX}
      ref={subContainerRef}
    >
      <SecondaryMenuBox>
        {subMenuList.map(subMenu => {
          return (
            <Item
              key={subMenu.id}
              isActive={subMenu.id === subMenuActive?.id}
              isOverflowX={isOverflowX}
              item={subMenu}
              onHover={handleHover}
            />
          );
        })}
      </SecondaryMenuBox>

      {children?.length > 0 && (
        <TertiaryMenuBox isOverflowX={isOverflowX}>
          {children.map((child, index) => {
            return (
              <Link href={child.path} key={child.id + index}>
                <TertiaryMenu isOverflowX={isOverflowX}>
                  {child.name}
                </TertiaryMenu>
              </Link>
            );
          })}
        </TertiaryMenuBox>
      )}
    </SubMenuContainer>
  );
};

export default SubMenu;
