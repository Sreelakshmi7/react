import { SET_PROJECT_DATA,EDIT_SCREEN } from "../action/theatre.action"
export const projectReducer = (state ={project:[],editData:{}}, action) => {
    let { type, payload } = action
    switch (type) {
        case SET_PROJECT_DATA:
            return {...state,project:payload};
            case EDIT_SCREEN:

            console.log(state.editData)

            return{...state,editData:payload}
            default:
                return state
    }
}



