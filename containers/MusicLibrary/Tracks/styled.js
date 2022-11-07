import styled from "styled-components";
import { ISPHONE, ISTABLET } from "../../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-bottom: 1px solid #eeeeee;

  height: 480px;

  ${ISTABLET} {
    height: 420px;
  }

  ${ISPHONE} {
    height: 360px;
  }
`;
