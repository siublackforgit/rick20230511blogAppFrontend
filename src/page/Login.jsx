import axios from 'axios'
import React ,{useState}from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({
    username:"",
    password:"",
  })

const [err,setErr] = useState(null)

const handleChange = e =>{
  setInput((prev)=>({
    ...prev,
    [e.target.name]:e.target.value
  }))
}

const handleSubmit = async e =>{
  e.preventDefault()
  try {
    await axios.post("http://localhost:8800/api/auth/login",input)
    navigate("/")
  }catch(err){
    console.log(err)
    setErr(err.response.data);
  }
}

  const navigate = useNavigate();
  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input type="text" placeholder='username' name="username" onChange={handleChange}/>
        <input type="password" placeholder="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>

        {err && <p>{err}</p> }
        <span>Don't you have an account?<Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login