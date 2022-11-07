import styled, { css } from "styled-components";
import { ISPHONE, ISTABLET } from "../../styles/RWD";

export const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 66px 0px;
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "salt" on, "liga" off;
  color: #020d37;

  padding: 0px 0px 35px 0px;

  ${ISTABLET} {
    padding: 0px 0px 35px 0px;
  }

  ${ISPHONE} {
    padding: 0px 0px 35px 0px;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  margin: 22px 45px 22px 45px;
  ${ISTABLET} {
    margin: 22px 20px 22px 20px;
  }
  ${ISPHONE} {
    margin: 22px 17px 22px 17px;
  }

  ${(props) =>
    props.url &&
    css`
      background-image: url("${props.url}");
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `};
`;
