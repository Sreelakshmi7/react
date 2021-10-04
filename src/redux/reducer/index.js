import { combineReducers } from "redux";

import { projectReducer } from "./theatre.reducer";
import { userReducer } from "./user.reducer";
import { reservReducer } from "./reserv.reducer"
import{languageReducer} from "./lang.reducer"
import{genereReducer} from "./lang.reducer"
import{showReducer} from "./lang.reducer"
import{bookReducer} from "./booking.reducer"

export const rootReducer = combineReducers({

    project: projectReducer,
    userProject: userReducer,
    reservProject: reservReducer,
    langProject:languageReducer,
    genereProject:genereReducer,
    showProject:showReducer,
    bookProject:bookReducer

})

