import './css/style.css';
import loginbg from './images/loginbg.jpg';
import React, { useState } from "react";
import axios from "axios";

function Login(){
    const [login, setLogin] = useState(
        {
            email: '',
            password: ''
        }
    )

    function handleChange(e){
        const {name, value} =e.target;
        setLogin(prevInput => {
            return(
                {
                    ...prevInput,
                    [name]: value
                }
            )
        })
    }

    async function needLogin(e){
        e.preventDefault();
        try{
            const userLogin = {
                email: login.email,
                password: login.password
            }
            console.log(userLogin);
            await axios.post('/login', userLogin);
            alert("login sucess")
        }
        catch(error){
            console.log(error)
        }
    }


    return(
        <div className="form">
            <form>
                <h1>form</h1>
                <label>Email</label>
                <input type="text" onChange={handleChange} value={login.email} name="email" placeholder="Enter your Email"></input>
                <label>Password</label>
                <input type="password" onChange={handleChange} value={login.password} name="password" placeholder="Enter your Password"></input>
                <button onClick={needLogin}>Login</button>
            </form>
            <img src={loginbg} alt="loginbg"/>
        </div>
    )
}

export default Login;