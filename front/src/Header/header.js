//CSS
import "./header.css";
//Modules
import HeaderLogo from "./Modules/HeaderLogo/headerLogo";
import HeaderSearch from "./Modules/HeaderSearch/headerSearch";
import HeaderMenu from "./Modules/HeaderMenu/headerMenu";
//State
import { useState } from "react";
//Store


//Level 1 - Header
function Header(){
    const [ headerState , setHeaderState ]= useState(null);
    const render = 
    (
        <div id="header">
            <HeaderLogo />
            <HeaderSearch/>
            <HeaderMenu />
        </div>
    );
    return render;
}

export default  Header;

//Function