const initState = null;
const COMMONRADIOREDUCER = "commonRadioReducer";

function CommonRadioReducer(state = initState , action){
    let newState = {...state};
    
    const command = action.type;
    const name = action.name;
    const id = action.id;

    if(command == COMMONRADIOREDUCER){
        newState[name] = id;
        newState.changedItem = name;
    }
    
    return newState;
}

export default CommonRadioReducer;