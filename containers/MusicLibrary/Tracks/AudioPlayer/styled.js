import styled, { keyframes, css } from "styled-components";
import { Icon } from "../../../../styles/Icon";

const sizeChangingAnimation = keyframes`
  0% { transform: scale(1.0);}
  50% { transform: scale(0.7);}
  100% { transform: scale(1.0);}
`;
export const IconMusic = styled(Icon)`
  margin: 28px;

  ${(props) =>
    props.isPlaying &&
    css`
      animation: ${sizeChangingAnimation} 1s infinite;
    `}
`;
