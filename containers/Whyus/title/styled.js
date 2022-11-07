import styled from "styled-components";
import { ISTABLET } from "../../../styles/RWD";

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;

  text-transform: uppercase;
  font-feature-settings: "salt" on, "liga" off;
  color: #f59e00;

  text-align: left;

  ${ISTABLET} {
    text-align: center;
  }
`;

export const Subtitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 45px;

  letter-spacing: -0.02em;
  font-feature-settings: "salt" on, "liga" off;
  color: #020d37;

  padding-top: 17px;
  width: 337px;

  ${ISTABLET} {
    font-size: 24px;
    line-height: 160%;
    text-align: center;
    width: auto;
  }
`;
