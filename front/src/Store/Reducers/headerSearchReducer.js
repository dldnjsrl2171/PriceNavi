const initState = false;
const HEADERSEARCH_TOGGLE = "HEADERSEARCH_TOGGLE";
function HeaderSearchReducer(state = initState , action){
    if(state === undefined){
        state = initState;
    }
    
    
    switch(action.type){
        case HEADERSEARCH_TOGGLE : 
        if(state){
            state = false;
        }else{
            state = true;
        }
    }

    return state;
}

export default HeaderSearchReducer;