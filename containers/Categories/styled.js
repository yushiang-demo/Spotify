import styled from "styled-components";

import { ISMOBILE, ISTABLET } from "../../styles/RWD";
import { Status } from "../../styles/Status";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 60px 101px;

  ${ISTABLET} {
    padding: 60px 60px;
  }

  ${ISMOBILE} {
    padding: 60px 16px;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: #020d37;
  padding-bottom: 23px;

  ${ISTABLET} {
    font-size: 24px;
    padding-bottom: 20px;
  }

  ${ISMOBILE} {
    font-size: 20px;
    padding-bottom: 20px;
  }
`;

export const KeepRatioWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 33.3%; /* 6:2 Aspect Ratio */

  ${ISTABLET} {
    padding-top: 75%; /* 4:3 Aspect Ratio */
  }

  ${ISMOBILE} {
    padding-top: 300%; /* 2:6 Aspect Ratio */
  }
`;

export const CategoriesWrapper = styled(Status)`
  /* retain ratio*/
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap:10px;

  ${ISTABLET} {
    grid-template-columns: auto auto auto auto;]
  }

  ${ISMOBILE} {
    grid-template-columns: auto auto;
  }
`;
export const More = styled.div`
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  text-decoration-line: underline;
  color: #0432df;
  padding-top: 20px;

  ${ISTABLET} {
    padding-top: 15px;
  }

  ${ISMOBILE} {
    padding-top: 15px;
  }
`;
