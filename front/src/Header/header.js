//CSS
import "./header.css";
//Modules
import HeaderLogo from "./Modules/HeaderLogo/headerLogo";
import HeaderSearch from "./Modules/HeaderSearch/headerSearch";
import HeaderMenu from "./Modules/HeaderMenu/headerMenu";
//State

//Store


function Header(){
    const render = 
    (
        <div id="header">
            <HeaderLogo />
            <HeaderSearch />
            <HeaderMenu />
        </div>
    );
    return render;
}

export default  Header;

//Function