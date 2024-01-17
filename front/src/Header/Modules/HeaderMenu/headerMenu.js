//CSS
import "./headerMenu.css";
//Modules

//State
import { useDispatch, useSelector } from "react-redux";

//Store


//Level 2 - HeaderMenu
function HeaderMenu(){
    const toggleState = useSelector(state => state.headerMenu);
    console.log("이곳" + toggleState);
    const toggleDispatch = useDispatch();
    
    const toggle = () => {
        toggleDispatch({type : "HEADERMENU_TOGGLE"});
    }

    const render = 
    <div id="headerMenu">
        <div className="menuBarContainer">
            <div className="menu" onClick={toggle}>
                <div className="menuBar" id="bar1"></div>
                <div className="menuBar" id="bar2"></div>
                <div className="menuBar" id="bar3"></div>
            </div>
        </div>
        {toggleState ? <HeaderMenuOpen/> : null }
    </div>
    return render;
    
}

export default  HeaderMenu;

function HeaderMenuOpen(){

    const dispatch = useDispatch();
    const callLoginModal = () => {
        dispatch({type : "HEADERMENU_TOGGLE"});
        dispatch({type : "MODAL_LOGIN"});
    };
    const render = 
    <div id="headerMenuOpen">
        <ul className="headeMenuList">
            <li className="headerMenuItem" id="headerLoginForm" onClick={()=>callLoginModal()}>
                <span className="menuTitle">LOGIN</span><i className="menuItemArrow"></i>
            </li>
            <li className="headerMenuItem">
                <span className="menuTitle">REGISTER</span><i className="menuItemArrow"></i>
            </li>
        </ul>
    </div>
    return render;
}