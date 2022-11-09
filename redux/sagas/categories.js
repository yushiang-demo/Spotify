import { takeEvery, put, call } from "redux-saga/effects";
import {
  ACTION_GET_CATEGORIES,
  ACTION_GET_CATEGORIES_SUC,
  ACTION_GET_CATEGORIES_FAL,
} from "../../constatnts/categories";
import getCategories from "../../api/categories";

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
