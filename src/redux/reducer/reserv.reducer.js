import { SET_RESERV_DATA,EDIT_RES } from "../action/reserv.action"
export const reservReducer = (state =  {reservProject:[],editData:{}}, action) => {
    let { type, payload } = action
    switch (type) {
        case SET_RESERV_DATA:
            return  {...state,reservProject:payload};
            case EDIT_RES:

            console.log(state.editData)

            return{...state,editData:payload}
            default:
                return state
    }}





    
    
