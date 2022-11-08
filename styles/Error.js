import styled, { css } from "styled-components";

export const ErrorBox = styled.div`
  position: fixed;
  background: red;
  opacity: 80%;
  color: white;
  text-align: center;
  width: 100%;
  z-index: 99;

  ${(props) =>
    props.message &&
    css`
      &:after {
        content: "${props.message}";
      }
    `};
`;
