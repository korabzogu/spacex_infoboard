import { call, put } from "@redux-saga/core/effects";
import { requestGetAllPayloads } from "../requests/payload";
import { setAllPayloads } from "../../ducks/payloads";

export function* handleGetAllPayloads(action) {
    try {
        const response = yield call(requestGetAllPayloads);
        const { data } = response;
        yield put(setAllPayloads(data));

    } catch (error) {
        console.log(error);
    }
}