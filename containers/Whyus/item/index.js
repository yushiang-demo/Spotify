import { Wrapper, Icon, Title, Content, ItemsWrapper } from "./styled";

const WhyusItem = ({ icon, title, content }) => {
  return (
    <Wrapper>
      <ItemsWrapper>
        <Icon url={icon} />
        <Title>{title}</Title>
        <Content>{content}</Content>
      </ItemsWrapper>
    </Wrapper>
  );
};

export default WhyusItem;
