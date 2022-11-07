import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import Head from "next/head";
import store from "../config/configureStore";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://www.tpisoftware.com/tpu/File/onlineResource/articles/1244/titlePageImg.jpg"
        />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
