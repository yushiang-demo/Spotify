import styled, { css } from "styled-components";
import { ISPHONE, ISTABLET } from "../../../styles/RWD";
import { Icon } from "../../../styles/Icon";
import { Status } from "../../../styles/Status";

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 30px;
  align-items: center;
`;

export const WrapperFilter = styled.div`
  margin-left: auto;
  display: flex;
  background: #f1f1f1;
  border-radius: 4px;
  align-items: center;
  padding: 5px;
`;
export const FilterText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 138%;
  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;

  padding: 11px;

  ${ISPHONE} {
    display: none;
  }
`;
export const FilterIcon = styled(Icon)``;

export const WrapperPlayList = styled(Status)`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width: 60%;
  height: 50px;

  ${ISTABLET} {
    width: 80%;
  }

  ${ISPHONE} {
    width: 60%;
  }
`;

export const Item = styled.div`
  flex-shrink: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 138%;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;
  color: #4c526a;

  width: 12.285%; /* fit 7 items*/
  padding: 0px 1% 0px 1%;

  ${(props) =>
    props.underline &&
    css`
      text-decoration: underline;
    `}

  ${ISTABLET} {
    width: 14.666%; /* fit 6 items*/
    font-size: 14px;
    line-height: 138%;
  }

  ${ISPHONE} {
    width: 31.333%; /* fit 3 items*/
    font-size: 14px;
    line-height: 138%;
  }
`;
