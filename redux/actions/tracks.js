import {
  ACTION_GET_TRACKS,
  ACTION_SET_PLAYING_ID,
} from "../../constants/tracks";

export const fetchTracks = (playlistId) => {
  return {
    type: ACTION_GET_TRACKS,
    playlistId,
  };
};

export const playTrack = (trackId) => {
  return {
    type: ACTION_SET_PLAYING_ID,
    trackId,
  };
};

export const stopTrack = () => {
  return {
    type: ACTION_SET_PLAYING_ID,
    trackId: null,
  };
};
