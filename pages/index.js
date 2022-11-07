import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import * as cookie from "../helper/cookie";
import getSpotifyToken from "../api/token";

import Header from "../containers/Header";
import Banner from "../containers/Banner";
import MusicLibrary from "../containers/MusicLibrary";
import Categories from "../containers/Categories";
import Whyus from "../containers/Whyus";
import Plan from "../containers/Plan";
import Experiences from "../containers/Experiences";
import Footer from "../containers/Footer";

export default function App({ token, error }) {
  if (error) console.warn(error);
  else cookie.setToken(token);

  return (
    <>
      <Header />
      <Banner />
      <MusicLibrary />
      <Categories />
      <Whyus />
      <Plan />
      <Experiences />
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const languges = await serverSideTranslations(locale, [
    "header",
    "banner",
    "musicLibrary",
    "categories",
    "whyus",
    "plan",
    "experiences",
    "footer",
  ]);

  try {
    const token = await getSpotifyToken(
      process.env.SPOTIFY_CLIENT_ID,
      process.env.SPOTIFY_CLIENT_SECRET,
    );
    return {
      props: {
        ...languges,
        token,
      },
    };
  } catch {
    const error = "Get token error. Check you id and serect in .env file.";
    return { props: { ...languges, error } };
  }
}
