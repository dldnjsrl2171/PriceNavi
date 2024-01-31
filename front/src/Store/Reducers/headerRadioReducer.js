const initState = {
    category1 : null,
    category2 : null,
    category3 : null
};

function HeaderRadioReducer(state = initState , action){
    let newState = {...state};
    const category = action.category;
    const id = action.id;
    console.log(id);
    switch(category){
        case "category1" :
            newState.category1 = id;
        break;
        case "category2" :
            newState.category2 = id;
        break;
        case "category3" :
            newState.category3 = id;
        break;
    }
    console.log(newState);

    return newState;
}

export default HeaderRadioReducer;