//CSS
import "./aside.css";
//Modules

//State
import { useState } from "react";
//Store


//Level 1 - Aside
function Aside(){
    const [ asideState , setAsideState ]= useState(null);
    const render = 
    (
        <div id="aside">
        </div>
    );
    return render;
}

export default  Aside;

//Function