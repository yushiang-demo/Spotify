import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Plan from "../containers/Plan";

export default function PlanPage() {
  return <Plan />;
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["plan"])),
    },
  };
}
