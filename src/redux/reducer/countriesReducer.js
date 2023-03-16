import { LOAD_COUNTRIES } from "../action-types/actionTypes"

const initialState = {
    countries: null
}

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }


        default:
            return state
    }
}

export default countriesReducer;