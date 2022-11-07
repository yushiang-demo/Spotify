import styled from "styled-components";
import { ISTABLET, ISPHONE } from "../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 60px 101px;

  ${ISTABLET} {
    padding: 60px 60px;
  }

  ${ISPHONE} {
    padding: 60px 16px;
  }
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 45px;
  letter-spacing: -0.02em;
  font-feature-settings: "salt" on, "liga" off;
  color: #020d37;
  padding-bottom: 23px;

  ${ISTABLET} {
    font-size: 24px;
    line-height: 160%;
    padding-bottom: 20px;
  }

  ${ISPHONE} {
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 20px;
  }
`;

export const KeepRatioWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 24%; /* 1024:250 Aspect Ratio */

  ${ISTABLET} {
    padding-top: 45%; /* 648:294 Aspect Ratio */
  }

  ${ISPHONE} {
    padding-top: 163%; /* 288:470 Aspect Ratio */
  }
`;

export const WrapperCategories = styled.div`
  /* retain ratio*/
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  grid-row-gap: 20px;
  grid-column-gap: 16px;

  ${ISTABLET} {
    grid-template-columns: auto auto auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 12px;
  }

  ${ISPHONE} {
    grid-template-columns: auto auto;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
  }
`;
export const More = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  text-decoration-line: underline;
  font-feature-settings: "salt" on, "liga" off;
  color: #0432df;
  padding-top: 20px;

  ${ISTABLET} {
    padding-top: 15px;
  }

  ${ISPHONE} {
    padding-top: 15px;
  }
`;
