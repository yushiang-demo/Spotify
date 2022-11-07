import { Title, Wrapper, Item } from "./styled";

const Menu = (menu) => {
  return (
    <Wrapper>
      <Title>{menu?.title}</Title>
      {menu?.items?.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </Wrapper>
  );
};

export default Menu;
