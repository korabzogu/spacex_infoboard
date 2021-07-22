import { call, put } from "@redux-saga/core/effects";
import { requestGetAllRockets } from "../requests/rockets";
import { setAllRockets } from "../../ducks/rockets";

export function* handleGetAllRockets(action) {
    try {
        const response = yield call(requestGetAllRockets);
        const { data } = response;
        yield put(setAllRockets(data));

    } catch (error) {
        console.log(error);
    }
}