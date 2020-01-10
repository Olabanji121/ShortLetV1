import React, { useEffect, useContext } from "react";
import "./resources/styles.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Success from "./pages/Success"
import Header from './components/header_footer/Header';
import Booking from "./pages/Booking";
import Alerts from './components/Alerts';
import setAuthToken from './utills/setAuthToken'
import AuthContext from './context/auth/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Firebase.init()


if(localStorage.token){
  setAuthToken(localStorage.token)
}


const App = ()=> {
  const authContext = useContext(AuthContext)

  useEffect(()=>{
    authContext.loadUser()
    // eslint-disable-next-line
  }, [])
   
    return (
      <> 
        <Header/>
        <Alerts/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
          <PrivateRoute path="/booking/:slug" exact component={Booking}/>
          <Route path="/success" exact component={Success}/>
          <Route component={Error} />
        </Switch>
      </>
    );
  
}

export default  App
