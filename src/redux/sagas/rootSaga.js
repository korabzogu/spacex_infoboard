import { takeLatest} from "redux-saga/effects";
import { handleGetAllPayloads } from "./handlers/payloads";
import { GET_ALL_PAYLOADS } from "../ducks/payloads";

export function* watcherSaga() {
    yield takeLatest(GET_ALL_PAYLOADS, handleGetAllPayloads)
}