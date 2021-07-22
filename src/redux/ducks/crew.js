export const GET_ALL_CREW = "GET_ALL_CREW";
const SET_ALL_CREW = "SET_ALL_CREW";

export const getAllCrew = () => ({
    type: GET_ALL_CREW
});

export const setAllCrew = (crew) => ({
    type: SET_ALL_CREW,
    crew
});

const initialState = {
    crew: undefined
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ALL_CREW:
            const { crew } = action;
            return { ...state, crew};
        default:
            return state;
    }
}