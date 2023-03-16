import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import currencyReducer from "./currencyReducer";
import timeReducer from "./timeReducer";

const rootReducer = combineReducers({
    time: timeReducer,
    currency: currencyReducer,
    countries: countriesReducer
})

export default rootReducer;