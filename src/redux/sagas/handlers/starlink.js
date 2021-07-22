import { call, put } from "@redux-saga/core/effects";
import { requestGetAllStarlink } from "../requests/starlink";
import { setAllStarlink } from "../../ducks/starlink";

// TODO find out how to pass parameter: assetType 
export function* handleGetAllStarlink(action) {
    try {
        console.log("try handleGetAllStarlink")
        const response = yield call(requestGetAllStarlink);
        const { data } = response;
        yield put(setAllStarlink(data));

    } catch (error) {
        console.log(error);
    }
}