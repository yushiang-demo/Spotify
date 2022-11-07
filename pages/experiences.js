import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Experiences from "../containers/Experiences";
export default function ExperiencePage() {
  return <Experiences />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["experiences"])),
    },
  };
}
