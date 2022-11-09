import styled, { css } from "styled-components";

import { ISMOBILE } from "../../../styles/RWD";

export const Wrapper = styled.div`
  width: 50%;
  padding-bottom: 61px;

  ${ISMOBILE} {
    width: 100%;
    padding-bottom: 31px;
  }
`;

export const ItemsWrapper = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

export const Icon = styled.div`
  width: 56px;
  height: 56px;
  margin: 0px 0px 28px 0px;
  ${(props) =>
    props.url &&
    css`
      background-image: url("${props.url}");
    `};
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.05em;
  color: #020d37;
`;

export const Content = styled.div`
  width: 246px;
  font-weight: 500;
  font-size: 14px;
  color: #4c526a;
`;
