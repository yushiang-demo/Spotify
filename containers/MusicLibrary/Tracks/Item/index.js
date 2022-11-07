import {
  Wrapper,
  NameWrapper,
  MusicName,
  MusicTime,
  AlbumName,
  ArtistName,
  IconMusic,
  IconWrapper,
  IconLike,
  IconDownload,
  IconOptions,
} from "./styled";

const iconMusic = {
  url: "/resources/musics/music.svg",
  width: "34px",
  height: "34px",
};
const iconLike = {
  url: "/resources/musics/like.svg",
  width: "36px",
  height: "36px",
};
const iconDownload = {
  url: "/resources/musics/download.svg",
  width: "36px",
  height: "36px",
};
const iconOptions = {
  url: "/resources/musics/options.svg",
  width: "36px",
  height: "36px",
};

const Track = ({ track }) => {
  return (
    <Wrapper>
      <IconMusic {...iconMusic} />
      <NameWrapper>
        <MusicName>{track?.name}</MusicName>
        <MusicTime>{track?.duration_ms}</MusicTime>
      </NameWrapper>
      <ArtistName>
        {track?.artists?.map((artist) => artist?.name).join(" ")}
      </ArtistName>
      <AlbumName>{track?.album?.name}</AlbumName>
      <IconWrapper>
        <IconLike {...iconLike} />
        <IconDownload {...iconDownload} />
        <IconOptions {...iconOptions} />
      </IconWrapper>
    </Wrapper>
  );
};

export default Track;
