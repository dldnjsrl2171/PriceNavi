//CSS
import "./closeButton.css";

//RenderMain
function CloseButton(props){
    props = {data : {id : "123" , toggleState : false}};
    const data = props.data;
    const id = data.id + "closeButton";
    const toggleState = false;

    const toggle = function(){
        ToggleCommon();
    }

    const render = 
    <div className="closeButtonContainer">
        <div className="closeButton" id={id} onClick={toggle}>
            <div className="closeButtonBar closeButtonBar1"></div>
            <div className="closeButtonBar closeButtonBar2"></div>
        </div>
    </div> ;
    return render;
}

export default CloseButton;

function ToggleCommon(){
    console.log("기본 닫기 공통 함수");
    console.log("창 닫기");

}