import { useDispatch } from "react-redux";
import { HEADERSEARCH_TOGGLE } from "../../../../Store/Reducers/headerSearchReducer";

//Image
import headerSearchIcon from "../../../../Image/search.png";
import { useEffect } from "react";

function HeaderSearchClosed(){

    const dispatch = useDispatch();

    const toggleSearch = () => 
    {
        dispatch({type : HEADERSEARCH_TOGGLE});
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

export default HeaderSearchClosed;