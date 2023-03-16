import { ADD_TO_TIME, ADD_TO_TIMES } from "../../action-types/actionTypes"

export const addToTimes = time => {
    return {
        type: ADD_TO_TIMES,
        payload: time
    }
}
export const addToTime = time => {
    return {
        type: ADD_TO_TIME,
        payload: time
    }
}