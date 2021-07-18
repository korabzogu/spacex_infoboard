export const GET_ALL_PAYLOADS = "GET_ALL_PAYLOADS";
const SET_ALL_PAYLOADS = "SET_ALL_PAYLOADS";

export const getAllPayloads = () => ({
    type: GET_ALL_PAYLOADS
});

export const setAllPayloads = (payloads) => ({
    type: SET_ALL_PAYLOADS,
    payloads
});

const initialState = {
    payloads: undefined
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ALL_PAYLOADS:
            const { payloads } = action;
            return { ...state, payloads};
        default:
            return state;
    }
}