import "./login.css";

import { useDispatch, useSelector } from "react-redux";

function Login(){
    const user = useSelector(state => state.loginReducer);

    const loginDispatch = useDispatch();
    const setLogin = (user) => {
        loginDispatch({type : "LOGIN" , user : user});
    }


    const submitForm = (e) => {
        e.preventDefault();
        console.log("로그인 시도");
        const userTest = {
            isLogin : true ,
            userNo : 1 , 
            userId : "dldnjsrl" ,
            userPw : 1234 ,
            userNm : "이원기" 
        }
        setLogin(userTest);
    }

    console.log("로그인여부: " + user.isLogin);

    const render = 
    <div id="login">
        <form id="loginForm" onSubmit={submitForm}>
            <h3>로그인</h3>
            <label htmlFor="loginId"></label>
            <input type="text" id="loginId" name="loginId" placeholder=" ID" required/>
            <label htmlFor="password"></label>
            <input type="password" id="loginPw" name="loginPw" placeholder=" PW" required/>
            <label htmlFor="loginSubmit"></label>
            <button id="loginSubmit" type="submit">로그인</button>
        </form>
    </div>
    return render;
}

export default Login;

export function CallLoginForm(){
    return {Login};
}