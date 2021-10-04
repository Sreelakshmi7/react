import { SET_BOOK_DATA } from "../action/booking.action"

export const bookReducer = (state = [], action) => {
    let { type, payload } = action
    switch (type) {
        case SET_BOOK_DATA:
            return payload
            default:
                return state
    }
}
