import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../containers/Header";
import Banner from "../containers/Banner";
import MusicLibrary from "../containers/MusicLibrary";
import Categories from "../containers/Categories";
import Whyus from "../containers/Whyus";
import Plan from "../containers/Plan";
import Experiences from "../containers/Experiences";
import Footer from "../containers/Footer";

export default function App() {
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
  return { props: { ...languges } };
}
