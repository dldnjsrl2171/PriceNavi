const initState = null;
const MODAL_LOGIN = "MODAL_LOGIN";
const MODAL_CLOSE = "MODAL_CLOSE";

function ModalReducer(state = initState , action){
    if(state === undefined){
        state = initState;
    }

    switch(action.type){
        case MODAL_LOGIN :
            state = { profile : MODAL_LOGIN };
        break;

        case MODAL_CLOSE :
        default    : state = { profile : MODAL_CLOSE };
        break;
    }    

    return state;
}

export default ModalReducer;