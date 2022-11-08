import styled, { css, keyframes } from "styled-components";

const anime = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

export const Status = styled.div`
  ${(props) =>
    props.isLoading &&
    css`
      background: gray;
      border-radius: 10px;
      background: linear-gradient(90deg, #a4a4a4 25%, #c4c4c4 50%, #a4a4a4 75%);
      background-size: 400% 100%;
      animation: ${anime} 1.5s ease-in infinite;
    `}

  ${(props) =>
    props.errorMessage &&
    css`
      background: red;
      border-radius: 10px;
      opacity: 50%;
      align-items: center;
      justify-content: center;
      color: white;
      &:after {
        content: "${props.errorMessage}";
      }
    `}
`;
