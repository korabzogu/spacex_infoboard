import { fork, all, takeLatest} from "redux-saga/effects";
import { handleGetAllPayloads } from "./handlers/payloads";
import { GET_ALL_PAYLOADS } from "../ducks/payloads";
import { handleGetAllStarlink } from "./handlers/starlink";
import { GET_ALL_STARLINK } from "../ducks/starlink"
import { handleGetAllCrew } from "./handlers/crew";
import { GET_ALL_CREW } from "../ducks/crew"
import { handleGetAllDragons} from "./handlers/dragons"
import { GET_ALL_DRAGONS } from "../ducks/dragons"
import { handleGetAllRockets} from "./handlers/rockets"
import { GET_ALL_ROCKETS } from "../ducks/rockets"


function* payloadSaga() {
    yield takeLatest(GET_ALL_PAYLOADS, handleGetAllPayloads)
}
function* starlinkSaga() {
    yield takeLatest(GET_ALL_STARLINK, handleGetAllStarlink)
}
function* crewSaga() {
    yield takeLatest(GET_ALL_CREW, handleGetAllCrew)
}
function* dragonSaga() {
    yield takeLatest(GET_ALL_DRAGONS, handleGetAllDragons)
}
function* rocketsSaga() {
    yield takeLatest(GET_ALL_ROCKETS, handleGetAllRockets)
}
export function* rootSaga() {
    yield all([
        fork(payloadSaga),
        fork(starlinkSaga),
        fork(crewSaga),
        fork(dragonSaga),
        fork(rocketsSaga)
    ]
    )
}