import { useDispatch } from "react-redux";
import HeaderSearchFormItemName from "./HeaderSearchForm/headerSearchFormItemName";
import HeaderSearchFormFilter from "./HeaderSearchForm/headerSearchFormFilter";
import { HEADERSEARCH_TOGGLE } from "../../../../Store/Reducers/headerSearchReducer";
import { useEffect } from "react";

function HeaderSearchOpen(){
    useEffect(()=>{
        console.log("마운트");
        return ()=>{
          console.log("언마운트");
        }
      },[])
    const dispatch = useDispatch();
    const toggleSearch = () => 
    {
        dispatch({type : HEADERSEARCH_TOGGLE});
    };

    const render = 
    (
        <div id="headerSearchBox">
            <form id="headerSearchForm">
                <div className="headerSearchBoxContainer" id="headerSearchBoxContainer">
                <div className="headerSearchBoxMenuContainer">
                <div className="buttonContainer">
                    <div id="headerSearchBoxMenuCloseButton" className="button" onClick={toggleSearch}><div className="closeButtonBar closeBar1"></div><div className="closeButtonBar closeBar2"></div></div></div>
                </div>
                    <div className="headerSearchBoxContentsContainer">
                        <div className="headerSearchBox" id="headerSearchBox">
                            <div className="headerSearchInputContainer">
                                <HeaderSearchFormItemName></HeaderSearchFormItemName>
                            </div>
                            <div className="headerSearchFilterContainer">
                                <HeaderSearchFormFilter></HeaderSearchFormFilter>
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

export default HeaderSearchOpen;