import { useTranslation } from "next-i18next";
import {
  Wrapper,
  Title,
  Subtitle,
  TestimonialsWrapper,
  DotWrapper,
  Dot,
} from "./styled";
import Testimonial from "./Testimonial";

const loadContent = () => {
  const { t } = useTranslation("experiences");

  const descriptions = {
    title: t("title"),
    subtitle: t("subtitle"),
  };
  const icon = {
    url: "/resources/experiences/icon.svg",
    width: "40px",
    height: "40px",
  };
  const testimonials = [
    {
      message: t("anneMessage"),
      name: t("anneName"),
      jobTitle: t("anneJobTitle"),
      photo: {
        url: "/resources/experiences/anne.png",
        width: "95px",
        height: "95px",
      },
      icon,
    },
    {
      message: t("edwardMessage"),
      name: t("edwardName"),
      jobTitle: t("edwardJobTitle"),
      photo: {
        url: "/resources/experiences/edward.png",
        width: "95px",
        height: "95px",
      },
      icon,
    },
    {
      message: t("ronnMessage"),
      name: t("ronnName"),
      jobTitle: t("ronnJobTitle"),
      photo: {
        url: "/resources/experiences/ronn.png",
        width: "95px",
        height: "95px",
      },
      icon,
    },
  ];
  return { descriptions, testimonials };
};

const Experience = () => {
  const { descriptions, testimonials } = loadContent();

  return (
    <Wrapper>
      <Title>{descriptions?.title}</Title>
      <Subtitle>{descriptions?.subtitle}</Subtitle>
      <TestimonialsWrapper>
        {testimonials?.map((post, index) => (
          <Testimonial key={index} {...post} />
        ))}
      </TestimonialsWrapper>
      <DotWrapper>
        {testimonials?.map((_, index) => (
          <Dot key={index} />
        ))}
      </DotWrapper>
    </Wrapper>
  );
};

export default Experience;
