import React, {useState} from "react";
import axios from "axios";
function Login(props){
    const [user, setUser]= useState({
       username: "",
        password: ""
    })

    const handleChange= event =>{
        setUser({...user, [event.target.name]: event.target.value})
    
    }
    const handleSubmit= event =>{
        event.preventDefault()
        // AxiosWithAuth()
        axios
        .post("https://anywherefitnessbuildweek.herokuapp.com/api/auth/login", user)
        .then((result)=>{
            console.log(result.data)
            localStorage.setItem("token", result.data.token) 
            localStorage.setItem("status", result.data.trainer_status)
            localStorage.setItem("user", result.data.user_id) 
            props.history.push("/classes")
        }
            
            )
            

                
            // if (result.data.is_trainer === false) {
            //     localStorage.setItem("token", result.data.token);
            //     props.history.push("/clientlogin");
                
            //     //will be instructor of id 2
            //   } else if (result.data.is_trainer=== true) {
            //     props.history.push("/classes");
            //     console.log(result.data)
            //     localStorage.setItem("token", result.data.token);
            //   }
            //   else (localStorage.setItem("token", result.data.token){
            //   props.history.push("/classes")}
            //   )
            // }
            
            .catch(error=>{
                console.log(error)
             })
        
    }
    
    return(
        <>
        <h1>My Account</h1>
      
        <form onSubmit={handleSubmit}>
          <input type="text"
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
          />
           <input type="password"
          name="password"
          placeholder="password" 
          value={user.password}
          onChange={handleChange}
          />
          <button>Signin</button>
          </form>
        </>
    )
}
export default Login