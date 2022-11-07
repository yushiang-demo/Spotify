import styled from "styled-components";
import { ISTABLET, ISPHONE } from "../../styles/RWD";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 60px;
  padding-bottom: 35px;
`;
export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  text-transform: uppercase;
  font-feature-settings: "salt" on, "liga" off;
  color: #f59e00;
  padding: 10px;
`;
export const Subtitle = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "salt" on, "liga" off;
  color: #020d37;
  padding: 10px;

  ${ISPHONE} {
    font-size: 20px;
    line-height: 30px;
  }
`;
export const WrapperTestimonials = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  margin: 25px;

  width: 966px;

  ${ISTABLET} {
    width: 644px;
  }

  ${ISPHONE} {
    width: 287px;
  }
`;

export const WrapperDot = styled.div`
  display: flex;
`;
export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: red;
  margin: 5px;
  background: #eeeeee;
`;
