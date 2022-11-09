import { call, put, takeEvery } from "redux-saga/effects";

import getFeaturedPlaylists from "../../api/featuredPlaylists";
import getPlaylist from "../../api/playlist";
import {
  ACTION_GET_FEATURED_PLAYLISTS,
  ACTION_GET_PLAYLISTS_BY_ID,
  ACTION_GET_PLAYLISTS_FAL,
  ACTION_GET_PLAYLISTS_SUC,
} from "../../constatnts/playlists";

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
