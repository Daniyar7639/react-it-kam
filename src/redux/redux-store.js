import { applyMiddleware, combineReducers, legacy_createStore as createStore,} from "redux";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./Users-reduser";
import thunk from "redux-thunk";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});


let store = createStore (reducers, applyMiddleware(thunk));

window.store=store
export default store;