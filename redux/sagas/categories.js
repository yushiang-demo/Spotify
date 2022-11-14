import { call, put, takeEvery } from "redux-saga/effects";

import getCategories from "../../api/categories";
import {
  ACTION_GET_CATEGORIES,
  ACTION_GET_CATEGORIES_FAL,
  ACTION_GET_CATEGORIES_SUC,
} from "../../constants/categories";

function* fetchCategories() {
  const payload = yield call(getCategories);
  if (payload?.error) {
    const type = ACTION_GET_CATEGORIES_FAL;
    yield put({ type, payload });
    return;
  }

  const type = ACTION_GET_CATEGORIES_SUC;
  yield put({ type, payload });
}

export default [takeEvery(ACTION_GET_CATEGORIES, fetchCategories)];
