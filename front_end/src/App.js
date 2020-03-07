import React, {useState} from "react";
import { Route, Link } from "react-router-dom";
import FitnessContext from "./contexts/FitnessContext"
import ClientHeader from "./Component/Client/ClientHeader";
import ClientSignUp from "./Component/Client/ClientSignUp";
import ClassSearch from "./Component/Client/ClassSearch";
import InstructorClient from "./Component/InstructorClientPage";
import ClientLogin from "./Component/Client/ClientLogIn";
import GetClasses from "./Component/GetClasses"
import ProtectedRoute from "./Component/ProtectedRoute"
import Register from "./Component/Register"
import "./App.css";

function App() {
    const [events, setEvents]= useState(FitnessContext)
    return (
        <FitnessContext.Provider 
        
        value={events, setEvents}>
        <div className="App">
        <Link to="/instructorlogin"></Link>
        <Link to="/classes"></Link>
            <Route exact path="/" component={ClientHeader} />
            <Route
               exact path="/instructorclient"
            
                component={InstructorClient}
            />
            <Route exact path="/instructorlogin" component={Register}/>
            <Route path="/clientlogin" exact component={ClientLogin} />
            <Route path="/clientsignup" exact component={ClientSignUp} />
            <Route path="/classSearch" exact component={ClassSearch} />
            <Route exact path="/classes" component={GetClasses}/>
        </div>
        </FitnessContext.Provider>
    );
}
export default App;
