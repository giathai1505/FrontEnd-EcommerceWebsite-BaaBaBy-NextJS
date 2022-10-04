import { IMongoObjectId, IUser } from "@typings";

export interface ILogin {
  user: {
    email: string;
    password: string;
  };
}

export interface IGetToken {
  data?: { idToken: string };
  loginMethod: "google" | "facebook" | "phone";
}
export interface IDecodeToken {
  exp: number;
  iat?: number;
  id?: string;
  email?: string;
}

export interface IAccount {
  accessToken?: string;
  refreshToken?: string;
  userId: string;
}

export interface IUpdateUserInformationPersonal {
  input: {
    fullName: string;
    phoneNumber: string;
  };
}
export interface IUpdatePassword {
  passwordInput: {
    oldPassword: string;
    newPassword: string;
  };
}

export interface ILoginByGoogle {
  idToken: string | undefined;
}

export interface ILoginByFacebook {
  idToken: string | undefined;
}

export interface ISignUp {
  user: ISignUpInput;
}

export interface ISignUpInput {
  fullName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  passwordConfirm: string | undefined;
  isAgreePolicy: boolean | undefined;
  isSubscribe: boolean | undefined;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  input: {
    hash: string;
    userId: string;
    password: string;
  };
}
