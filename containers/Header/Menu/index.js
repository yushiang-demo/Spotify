import { Wrapper, Logo, WrapperMenu, Item, LiteMenu, Login } from "./styled";

const Menu = ({ logo, items, liteModeIcon, login }) => {
  return (
    <Wrapper>
      <Logo {...logo} />
      <WrapperMenu>
        {items?.map((item, index) => (
          <Item key={index} {...item}>
            {item?.name}
          </Item>
        ))}
        <Login>{login}</Login>
      </WrapperMenu>
      <LiteMenu {...liteModeIcon} />
    </Wrapper>
  );
};

export default Menu;
