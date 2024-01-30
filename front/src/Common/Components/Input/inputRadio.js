function InputRadio(props){
    const id = props.id + "Input";
    const value = props.value;


    const render = (
        <label  htmlFor={id} id={ id + "Label"} className="radioLabel">
            <h5 className="radioTitle">가전</h5>
            <input type="radio" className="radioInput" name="headerSearchCategory1" id={id} title="categoryOption" value={value} onClick={checkedClass}></input>
        </label>
    );
    return render;
}

export default InputRadio;