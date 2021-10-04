import { SET_LANGUAGE_DATA } from "../action/lang.action"
import { SET_GENERE_DATA } from "../action/lang.action"
import { SET_SHOW_DATA } from "../action/lang.action"
export const languageReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_LANGUAGE_DATA:
            return payload
            default:
                return state
    }
}


export const genereReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_GENERE_DATA:
            return payload
            default:
                return state
    }
}

export const showReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_SHOW_DATA:
            return payload
            default:
                return state
    }
}

