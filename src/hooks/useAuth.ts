import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PATH } from "@routes";
import { getLoggedInAccount, isAuthenticated } from "@common/utils/auth";

import { removeCurrentUser } from "@redux/slides/auth";

import { IAccount, IRootState } from "@typings";

import { useRedirect } from "./useRedirect";

const useAuth = () => {
  const dispatch = useDispatch();
  const redirect = useRedirect();
  const [isAuth, setIsAuth] = useState<boolean>(isAuthenticated());
  const [accountInfo, setAccountInfo] = useState<IAccount>(
    getLoggedInAccount(),
  );
  const { isLogoutAction } = useSelector((state: IRootState) => state.auth);

  useEffect(() => {
    if (isLogoutAction) {
      return setIsAuth(false);
    }
    // to make sure data won't be lacked
    setIsAuth(isAuthenticated());
    setAccountInfo(getLoggedInAccount());
  }, [isLogoutAction]);

  const logout = useCallback(() => {
    dispatch(removeCurrentUser());
    redirect(PATH.SIGN_IN);
  }, []);

  return { isAuth, accountInfo, logout };
};

export default useAuth;
