import Link from "next/link";

import { IMenuItem } from "@constants/header";
import { ArrowRightIcon, ButtonStyled, LinkStyled } from "./styles";

interface IMenuItemProps {
  data: IMenuItem;
  onShow?: (listMenu: IMenuItem[]) => void;
  onChange?: (menu: IMenuItem) => void;
}

const MenuItem: React.FC<IMenuItemProps> = ({ data, onShow, onChange }) => {
  const handleEvent = () => {
    console.log("OnShow: ", onShow);
    console.log("OnChange: ", onChange);

    if (onShow) {
      onShow(data.subMenu);
    }
    if (onChange) {
      onChange(data);
    }
  };

  if (!data.subMenu) {
    return (
      <Link href={data.path}>
        <LinkStyled>{data.name}</LinkStyled>
      </Link>
    );
  }

  return (
    <ButtonStyled onClick={handleEvent}>
      {data.name} <ArrowRightIcon />
    </ButtonStyled>
  );
};

export default MenuItem;
