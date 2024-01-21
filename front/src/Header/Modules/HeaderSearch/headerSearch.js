//CSS
import { useDispatch, useSelector } from "react-redux";
import "./headerSearch.css";
//Modules

//State
import { useState } from "react";
//Store


//Level 1 - Header
function HeaderSearch(){
    
    const [ headerSearchState , setHeaderSearchState ]= useState(null);
    
    const state = useSelector(state => state.headerSearchReducer);
    const dispatch = useDispatch();
    
    const toggle = ()=>{
        dispatch({type : "HEADERSEARCH_TOGGLE"});
    }

    const render = 
    (
        <div id="headerSearch">
            {state ? <HeaderSearchOpen toggle={toggle}></HeaderSearchOpen> :
                <div id="searchBar" onClick={toggle}>
                    <img src="돋보기"></img>
                </div>
            }
        </div>
    );
    return render;
}

export default  HeaderSearch;

//Function
function HeaderSearchOpen(props){
    const filter1 = 
    {
        header : 
        {filterNum : 1} ,
        data :
        [ 
        {
            code : "0001" , 
            name : "가전" 
        },
        {
            code : "0002" ,
            name : "패션" 
        }
        ]

    };
    const filter2 = [];
    const filter3 = [];
    const render = (
        <div id="headerSearchContainer">
            <div id="headerSearchCloseButton" onClick={props.toggle}></div>
            <div id="headerSearchComponents">
                <div id="headerSearchSearchBar">
                    <input type="text" id="headerSearchInput"></input>
                    <div id="headerSearchSubmit"></div>
                </div>
                <div id="headerSearchHistory">
                    <div id="headerSearchHistoryItem1">Hi1</div>
                    <div id="headerSearchHistoryItem1">Hi2</div>
                </div>
                <div id="headerSearchFilterBox">
                    <div id="headerSearchFilterContatinerVertical">
                        <div id="headerSearchFilter1">
                            <SearchFilter list={filter1}></SearchFilter>
                        </div>
                        <div id="headerSearchFilter2">

                        </div>
                        <div id="headerSearchFilter3">

                        </div>
                    </div>
                    <div id="headerSearchFilterContatinerHorizontal">
                        <div id="headerSearchFilter4"></div>
                        <div id="headerSearchFilter5"></div>
                        <div id="headerSearchFilter6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
    return render;
}

//필터 따로 함수 필요
function SearchFilter(props){
    const list = props.list;
    const filterNum =  list.header.filterNum;
    console.log(filterNum);
    const filterId = "filter"+ filterNum;
    console.log(filterId);
    const dataLength = list.data.length;
    console.log(dataLength);
    let filterRadio = [];
    for(let i = 0 ; i < dataLength ; i++){
        let listData = list.data[i];
        let code = listData.code;
        let name = listData.name;
        filterRadio.push(<label htmlFor={filterId+"_"+i} className={filterId+"Label"}>{name}<input type="radio" id ={filterId+"_"+i} value={code} name={filterId} className={filterId+"Category"}></input></label>);
    }
    console.log((filterRadio));
    return (filterRadio);
}