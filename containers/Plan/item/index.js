import { Button, Price, Subtitle, Title, Wrapper } from "./styled";

const PlanItem = ({ title, subtitle, price, button, styles }) => {
  return (
    <Wrapper {...styles}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Price>{price}</Price>
      <Button {...styles}>{button}</Button>
    </Wrapper>
  );
};
export default PlanItem;
