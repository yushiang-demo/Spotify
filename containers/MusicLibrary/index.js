import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title, More, Wrapper } from "./styled";
import {
  fetchFeaturedPlaylists,
  setCurrentPlaylistId,
} from "../../redux/actions/playlists";
import { fetchTracks } from "../../redux/actions/tracks";
import PlaylistsBar from "./PlaylistsBar";
import Tracks from "./Tracks";

const MusicLibrary = () => {
  const { t } = useTranslation("musicLibrary");
  const title = t("title");
  const more = t("more");
  const filterIcon = {
    url: "/resources/musics/filter.svg",
    width: "36px",
    height: "36px",
    text: t("filter"),
  };

  const dispatch = useDispatch();
  const { playlists, currentPlaylistId } = useSelector(
    (state) => state.playlists,
  );
  const { tracks } = useSelector((state) => state.tracks);

  useEffect(() => {
    dispatch(fetchFeaturedPlaylists());
  }, []);

  useEffect(() => {
    const id = playlists?.items[0]?.id;
    dispatch(setCurrentPlaylistId(id));
  }, [playlists]);

  useEffect(() => {
    dispatch(fetchTracks(currentPlaylistId));
  }, [currentPlaylistId]);
  const onTabClick = (id) => {
    return () => {
      dispatch(setCurrentPlaylistId(id));
    };
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <PlaylistsBar
        items={playlists?.items}
        currentId={currentPlaylistId}
        onClick={onTabClick}
        filterIcon={filterIcon}
      ></PlaylistsBar>
      <Tracks items={tracks}></Tracks>
      <More>{more}</More>
    </Wrapper>
  );
};

export default MusicLibrary;
