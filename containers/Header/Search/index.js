import {
  Wrapper,
  SearchIcon,
  TextInput,
  SearchHint,
  WrapperSearchBox,
} from "./styled";

const Search = ({ icon, placeHolder, hint }) => {
  return (
    <Wrapper>
      <WrapperSearchBox>
        <SearchIcon {...icon} />
        <TextInput placeholder={placeHolder} />
      </WrapperSearchBox>
      <SearchHint>{hint}</SearchHint>
    </Wrapper>
  );
};

export default Search;
