import { combineReducers, legacy_createStore as createStore,} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./Users-reduser";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer
});


let store = createStore (reducers);

window.store=store
export default store;