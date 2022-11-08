import {
  Wrapper,
  Logo,
  DropDownMenu,
  ItemContainer,
  LinkContainer,
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
        <ItemContainer>
          <CloseMenu />
          <LinkContainer tabIndex="0">
            {items?.map((item, index) => (
              <Item key={index} {...item}>
                {item?.name}
              </Item>
            ))}
            <Login>{login}</Login>
          </LinkContainer>
        </ItemContainer>
      </DropDownMenu>
    </Wrapper>
  );
};

export default Menu;
