import { call, put, takeEvery } from "redux-saga/effects";

import getTracks from "../../api/tracks";
import {
  ACTION_GET_TRACKS,
  ACTION_GET_TRACKS_FAL,
  ACTION_GET_TRACKS_SUC,
} from "../../constants/tracks";

function* fetchTracks({ playlistId }) {
  if (!playlistId) return;

  const payload = yield call(getTracks, { playlistId });

  if (payload?.error) {
    const type = ACTION_GET_TRACKS_FAL;
    yield put({ type, payload });
    return;
  }

  const type = ACTION_GET_TRACKS_SUC;
  yield put({ type, payload });
}

export default [takeEvery(ACTION_GET_TRACKS, fetchTracks)];
