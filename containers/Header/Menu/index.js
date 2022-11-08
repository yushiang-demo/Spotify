import {
  Wrapper,
  Logo,
  DropDownMenu,
  ItemsWrapper,
  LinksWrapper,
  Item,
  LiteMenu,
  Login,
  CloseMenu,
} from "./styled";

const Menu = ({ logo, items, liteModeIcon, login }) => {
  return (
    <Wrapper>
      <Logo {...logo} />
      <DropDownMenu>
        <LiteMenu {...liteModeIcon} tabIndex="0" />
        <ItemsWrapper>
          <CloseMenu />
          <LinksWrapper tabIndex="0">
            {items?.map((item, index) => (
              <Item key={index} {...item}>
                {item?.name}
              </Item>
            ))}
            <Login>{login}</Login>
          </LinksWrapper>
        </ItemsWrapper>
      </DropDownMenu>
    </Wrapper>
  );
};

export default Menu;
