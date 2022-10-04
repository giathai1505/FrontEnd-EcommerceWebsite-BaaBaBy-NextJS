import Head from "next/head";
import { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { wrapper } from "@redux/store";
import { useApollo } from "@common/utils/useApollo";
import Toast from "@components/Toast";
import PageLoading from "@components/PageLoading";
import "@common/utils/cart";

import "../common/scss/index.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { client } from "@common/config/graphql";

const TopProgressBar = dynamic(
  () => {
    return import("@components/TopProgressBar");
  },
  {
    ssr: false,
  },
);

const WebApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <ApolloProvider client={client as any}>
        <TopProgressBar />
        <Toast>
          <PageLoading />
          <Component {...pageProps} auth={pageProps?.auth} />
        </Toast>
      </ApolloProvider>
    </>
  );
};

export default wrapper.withRedux(withRouter(WebApp));
