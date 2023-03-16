import { ADD_TO_CODES, ADD_TO_CURRENCIES, ADD_TO_CURRENCY, ADD_TO_CURRENCY_COUNTRY } from "../action-types/actionTypes"

const initState = {
    currency: null,
    currencies: [],
    country: null,
    codes: null
}
const currencyReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CURRENCIES:
            return {
                ...state,
                currencies: [...state.currencies, action.payload]
            }
        case ADD_TO_CURRENCY_COUNTRY:
            return {
                ...state,
                country: action.payload
            }
        case ADD_TO_CURRENCY:
            return {
                ...state,
                currency: action.payload
            }
        case ADD_TO_CODES:
            return {
                ...state,
                codes: action?.payload
            }
        default:
            return state
    }
}

export default currencyReducer;