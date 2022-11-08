import styled, { css } from "styled-components";
import { ISPHONE } from "../../../styles/RWD";

export const Wrapper = styled.div`
  background-color: gray;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100%;
  height: 100%;
  background-size: 100% 100%;

  border-radius: 8px;
  ${(props) =>
    props.url &&
    css`
      background-image: url("${props.url}");
    `};
`;

export const Text = styled.div`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.05em;
  color: #eeeeee;
  padding: 15%;
  ${ISPHONE} {
    font-size: 16px;
  }
`;
