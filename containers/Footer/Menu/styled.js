import styled from "styled-components";
import { ISPHONE, ISTABLET } from "../../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;

  padding: 17px 0px;

  ${ISPHONE} {
    width: 50%;
  }
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 172%;
  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;
  color: #eeeeee;

  padding-bottom: 6px;

  ${ISTABLET} {
    font-size: 16px;
    line-height: 138%;
  }
`;

export const Item = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;
  color: #acafb8;

  flex: 1;
  padding: 6px 0px;

  ${ISTABLET} {
    font-size: 14px;
    line-height: 172%;
  }
`;
