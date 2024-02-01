import { useEffect, useState } from "react";

const initState = 
{ 
    category : "0" ,
    selectedIdList  : null //선택된 데이터
}

function HeaderSearchFormFilter(){
    const [state , setState] = useState(initState);
    useEffect(()=>{
        
    },[state.category])



    const render = (
        <div className="headerSearchFilterBox">
            {/* <label  htmlFor={id} id={ id + "Label"} className={className} onClick={selectToggle}>
            <h5 className="radioTitle">{itemName}</h5>
            <input type="radio" className="radioInput" name={name} id={id} title="categoryOption" value={value} onClick={null}></input>
        </label> */}
        </div>
    );
    return render;
}

export default HeaderSearchFormFilter;

function GetTestData(props){
    const category = props.category;
    const code = props.code;

    if(category===1){
        const data = 
        [
            {
                itemName : "가전" ,
                category : "1" ,
                code : "00001"
            },
            {
                itemName : "패션" ,
                category : "1" ,
                code : "00002"
            },
            {
                itemName : "기타" ,
                category : "1" ,
                code : "00003"
            }
        ]
        return data;
    }else if(category===2){
        if(code==="00001"){
        const data = 
        [
            {
                itemName : "컴퓨터" ,
                category : "2" ,
                code : "A00001"
            },
            {
                itemName : "노트북" ,
                category : "2" ,
                code : "A00002"
            },
            {
                itemName : "기타" ,
                category : "2" ,
                code : "A00003"
            }
        ]
        return data;
        }else if(code==="00002"){
            const data = 
        [
            {
                itemName : "상의" ,
                category : "2" ,
                code : "A00004"
            },
            {
                itemName : "하의" ,
                category : "2" ,
                code : "A00005"
            },
            {
                itemName : "기타" ,
                category : "3" ,
                code : "A00006"
            }
        ]
        return data;
        }else{
            const data = 
            [
                {
                    itemName : "기타1" ,
                    category : "2" ,
                    code : "A00007"
                },
                {
                    itemName : "기타2" ,
                    category : "2" ,
                    code : "A00008"
                },
                {
                    itemName : "기타3" ,
                    category : "3" ,
                    code : "A00009"
                }
            ]
            return data;
        }
    }else if(category===3){

    }

}