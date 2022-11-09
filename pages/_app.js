import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { Provider } from "react-redux";

import store from "../config/configureStore";
import "../styles/body.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Final Test Demo" />
        <meta
          property="og:image"
          content="https://spotify-bgxu39ayj-tsengyushiang.vercel.app/resources/cover.png"
        />
        <meta property="og:description" content="spotify music library" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
