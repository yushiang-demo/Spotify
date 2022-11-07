import { takeEvery, put, call } from "redux-saga/effects";
import {
  ACTION_GET_TRACKS,
  ACTION_GET_TRACKS_SUC,
  ACTION_GET_TRACKS_FAL,
} from "../../constatnts/tracks";
import * as cookie from "../../helper/cookie";
import getTracks from "../../api/tracks";

function* fetchTracks({ playlistId }) {
  if (!playlistId) return;

  const token = cookie.getToken();
  const payload = yield call(getTracks, { token, playlistId });

  if (payload?.error) {
    const type = ACTION_GET_TRACKS_FAL;
    yield put({ type, payload });
    return;
  }

  const type = ACTION_GET_TRACKS_SUC;
  yield put({ type, payload });
}

export default [takeEvery(ACTION_GET_TRACKS, fetchTracks)];