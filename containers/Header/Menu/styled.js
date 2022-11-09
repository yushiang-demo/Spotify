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

export const Item = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;

  padding: 8px 36px;
  width: 100%;
  text-align: left;

  ${ISTABLET} {
    padding: 8px 0px;
    align-self: flex-start;
    color: #000000;
  }
`;

export const CloseMenu = styled(Item)`
  display: none;
  padding: 10px 10px 0px 0px;
  width: auto;
  &:after {
    content: "X";
  }
  ${ISTABLET} {
    display: block;
    align-self: flex-end;
  }
`;
export const Login = styled(Item)`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.01em;

  background: #0432df;
  border: 1px solid #0432df;
  border-radius: 8px;
  padding: 10px 20px;

  width: auto;

  ${ISTABLET} {
    color: #ffffff;
  }
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;

  ${ISTABLET} {
    display: none;
    position: absolute;
    right: 30px;
    flex-direction: column;
    background: white;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  ${ISTABLET} {
    flex-direction: column;
  }
`;

export const DropDownMenu = styled.div`
  margin-left: auto;

  &:focus-within {
    > ${ItemsWrapper} {
      display: flex;
    }
  }
`;

export const LiteMenu = styled(Icon)`
  display: none;
  ${ISTABLET} {
    display: block;
  }
`;
