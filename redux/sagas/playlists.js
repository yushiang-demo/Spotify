import { takeEvery, put, call } from "redux-saga/effects";
import {
  ACTION_GET_FEATURED_PLAYLISTS,
  ACTION_GET_PLAYLISTS_BY_ID,
  ACTION_GET_PLAYLISTS_SUC,
  ACTION_GET_PLAYLISTS_FAL,
} from "../../constatnts/playlists";
import getFeaturedPlaylists from "../../api/featuredPlaylists";
import getPlaylist from "../../api/playlist";

function* fetchFeaturedPlaylists() {
  const payload = yield call(getFeaturedPlaylists);

  if (payload?.error) {
    const type = ACTION_GET_PLAYLISTS_FAL;
    yield put({ type, payload });
    return;
  }

  const type = ACTION_GET_PLAYLISTS_SUC;
  yield put({ type, payload });
}

function* fetchPlaylistsById({ categoryId }) {
  const payload = yield call(getPlaylist, { categoryId });

  if (payload?.error) {
    const type = ACTION_GET_PLAYLISTS_FAL;
    yield put({ type, payload });
    return;
  }

  const type = ACTION_GET_PLAYLISTS_SUC;
  yield put({ type, payload });
}

export default [
  takeEvery(ACTION_GET_FEATURED_PLAYLISTS, fetchFeaturedPlaylists),
  takeEvery(ACTION_GET_PLAYLISTS_BY_ID, fetchPlaylistsById),
];
