import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Whyus from "../containers/Whyus";

export default function WhyusPage() {
  return <Whyus />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["whyus"])),
    },
  };
}
