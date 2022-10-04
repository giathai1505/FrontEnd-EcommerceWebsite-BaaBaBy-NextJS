import {
  IMongoObjectId,
  ICustomSizeImages,
  IProvince,
  IDistrict,
  IWard,
  IStreet,
} from "@typings";

export interface IUser {
  _id?: IMongoObjectId;
  clientId?: String;
  provider?: String;
  birthday?: Date;
  gender?: String;
  urlAvt: ICustomSizeImages;
  identifyCard: String;
  displayName: String;
  username: String;
  email: String;
  phoneNumber: String;
  language: String;
  permission: String;
  province: IProvince;
  district: IDistrict;
  ward: IWard;
  street: IStreet;
  enabled: Boolean;
  nameOnBankCard: String;
  bankCardNumber: String;
  bankName: String;
  tradingAddress: String;
  createdAt: Date;
  updatedAt: Date;
}
