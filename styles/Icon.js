import styled, { css } from "styled-components";

export const Icon = styled.div`
  ${(props) =>
    props.url &&
    css`
      background-image: url("${props.url}");
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `};
`;
