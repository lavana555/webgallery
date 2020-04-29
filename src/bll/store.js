import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import {ListPhotoReducer} from "./ListPhotoReducer";


const rootReducer = combineReducers({
    photo: ListPhotoReducer

})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
