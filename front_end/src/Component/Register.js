import React, {useState} from 'react';
import { AxiosWithAuth } from './utils/AxiosWithAuth';
// import {AxiosWithAuth} from './utils/AxiosWithAuth';
function Register(props) {
    const [data, setData]=useState({
        username:"",
        password:"",
        firstName: "",
        lastName: "",
        email: "",
        roleId: "",
})
    const handleChange= (event)=>{
       setData( {...data, [event.target.name]: event.target.value,
    })}
    const handleSubmit= (event)=>{
       event.preventDefault();
       AxiosWithAuth()
       .post("/api/auth/register", data)
       .then((result=>{
          localStorage.setItem("token", result.data.token)
          props.history.push("/classes")
       }))
       .catch(error=>{
          console.log(error)
       })
    }
    return(
       <form onSubmit={handleSubmit}>
          <input type="text"
          name="username"
          placeholder="username"
          value={data.username}
          onChange={handleChange}
          />
           <input type="password"
          name="password"
          placeholder="password" 
          value={data.password}
          onChange={handleChange}
          />
           <input type="text"
          name="firstName"
          placeholder="firstName" 
          value={data.firstName}
          onChange={handleChange}
          />
           <input type="text"
          name="lastName"
          placeholder="lastName" 
          value={data.lastName}
          onChange={handleChange}
          />
           <input type="email"
          name="email"
          placeholder="email" 
          value={data.email}
          onChange={handleChange}
          />
           <input type="text"
          name="roleId"
          placeholder="roleId" 
          value={data.roleId}
          onChange={handleChange}
          />
          <button type="submit">Register</button>
       </form> 
    )
}

export default Register;
