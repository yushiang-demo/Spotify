import styled, { css } from "styled-components";
import { ISPHONE } from "../../../styles/RWD";

export const Wrapper = styled.div`
  width: 50%;
  padding-bottom: 61px;

  ${ISPHONE} {
    width: 100%;
    padding-bottom: 31px;
  }
`;

export const WrapperItems = styled.div`
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 172%;

  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;
  color: #020d37;
`;

export const Content = styled.div`
  width: 246px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 172%;

  font-feature-settings: "salt" on, "liga" off;
  color: #4c526a;
`;
