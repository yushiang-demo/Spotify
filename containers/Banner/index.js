import { useTranslation } from "next-i18next";
import { Wrapper, Title, Icon, WrapperIcon } from "./styled";

const loadContent = () => {
  const { t } = useTranslation("banner");

  const content = {
    title: t("title"),
    icons: [
      {
        url: "/resources/banners/dudeperfect1.svg",
        width: "50px",
        height: "50px",
      },
      {
        url: "/resources/banners/PewdiepieLogo1.svg",
        width: "50px",
        height: "50px",
      },
      {
        url: "/resources/banners/MrBeast1.svg",
        width: "77px",
        height: "54px",
      },
      {
        url: "/resources/banners/Group2.svg",
        width: "50px",
        height: "62px",
      },
      {
        url: "/resources/banners/netflix.svg",
        width: "94px",
        height: "25px",
      },
      {
        url: "/resources/banners/pixar.svg",
        width: "130px",
        height: "24.92px",
      },
      {
        url: "/resources/banners/pickypicks.svg",
        width: "50.2px",
        height: "50.2px",
      },
    ],
  };
  return content;
};

const Banner = () => {
  const { title, icons } = loadContent();

  return (
    <Wrapper>
      <Title>{title}</Title>
      <WrapperIcon>
        {icons?.map((icon, index) => (
          <Icon key={index} {...icon} />
        ))}
      </WrapperIcon>
    </Wrapper>
  );
};
export default Banner;
