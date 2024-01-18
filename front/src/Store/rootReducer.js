import { combineReducers } from "redux";
import HeaderMenuReducer from "./Reducers/headerMenuReducer";
import ModalReducer from "./Reducers/modalReducer";
import LoginReducer from "./Reducers/loginReducer";
import HeaderSearchReducer from "./Reducers/headerSearchReducer";
const rootReducer = combineReducers(
    {
        headerMenu : HeaderMenuReducer , 
        modalReducer : ModalReducer ,
        loginReducer : LoginReducer , 
        headerSearchReducer : HeaderSearchReducer
    }
    );

export default rootReducer;