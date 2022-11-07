import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Header from "../containers/Header";

export default function HeaderPage() {
  return <Header />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header"])),
    },
  };
}
