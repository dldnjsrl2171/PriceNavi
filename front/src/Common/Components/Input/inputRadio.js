import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function InputRadio(props){

    const id = props.id;
    const name = props.name;    
    const className = "radioLabel";
    const event = props.event;

    const itemName = props.itemName;
    const value = props.value;
    
    const state = useSelector(state=> state.commonRadioReducer);
    const dispatch = useDispatch();

    useEffect(()=>
        {
            const target = state.changedItem;
            const groups = document.getElementsByName(target);

            groups.forEach(element => {
                const label = document.getElementById(element.id + "Label");
                const classList = label.classList;
                if(element.id === state[target]){
                    if(!classList.contains("checkedRadio")){
                        classList.add("checkedRadio");
                    }
                }else{
                    if(classList.contains("checkedRadio")){
                        classList.remove("checkedRadio");
                    }
                }
            });
        }
    );
    const selectToggle = () => {
        const result = event();
        dispatch({
            type : "HEADERSEARCH_LEVEL",
            level : "2"
        })
        dispatch(
            {
                type : "commonRadioReducer",
                name : name,
                id : id
            }
        )
    };

    const render = (
        <label  htmlFor={id} id={ id + "Label"} className={className} onClick={selectToggle}>
            <h5 className="radioTitle">{itemName}</h5>
            <input type="radio" className="radioInput" name={name} id={id} title="categoryOption" value={value} onClick={null}></input>
        </label>
    );
    return render;
}

export default InputRadio;
