export const GET_ALL_STARLINK = "GET_ALL_STARLINK";
const SET_ALL_STARLINK = "SET_ALL_STARLINK";

export const getAllStarlink = () => ({
    type: GET_ALL_STARLINK
});

export const setAllStarlink = (starlink) => ({
    type: SET_ALL_STARLINK,
    starlink
});

const initialState = {
    starlink: undefined
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ALL_STARLINK:
            const { starlink } = action;
            return { ...state, starlink};
        default:
            return state;
    }
}