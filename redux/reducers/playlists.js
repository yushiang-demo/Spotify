import produce from "immer";

import {
  ACTION_GET_FEATURED_PLAYLISTS,
  ACTION_GET_PLAYLISTS_BY_ID,
  ACTION_GET_PLAYLISTS_FAL,
  ACTION_GET_PLAYLISTS_SUC,
  ACTION_SET_CURRENT_PLAYLISTID,
} from "../../constatnts/playlists";

const initialState = {
  playlists: null,
  isLoading: true,
  error: null,
  currentPlaylistId: null,
};

const playlists = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION_GET_FEATURED_PLAYLISTS:
      case ACTION_GET_PLAYLISTS_BY_ID:
        draft.isLoading = true;
        break;
      case ACTION_GET_PLAYLISTS_SUC:
        draft.isLoading = false;
        draft.playlists = action.payload?.playlists;
        draft.error = null;
        break;
      case ACTION_GET_PLAYLISTS_FAL:
        draft.isLoading = false;
        draft.error = action.payload?.error;
        break;
      case ACTION_SET_CURRENT_PLAYLISTID:
        draft.currentPlaylistId = action?.playlistId;
        break;
      default:
        break;
    }
  });

export default playlists;
