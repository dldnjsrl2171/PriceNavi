//CSS
import "./headerSearch.css";
//Modules

//State

//img
import headerSearchIcon from "../../../Image/search.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InputText from "../../../Common/Components/Input/inputText";
import InputRadio from "../../../Common/Components/Input/inputRadio";

//Store

function HeaderSearch(){

    const dispatch = useDispatch();
    const state = useSelector((state)=>state.headerSearchReducer);
    const toggleState = state.toggle;
    const toggle = () => 
    {
        dispatch({type : "HEADERSEARCH_TOGGLE"});
    };

    const render = 
    (
        <div id="headerSearch">
            <div className="headerSearchContainer">
                {toggleState ?  <HeaderSearchOpen level={state.level} toggle={toggle} /> : <HeaderSearchClosed level="0" toggle={toggle} />}
            </div>
        </div> 
    );
    return render;
}

export default  HeaderSearch;

function HeaderSearchClosed(props){
    
    const toggleSearch = () => 
    {
        const toggle =  props.toggle;
        toggle();
    };

    const render = 
    (
        <div id="headerSearchCallSearchButton" className="headerSearchCallSearchButton" onClick={toggleSearch}>
            <div className="headerSearchButtonContainer">
                <img src={headerSearchIcon} alt="SearchButton" className="headerSearchButtonIcon"></img>
            </div>
        </div>
    );
    return render;
}

function HeaderSearchOpen(props){

    useEffect(()=>{
        
       const level = props.level;
       console.log(level);

    });
  
    const toggleSearch = () => 
    {
        //State
        props.toggle();
    };

    const render = 
    (
        <div id="headerSearchBox">
            <form id="headerSearchForm">
                <div className="headerSearchBoxContainer">
                <div className="headerSearchBoxMenuContainer">
                <div className="buttonContainer">
                    <div id="headerSearchBoxMenuCloseButton" className="button" onClick={toggleSearch}><div className="closeButtonBar closeBar1"></div><div className="closeButtonBar closeBar2"></div></div></div>
                </div>
                    <div className="headerSearchBoxContentsContainer">
                        <div className="headerSearchBox" id="headerSearchBox">
                            <div className="headerSearchInputContainer">
                                <InputText id="searchItemName" title="검색어 입력" placeHolder="검색어 입력"></InputText>
                            </div>
                            <div className="headerSearchFilterContainer">
                                <div className="headerSearchFilterBox">
                                    <GetCategory1></GetCategory1>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="headerSearchBoxBackground"></div>
            </form>
        </div>
    );
    return render;
}

function GetCategory1(){
    
    const id = "headerSearchCategory1Radio"
    const name = "headerSearchCategory1"
    
    const dataList = 
    [
        {
            itemName : "가전" ,
            value : "00001"
        }   ,
        {
            itemName : "패션" ,
            value : "00002"
        }   ,
        {
            itemName : "기타" ,
            value : "00003"
        }    
        
    ];

    let radioList = [];
    dataList.forEach((item , index) => {
        radioList.push(
            <InputRadio
                key={index}
                id={id + index}
                name={name}
                itemName={item.itemName}
                value={item.value}
            />
        )
    })

    const render = 
    (
        <div name="headerSearchFilter" className="headerSearchFilter">
            {radioList}
        </div>
    )
    return render;
    
}