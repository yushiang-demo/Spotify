import styled from "styled-components";

import { ISMOBILE, ISTABLET } from "../../styles/RWD";

export const Title = styled.div`
  font-weight: 600;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: #020d37;
  padding-bottom: 24px;
`;

export const More = styled.div`
  font-weight: 600;
  font-size: 14px;

  display: flex;
  align-items: center;
  letter-spacing: -0.01em;
  text-decoration-line: underline;

  padding-top: 20px;
  color: #0432df;
`;

export const Wrapper = styled.div`
  padding: 80px 100px;

  ${ISTABLET} {
    padding: 50px 60px;
  }

  ${ISMOBILE} {
    padding: 80px 17px;
  }
`;
