import React, {useState} from "react";
import { Route, Link } from "react-router-dom";
import FitnessContext from "./contexts/FitnessContext"
import ClientHeader from "./Component/Client/ClientHeader";
import ClientSignUp from "./Component/Client/ClientSignUp";
import ClassSearch from "./Component/Client/ClassSearch";
import InstructorClient from "./Component/InstructorClientPage";
import ClientLogin from "./Component/Client/ClientLogIn";
import login from "./Component/login"
import GetClasses from "./Component/GetClasses"
import ProtectedRoute from "./Component/ProtectedRoute"
import Register from "./Component/Register"
import "./App.css";
import Login from "./Component/login";

function App() {
    const [events, setEvents]= useState(FitnessContext)
    return (
        <FitnessContext.Provider 
        
        value={events, setEvents}>
        <div className="App">
        <Link to="/Register"></Link>
        <Link to="/Register/Login"></Link>
        <Link to="/classes"></Link>
            <Route exact path="/" component={ClientHeader} />
            <Route
               exact path="/instructorclient"
            
                component={InstructorClient}
            />
            <Route exact path="/Register" component={Register}/>
            <Route exact path="/Register/login" component={login}/>
            <Route path="/clientlogin" exact component={ClientLogin} />
            <Route path="/clientsignup" exact component={ClientSignUp} />
            <Route path="/classSearch" exact component={ClassSearch} />
            <Route exact path="/classes" component={GetClasses}/>
        </div>
        </FitnessContext.Provider>
    );
}
export default App;
