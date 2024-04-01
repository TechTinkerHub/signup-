import React, { useState } from 'react'
import './Login.css'
import person_icon from '../components/Assetes/person.jpg'
import password_icon from '../components/Assetes/password.png'
import email_icon from '../components/Assetes/images.png'

const Login=()=> {
    const [action, setAction] = useState("Login")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
       <div className="inputs">
        {action==="Login"?<div></div>: <div className="input">
            <img src={person_icon} alt="" />
            <input type="text" placeholder='name'/>
        </div>}
       
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='email'/>
        </div>
        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='password'/>
        </div>
       </div>
       {action==="Sign Up"?<div></div>:<div className="forgot">Forgot pass? <span>Click here!</span></div>}
       
       <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sing Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Log in </div>
       </div>
    </div>
  )
}

export default Login