import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Footer from "../containers/Footer";

export default function FooterPage() {
  return <Footer />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["footer"])),
    },
  };
}
