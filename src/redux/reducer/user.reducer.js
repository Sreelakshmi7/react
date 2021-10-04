import { SET_USER_DATA,EDIT_USER} from "../action/user.action"
export const userReducer = (state =  {userProject:[],editData:{}}, action) => {
    let { type, payload } = action
    switch (type) {
        case SET_USER_DATA:
            return  {...state,userProject:payload};
            case EDIT_USER:

            console.log(state.editData)

            return{...state,editData:payload}
            default:
                return state
    }
}






    