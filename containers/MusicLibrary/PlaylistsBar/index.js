import {
  Wrapper,
  Item,
  WrapperPlayList,
  FilterText,
  FilterIcon,
  WrapperFilter,
} from "./styled";

const PlaylistsBar = ({
  items,
  onClickFactory,
  currentId,
  filterIcon,
  isLoading,
  error,
}) => {
  return (
    <Wrapper>
      <WrapperPlayList isLoading={isLoading} errorMessage={error?.message}>
        {!isLoading &&
          items?.map((item, index) => {
            const { id, name } = item;
            return (
              <Item
                key={index}
                onClick={onClickFactory(id)}
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
