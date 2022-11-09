import styled from "styled-components";

import { ISMOBILE, ISTABLET } from "../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  background: #0432df;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 36px;
  letter-spacing: -0.02em;
  text-align: center;
  color: #ffffff;

  margin-left: auto;
  margin-right: auto;
  padding: 66px 332px 0px 332px;

  ${ISTABLET} {
    padding: 60px 161px 0px 161px;
    font-weight: 600;
    font-size: 28px;
  }

  ${ISMOBILE} {
    padding: 50px 20px 0px 20px;
    font-weight: 600;
    font-size: 24px;
  }
`;
export const Subtitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.05em;
  color: #eeeeee;
  text-align: center;
  padding-top: 13px;
  ${ISTABLET} {
    padding-top: 12px;
  }

  ${ISMOBILE} {
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

  ${ISMOBILE} {
    gap: 20px;
    padding-top: 40px;
    padding-bottom: 24px;
  }
`;
export const Footer = styled.div`
  font-weight: 500;
  font-size: 18px;
  letter-spacing: -0.05em;
  color: #eeeeee;
  text-align: center;
  padding-bottom: 69px;

  ${ISTABLET} {
    padding-bottom: 60px;
  }

  ${ISMOBILE} {
    font-size: 16px;

    padding-bottom: 50px;
  }
`;
