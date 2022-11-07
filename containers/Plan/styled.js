import styled from "styled-components";

import { ISTABLET, ISPHONE } from "../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  background: #0432df;
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 146.5%;

  letter-spacing: -0.02em;
  font-feature-settings: "salt" on, "liga" off;

  text-align: center;
  color: #ffffff;

  margin-left: auto;
  margin-right: auto;
  padding: 66px 332px 0px 332px;

  ${ISTABLET} {
    padding: 60px 161px 0px 161px;

    font-weight: 600;
    font-size: 28px;
    line-height: 45px;
  }

  ${ISPHONE} {
    padding: 50px 20px 0px 20px;

    font-weight: 600;
    font-size: 24px;
    line-height: 160%;
  }
`;
export const Subtitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 189%;

  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;

  color: #eeeeee;
  text-align: center;

  padding-top: 13px;

  ${ISTABLET} {
    padding-top: 12px;
  }

  ${ISPHONE} {
    font-size: 16px;

    padding-top: 8px;
  }
`;
export const PlanWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;

  padding-top: 43px;
  padding-bottom: 39px;

  ${ISTABLET} {
    padding-top: 40px;
    padding-bottom: 30px;
  }

  ${ISPHONE} {
    gap: 20px;
    padding-top: 40px;
    padding-bottom: 24px;
  }
`;
export const Footer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 189%;

  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;

  color: #eeeeee;
  text-align: center;

  padding-bottom: 69px;

  ${ISTABLET} {
    padding-bottom: 60px;
  }

  ${ISPHONE} {
    font-size: 16px;

    padding-bottom: 50px;
  }
`;
