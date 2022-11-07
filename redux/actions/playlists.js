import {
  ACTION_GET_FEATURED_PLAYLISTS,
  ACTION_SET_CURRENT_PLAYLISTID,
  ACTION_GET_PLAYLISTS_BY_ID,
} from "../../constatnts/playlists";

export const fetchFeaturedPlaylists = () => {
  return {
    type: ACTION_GET_FEATURED_PLAYLISTS,
  };
};

export const fetchPlaylistsById = (categoryId) => {
  return {
    type: ACTION_GET_PLAYLISTS_BY_ID,
    categoryId,
  };
};

export const setCurrentPlaylistId = (playlistId) => {
  return {
    type: ACTION_SET_CURRENT_PLAYLISTID,
    playlistId,
  };
};