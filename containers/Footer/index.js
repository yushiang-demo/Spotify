import { useTranslation } from "next-i18next";
import {
  Wrapper,
  DescriptionsWrapper,
  MenusWrapper,
  Logo,
  Introduction,
  CopyRight,
} from "./styled";
import Menu from "./Menu";

const loadContent = () => {
  const { t } = useTranslation("footer");
  const descriptions = {
    logo: {
      url: "/resources/footer/kdanlogo.svg",
      width: "101px",
      height: "40px",
    },
    introduction: t("introduction"),
    copyRight: t("copyRight"),
  };
  const items = [
    {
      title: t("productTitle"),
      items: [
        t("productBrowseMusics"),
        t("productPricing"),
        t("productFAQ"),
        t("productAffiliate"),
      ],
    },
    {
      title: t("companyTitle"),
      items: [
        t("companyBlog"),
        t("companyAboutUs"),
        t("companyHelp"),
        t("companyCareer"),
      ],
    },
    {
      title: t("socailMediaTitle"),
      items: [
        t("socailMediaTwitter"),
        t("socailMediaInstagram"),
        t("socailMediaYoutube"),
        t("socailMediaFacebook"),
      ],
    },
  ];

  return { descriptions, items };
};

const Footer = () => {
  const { descriptions, items } = loadContent();
  return (
    <Wrapper>
      <DescriptionsWrapper>
        <Logo {...descriptions?.logo} />
        <Introduction>{descriptions?.introduction}</Introduction>
        <CopyRight>{descriptions?.copyRight}</CopyRight>
      </DescriptionsWrapper>
      <MenusWrapper>
        {items?.map((item, index) => (
          <Menu key={index} {...item} />
        ))}
      </MenusWrapper>
    </Wrapper>
  );
};

export default Footer;
