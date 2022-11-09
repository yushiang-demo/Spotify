import styled, { css } from "styled-components";

import { ISMOBILE, ISTABLET } from "../../styles/RWD";

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
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #eeeeee;

  padding: 95px 0px 16px 0px;

  ${ISMOBILE} {
    font-size: 20px;
  }
`;

export const Subtitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  letter-spacing: -0.05em;
  color: #acafb8;

  padding: 0px 30px;

  ${ISTABLET} {
    font-size: 18px;
  }

  ${ISMOBILE} {
    font-size: 16px;
  }
`;

export const Footer = styled.div`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #eeeeee;

  padding: 0px 30px;
`;

export const SeeMusic = styled.span`
  padding-left: 5px;
  text-decoration: underline;
`;

export const DescroptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  l: center;
  align-items: center;
`;
