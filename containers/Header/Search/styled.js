import styled from "styled-components";
import { Icon } from "../../../styles/Icon";
import { ISPHONE } from "../../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 51px;

  width: 600px;
  ${ISPHONE} {
    width: 287px;
  }
`;

export const SearchIcon = styled(Icon)`
  margin: 18.5px 10px 18.5px 20px;
`;

export const SearchBoxWrapper = styled.div`
  background: #eeeeee;
  border-radius: 8px;

  display: flex;
  flex-direction: row;

  width: 100%;
  height: 60px;

  align-items: center;
`;

export const TextInput = styled.input.attrs({
  type: "text",
})`
  flex: 1;
  width: 80%;

  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const SearchHint = styled.div`
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.05em;
  color: #eeeeee;

  padding-top: 10px;
`;
