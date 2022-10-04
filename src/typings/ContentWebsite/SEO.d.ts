import { IMongoObjectId } from "@typings";

export interface ISEO {
  _id?: IMongoObjectId;
  seoTitle?: string;
  seoKeyword?: string;
  author?: string;
  seoSiteMap?: string;
  seoDescription?: string;
  footerContentOfRealty?: string;
  footerContentOfProject?: string;
  footerContentOfBroker?: string;
  createdAt?: Date;
  updatedAt?: Date;
  language?: string;
}

export interface IGetSEO {
  language?: string;
}
