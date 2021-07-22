import { call, put } from "@redux-saga/core/effects";
import { requestGetAllCrew } from "../requests/crew";
import { setAllCrew } from "../../ducks/crew";

export function* handleGetAllCrew(action) {
    try {
        const response = yield call(requestGetAllCrew);
        const { data } = response;
        yield put(setAllCrew(data));

    } catch (error) {
        console.log(error);
    }
}