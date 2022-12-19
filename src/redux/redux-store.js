import { combineReducers, legacy_createStore as createStore,} from "redux";
import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebarPage: sidebarReducer
});


let store = createStore (reducers);

window.store=store
export default store;