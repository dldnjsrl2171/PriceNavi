const initState = {toggle : false};
const HEADERSEARCH_TOGGLE = "HEADERSEARCH_TOGGLE";
function HeaderSearchReducer(state = initState , action){
    const newState = {...state};

    switch(action.type){
        case HEADERSEARCH_TOGGLE : 
        const toggleState = newState.toggle;
        if(toggleState){
            newState.toggle = false;
        }else{
            newState.toggle = true;
        }
        break;
    }
    console.log(newState)
    return newState;
}

export default HeaderSearchReducer;