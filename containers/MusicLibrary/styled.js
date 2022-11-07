import styled from "styled-components";
import { ISPHONE, ISTABLET } from "../../styles/RWD";

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 45px;

  letter-spacing: -0.02em;
  font-feature-settings: "salt" on, "liga" off;

  color: #020d37;
  padding-bottom: 24px;
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

  padding-top: 20px;
  color: #0432df;
`;

export const Wrapper = styled.div`
  padding: 80px 100px;

  ${ISTABLET} {
    padding: 50px 60px;
  }

  ${ISPHONE} {
    padding: 80px 17px;
  }
`;
