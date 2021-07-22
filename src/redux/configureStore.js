import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import payloadReducer from "./ducks/payloads";
import starlinkReducer from "./ducks/starlink";
import crewReducer from "./ducks/crew";
import dragonReducer from "./ducks/dragons"
import rocketsReducer from "./ducks/rockets"
import { rootSaga } from "./sagas/rootSaga"

const reducer = combineReducers({
    payload: payloadReducer,
    starlink: starlinkReducer,
    crew: crewReducer,
    dragons: dragonReducer,
    rockets: rocketsReducer
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga)

export default store;