import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchFeaturedPlaylists,
  setCurrentPlaylistId,
} from "../../redux/actions/playlists";
import { fetchTracks, stopTrack } from "../../redux/actions/tracks";
import PlaylistsBar from "./PlaylistsBar";
import Tracks from "./Tracks";
import { More, Title, Wrapper } from "./styled";

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
  const { playlists, currentPlaylistId, ...playlistsStatus } = useSelector(
    (state) => state.playlists,
  );
  const { tracks, ...trackStatus } = useSelector((state) => state.tracks);

  useEffect(() => {
    dispatch(fetchFeaturedPlaylists());
  }, []);

  useEffect(() => {
    const id = playlists?.items[0]?.id;
    dispatch(setCurrentPlaylistId(id));
    dispatch(stopTrack());
  }, [playlists]);

  useEffect(() => {
    dispatch(fetchTracks(currentPlaylistId));
  }, [currentPlaylistId]);

  const onTabClickFactory = (id) => {
    return () => {
      if (id === currentPlaylistId) return;
      dispatch(setCurrentPlaylistId(id));
      dispatch(stopTrack());
    };
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <PlaylistsBar
        items={playlists?.items}
        currentId={currentPlaylistId}
        onClickFactory={onTabClickFactory}
        filterIcon={filterIcon}
        {...playlistsStatus}
      />
      <Tracks items={tracks} {...trackStatus} />
      <More>{more}</More>
    </Wrapper>
  );
};

export default MusicLibrary;
