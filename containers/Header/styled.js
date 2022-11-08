import styled, { css } from "styled-components";
import { ISPHONE, ISTABLET } from "../../styles/RWD";

export const Wrapper = styled.div`
  padding-bottom: 100px;
  ${(props) =>
    props.url &&
    css`
      background-image: url("${props.url}");
      background-position: 50% 50%;
    `};
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 146.5%;
  text-align: center;
  letter-spacing: -0.02em;
  font-feature-settings: "salt" on, "liga" off;
  color: #eeeeee;

  padding: 95px 0px 16px 0px;

  ${ISPHONE} {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const Subtitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 170%;
  text-align: center;
  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;
  color: #acafb8;

  padding: 0px 30px;

  ${ISTABLET} {
    font-size: 18px;
    line-height: 172%;
  }

  ${ISPHONE} {
    font-size: 16px;
    line-height: 138%;
  }
`;

export const Footer = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 172%;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off;
  color: #eeeeee;

  padding: 0px 30px;
`;

export const SeeMusic = styled.span`
  padding-left: 5px;
  text-decoration: underline;
`;

export const WrapperDescroptions = styled.div`
  display: flex;
  flex-direction: column;
  l: center;
  align-items: center;
`;
