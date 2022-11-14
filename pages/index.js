import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Banner from "../containers/Banner";
import Categories from "../containers/Categories";
import Experiences from "../containers/Experiences";
import Footer from "../containers/Footer";
import Header from "../containers/Header";
import MusicLibrary from "../containers/MusicLibrary";
import PageWrapper from "../containers/PageWrapper";
import Plan from "../containers/Plan";
import Whyus from "../containers/Whyus";

export default function App() {
  return (
    <PageWrapper>
      <Header />
      <Banner />
      <MusicLibrary />
      <Categories />
      <Whyus />
      <Plan />
      <Experiences />
      <Footer />
    </PageWrapper>
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
