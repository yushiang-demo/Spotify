import {
  Wrapper,
  Item,
  WrapperPlayList,
  FilterText,
  FilterIcon,
  WrapperFilter,
} from "./styled";

const PlaylistsBar = ({ items, onClick, currentId, filterIcon }) => {
  return (
    <Wrapper>
      <WrapperPlayList>
        {items?.map((item, index) => {
          const { id, name } = item;
          return (
            <Item
              key={index}
              onClick={onClick(id)}
              underline={currentId === id}
            >
              {name}
            </Item>
          );
        })}
      </WrapperPlayList>
      <WrapperFilter>
        <FilterText>{filterIcon?.text}</FilterText>
        <FilterIcon {...filterIcon} />
      </WrapperFilter>
    </Wrapper>
  );
};

export default PlaylistsBar;
