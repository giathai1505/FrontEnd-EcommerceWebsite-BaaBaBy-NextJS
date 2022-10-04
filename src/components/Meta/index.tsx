import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { ISEO } from "@typings";
import { mergeParams } from "@common/functions";
import { IRootState } from "@redux/store";
import { ROOT_URL } from "@constants/app";
import { LinkTag } from "./interfaces";

const Meta = ({
  title,
  currentRoute,
  seoInfo,
  description,
}: {
  title: string;
  currentRoute: string;
  seoInfo?: ISEO;
  description?: string;
}) => {
  const query = useRouter().query;
  const { seoData, contentWebsite } = useSelector(
    (state: IRootState) => state.seo,
  );
  const { seoTitle: seoTitleServer, seoDescription, seoKeyword, seoSiteMap } =
    seoData || {};

  const additionalLinkTags: LinkTag[] = [
    {
      rel: "icon",
      sizes: "32x32",
      href: `${ROOT_URL}/images/favicon/favicon-32x32.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      href: `${ROOT_URL}/images/favicon/favicon-32x32.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "16x16",
      href: `${ROOT_URL}/images/favicon/favicon-16x16.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      href: `${ROOT_URL}/images/favicon/favicon-32x32.png`,
    },
    {
      rel: "apple-touch-icon",
      sizes: "96x96",
      href: `${ROOT_URL}/images/favicon/favicon-96x96.png`,
    },
  ];

  const renderTitleDisplay = () => {
    let splitTitle = [title, seoTitleServer, seoInfo?.seoTitle];

    // Remove all undefine or null out of array
    splitTitle = splitTitle.filter(item => !!item);
    return splitTitle.join(" | ");
  };

  const url = mergeParams(`${ROOT_URL}${currentRoute}`, query);

  const titleDisplay = renderTitleDisplay();

  return (
    <DefaultSeo
      title={titleDisplay}
      defaultTitle="Usumsoftware"
      description={description || seoDescription}
      canonical={ROOT_URL}
      facebook={{
        appId: process.env.FACEBOOK_APP_ID,
      }}
      openGraph={{
        title: titleDisplay,
        type: "website",
        url,
        images: [
          {
            url:
              contentWebsite?.colorLogo?.default ||
              `${ROOT_URL}/images/favicon/favicon-96x96.png`,
            alt: title,
          },
        ],
        description: description || seoDescription,
        site_name: "UserTemplate",
        locale: "vi_VN",
      }}
      additionalLinkTags={additionalLinkTags}
      additionalMetaTags={[
        {
          name: "keywords",
          content: seoInfo ? seoInfo.seoKeyword : seoKeyword,
        },
        {
          name: "author",
          content: seoInfo ? seoInfo.author : "Usum Software",
        },
        {
          name: "publisher",
          content: "Usum Software",
        },
        {
          name: "copyright",
          content: seoInfo ? seoInfo.author : "Usum Software",
        },
      ]}
    />
  );
};

export default Meta;
