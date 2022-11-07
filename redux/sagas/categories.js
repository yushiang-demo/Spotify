import { takeEvery, put, call } from "redux-saga/effects";
import {
  ACTION_GET_CATEGORIES,
  ACTION_GET_CATEGORIES_SUC,
  ACTION_GET_CATEGORIES_FAL,
} from "../../constatnts/categories";
import * as cookie from "../../helper/cookie";
import getCategories from "../../api/categories";

function* fetchCategories() {
  const token = cookie.getToken();
  const payload = yield call(getCategories, token);

  if (payload?.error) {
    const type = ACTION_GET_CATEGORIES_FAL;
    yield put({ type, payload });
    return;
  }

  const type = ACTION_GET_CATEGORIES_SUC;
  yield put({ type, payload });
}

export default [takeEvery(ACTION_GET_CATEGORIES, fetchCategories)];
