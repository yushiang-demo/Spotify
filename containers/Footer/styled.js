import styled from "styled-components";

import { Icon } from "../../styles/Icon";
import { ISMOBILE, ISTABLET } from "../../styles/RWD";

export const Background = styled.div`
  background-color: #020d37;
`;

export const Wrapper = styled.div`
  display: flex;

  ${ISTABLET} {
    flex-direction: column;
  }

  padding: 45px 100px;

  ${ISTABLET} {
    padding: 45px 60px;
  }

  ${ISMOBILE} {
    padding: 45px 17px;
  }
`;

export const DescriptionsWrapper = styled.div`
  padding: 10px 0px;
`;

export const Logo = styled(Icon)``;
export const Introduction = styled.div`
  font-weight: 400;
  font-size: 16px;
  letter-spacing: -0.05em;
  color: #acafb8;
  width: 298px;
  padding: 25px 0px;

  ${ISTABLET} {
    font-size: 14px;
    width: 259px;
  }
`;
export const CopyRight = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: #acafb8;
  flex-shrink: 0;
  ${ISTABLET} {
    font-size: 14px;
  }
`;

export const MenusWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  padding-left: 153px;
  ${ISTABLET} {
    padding-left: 0px;
  }
`;
