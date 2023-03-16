import { ADD_TO_CURRENCIES, ADD_TO_TIMES } from "../action-types/actionTypes";

const currenciesCounter = (store) => (next) => (action) => {
    const state = store.getState();
    const currencies = state?.currency?.currencies;
    const times = state?.time?.times;
    console.log(currencies);
    if (action.type === ADD_TO_CURRENCIES) {
        const newAction = {
            ...action,
            payload: { ...action?.payload, currencyPosition: currencies?.length + 1 }
        }
        return next(newAction)

    } else if (action.type === ADD_TO_TIMES) {
        const newAction = {
            ...action,
            payload: { ...action?.payload, timePosition: times?.length + 1 }
        }
        return next(newAction)
    }

    return next(action)
}

export default currenciesCounter;