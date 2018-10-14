import axios from "axios";
import { call, put } from "redux-saga/effects";

import actionTypes from "../actions/types";

export function* fetchPhones(action) {
  try {
    const response = yield call(axios.get, "/api/phones");
    yield put({
      type: actionTypes.PHONELIST.FETCH_SUCCESS,
      data: response.data
    });
  } catch (error) {
    yield put({
      type: actionTypes.PHONELIST.FETCH_FAILURE,
      error: error.message
    });
  }
}
