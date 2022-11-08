import styled from "styled-components";
import { ISPHONE, ISTABLET } from "../../styles/RWD";

export const Wrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: row;

  padding: 50px 0px;

  ${ISTABLET} {
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  width: fit-content;
  flex-basis: 30%;
  padding: 0px 0px 49px 100px;

  ${ISTABLET} {
    padding: 0px 151px 49px 151px;
    margin-left: auto;
    margin-right: auto;
  }

  ${ISPHONE} {
    padding: 0px 28px 55px 28px;
  }
`;
export const ItemsWrapper = styled.div`
  flex-basis: 60%;
  justify-content: space-between;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 0px 116px 0px 105px;

  ${ISTABLET} {
    margin: 0px 99px 0px 83px;
  }

  ${ISPHONE} {
    margin: 0px 37px 0px 37px;
    justify-content: center;
  }
`;
