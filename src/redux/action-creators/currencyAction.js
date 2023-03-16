import { ADD_TO_CODES, ADD_TO_CURRENCIES, ADD_TO_CURRENCY } from "../action-types/actionTypes"

export const addToCurrencies = currency => {
    return {
        type: ADD_TO_CURRENCIES,
        payload: currency
    }
}
export const addToCurrency = currency => {
    return {
        type: ADD_TO_CURRENCY,
        payload: currency
    }
}

export const addToCodes = codes => {
    return {
        type: ADD_TO_CODES,
        payload: codes
    }
}