import { toast } from "react-toastify";
import { useState } from "react";
import { useRedirect } from "./useRedirect";
import { IAccount, IGraphQLResponse, ILogin } from "@typings";
import { login as loginService } from "@services/auth";
import { PATH } from "@routes";
import { setUserCookies } from "@common/utils/auth";
import apiService from "@services";
import { LoginArgs } from "src/apiCaller";
const useLogin = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const redirect = useRedirect();
  const login = async (variables: LoginArgs) => {
    try {
      setLoading(true);
      const response = await apiService
        .login([
          "accessToken",
          "refreshToken",
          { userInfo: ["_id", "email", "phonenumber"] },
        ])
        .$args(variables)
        .$fetch();

      let result: IAccount = {
        accessToken: response?.accessToken,
        refreshToken: response?.refreshToken,
        userId: response?.userInfo._id,
      };

      if (result) {
        setUserCookies(result);
        redirect(PATH.HOME);
        toast.success("Đăng nhập thành công");
      } else {
        setError("Địa chỉ email hoặc mật khẩu đã sai , vui lòng thử lại");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { error, setError, login, loading };
};
export default useLogin;
