import { combineReducers } from "redux";
import categories from "../reducers/categories";
import playlists from "../reducers/playlists";
import tracks from "../reducers/tracks";

const rootReducer = combineReducers({
  categories,
  playlists,
  tracks,
});

export default rootReducer;
