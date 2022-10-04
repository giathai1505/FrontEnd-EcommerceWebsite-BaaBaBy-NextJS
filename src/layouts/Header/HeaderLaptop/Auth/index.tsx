import { useRouter, withRouter } from "next/router";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { RiHistoryFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";

import {
  AccountContainer,
  ActionContainer,
  ActionItem,
  AuthContainer,
  ButtonStyled,
  ImageStyled,
  LinkStyled,
  NumCart,
  TopArrowStyled,
} from "./styles";
import { PATH } from "@routes";
import useAuth from "@hooks/useAuth";
import CartIcon from "@icons/Cart";
import Button from "@designs/Button";
import UserIcon from "@icons/User";
import COLORS from "@constants/color";
import { useCart } from "@hooks/useCart";
interface IAuthProps {}

const Auth: React.FC<IAuthProps> = ({}) => {
  const { isAuth, logout } = useAuth();
  const { totalCartItem } = useCart();
  const router = useRouter();

  const handleGoToCart = () => {
    isAuth ? router.push("cart") : router.push("/auth/sign-in");
  };

  return (
    <AuthContainer>
      {!isAuth ? (
        <>
          <LinkStyled onClick={handleGoToCart}>
            {isAuth && <NumCart>{totalCartItem}</NumCart>}
            <CartIcon color={COLORS["primary-1"]} />
          </LinkStyled>

          <Link href={`/auth/sign-in`}>
            <a>
              <Button size="sm" icon={<UserIcon />}>
                Đăng nhập
              </Button>
            </a>
          </Link>
        </>
      ) : (
        <>
          <Link href={PATH.CART}>
            <LinkStyled>
              {totalCartItem > 0 && <NumCart>{totalCartItem}</NumCart>}

              <CartIcon style={{ color: "inherits" }} />
            </LinkStyled>
          </Link>
          <AccountContainer className="group">
            <ImageStyled
              src="/ingredient/images/user-placeholder.png"
              alt="user avatar"
            />
            <ActionContainer className="group-hover:flex">
              <TopArrowStyled />
              <Link href={PATH.ACCOUNT}>
                <ActionItem>
                  <AiOutlineUser />
                  <span>Tài khoản của tôi</span>
                </ActionItem>
              </Link>
              <Link href={PATH.PROFILE}>
                <ActionItem>
                  <CgProfile />
                  <span>Thông tin cá nhân</span>
                </ActionItem>
              </Link>
              <Link href={PATH.ORDER_HISTORY}>
                <ActionItem>
                  <RiHistoryFill />
                  <span>Lịch sử đơn hàng</span>
                </ActionItem>
              </Link>
              <ButtonStyled onClick={() => logout()}>
                <FiLogOut /> <span>Đăng xuất</span>
              </ButtonStyled>
            </ActionContainer>
          </AccountContainer>
        </>
      )}
    </AuthContainer>
  );
};

export default Auth;
