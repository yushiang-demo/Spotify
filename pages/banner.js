import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Banner from "../containers/Banner";

export default function WhyusPage() {
  return <Banner />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["banner"])),
    },
  };
}
