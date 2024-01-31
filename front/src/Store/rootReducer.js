import { combineReducers } from "redux";
import HeaderMenuReducer from "./Reducers/headerMenuReducer";
import ModalReducer from "./Reducers/modalReducer";
import LoginReducer from "./Reducers/loginReducer";
import HeaderSearchReducer from "./Reducers/headerSearchReducer";
import HeaderRadioReducer from "./Reducers/headerRadioReducer";
const rootReducer = combineReducers(
    {
        headerMenuReducer : HeaderMenuReducer , 
        modalReducer : ModalReducer ,
        loginReducer : LoginReducer , 
        headerSearchReducer : HeaderSearchReducer,
        headerRadioReducer : HeaderRadioReducer
    }
    );

export default rootReducer;