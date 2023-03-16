import { LOAD_COUNTRIES } from "../action-types/actionTypes"

export const addToCountries = countries => {
    return {
        type: LOAD_COUNTRIES,
        payload: countries
    }
}