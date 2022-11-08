import {
  Wrapper,
  SearchIcon,
  TextInput,
  SearchHint,
  SearchBoxWrapper,
} from "./styled";

const Search = ({ icon, placeHolder, hint }) => {
  return (
    <Wrapper>
      <SearchBoxWrapper>
        <SearchIcon {...icon} />
        <TextInput placeholder={placeHolder} />
      </SearchBoxWrapper>
      <SearchHint>{hint}</SearchHint>
    </Wrapper>
  );
};

export default Search;
