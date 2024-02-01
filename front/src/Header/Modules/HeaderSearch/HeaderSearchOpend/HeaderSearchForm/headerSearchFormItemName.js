import { useState } from "react";

function HeaderSearchFormItemName(){

    const [state , setState] = useState({showInitButton : false});

    /*
        ID : headerSearchInputText    
        요소에 입력값이 있으면 입력값 초기화 버튼을 표시
    */
    const showInitButton = () => 
    {
        //입력값의 길이
        const textLength = document.getElementById("headerSearchInputText").value.length;

        if(textLength!==0){
            //초기화 버튼 표시
            setState({showInitButton : true});
        }else{
            //초기화 버튼 숨김
            setState({showInitButton : false});
        }
        
    }
    /*
        ID : headerSearchInputTextInit 
        해당 요소를 클릭시 headerSearchInputText 요소의 value를 초기화
    */
   const initValue = () =>
   {
        //1.입력값 초기화
        document.getElementById("headerSearchInputText").value = null;
        //2.초기화 버튼 숨기기
        setState({showInitButton : false});
   }

    const render = 
    (
        <label htmlFor="headerSearchInputText" title="검색어 입력" className={state.showInitButton ? "inputLable filledInput" : "inputLable"}>
            <input type="text" id="headerSearchInputText"placeholder="검색" className="inputText" onChange={showInitButton}/>
            {
                state.showInitButton ? 
            //true
                <div id="headerSearchInputTextInit" className="inputInitButton" onClick={initValue}> 
                    <div className="closeButtonBar mini closeBar1"></div>
                    <div className="closeButtonBar mini closeBar2"></div>     
                </div>
            //trueEnd
                :
            //false
                null
            //falseEnd
            }
        </label>

    );
    return render;
}

export default HeaderSearchFormItemName;
