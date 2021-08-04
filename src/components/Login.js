import React,{useState} from 'react'
import './Login.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";
const Login = () => {
    let history = useHistory();
    const [userName,setuserName] = useState('');
    const [passWord,setpassWord] = useState('');
    const [error,setError] = useState('');
    const [status,setStatus] = useState(0);

    const LoginApi = (username, password) => {
        axios.get(`https://retoolapi.dev/0aMTU0/data?fullName=${userName}`).then((response) => {
            let data = response.data;
            const b = data[0].isUser === password ? 1 : 0;
            setStatus(b);
        })
        .catch((error) => {
            setStatus(0);
        })
        if(status){
            let x = {'username':userName, 'password':passWord};
            console.log(x);
            localStorage.setItem('data',JSON.stringify(x));
            history.push('index');
        }
        else{
            setError("Invalid Credentials");
            setuserName("");
            setpassWord("");
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        console.log(userName);
        console.log(passWord);
        LoginApi(userName, passWord);
    }
    
    return (
        <div className="login-card">
            <div className="login-head">Login</div>
            {error === "" ? "":<div className="login-error">{error}</div>}
            <form autoComplete="off" onSubmit={submitForm}>
                <input type="text" className="login-username" placeholder="User Name" required onChange={(e)=>setuserName(e.target.value)} value={userName}/>
                <input type="password" className="login-password" placeholder="Password" required onChange={(e)=>setpassWord(e.target.value)} value={passWord}/>
                <input type="submit" className="login-submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login;