import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import * as cookie from "../helper/cookie";
import Header from "../containers/Header";
import Banner from "../containers/Banner";
import MusicLibrary from "../containers/MusicLibrary";
import Categories from "../containers/Categories";
import Whyus from "../containers/Whyus";
import Plan from "../containers/Plan";
import Experiences from "../containers/Experiences";
import Footer from "../containers/Footer";
import { ErrorBox } from "../styles/Error";

export default function App({ token, error }) {
  if (error) console.warn(error);
  else cookie.setToken(token);

  return (
    <>
      {!!error && <ErrorBox {...error} />}
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

  const error = {
    message:
      "Server-side get token error. Check your id and serect in .env file.",
  };
  return { props: { ...languges, error } };
}
