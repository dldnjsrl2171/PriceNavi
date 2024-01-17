import { combineReducers } from "redux";
import HeaderMenuReducer from "./Reducers/headerMenuReducer";
import ModalReducer from "./Reducers/modalReducer";
import LoginReducer from "./Reducers/loginReducer";
const rootReducer = combineReducers(
    {
        headerMenu : HeaderMenuReducer , 
        modalReducer : ModalReducer ,
        loginReducer : LoginReducer
    }
    );

export default rootReducer;