import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 334px;
  height: 345px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border: 1px solid #cdd6f9;
  border-radius: 12px;

  padding: 26px 34px;

  ${(props) =>
    props.backgroundColor &&
    css`
      background: ${props.backgroundColor};
    `};
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 45px;

  letter-spacing: -0.02em;
  font-feature-settings: "salt" on, "liga" off;

  color: #ffffff;
`;
export const Subtitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 172%;
  letter-spacing: -0.05em;
  font-feature-settings: "salt" on, "liga" off;
  color: #eeeeee;

  padding-top: 13px;
`;
export const Price = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 170%;
  letter-spacing: -0.05em;
  color: #ffffff;

  margin-top: auto;
  padding-bottom: 17px;
`;
export const Button = styled.div`
  width: 138px;
  height: 52px;

  border-radius: 8px;
  outline: #ffffff 1px solid;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-feature-settings: "salt" on, "liga" off;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.buttonColor &&
    css`
      background: ${props.buttonColor};
    `};

  ${(props) =>
    props.buttonTextColor &&
    css`
      color: ${props.buttonTextColor};
    `};
`;
