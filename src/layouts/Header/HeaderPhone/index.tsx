import Logo from "./Logo";
import Menu from "./Menu";
import { HeaderPhoneContainer } from "./styles";

interface IHeaderPhone {}

const HeaderPhone: React.FC<IHeaderPhone> = () => {
  return (
    <HeaderPhoneContainer>
      <Logo />
      <Menu />
    </HeaderPhoneContainer>
  );
};

export default HeaderPhone;
