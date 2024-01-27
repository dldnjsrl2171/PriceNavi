function InputInitButton(props){
    //Element
    const targetElement = props.target;

    //Init Value
    const initItem = () => {
        document.getElementById(targetElement).value= "";
    }

    //JSX
    const render = 
    <div 
        id ="inputInitButtonForTargetElement"
        className="inputInitButton"
        onClick={initItem}
    />

    return render;
}

export default InputInitButton;