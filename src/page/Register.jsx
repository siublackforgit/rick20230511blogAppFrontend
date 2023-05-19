import React from 'react'
import {useState} from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [inputs,setInputs] = useState({
    username:"",
    email:"",
    password:"",

  })

  const [err,setErr] = useState(null)

  const handleChange =  e => {
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  
  }

  const handleSubmit = async e=>{
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:8800/api/auth/register",inputs)
    }catch(err){
      console.log(err)
    setErr(err.response.data)
    }
  }

  console.log(inputs)
  return (
    <div className="auth">
      <div>Register</div>
      <form action="">
        <input type="text" name="username" onChange={handleChange} placeholder='username'/>
        <input type="email" name="email" placeholder='email' onChange={handleChange} />
        <input type="password" name="password" placeholder='password' onChange={handleChange} />
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p> }
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register