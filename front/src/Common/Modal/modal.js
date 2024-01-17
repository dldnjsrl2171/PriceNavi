//CSS
import "./modal.css";
//Modules
import Login from "../Login/login";
//State

//Store
import { useSelector } from "react-redux";

//Level 1 - Header
function Modal(){
    
    let profileState = useSelector(state => state.modalReducer);
    let profile = "CLOSE";
    switch(profileState.profile){
        case "MODAL_LOGIN" : profile = <Login></Login>;
        break;
        case "MODAL_CLOSE" : 
        default : 
        return <div id="modal">없음</div>;
    }
    const render = 
    (
        <div id="modal">
            {profile}
        </div>
    );
    return render;
}

export default  Modal;

//Function
const LOGIN = "LOGIN";
