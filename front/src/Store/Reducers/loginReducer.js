const initState = 
{
    isLogin : false ,
    userNo : null , 
    userId : null ,
    userPw : null ,
    userNm : null 
}

const LOGIN_LOGIN = "LOGIN_LOGIN";
const LOGIN_LOGOUT = "LOGIN_LOGOUT";

function LoginReducer(state = initState , action){
    
    if(state===undefined){
        state = initState;
    }

    switch(action.type){
        case LOGIN_LOGIN :
            state = action.user;
        return state;
        case LOGIN_LOGOUT :
        break;
        default : 
        return state;
    }
}

export default LoginReducer;