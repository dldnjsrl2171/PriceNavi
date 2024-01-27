//CSS
import "./headerSearch.css";
//Modules

//State

//img
import headerSearchIcon from "../../../Image/search.png"
import { useDispatch, useSelector } from "react-redux";
import InputInitButton from "../../../Common/Components/Buttons/inputInitButton";
import InputText from "../../../Common/Components/Input/inputText";

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
    
    const toggleSearch = () => 
    {
        
        //State
        const toggle =  props.toggle;
        toggle();
    };

    const render = 
    (
        <div id="headerSearchBox">
            <div className="headerSearchBoxContainer">
                <div className="headerSearchBoxContentsContainer">
                    <div className="headerSearchBoxMenuContainer">
                        <div className="buttonContainer">
                            <div id="headerSearchBoxMenuCloseButton" className="button" onClick={toggleSearch}>
                                <div className="closeButtonBar closeBar1"></div>
                                <div className="closeButtonBar closeBar2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="headerSearchInputContainer">
                        <div className="searchBarContainer">
                            <InputText id="searchItemName" title="" placeHolder="검색어 입력"></InputText>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerSearchBoxBackground"></div>
        </div>
    );
    return render;
}