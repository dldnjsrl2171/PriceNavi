//CSS
import { useEffect } from "react";
import "./headerSearch.css";
//Modules
import HeaderSearchClosed from "./HeaderSearchClosed/headerSearchClosed";
import HeaderSearchOpen from "./HeaderSearchOpend/headerSearchOpend";
//State

//img

import { useDispatch, useSelector } from "react-redux";

//Store

function HeaderSearch(){

    const state = useSelector((state)=>state.headerSearchReducer);

    const toggleState = state.toggle;

    const render = 
    (
        <div id="headerSearch">
            <div className="headerSearchContainer">
                {toggleState ?  <HeaderSearchOpen /> : <HeaderSearchClosed />}
            </div>
        </div> 
    );
    return render;
}

export default  HeaderSearch;