import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import headerReducer from "./header-reducer";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers( {
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    authUser: headerReducer})
let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;