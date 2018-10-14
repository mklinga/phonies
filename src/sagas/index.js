import { all, takeEvery } from "redux-saga/effects";

import actionTypes from "../actions/types";
import { fetchPhones } from "./phones";

export default function*() {
  yield all([takeEvery(actionTypes.PHONELIST.FETCH_REQUEST, fetchPhones)]);
}
