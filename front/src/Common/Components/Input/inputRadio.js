import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function InputRadio(props){

    const id = props.id + "Input";
    const name = props.name;    
    const category = props.category;
    const value = props.value;
    const eventName = props.eventName;
    const className = "radioLabel";
    
    
    const state = useSelector(state=> state[eventName]);
    const dispatch = useDispatch();
    
    const selectToggle = () => {
        dispatch(
            {
                type : eventName ,
                category : category ,
                id : id + "Label"
            }
        );
    };

    const render = (
        <label  htmlFor={id} id={ id + "Label"} className={className} onClick={selectToggle}>
            <h5 className="radioTitle">가전</h5>
            <input type="radio" className="radioInput" name={name} id={id} title="categoryOption" value={value} onClick={null}></input>
        </label>
    );
    return render;
}

export default InputRadio;
