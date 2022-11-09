import { all } from "redux-saga/effects";

import categories from "./categories";
import playlists from "./playlists";
import tracks from "./tracks";

export default function* rootSaga() {
  yield all([...categories, ...playlists, ...tracks]);
}
