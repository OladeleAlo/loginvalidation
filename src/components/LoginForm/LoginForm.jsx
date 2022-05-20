import React from 'react'
import "./form.css"
import {useState} from "react";
import {login} from "../util/utils";

const LoginForm = () => {
const [password,setPassword] = useState("");
const [email,setEmail] = useState("");
const [error,setError] = useState("");
const [loading,setLoading] = useState(false);

const disableButton = !email || password.length < 6 || loading



const handleLogin = async ()=> {
    setError(null)
    setLoading(true);
    try {
        await login({email, password})
        setLoading(false)
        alert("login Successful")

    }catch (error){
        setError(error.message)
        setLoading(false)

    }

}

  return (
    <div className="form">
        <div className='wrapper'>
            <div className="row">
                <label htmlFor={"email"} >Email</label>
                <input onChange={(e)=> setEmail(e.target.value)} id = {"email"}type="email" value={email}/>
            </div>
            <div className="row">
                <label htmlFor={"password"}>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} id = {"password"}type="password" value={password}/>
            </div>
            <div className="bottom">
                <div className="errorMessage">{error}</div>
                <button disabled = {disableButton} className="button" type='sumbit' onClick = {handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginForm