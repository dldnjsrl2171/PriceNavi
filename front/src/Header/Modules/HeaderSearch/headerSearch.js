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
                {toggleState ?  <HeaderSearchOpen toggle={toggle} /> : <HeaderSearchClosed toggle={toggle} />}
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
        
    });
  
    const toggleSearch = () => 
    {
        //State
        const toggle =  props.toggle;
        toggle();
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
                                    <div className="headerSearchFilter">
                                            <InputRadio
                                            id="headerSearchCategory1Radio1"
                                            name="headerSearchCategory1"
                                            category ="category1"
                                            eventName ="headerRadioReducer"
                                            value="2"
                                            />
                                            <InputRadio
                                            id="headerSearchCategory1Radio2"
                                            name="headerSearchCategory1"
                                            category ="category1"
                                            eventName ="headerRadioReducer"
                                            value="1"
                                            />
                                            
                                    </div>
                                    <div className="headerSearchFilter">
                                            <InputRadio
                                            id="headerSearchCategory2Radio1"
                                            name="headerSearchCategory2"
                                            category ="category2"
                                            eventName ="headerRadioReducer"
                                            value="2"
                                            />
                                            <InputRadio
                                            id="headerSearchCategory2Radio2"
                                            name="headerSearchCategory2"
                                            category ="category2"
                                            eventName ="headerRadioReducer"
                                            value="1"
                                            />
                                    </div>
                                    <div className="headerSearchFilter">

                                    </div>
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


