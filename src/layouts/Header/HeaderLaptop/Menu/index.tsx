import { MenuContainer } from "./styles";
import { listMenuHeaders } from "@constants/header";
import MenuItem from "./MenuItem";
interface IMenuProps {}

const Menu: React.FC<IMenuProps> = props => {
  return (
    <MenuContainer>
      {listMenuHeaders.map(menu => {
        return <MenuItem key={menu.id} item={menu} />;
      })}
    </MenuContainer>
  );
};

export default Menu;
