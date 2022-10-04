import { AuthContainer, MenuItem, Line } from "./styles";
import { useRouter } from "next/router";
import { PATH } from "@routes";
import useAuth from "@hooks/useAuth";
import Link from "next/link";
interface IAuthProps {}

const Auth: React.FC<IAuthProps> = props => {
  const { isAuth, logout } = useAuth();
  const router = useRouter();
  return (
    <AuthContainer>
      {!isAuth ? (
        <>
          <Link href={PATH.SIGN_IN}>
            <MenuItem active={PATH.SIGN_IN === router.asPath}>
              Đăng nhập
            </MenuItem>
          </Link>
          <Link href={PATH.SIGN_UP}>
            <MenuItem active={PATH.SIGN_UP === router.asPath}>Đăng kí</MenuItem>
          </Link>
        </>
      ) : (
        <>
          <MenuItem
            active={PATH.SIGN_IN === router.asPath}
            className="cursor-pointer"
          >
            Tài khoản
          </MenuItem>
          <MenuItem
            className="cursor-pointer"
            active={false}
            onClick={() => {
              logout();
            }}
          >
            Đăng xuất
          </MenuItem>
        </>
      )}
    </AuthContainer>
  );
};

export default Auth;
