import styled from "styled-components";
import { ISPHONE, ISTABLET } from "../../../../styles/RWD";
import { Icon } from "../../..//../styles/Icon";

export const Wrapper = styled.div`
  flex-shrink: 0;
  height: 60px;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MusicName = styled.div`
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #020d37;

  ${ISTABLET} {
    font-size: 14px;
  }
`;
export const MusicTime = styled.div`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.05em;
  color: #4c526a;
`;
export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  flex: 1;

  height: 100%;
  overflow: hidden;
  justify-content: center;
  padding-right: 5px;
`;

export const AlbumName = styled.div`
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #4c526a;
  flex-basis: 25%;
  flex: 1;

  ${ISTABLET} {
    display: none;
  }
`;
export const ArtistName = styled.div`
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  letter-spacing: -0.05em;
  color: #4c526a;
  flex-basis: 25%;
  flex: 1;

  ${ISTABLET} {
    font-size: 14px;
  }
  ${ISPHONE} {
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
`;

export const IconLike = styled(Icon)`
  ${ISPHONE} {
    display: none;
  }
`;

export const IconDownload = styled(Icon)``;
export const IconOptions = styled(Icon)``;
