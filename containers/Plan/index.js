import { useTranslation } from "next-i18next";
import PlanItem from "./item";

import { Wrapper, Footer, PlanWrapper, Subtitle, Title } from "./styled";

const loadContent = () => {
  const { t } = useTranslation("plan");
  const descriptions = {
    title: t("title"),
    subtitle: t("subtitle"),
    footer: t("footer"),
  };
  const plans = [
    {
      title: t("basicTitle"),
      subtitle: t("basicSubtitle"),
      price: t("basicPrice"),
      button: t("getStartedButton"),
      styles: {
        backgroundColor: "#0432DF",
        buttonColor: "#0432DF",
        buttonTextColor: "#FFFFFF",
      },
    },
    {
      title: t("premiumTitle"),
      subtitle: t("premiumSubtitle"),
      price: t("premiumPrice"),
      button: t("getStartedButton"),
      styles: {
        backgroundColor: "#1B4BFF",
        buttonColor: "#FFFFFF",
        buttonTextColor: "#0432DF",
      },
    },
  ];
  return { descriptions, plans };
};

const Plan = () => {
  const { descriptions, plans } = loadContent();
  return (
    <Wrapper>
      <Title>{descriptions.title}</Title>
      <Subtitle>{descriptions.subtitle}</Subtitle>
      <PlanWrapper>
        {plans?.map((plan, index) => (
          <PlanItem key={index} {...plan} />
        ))}
      </PlanWrapper>
      <Footer>{descriptions.footer}</Footer>
    </Wrapper>
  );
};
export default Plan;
