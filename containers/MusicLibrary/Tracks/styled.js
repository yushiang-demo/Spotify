import styled from "styled-components";
import { ISPHONE, ISTABLET } from "../../../styles/RWD";
import { Status } from "../../../styles/Status";

export const Wrapper = styled(Status)`
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
