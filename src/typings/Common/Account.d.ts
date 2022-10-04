import { IPermissionType } from "@constants/permission";
import { IUser, IMongoObjectId } from "@typings";

export interface IAccount {
  token?: string;
  accessToken?: string;
  refreshToken?: string;
  userInfo: IUser;
}
