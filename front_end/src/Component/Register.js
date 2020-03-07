import React, {useState} from 'react';
import axios from "axios";

// import { AxiosWithAuth } from './utils/AxiosWithAuth';
// import {AxiosWithAuth} from './utils/AxiosWithAuth';


function Register(props) {
    const [data, setData]=useState({
        username:"",
        first_name: "",
        last_name: "",
        password:"",
        email: "",
        // roleId: "",
})
    const handleChange= (event)=>{
       setData( {...data, [event.target.name]: event.target.value,
    })}
    const handleSubmit= (event)=>{
       event.preventDefault();
       console.log(data)
     axios
       .post("https://anywherefitnessbuildweek.herokuapp.com/api/auth/register", data)
       .then((result=>{
           console.log(result.data)
        //   localStorage.setItem("token", result.data.token)
          props.history.push("/register/login")
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
        
           <input type="text"
          name="first_name"
          placeholder="firstName" 
          value={data.first_name}
          onChange={handleChange}
          />
           <input type="text"
          name="last_name"
          placeholder="lastName" 
          value={data.last_name}
          onChange={handleChange}
          />
             <input type="password"
          name="password"
          placeholder="password" 
          value={data.password}
          onChange={handleChange}
          />
           <input type="email"
          name="email"
          placeholder="email" 
          value={data.email}
          onChange={handleChange}
          />
           {/* {/* <input type="text"
          name="roleId"
          placeholder="roleId" 
          value={data.roleId}
          onChange={handleChange} */}
          
          <button type="submit">Register</button>
       </form> 
       
    )
}

export default Register;
