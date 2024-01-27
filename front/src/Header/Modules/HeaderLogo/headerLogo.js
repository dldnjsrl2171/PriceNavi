//CSS
import "./headerLogo.css";
//Image
import logo from "../../../Image/logo.png";
//State

//Modules



function HeaderLogo(){
   const onClickEvent = () => 
   {  
    window.scrollTo({top : 0 , behavior : "smooth"});
   }
    const render = 
    (
        <div id="headerLogo" onClick={onClickEvent}>
            <div className="headerLogoContainer">
                <h4 className="headerLogoText">PriceNavi</h4>
            </div>
        </div>
    )
    return render;
}

export default  HeaderLogo;
