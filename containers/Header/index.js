import { useTranslation } from "next-i18next";
import {
  Wrapper,
  Title,
  Subtitle,
  Footer,
  WrapperDescroptions,
} from "./styled";
import Menu from "./Menu";
import Search from "./Search";

const loadContent = () => {
  const { t } = useTranslation("header");

  const descriptions = {
    backgroundImage: {
      url: "/resources/header/header-bg.svg",
      width: "1244px",
      hegitj: "650px",
    },
    title: t("title"),
    subtitle: t("subtitle"),
    footer: t("footer"),
    more: t("more"),
  };

  const menu = {
    logo: {
      url: "/resources/header/kdanlogo.svg",
      width: "101px",
      height: "40px",
    },
    items: [
      {
        name: "home",
        text: t("menuHome"),
      },
      {
        name: "pricing",
        text: t("menuPricing"),
      },
      {
        name: "category",
        text: t("menuCategory"),
      },
      {
        name: "blog",
        text: t("menuBlog"),
      },
      {
        name: "FAQ",
        text: t("menuFAQ"),
      },
    ],
    login: t("menuLogin"),
    liteModeIcon: {
      url: "/resources/header/liteMenu.svg",
      width: "48px",
      height: "48px",
    },
  };
  const search = {
    icon: {
      url: "/resources/header/search-icon.svg",
      width: "24px",
      height: "24px",
    },
    placeHolder: t("searchPlaceHolder"),
    hint: t("searchHint"),
  };

  return { descriptions, menu, search };
};

const Header = () => {
  const { descriptions, menu, search } = loadContent();
  return (
    <Wrapper {...descriptions?.backgroundImage}>
      <Menu {...menu} />
      <WrapperDescroptions>
        <Title>{descriptions?.title}</Title>
        <Subtitle>{descriptions?.subtitle}</Subtitle>
        <Search {...search} />
        <Footer more={descriptions?.more}>{descriptions?.footer}</Footer>
      </WrapperDescroptions>
    </Wrapper>
  );
};

export default Header;
