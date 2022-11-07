import styled, { css } from "styled-components";
import { ISPHONE } from "../../../styles/RWD";

export const Wrapper = styled.div`
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 172%;
  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;
  color: #eeeeee;

  width: 100%;
  height: 100%;
  background-size: 100% 100%;

  border-radius: 8px;
  ${(props) =>
    props.url &&
    css`
      background-image: url("${props.url}");
    `};

  ${ISPHONE} {
    font-size: 16px;
    line-height: 138%;
  }
`;
