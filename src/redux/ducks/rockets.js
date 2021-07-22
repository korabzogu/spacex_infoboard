export const GET_ALL_ROCKETS = "GET_ALL_ROCKETS";
const SET_ALL_ROCKETS = "SET_ALL_ROCKETS";

export const getAllRockets = () => ({
    type: GET_ALL_ROCKETS
});

export const setAllRockets = (rockets) => ({
    type: SET_ALL_ROCKETS,
    rockets
});

const initialState = {
    rockets: undefined
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ALL_ROCKETS:
            const { rockets } = action;
            return { ...state, rockets};
        default:
            return state;
    }
}