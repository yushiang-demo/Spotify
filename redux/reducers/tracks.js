import produce from "immer";
import {
  ACTION_GET_TRACKS,
  ACTION_GET_TRACKS_SUC,
  ACTION_GET_TRACKS_FAL,
} from "../../constatnts/tracks";

const initialState = {
  tracks: [],
  isLoading: true,
  error: null,
};

const tracks = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION_GET_TRACKS:
        draft.isLoading = true;
        break;
      case ACTION_GET_TRACKS_SUC:
        draft.isLoading = false;
        draft.tracks = action.payload?.items;
        draft.error = null;
        break;
      case ACTION_GET_TRACKS_FAL:
        draft.isLoading = false;
        draft.error = action.payload?.error;
        break;
      default:
        break;
    }
  });

export default tracks;