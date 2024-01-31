const initState = {
    toggle : false ,
    level : 0
};

const HEADERSEARCH_TOGGLE = "HEADERSEARCH_TOGGLE";
const HEADERSEARCH_LEVEL = "HEADERSEARCH_LEVEL";
function HeaderSearchReducer(state = initState , action){
    const newState = {...state};
    console.log(action);
    switch(action.type){
        case HEADERSEARCH_TOGGLE : 
            const toggleState = newState.toggle;
            if(toggleState){
                newState.toggle = false;
            }else{
                newState.toggle = true;
            }
        break;

        case HEADERSEARCH_LEVEL :
            const newLevel = action.level;
            newState.level = newLevel;
        break;
    }
    console.log(newState);
    return newState;
}

export default HeaderSearchReducer;