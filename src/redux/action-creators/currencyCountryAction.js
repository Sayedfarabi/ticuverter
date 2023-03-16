import { ADD_TO_CURRENCY_COUNTRY } from "../action-types/actionTypes"

export const addToCurrencyCountry = country => {
    return {
        type: ADD_TO_CURRENCY_COUNTRY,
        payload: country
    }
}