import {
  Wrapper,
  Item,
  PlayListWrapper,
  FilterText,
  FilterIcon,
  FilterWrapper,
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
      <PlayListWrapper isLoading={isLoading} errorMessage={error?.message}>
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
      </PlayListWrapper>
      <FilterWrapper>
        <FilterText>{filterIcon?.text}</FilterText>
        <FilterIcon {...filterIcon} />
      </FilterWrapper>
    </Wrapper>
  );
};

export default PlaylistsBar;
