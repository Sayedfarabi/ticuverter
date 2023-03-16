import { ADD_TO_TIME, ADD_TO_TIMES } from "../action-types/actionTypes";


const initialState = {
    times: [],
    time: undefined
};

const timeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_TIMES:
            return {
                ...state,
                times: [...state.times, action.payload]
            }
        case ADD_TO_TIME:
            return {
                ...state,
                time: action?.payload
            }
        default:
            return state
    }
}

export default timeReducer;