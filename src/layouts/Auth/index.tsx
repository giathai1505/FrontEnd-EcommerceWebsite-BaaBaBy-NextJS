import {
  AuthLayoutContainer,
  BackgroundContainer,
  ContentWrapper,
  InnerAuthLayout,
  Title,
} from "./styles";
interface IAuthLayoutProps {}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <AuthLayoutContainer>
      <InnerAuthLayout>
        <ContentWrapper>{children}</ContentWrapper>
      </InnerAuthLayout>
      <BackgroundContainer />
    </AuthLayoutContainer>
  );
};

export default AuthLayout;
