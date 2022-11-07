import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import getSpotifyToken from "../api/token";
import MusicLibrary from "../containers/MusicLibrary";
import * as cookie from "../helper/cookie";

export default function MusicLibraryPage({ token }) {
  cookie.setToken(token);
  return (
    <>
      <MusicLibrary token={token} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const token = await getSpotifyToken(
    process.env.SPOTIFY_CLIENT_ID,
    process.env.SPOTIFY_CLIENT_SECRET,
  );
  return {
    props: {
      ...(await serverSideTranslations(locale, ["musicLibrary"])),
      token,
    },
  };
}
