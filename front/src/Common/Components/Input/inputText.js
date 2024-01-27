import { useState } from "react";

function InputText(props){
    
    const id = props.id + "Input";
    const placeHolder = props.placeHolder;
    const title = props.title;
    const initButtonId = id + "InitButton";

    const [state , setState] = useState({
        initButtonVisibleToggle : false
    });

    //Function
    const initButtonVisibleToggle = () => {
        const newState = state;
        //initButtonVisibleToggle State
        const toggleState = newState.initButtonVisibleToggle;

        //inputValue
        const initElement = document.getElementById(id);
        const inputData = initElement.value;


        if(inputData.length==0){
            setState({initButtonVisibleToggle : false});
        }else{
            setState({initButtonVisibleToggle : true});
        }
        
    }

    const initInput = () => {
        const initElement = document.getElementById(id);
        initElement.value = null;
        initElement.focus();
    }

    const render = (
        <label htmlFor={id} title={title}
        onChange={initButtonVisibleToggle}
        className={state.initButtonVisibleToggle ? "inputLable filledInput" : "inputLable"}
        >
            <input 
            type="text" 
            id={id} 
            placeholder={placeHolder} 
            className="inputText" 
            />

            {state.initButtonVisibleToggle ? 
            <div 
            id={initButtonId} 
            className="inputInitButton"
            onClick={initInput}
            />
            :
            null
            }
        </label>

    );
    return render;
}

export default InputText;