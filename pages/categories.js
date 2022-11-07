import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as cookie from "../helper/cookie";
import Categories from "../containers/Categories";
import getSpotifyToken from "../api/token";

export default function CategoriesPage({ token }) {
  cookie.setToken(token);

  return <Categories />;
}

export async function getStaticProps({ locale }) {
  const token = await getSpotifyToken(
    process.env.SPOTIFY_CLIENT_ID,
    process.env.SPOTIFY_CLIENT_SECRET,
  );
  return {
    props: {
      ...(await serverSideTranslations(locale, ["categories"])),
      token,
    },
  };
}
