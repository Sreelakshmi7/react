import { applyMiddleware,compose, createStore } from "redux";
import { rootReducer } from "../reducer";
import thunk from "redux-thunk"
export const store=createStore(rootReducer,compose(applyMiddleware(thunk)))
store.subscribe(()=>{
    console.log("store",store.getState())
})