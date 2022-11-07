import styled from "styled-components";
import { Icon } from "../../../styles/Icon";
import { ISTABLET } from "../../../styles/RWD";

export const Wrapper = styled.div`
  border-bottom: #222222 1px solid;
  display: flex;
  flex-direction: row;
  padding: 28px;
`;
export const Logo = styled(Icon)``;
export const WrapperMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  align-items: center;

  ${ISTABLET} {
    display: none;
  }
`;
export const Item = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  font-feature-settings: "salt" on, "liga" off;
  color: #ffffff;

  padding: 0px 36px;
`;

export const Login = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  font-feature-settings: "salt" on, "liga" off;
  color: #ffffff;

  background: #0432df;
  border: 1px solid #0432df;
  border-radius: 8px;
  padding: 10px 20px;

  ${ISTABLET} {
    display: none;
  }
`;
export const LiteMenu = styled(Icon)`
  display: none;
  margin-left: auto;

  ${ISTABLET} {
    display: block;
  }
`;
