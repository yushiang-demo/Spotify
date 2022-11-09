import {
  SearchBoxWrapper,
  SearchHint,
  SearchIcon,
  TextInput,
  Wrapper,
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
