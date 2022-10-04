import { setContentWebsite, setSEO } from "@redux/slides/seo";
import { getContentWebsiteAPI, getSeoAPI } from "@services/contentWebsite";
import { Dispatch } from "react";
import { AnyAction } from "redux";

const GET_ALL = { page: 0, size: 999 };

export const getAllBaseAPIForPage = async (dispatch: Dispatch<AnyAction>) => {
  try {
    // const [seo, contentWebSite] = await Promise.all([
    //   getSeoAPI({ id: "" }),
    //   getContentWebsiteAPI({}),
    // ]);
    // dispatch(setSEO(seo));
    // dispatch(setContentWebsite(contentWebSite.results[0]));
  } catch (error) {
    console.log(error);
  }
};
