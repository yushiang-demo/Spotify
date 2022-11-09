import styled from "styled-components";

import { ISTABLET } from "../../../styles/RWD";

export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  color: #f59e00;
  text-align: left;

  ${ISTABLET} {
    text-align: center;
  }
`;

export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: #020d37;
  padding-top: 17px;
  width: 337px;

  ${ISTABLET} {
    font-size: 24px;
    text-align: center;
    width: auto;
  }
`;
