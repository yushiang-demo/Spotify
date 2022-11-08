import { useTranslation } from "next-i18next";

import { Wrapper, TitleWrapper, ItemsWrapper } from "./styled";
import WhyusTitle from "./title";
import WhyusItem from "./item";

const loadContent = () => {
  const { t } = useTranslation("whyus");
  const title = {
    title: t("title"),
    subtitle: t("subtitle"),
  };
  const items = [
    {
      icon: "/resources/icons/customers.svg",
      title: t("customersTitle"),
      content: t("customersContent"),
    },
    {
      icon: "/resources/icons/sounds.svg",
      title: t("soundsTitle"),
      content: t("soundsContent"),
    },
    {
      icon: "/resources/icons/royalty.svg",
      title: t("royaltyTitle"),
      content: t("royaltyContent"),
    },
    {
      icon: "/resources/icons/best.svg",
      title: t("bestTitle"),
      content: t("bestContent"),
    },
  ];
  return { title, items };
};

const Whyus = () => {
  const { title, items } = loadContent();
  return (
    <Wrapper>
      <TitleWrapper>
        <WhyusTitle {...title}></WhyusTitle>
      </TitleWrapper>
      <ItemsWrapper>
        {items?.map((item, index) => (
          <WhyusItem key={index} {...item} />
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
};

export default Whyus;
