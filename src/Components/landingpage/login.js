import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import './login.css';
// import Navbar from './Components/Navbar/Navbar'
import axios from 'axios';
import noteContext from "../../context/notes/noteContext"
import { useNavigate } from "react-router-dom";


export default function Login() {
  // React States
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  console.log({ username, password })
  //const [errorMessages, setErrorMessages] = useState({});
  //const [isSubmitted, setIsSubmitted] = useState(false);

  // // User Login info
  // const database = [
  //   {
  //     username: "user1",
  //     password: "pass1"
  //   },
  //   {
  //     username: "user2",
  //     password: "pass2"
  //   }
  // ];

const navigate = useNavigate();
const handleUsername =(e) =>{
  setUsername(e.target.value)
}
const handlePassword = (e) => {
  setPassword(e.target.value)
}
  // const error = {
  //   uname: "invalid username",
  //   pass: "invalid password"
  // };

  const context = useContext(noteContext);
  const {auth, setAuth} = context;
  const handleSubmit = (e) => {
    //Prevent page reload
     e.preventDefault();
    console.log({username,password})
    const formData = new FormData();
    formData.append("username",username);
    formData.append("password", password);
    axios.post('http://10.224.1.212:8000/auth/token', formData)
    .then((result)=>{
      console.log(result.data)
      alert('login success')
      setAuth({
        token: result.data.token,
        fullname: result.data.fullname,
        role: result.data.role
      })
      navigate("/services")
    })
    .catch((error)=>{
     alert('service error')
     console.log(error)

    })
  }
    //var { username, password } = document.forms[0];

    // Find user login info
    //const userData = database.find((user) => user.username === uname.value);

    // Compare user info
  //   if (userData) {
  //     if (userData.password !== pass.value) {
  //       // Invalid password
  //       setErrorMessages({ name: "password", message: error.pass });
  //     } else {
  //       setIsSubmitted(true);
  //     }
  //   } else {
  //     // Username not found
  //     setErrorMessages({ name: "username", message: error.uname });
  //   }
  // };

  // Generate JSX code for error message
  // const renderErrorMessage = (name) =>
  //   name === errorMessages.name && (
  //     <div className="error">{errorMessages.message}</div>
  //   );

  // JSX code for login form
 // const renderForm = (
   
    
 // );

  return (
    
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
         {/* <Navbar /> */}
    <div className="form">

<form >
  
  <div className="input-container">
    <label>Username </label>
    <input 
    type="text" 
    name="username" 
    placeholder=" Username" 
     onChange={handleUsername}
    // value={state.name}
    required />
   {/* // {renderErrorMessage("username")} */}
  </div>
  <div className="input-container">
    <label>Password </label>
    <input 
    type="password" 
    name="password" 
    placeholder=' Password'
    onChange={handlePassword}
    required />
    {/* {renderErrorMessage("password")} */}
  </div>
  <div><h4>Don't have an account?</h4><h2><Link to="/signup">Register</Link></h2></div>
  <div className="button-container">
  <button onClick={handleSubmit}>Login</button>
  </div>

  <h1>@2023 copyright:cdac.in</h1>
</form>
</div>
        
  </div>
  </div>
  );
}


// export default Login


// {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoY…TQ3fQ.nYR5-B3aq1VKMB4otVOBQECsyJwkocKjIHAmQIkGddo', fullname: 'harsh koria', email: 'harshk@cdac.in', role: 'DOCTOR'}