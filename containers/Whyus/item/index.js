import { Wrapper, Icon, Title, Content, WrapperItems } from "./styled";

const WhyusItem = ({ icon, title, content }) => {
  return (
    <Wrapper>
      <WrapperItems>
        <Icon url={icon} />
        <Title>{title}</Title>
        <Content>{content}</Content>
      </WrapperItems>
    </Wrapper>
  );
};

export default WhyusItem;
