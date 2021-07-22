import { call, put } from "@redux-saga/core/effects";
import { requestGetAllDragons } from "../requests/dragons";
import { setAllDragons } from "../../ducks/dragons";

export function* handleGetAllDragons(action) {
    try {
        const response = yield call(requestGetAllDragons);
        const { data } = response;
        yield put(setAllDragons(data));

    } catch (error) {
        console.log(error);
    }
}