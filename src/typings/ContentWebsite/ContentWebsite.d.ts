import { IMongoObjectId, ICustomSizeImages } from "@typings";
export interface IContentWebsite {
  _id?: IMongoObjectId;
  whiteLogo?: ICustomSizeImages;
  colorLogo?: ICustomSizeImages;
  homepageImage?: ICustomSizeImages;
  photos?: ICustomSizeImages;
  address?: string;
  phone?: string;
  footerUserInfo?: [string];
  footerEmployerInfo?: [string];
  codeHeader?: string[];
  customCodeFooter?: string;
  createdAt?: Date;
  updatedAt?: Date;
  contentFooter?: string[];
}

export interface IFilterContentWebsite {
  phone?: string;
}

export interface IGetAllContentWebsite {
  filterContentWebsite?: IFilterContentWebsite;
  page?: Number;
  size?: Number;
}
