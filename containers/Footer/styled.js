import styled from "styled-components";
import { Icon } from "../../styles/Icon";
import { ISTABLET, ISPHONE } from "../../styles/RWD";

export const Wrapper = styled.div`
  background-color: #020d37;
  display: flex;

  ${ISTABLET} {
    flex-direction: column;
  }

  padding: 45px 100px;

  ${ISTABLET} {
    padding: 45px 60px;
  }

  ${ISPHONE} {
    padding: 45px 17px;
  }
`;

export const WrapperDescriptions = styled.div`
  padding: 10px 0px;
`;

export const Logo = styled(Icon)``;
export const Introduction = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;
  color: #acafb8;

  width: 298px;

  padding: 25px 0px;

  ${ISTABLET} {
    font-size: 14px;
    line-height: 172%;

    width: 259px;
  }
`;
export const CopyRight = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 172%;
  font-feature-settings: "salt" on, "liga" off;
  color: #acafb8;

  flex-shrink: 0;
  ${ISTABLET} {
    font-size: 14px;
    line-height: 172%;
  }
`;

export const WrapperMenus = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding-left: 153px;
  ${ISTABLET} {
    padding-left: 0px;
  }
`;
