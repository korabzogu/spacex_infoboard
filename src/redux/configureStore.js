import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import payloadReducer from "./ducks/payloads";
import { watcherSaga } from "./sagas/rootSaga"

const reducer = combineReducers({
    payload: payloadReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)

export default store;