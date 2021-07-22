export const GET_ALL_DRAGONS = "GET_ALL_DRAGONS";
const SET_ALL_DRAGONS = "SET_ALL_DRAGONS";

export const getAllDragons = () => ({
    type: GET_ALL_DRAGONS
});

export const setAllDragons = (dragons) => ({
    type: SET_ALL_DRAGONS,
    dragons
});

const initialState = {
    dragons: undefined
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ALL_DRAGONS:
            const { dragons } = action;
            return { ...state, dragons};
        default:
            return state;
    }
}