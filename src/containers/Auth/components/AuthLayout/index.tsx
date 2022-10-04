import Link from "next/link";
import {
  AuthContainer,
  Description,
  LogoWrapper,
  Title,
  TitleBox,
} from "./styles";

interface IAuthLayout {
  title: string;
  description?: string;
}

const AuthLayout: React.FC<IAuthLayout> = props => {
  const { title, description = "Start your demo version", children } = props;
  return (
    <AuthContainer>
      <TitleBox>
        <Link href="/">
          <LogoWrapper>
            <img src="/ingredient/logo/logo.png" alt="logo" />
          </LogoWrapper>
        </Link>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleBox>
      {children}
    </AuthContainer>
  );
};

export default AuthLayout;
