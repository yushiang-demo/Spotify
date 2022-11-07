import { ACTION_GET_TRACKS } from "../../constatnts/tracks";

export const fetchTracks = (playlistId) => {
  return {
    type: ACTION_GET_TRACKS,
    playlistId,
  };
};
